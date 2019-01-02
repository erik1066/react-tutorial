class HL7Parser {

    parse(message, messageMappingGuide) {

        const normalizedMessage = message.replace(/(\r\n\t|\n|\r\t)/gm, "\n"); // normalize line terminators
        const elements = messageMappingGuide.elements;
        const segments = normalizedMessage.split("\n");

        elements.forEach(element => {
            this.findSegmentData(element, segments);
        });
    }

    findSegmentData(element, segments) {
        const segmentType = element.mappings[0].segmentType;
        const fieldPosition = element.mappings[0].fieldPosition;
        const identifier = element.identifier;

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

    generateFriendlyValue(element, value) {

        const mapping = element.mappings[0];
        let friendlyValue = "<N/A>";

        if (!value) {
            return friendlyValue;
        }

        if (mapping.dataType === "CWE") {
            const components = value.split('^');
            friendlyValue = components[0] + "=" + components[1];
        }
        else {
            friendlyValue = value;
        }

        
        return friendlyValue;
    }

}

export default HL7Parser;