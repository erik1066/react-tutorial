class HL7Parser {

    parse(message, messageMappingGuide) {
        const normalizedMessage = message.replace(/(\r\n\t|\n|\r\t|\r)/gm, "\n"); // normalize line terminators
        const elements = messageMappingGuide.elements;

        const segments = normalizedMessage.split("\n");
        const repeats = this.getRepeatingElements(segments);

        elements.forEach(element => {
            if (!element.data) {
                element.data = [];
            }
            if (element.dataType !== "None") {
                const data = this.findSegmentData(element, normalizedMessage, repeats, messageMappingGuide);
                          
                element.data.push(data.friendlyValue);
            }
        });
    }

    findSegmentData(element, message, repeats, messageMappingGuide) {
        const { segmentType, fieldPosition, componentPosition } = element.mappings[0];
        const identifier = element.identifier;
        const segments = message.split("\n");
        
        var data = null;

        const segmentData = {
            name: element.name,
            identifier: element.identifier,
            value: null,
            friendlyValue: null,
        };

        if (segmentType === "OBX" && element.instance) {
            
            let index = -1;

            for (let i = 0; i < repeats.length; i++) {
                index = i;
                const repeat = repeats[i];

                if (fieldPosition === 5 && element.identifier === repeat.obx3.split('^')[0]) {
                    const fields = repeat.segment.split('|');
                    data = fields[fieldPosition];
                    break;
                }
            }
            if (data) {                    
                segmentData.value = data;                
                repeats.splice(index, 1);
            }
        }
        else {
            for (let i = 0; i < segments.length; i++) {
                var segment = segments[i];

                if (segment.startsWith(segmentType)) {
                    var fields = segment.split('|');

                    if (segmentType === "OBX" && fieldPosition === 5) {
                        let obx3value = fields[3];
                        var obx3components = obx3value.split('^');
                        if (identifier === obx3components[0]) {
                            data = fields[5];
                        }
                    }
                    else if (segmentType === "OBX" && fieldPosition > 5 && element.relatedElementId) {
                        const relatedId = element.relatedElementId;
                        const relatedElement = this.getElementById(relatedId, messageMappingGuide);
                        const relatedElementIdentifier = relatedElement.identifier;
                        
                        let obx3value = fields[3];
                        var obx3components = obx3value.split('^');
                        
                        if (relatedElementIdentifier === obx3components[0]) {
                            data = fields[fieldPosition];
                        }
                    }
                    else if (segmentType !== "OBX") {

                        if (segmentType === "MSH") {
                            data = fields[fieldPosition - 1];
                        }
                        else {
                            data = fields[fieldPosition];
                        }

                        if (componentPosition && componentPosition >= 0) {
                            var components = data.split('^');
                            data = components[componentPosition - 1];                            
                        }
                    }

                    if (data) {                    
                        segmentData.value = data;
                        break;
                    }
                }
            }
        }
        segmentData.friendlyValue = this.generateFriendlyValue(element, segmentData.value);
        return segmentData;
    }

    getRepeatingElements(segments) {
        const repeatingElements = [];//new Map();

        for (let i = 0; i < segments.length; i++) {
            const segment = segments[i];
            
            // only OBX segments can be part of a repeating block
            if (segment.startsWith("OBX")) {

                const fields = segment.split('|');
                if (fields[3] && fields[3].length > 0 && fields[4] && fields[4].length > 0) {
                    const kvp = {
                        id: fields[4] + "%%%" + fields[3],
                        obx3: fields[3],
                        obx4: fields[4],
                        segment: segment
                    };

                    repeatingElements.push(kvp);//set(kvp.id, kvp);
                }
            }
        }

        repeatingElements.sort((a, b) => {
            if (a.id < b.id /*a is less than b by some ordering criterion*/) {
                return -1;
            }
            if (a.id > b.id /*a is greater than b by the ordering criterion*/) {
                return 1;
            }
            
            // a must be equal to b
            return 0;
        });

        return repeatingElements;
    }

    getElementById(id, messageMappingGuide) {
        const elements = messageMappingGuide.elements;

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            if (element.id && element.id === id) {
                return element;
            }
        }

        return null;
    }

    generateFriendlyValue(element, value) {
        const mapping = element.mappings[0];
        let friendlyValue = "<N/A>";

        if (!value) {
            return friendlyValue;
        }

        if (mapping.dataType === "CWE" || mapping.dataType === "CE") {
            const components = value.split('^');
            friendlyValue = components[0] + "=" + components[1];
        }
        else if (mapping.dataType === "SN") {
            const components = value.split('^');
            friendlyValue = components[1];
        }
        else {
            friendlyValue = value;
        }        
        return friendlyValue;
    }
}

export default HL7Parser;