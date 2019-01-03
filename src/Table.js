import React, {Component} from 'react';

class Table extends Component {
    render() {

        const { messageMappingGuide } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody messageMappingGuide={messageMappingGuide} />
            </table>
        );
    }
}

const TableBody = (props) => { 

    const rows = props.messageMappingGuide.elements.map((row, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.legacyVariableName}</td>
                <td>{row.name}</td>
                <td>{row.identifier}</td>
                <td>{row.codeSystem}</td>
                <td>{row.description}</td>
                <td>{row.dataType}</td>
                <td>{row.priority}</td>
                <td>{row.repetitions}</td>
                <td>{row.data[0]}</td>
                <td>{row.data[1]}</td>
                <td>{row.data[3]}</td>
                <td>{row.data[4]}</td>
                <td>{row.data[5]}</td>
                <td>{row.data[6]}</td>
                <td>{row.data[7]}</td>
            </tr>
        );
    })
    return (
        <tbody>
            {rows}            
        </tbody>
    );
}

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Row</th>
                <th>Legacy</th>
                <th>Name</th>
                <th>Identifier</th>
                <th>Code system</th>
                <th>Description</th>
                <th>Data type</th>
                <th>Priority</th>
                <th>Repetitions</th>
                <th>Test Record #1</th>
                <th>Test Record #2</th>
                <th>Test Record #3</th>
                <th>Test Record #4</th>
                <th>Test Record #5</th>
                <th>Test Record #6</th>
                <th>Test Record #7</th>
            </tr>
        </thead>
    );
}

export default Table;