import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import MessageMappingGuide from './MessageMappingGuide';

class App extends Component {

  state = {
    messageMappingGuide: new MessageMappingGuide("Generic V2", [
      {
        name: "Local Subject ID",
        description: "The local ID of the subject/entity",
        legacyVariableName: "DEM197",
        identifier: "N/A: PID-3",
        codeSystem: "N/A",
        dataType: "Text",
        priority: "R",
        repetitions: 1
      },
      {
        name: "Other Race Text",
        description: "Other Race Text",
        legacyVariableName: "DEM154",
        identifier: "32624-9",
        codeSystem: "LN",
        dataType: "Text",
        priority: "O",
        repetitions: 1
      }
    ])
  };

  render() 
  {
    const messageMappingGuide = this.state.messageMappingGuide;

    return (
      <div className="container">
        <h1>{messageMappingGuide.name}</h1>
        <br />
        <Table 
        messageMappingGuide={messageMappingGuide} />
      </div>
    );
  }
}

export default App;
