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
                <td>{row.condition}</td>
                <td>{row.legacyVariableName}</td>
                <td>{row.name}</td>
                <td>{row.identifier}</td>
                <td>{row.codeSystem}</td>
                <td>{row.description}</td>
                <td>{row.dataType}</td>
                <td>{row.priority}</td>
                <td>{row.repetitions}</td>
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
                <th>Cn</th>
                <th>Legacy</th>
                <th>Data element name</th>
                <th>Identifier</th>
                <th>Code system</th>
                <th>Description</th>
                <th>Data type</th>
                <th>Priority</th>
                <th>Repetitions</th>
            </tr>
        </thead>
    );
}

export default Table;