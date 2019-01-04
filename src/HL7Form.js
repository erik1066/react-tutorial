import React, {Component} from 'react';

class HL7Form extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            files: []
        };

        this.state = this.initialState;
    }

    readerCallback = (message) => {
        this.setState({
            message: message
        });
    }

    handleChange = (event) => {
        const {name, value} = event.target;

        let file = event.target.files[0];

        const reader = new FileReader();

        const readerCallback = this.readerCallback;

        reader.onload = function(evt) {
            readerCallback(evt.target.result);
        };

        reader.readAsText(file);
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { files } = this.state; 

        return (
            <form>
                <label>HL7 files:</label>
                <input
                    multiple
                    type="file"
                    name="files"
                    value={files}
                    onChange={this.handleChange} />
                
                <input 
                    type="button" 
                    value="Submit" 
                    onClick={this.submitForm} />
            </form>
        );
    }
}

export default HL7Form;