'use strict';

// import DataElement from './DataElement';

class MessageMappingGuide {

    constructor(name, elements) {
        this.name = name;
        this.elements = elements;
    }

    get name () { return this._name; }
    set name (name) { this._name = name; }

    add(element) {
        this.elements.push(element);
    }
}

export default MessageMappingGuide;