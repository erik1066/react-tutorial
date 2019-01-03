class HL7Parser {

    parse(message, messageMappingGuide) {

        const normalizedMessage = message.replace(/(\r\n\t|\n|\r\t)/gm, "\n"); // normalize line terminators
        const elements = messageMappingGuide.elements;

        elements.forEach(element => {
            this.findSegmentData(element, normalizedMessage, messageMappingGuide);
        });
    }

    findSegmentData(element, message, messageMappingGuide) {
        const segmentType = element.mappings[0].segmentType;
        const fieldPosition = element.mappings[0].fieldPosition;
        const identifier = element.identifier;
        const segments = message.split("\n");

        const segmentData = {
            name: element.name,
            identifier: element.identifier,
            value: null,
            friendlyValue: null,
        };

        for (let i = 0; i < segments.length; i++) {
            const segment = segments[i];

            if (segment.startsWith(segmentType)) {
                const fields = segment.split('|');
                let data = null;

                if (segmentType === "OBX" && fieldPosition === 5) {
                    let obx3value = fields[3];
                    const obx3components = obx3value.split('^');
                    if (identifier === obx3components[0]) {
                        data = fields[5];
                    }
                }
                else if (segmentType === "OBX" && fieldPosition > 5 && element.relatedElementId) {
                    const relatedId = element.relatedElementId;
                    const relatedElement = this.getElementById(relatedId, messageMappingGuide);
                    const relatedElementIdentifier = relatedElement.identifier;
                    
                    let obx3value = fields[3];
                    const obx3components = obx3value.split('^');
                    
                    if (relatedElementIdentifier === obx3components[0]) {
                        data = fields[fieldPosition];
                    }
                }
                else if (segmentType !== "OBX") {
                    data = fields[fieldPosition];
                }

                if (data) {                    
                    segmentData.value = data;
                    break;
                }
            }
        }

        segmentData.friendlyValue = this.generateFriendlyValue(element, segmentData.value);

        console.log(segmentData);
        return segmentData;
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