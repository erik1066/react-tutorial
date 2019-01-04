import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import MessageMappingGuide from './MessageMappingGuide';
import HL7Parser from './HL7Parser';
import HL7Form from './HL7Form';

class App extends Component {

  state = {
    messageMappingGuide: new MessageMappingGuide("Congenital Syphillis 20180119", 
    [
      {
        name: "Message Profile Identifier",
        description: "Message Profile Identifiers provide a literal value to use for the references in MSH-21.  MSH-21 will always contain a reference to the notification type in the \"PHINProfileID\" namespace and a reference to the implemented version of the Generic MMG in the \"PHINMsgMapID\" namespace.  For conditions that have a condition-specific MMG, MSH-21 will also contain a reference to that MMG that is also in the \"PHINMsgMapID\" namespace.",
        legacyVariableName: "NOT115",
        identifier: "N/A: MSH-21",
        codeSystem: "N/A",
        dataType: "Text",
        priority: "R",
        repetitions: 1,
        mappings: [
          {
            name: "hl7-v251-oru-r01",
            obrParent: 1,
            segmentType: "MSH",
            fieldPosition: 21,
            componentPosition: null,
            dataType: "EI",
            usage: "R",
            cardinality: "[3..3]",
            repeatingGroupElement: "NO"
          }
        ]
      },

      {
        name: "Subject Related",
        dataType: "Header",
        mappings: []
      },

      {
        name: "Local Subject ID",
        description: "The local ID of the subject/entity",
        legacyVariableName: "DEM197",
        identifier: "N/A: PID-3",
        codeSystem: "N/A",
        dataType: "Text",
        priority: "R",
        repetitions: 1,
        mappings: [
          {
            name: "hl7-v251-oru-r01",
            obrParent: 1,
            segmentType: "PID",
            fieldPosition: 3,
            componentPosition: null,
            dataType: "ST",
            usage: "R",
            cardinality: "[1..1]",
            repeatingGroupElement: "NO"
          }
        ]
      },
      {
        name: "Birth Date",
        description: "Patient’s date of birth",
        legacyVariableName: "DEM115",
        identifier: "N/A: PID-7",
        codeSystem: "N/A",
        dataType: "Date",
        priority: "P",
        repetitions: 1,
        mappings: [
          {
            name: "hl7-v251-oru-r01",
            obrParent: 1,
            segmentType: "PID",
            fieldPosition: 7,
            componentPosition: null,
            dataType: "TS",
            usage: "RE",
            cardinality: "[0..1]",
            repeatingGroupElement: "NO"
          }
        ]
      },
      {
        name: "Subject's Sex",
        description: "Subject's current sex",
        legacyVariableName: "DEM113",
        identifier: "N/A: PID-8",
        codeSystem: "N/A",
        dataType: "Coded",
        priority: "P",
        repetitions: 1,
        mappings: [
          {
            name: "hl7-v251-oru-r01",
            obrParent: 1,
            segmentType: "PID",
            fieldPosition: 8,
            componentPosition: null,
            dataType: "IS",
            usage: "RE",
            cardinality: "[0..1]",
            repeatingGroupElement: "NO"
          }
        ]
      },
      {
        name: "Race Category",
        description: "Race category - Major OMB Race Categories. Detailed race information would be rolled up to these major OMB race categories.",
        legacyVariableName: "DEM152",
        identifier: "N/A: PID-10",
        codeSystem: "N/A",
        dataType: "Coded",
        priority: "P",
        repetitions: 100000,
        mappings: [
          {
            name: "hl7-v251-oru-r01",
            obrParent: 1,
            segmentType: "PID",
            fieldPosition: 10,
            componentPosition: null,
            dataType: "CE",
            usage: "RE",
            cardinality: "[0..*]",
            repeatingGroupElement: "NO"
          }
        ]
      },
      {
        name: "Other Race Text",
        description: "Other Race Text",
        legacyVariableName: "DEM154",
        identifier: "32624-9",
        codeSystem: "LN",
        dataType: "Text",
        priority: "O",
        repetitions: 1,
        mappings: [
          {
            name: "hl7-v251-oru-r01",
            obrParent: 1,
            segmentType: "OBX",
            fieldPosition: 5,
            componentPosition: null,
            dataType: "ST",
            usage: "O",
            cardinality: "[0..1]",
            repeatingGroupElement: "NO"
          }
        ]
      },

      {
        name: "Ethnic Group",
        description: "Based on the self-identity of the subject as Hispanic or Latino ",
        legacyVariableName: "DEM155",
        identifier: "N/A: PID-22",
        codeSystem: "N/A",
        dataType: "Coded",
        priority: "P",
        repetitions: 1,
        mappings: [
          {
            name: "hl7-v251-oru-r01",
            obrParent: 1,
            segmentType: "PID",
            fieldPosition: 22,
            componentPosition: null,
            dataType: "CE",
            usage: "RE",
            cardinality: "[0..1]",
            repeatingGroupElement: "NO"
          }
        ]
      },

      {
        name: "Country of Birth",
        description: "Country of Birth",
        legacyVariableName: "DEM126",
        identifier: "78746-5",
        codeSystem: "LN",
        dataType: "Coded",
        priority: "P",
        repetitions: 1,
        mappings: [
          {
            name: "hl7-v251-oru-r01",
            obrParent: 1,
            segmentType: "OBX",
            fieldPosition: 5,
            componentPosition: null,
            dataType: "CWE",
            usage: "RE",
            cardinality: "[0..1]",
            repeatingGroupElement: "NO"
          }
        ]
      },

      {
        name: "Other Birth Place",
        description: "Other Birth Place",
        legacyVariableName: "DEM304",
        identifier: "21842-0",
        codeSystem: "LN",
        dataType: "Text",
        priority: "O",
        repetitions: 1,
        mappings: [
          {
            name: "hl7-v251-oru-r01",
            obrParent: 1,
            segmentType: "OBX",
            fieldPosition: 5,
            componentPosition: null,
            dataType: "ST",
            usage: "O",
            cardinality: "[0..1]",
            repeatingGroupElement: "NO"
          }
        ]
      },

      {
        name: "Country of Usual Residence",
        description: "Where does the person usually live (defined as their residence).",
        legacyVariableName: "INV501",
        identifier: "77983-5",
        codeSystem: "LN",
        dataType: "Coded",
        priority: "P",
        repetitions: 1,
        mappings: [
          {
            name: "hl7-v251-oru-r01",
            obrParent: 1,
            segmentType: "OBX",
            fieldPosition: 5,
            componentPosition: null,
            dataType: "CWE",
            usage: "RE",
            cardinality: "[0..1]",
            repeatingGroupElement: "NO"
          }
        ]
      },

      {
        name: "Subject Address County",
        description: "County of residence of the subject",
        legacyVariableName: "DEM165",
        identifier: "N/A: PID-11.9",
        codeSystem: "N/A",
        dataType: "Coded",
        priority: "P",
        repetitions: 1,
        mappings: [
          {
            name: "hl7-v251-oru-r01",
            obrParent: 1,
            segmentType: "PID",
            fieldPosition: 11,
            componentPosition: 9,
            dataType: "IS",
            usage: "RE",
            cardinality: "[0..1]",
            repeatingGroupElement: "NO"
          }
        ]
      },

      {
        name: "Subject Address State",
        description: "State of residence of the subject",
        legacyVariableName: "DEM162",
        identifier: "N/A: PID-11.4",
        codeSystem: "N/A",
        dataType: "Coded",
        priority: "O",
        repetitions: 1,
        mappings: [
          {
            name: "hl7-v251-oru-r01",
            obrParent: 1,
            segmentType: "PID",
            fieldPosition: 11,
            componentPosition: 4,
            dataType: "ST",
            usage: "RE",
            cardinality: "[0..1]",
            repeatingGroupElement: "NO"
          }
        ]
      },


      {
        name: "Subject Address ZIP Code",
        description: "ZIP Code of residence of the subject",
        legacyVariableName: "DEM163",
        identifier: "N/A: PID-11.5",
        codeSystem: "N/A",
        dataType: "Coded",
        priority: "O",
        repetitions: 1,
        mappings: [
          {
            name: "hl7-v251-oru-r01",
            obrParent: 1,
            segmentType: "PID",
            fieldPosition: 11,
            componentPosition: 5,
            dataType: "ST",
            usage: "RE",
            cardinality: "[0..1]",
            repeatingGroupElement: "NO"
          }
        ]
      },




      {
        name: "Case Related",
        dataType: "Header",
        mappings: []
      },




      {
        id: "ce6cd7c0-f9c8-44d2-a917-91e1655ad5bd",
        name: "Illness Duration",
        description: "Length of time this subject had this disease or condition.",
        legacyVariableName: "INV139",
        identifier: "77977-7",
        codeSystem: "LN",
        dataType: "Numeric",
        priority: "O",
        repetitions: 1,
        mappings: [
          {
            name: "hl7-v251-oru-r01",
            obrParent: 1,
            segmentType: "OBX",
            fieldPosition: 5,
            componentPosition: null,
            dataType: "SN",
            usage: "O",
            cardinality: "[0..1]",
            repeatingGroupElement: "NO"
          }
        ]
      },
      {
        id: "7576d936-0aa5-4e98-b330-f40af2145c78",
        name: "Illness Duration Units",
        description: "Unit of time used to describe the length of the illness or condition.",
        legacyVariableName: "INV140",
        identifier: "N/A: OBX-6",
        codeSystem: "N/A",
        dataType: "Coded",
        priority: "O",
        repetitions: 1,
        relatedElementId: "ce6cd7c0-f9c8-44d2-a917-91e1655ad5bd",
        mappings: [
          {
            name: "hl7-v251-oru-r01",
            obrParent: 1,
            segmentType: "OBX",
            fieldPosition: 6,
            componentPosition: null,
            dataType: "CE",
            usage: "O",
            cardinality: "[0..1]",
            repeatingGroupElement: "NO"
          }
        ]
      },

      {
        id: "97f3083c-fdca-4f94-a218-21478312c543",
        name: "Epidemiologic Lab Interpretative questions repeating group - Mother's First Non-Treponemal Test Finding/Information",
        description: "",
        dataType: "Header",
        mappings: []
      },

      {
        id: "0e0e47a3-0b0e-4fc9-8a38-5a8c59897c92",
        name: "Lab Test Performed Modifier",
        description: "Lab Test Performed Modifier to convey whether this result is for the first or most recent test as well as the subject (Mother or Infant).",
        instance: 1,
        legacyVariableName: "LAB588",
        identifier: "LAB588",
        codeSystem: "PHINQUESTION",
        dataType: "Coded",
        priority: "P",
        repetitions: 1,
        mappings: [
          {
            name: "hl7-v251-oru-r01",
            obrParent: 1,
            segmentType: "OBX",
            fieldPosition: 5,
            componentPosition: null,
            dataType: "CWE",
            usage: "RE",
            cardinality: "[0..1]",
            repeatingGroupElement: "PRIMARY/PARENT"
          }
        ]
      },
      {
        id: "8d792c5e-5e2d-41e0-a797-2d38696fd3b2",
        name: "Test Type",
        description: "Epidemiologic interpretation of the type of test(s) performed for this case.",
        instance: 1,
        legacyVariableName: "INV290",
        identifier: "INV290",
        codeSystem: "PHINQUESTION",
        dataType: "Coded",
        priority: "P",
        repetitions: 1,
        mappings: [
          {
            name: "hl7-v251-oru-r01",
            obrParent: 1,
            segmentType: "OBX",
            fieldPosition: 5,
            componentPosition: null,
            dataType: "CWE",
            usage: "RE",
            cardinality: "[0..1]",
            repeatingGroupElement: "PRIMARY/PARENT"
          }
        ]
      },
      {
        id: "2f1b8a3c-fc2b-42d4-bc2d-a21cc3782a12",
        name: "Test Result",
        description: "Epidemiologic interpretation of the results of the test(s) performed for this case. This is a qualitative test result.  E.g. positive, detected, negative.",
        instance: 1,
        legacyVariableName: "INV291",
        identifier: "INV291",
        codeSystem: "PHINQUESTION",
        dataType: "Coded",
        priority: "P",
        repetitions: 1,
        mappings: [
          {
            name: "hl7-v251-oru-r01",
            obrParent: 1,
            segmentType: "OBX",
            fieldPosition: 5,
            componentPosition: null,
            dataType: "CWE",
            usage: "RE",
            cardinality: "[0..1]",
            repeatingGroupElement: "CHILD"
          }
        ]
      },


      {
        id: "953418f8-1487-46b5-8918-94be49031b32",
        name: "Epidemiologic Lab Interpretative questions repeating group - Mother's First Non-Treponemal Test Finding/Information",
        description: "",
        dataType: "Header",
        mappings: []
      },


      {
        id: "c034e07e-f200-438f-a87e-f5f66e673bf8",
        name: "Lab Test Performed Modifier",
        description: "Lab Test Performed Modifier to convey whether this result is for the first or most recent test as well as the subject (Mother or Infant).",
        instance: 2,
        legacyVariableName: "LAB588",
        identifier: "LAB588",
        codeSystem: "PHINQUESTION",
        dataType: "Coded",
        priority: "P",
        repetitions: 1,
        mappings: [
          {
            name: "hl7-v251-oru-r01",
            obrParent: 1,
            segmentType: "OBX",
            fieldPosition: 5,
            componentPosition: null,
            dataType: "CWE",
            usage: "RE",
            cardinality: "[0..1]",
            repeatingGroupElement: "PRIMARY/PARENT"
          }
        ]
      },
      {
        id: "6f9c639e-bddf-4875-abdf-ef288eba5caa",
        name: "Test Type",
        description: "Epidemiologic interpretation of the type of test(s) performed for this case.",
        instance: 2,
        legacyVariableName: "INV290",
        identifier: "INV290",
        codeSystem: "PHINQUESTION",
        dataType: "Coded",
        priority: "P",
        repetitions: 1,
        mappings: [
          {
            name: "hl7-v251-oru-r01",
            obrParent: 1,
            segmentType: "OBX",
            fieldPosition: 5,
            componentPosition: null,
            dataType: "CWE",
            usage: "RE",
            cardinality: "[0..1]",
            repeatingGroupElement: "PRIMARY/PARENT"
          }
        ]
      },
      {
        id: "b1eeea24-f218-4121-b32f-f5a676d06094",
        name: "Test Result",
        description: "Epidemiologic interpretation of the results of the test(s) performed for this case. This is a qualitative test result.  E.g. positive, detected, negative.",
        instance: 2,
        legacyVariableName: "INV291",
        identifier: "INV291",
        codeSystem: "PHINQUESTION",
        dataType: "Coded",
        priority: "P",
        repetitions: 1,
        mappings: [
          {
            name: "hl7-v251-oru-r01",
            obrParent: 1,
            segmentType: "OBX",
            fieldPosition: 5,
            componentPosition: null,
            dataType: "CWE",
            usage: "RE",
            cardinality: "[0..1]",
            repeatingGroupElement: "CHILD"
          }
        ]
      }

    // messageMappingGuide: new MessageMappingGuide("Generic V2 20171208", 
    // [
    //   {
    //     name: "Local Subject ID",
    //     description: "The local ID of the subject/entity",
    //     legacyVariableName: "DEM197",
    //     identifier: "N/A: PID-3",
    //     codeSystem: "N/A",
    //     dataType: "Text",
    //     priority: "R",
    //     repetitions: 1,
    //     mappings: [
    //       {
    //         name: "hl7-v251-oru-r01",
    //         obrParent: 1,
    //         segmentType: "PID",
    //         fieldPosition: 3,
    //         componentPosition: null,
    //         dataType: "ST",
    //         usage: "R",
    //         cardinality: "[1..1]",
    //         repeatingGroupElement: "NO"
    //       }
    //     ]
    //   },
    //   {
    //     name: "Birth Date",
    //     description: "Patient’s date of birth",
    //     legacyVariableName: "DEM115",
    //     identifier: "N/A: PID-7",
    //     codeSystem: "N/A",
    //     dataType: "Date",
    //     priority: "P",
    //     repetitions: 1,
    //     mappings: [
    //       {
    //         name: "hl7-v251-oru-r01",
    //         obrParent: 1,
    //         segmentType: "PID",
    //         fieldPosition: 7,
    //         componentPosition: null,
    //         dataType: "TS",
    //         usage: "RE",
    //         cardinality: "[0..1]",
    //         repeatingGroupElement: "NO"
    //       }
    //     ]
    //   },
    //   {
    //     name: "Subject's Sex",
    //     description: "Subject's current sex",
    //     legacyVariableName: "DEM113",
    //     identifier: "N/A: PID-8",
    //     codeSystem: "N/A",
    //     dataType: "Coded",
    //     priority: "P",
    //     repetitions: 1,
    //     mappings: [
    //       {
    //         name: "hl7-v251-oru-r01",
    //         obrParent: 1,
    //         segmentType: "PID",
    //         fieldPosition: 8,
    //         componentPosition: null,
    //         dataType: "IS",
    //         usage: "RE",
    //         cardinality: "[0..1]",
    //         repeatingGroupElement: "NO"
    //       }
    //     ]
    //   },
    //   {
    //     name: "Race Category",
    //     description: "Race category - Major OMB Race Categories. Detailed race information would be rolled up to these major OMB race categories.",
    //     legacyVariableName: "DEM152",
    //     identifier: "N/A: PID-10",
    //     codeSystem: "N/A",
    //     dataType: "Coded",
    //     priority: "P",
    //     repetitions: 100000,
    //     mappings: [
    //       {
    //         name: "hl7-v251-oru-r01",
    //         obrParent: 1,
    //         segmentType: "PID",
    //         fieldPosition: 10,
    //         componentPosition: null,
    //         dataType: "CE",
    //         usage: "RE",
    //         cardinality: "[0..*]",
    //         repeatingGroupElement: "NO"
    //       }
    //     ]
    //   },
    //   {
    //     name: "Other Race Text",
    //     description: "Other Race Text",
    //     legacyVariableName: "DEM154",
    //     identifier: "32624-9",
    //     codeSystem: "LN",
    //     dataType: "Text",
    //     priority: "O",
    //     repetitions: 1,
    //     mappings: [
    //       {
    //         name: "hl7-v251-oru-r01",
    //         obrParent: 1,
    //         segmentType: "OBX",
    //         fieldPosition: 5,
    //         componentPosition: null,
    //         dataType: "ST",
    //         usage: "O",
    //         cardinality: "[0..1]",
    //         repeatingGroupElement: "NO"
    //       }
    //     ]
    //   },
    //   {
    //     name: "Country of Birth",
    //     description: "Country of Birth",
    //     legacyVariableName: "DEM126",
    //     identifier: "78746-5",
    //     codeSystem: "LN",
    //     dataType: "Coded",
    //     priority: "P",
    //     repetitions: 1,
    //     mappings: [
    //       {
    //         name: "hl7-v251-oru-r01",
    //         obrParent: 1,
    //         segmentType: "OBX",
    //         fieldPosition: 5,
    //         componentPosition: null,
    //         dataType: "CWE",
    //         usage: "RE",
    //         cardinality: "[0..1]",
    //         repeatingGroupElement: "NO"
    //       }
    //     ]
    //   },
    //   {
    //     id: "ce6cd7c0-f9c8-44d2-a917-91e1655ad5bd",
    //     name: "Illness Duration",
    //     description: "Length of time this subject had this disease or condition.",
    //     legacyVariableName: "INV139",
    //     identifier: "77977-7",
    //     codeSystem: "LN",
    //     dataType: "Numeric",
    //     priority: "O",
    //     repetitions: 1,
    //     mappings: [
    //       {
    //         name: "hl7-v251-oru-r01",
    //         obrParent: 1,
    //         segmentType: "OBX",
    //         fieldPosition: 5,
    //         componentPosition: null,
    //         dataType: "SN",
    //         usage: "O",
    //         cardinality: "[0..1]",
    //         repeatingGroupElement: "NO"
    //       }
    //     ]
    //   },
    //   {
    //     id: "7576d936-0aa5-4e98-b330-f40af2145c78",
    //     name: "Illness Duration Units",
    //     description: "Unit of time used to describe the length of the illness or condition.",
    //     legacyVariableName: "INV140",
    //     identifier: "N/A: OBX-6",
    //     codeSystem: "N/A",
    //     dataType: "Coded",
    //     priority: "O",
    //     repetitions: 1,
    //     relatedElementId: "ce6cd7c0-f9c8-44d2-a917-91e1655ad5bd",
    //     mappings: [
    //       {
    //         name: "hl7-v251-oru-r01",
    //         obrParent: 1,
    //         segmentType: "OBX",
    //         fieldPosition: 6,
    //         componentPosition: null,
    //         dataType: "CE",
    //         usage: "O",
    //         cardinality: "[0..1]",
    //         repeatingGroupElement: "NO"
    //       }
    //     ]
    //   }
    ])
  };

  handleSubmit = (file) => {

    const { messageMappingGuide } = this.state;

    const data = file;
    new HL7Parser().parse(data.message, messageMappingGuide);

    this.setState({
      messageMappingGuide: messageMappingGuide
    });
  }

  render() 
  {
    const messageMappingGuide = this.state.messageMappingGuide;

    return (
      <div className="container">
        <h1>{messageMappingGuide.name}</h1>
        <br />
        <HL7Form handleSubmit={this.handleSubmit} />
        <br />
        <Table messageMappingGuide={messageMappingGuide} />
      </div>
    );
  }
}

export default App;
