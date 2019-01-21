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

    var headerRowStyle = {
        backgroundColor: "#D7EFF4"
    }

    const rows = props.messageMappingGuide.elements.map((row, index) => {

        if (row.dataType !== 'None') {
            return (
                <tr style={row.dataType !== 'None' ? {} : headerRowStyle } key={index}>
                    <td>{row.legacyVariableName ? index + 1 : "" }</td>
                    <td>{row.legacyVariableName}</td>
                    <td>{row.name}</td>
                    <td>{row.identifier}</td>
                    <td>{row.codeSystem}</td>
                    <td>{row.description}</td>
                    <td>{row.dataType}</td>
                    <td>{row.priority}</td>
                    <td>{row.repetitions <= 1 ? "N" : "Y" }</td>
                    <td>{row.data && row.data.length > 0 ? row.data[0] : ""}</td>
                    <td>{row.data && row.data.length > 1 ? row.data[1] : ""}</td>
                    <td>{row.data && row.data.length > 2 ? row.data[2] : ""}</td>
                    <td>{row.data && row.data.length > 3 ? row.data[3] : ""}</td>
                    <td>{row.data && row.data.length > 4 ? row.data[4] : ""}</td>
                    <td>{row.data && row.data.length > 5 ? row.data[5] : ""}</td>
                    <td>{row.data && row.data.length > 6 ? row.data[6] : ""}</td>
                    <td>{row.data && row.data.length > 7 ? row.data[7] : ""}</td>
                </tr>
            );
        }
        else {
            return (
            <tr style={row.dataType !== 'None' ? {} : headerRowStyle } key={index}>
                <td colspan="17">{row.description}</td>
            </tr>
            );
        }
    });

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
                <th>Test Record #8</th>
            </tr>
        </thead>
    );
}

export default Table;