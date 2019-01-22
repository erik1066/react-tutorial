import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import MessageMappingGuide from './MessageMappingGuide';
import HL7Parser from './HL7Parser';
import HL7Form from './HL7Form';

class App extends Component {

  state = {
    messageMappingGuide: new MessageMappingGuide("Mumps", 
    
    [
      {
        "id": "5ba813c4-3c27-451d-83af-d8881953588a",
        "name": null,
        "description": "Message Header",
        "legacyVariableName": null,
        "identifier": null,
        "codeSystem": null,
        "dataType": "None",
        "priority": 0,
        "repetitions": 0,
        "relatedElementId": null,
        "mappings": []
      },
      {
        "id": "84caa763-dbd0-4965-a50a-ee0fd67aa26c",
        "name": "Message Profile Identifier",
        "description": "Message Profile Identifier",
        "legacyVariableName": "NOT115",
        "identifier": "N/A: MSH-21",
        "codeSystem": "N/A",
        "dataType": "Text",
        "priority": "R",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "MSH",
            "fieldPosition": 21,
            "componentPosition": -1,
            "dataType": "EI",
            "usage": "R",
            "cardinality": "[3..3]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "280026b5-43c5-4173-9c62-41aba6d57057",
        "name": null,
        "description": "Subject Related",
        "legacyVariableName": null,
        "identifier": null,
        "codeSystem": null,
        "dataType": "None",
        "priority": 0,
        "repetitions": 0,
        "relatedElementId": null,
        "mappings": []
      },
      {
        "id": "df2f791b-5189-404e-972d-01c513ec8f66",
        "name": "Local Subject ID",
        "description": "Local Subject ID",
        "legacyVariableName": "DEM197",
        "identifier": "N/A: PID-3",
        "codeSystem": "N/A",
        "dataType": "Text",
        "priority": "R",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "PID",
            "fieldPosition": 3,
            "componentPosition": -1,
            "dataType": "CX",
            "usage": "R",
            "cardinality": "[1..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "918225f5-4ffd-47a1-b7b1-27635f5429f6",
        "name": "Birth Date",
        "description": "Birth Date",
        "legacyVariableName": "DEM115",
        "identifier": "N/A: PID-7",
        "codeSystem": "N/A",
        "dataType": "Date",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "PID",
            "fieldPosition": 7,
            "componentPosition": -1,
            "dataType": "TS",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "e233acfc-301a-4293-a2c8-06002a77f3a3",
        "name": "Subject’s Sex",
        "description": "Subject’s Sex",
        "legacyVariableName": "DEM113",
        "identifier": "N/A: PID-8",
        "codeSystem": "N/A",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "PID",
            "fieldPosition": 8,
            "componentPosition": -1,
            "dataType": "IS",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "18a43f2c-ff15-406b-b9e1-afd8df5239ef",
        "name": "Race Category",
        "description": "Race Category",
        "legacyVariableName": "DEM152",
        "identifier": "N/A: PID-10",
        "codeSystem": "N/A",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 2147483647,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "PID",
            "fieldPosition": 10,
            "componentPosition": -1,
            "dataType": "CE",
            "usage": "RE",
            "cardinality": "[0..*]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "13a244d2-8c20-4ddf-9a6c-a81f3ca4046a",
        "name": "Other Race Text",
        "description": "Other Race Text",
        "legacyVariableName": "DEM154",
        "identifier": "32624-9",
        "codeSystem": "LN",
        "dataType": "Text",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "ST",
            "usage": "O",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "7d65fc52-7022-4857-a2af-cfa0eb685b3e",
        "name": "Ethnic Group",
        "description": "Ethnic Group",
        "legacyVariableName": "DEM155",
        "identifier": "N/A: PID-22",
        "codeSystem": "N/A",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "PID",
            "fieldPosition": 22,
            "componentPosition": -1,
            "dataType": "CE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "8fbdd55e-b971-465a-8df9-fea6a2df1c5f",
        "name": "Country of Birth",
        "description": "Country of Birth",
        "legacyVariableName": "DEM126",
        "identifier": "78746-5",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "dd308509-acc9-4fc5-b9ed-d31b8770285f",
        "name": "Other Birth Place",
        "description": "Other Birth Place",
        "legacyVariableName": "DEM304",
        "identifier": "21842-0",
        "codeSystem": "LN",
        "dataType": "Text",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "ST",
            "usage": "O",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "07eac6c3-948b-49ae-9050-5e5373749b3a",
        "name": "Country of Usual Residence",
        "description": "Country of Usual Residence",
        "legacyVariableName": "INV501",
        "identifier": "77983-5",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "457353eb-9da7-469d-b91b-e969b5f64492",
        "name": "Subject Address County",
        "description": "Subject Address County",
        "legacyVariableName": "DEM165",
        "identifier": "N/A: PID-11.9",
        "codeSystem": "N/A",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "PID",
            "fieldPosition": 11,
            "componentPosition": 9,
            "dataType": "IS",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "c5b828bf-ee57-4ac1-bf66-fc71a7bd28b9",
        "name": "Subject Address State",
        "description": "Subject Address State",
        "legacyVariableName": "DEM162",
        "identifier": "N/A: PID-11.4",
        "codeSystem": "N/A",
        "dataType": "Coded",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "PID",
            "fieldPosition": 11,
            "componentPosition": 4,
            "dataType": "ST",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "a779a11d-ad38-4bd4-bbdb-1555514b9fc4",
        "name": "Subject Address ZIP Code",
        "description": "Subject Address ZIP Code",
        "legacyVariableName": "DEM163",
        "identifier": "N/A: PID-11.5",
        "codeSystem": "N/A",
        "dataType": "Text",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "PID",
            "fieldPosition": 11,
            "componentPosition": 5,
            "dataType": "ST",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "64c5e4c8-2dee-4ec1-b3f2-141db90e15bf",
        "name": null,
        "description": "Case Related",
        "legacyVariableName": null,
        "identifier": null,
        "codeSystem": null,
        "dataType": "None",
        "priority": 0,
        "repetitions": 0,
        "relatedElementId": null,
        "mappings": []
      },
      {
        "id": "9928d4d6-eea0-4e3f-9e06-85cfb2c3199a",
        "name": "Date of Illness Onset",
        "description": "Date of Illness Onset",
        "legacyVariableName": "INV137",
        "identifier": "11368-8",
        "codeSystem": "LN",
        "dataType": "Date",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "TS",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "93942d4e-63ec-46a6-a5cd-1e71d976d90d",
        "name": "Illness End Date",
        "description": "Illness End Date",
        "legacyVariableName": "INV138",
        "identifier": "77976-9",
        "codeSystem": "LN",
        "dataType": "Date",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "TS",
            "usage": "O",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "1334f3fc-a02a-47b3-92d4-63153b11dd64",
        "name": "Illness Duration",
        "description": "Illness Duration",
        "legacyVariableName": "INV139",
        "identifier": "77977-7",
        "codeSystem": "LN",
        "dataType": "Numeric",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "SN",
            "usage": "O",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "abd9a2fc-03ad-418b-9819-6bedc955dbaa",
        "name": "Illness Duration Units",
        "description": "Illness Duration Units",
        "legacyVariableName": "INV140",
        "identifier": "N/A: OBX-6",
        "codeSystem": "N/A",
        "dataType": "Coded",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": "1334f3fc-a02a-47b3-92d4-63153b11dd64",
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 6,
            "componentPosition": -1,
            "dataType": "CE",
            "usage": "O",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "f3722238-af5e-4346-907d-736edaa47863",
        "name": "Pregnancy Status",
        "description": "Pregnancy Status",
        "legacyVariableName": "INV178",
        "identifier": "77996-7",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "O",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "4018be44-a07b-47fc-a422-3b41cf59d670",
        "name": "Diagnosis Date",
        "description": "Diagnosis Date",
        "legacyVariableName": "INV136",
        "identifier": "77975-1",
        "codeSystem": "LN",
        "dataType": "Date",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "TS",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "bc126dea-f2d7-4c00-9e6e-a92e240e1ae8",
        "name": "Hospitalized",
        "description": "Hospitalized",
        "legacyVariableName": "INV128",
        "identifier": "77974-4",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "O",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "4283972a-8ac7-4c88-8cb6-cbe3057b8bc7",
        "name": "Admission Date",
        "description": "Admission Date",
        "legacyVariableName": "INV132",
        "identifier": "8656-1",
        "codeSystem": "LN",
        "dataType": "Date",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "TS",
            "usage": "O",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "e29fcb10-851e-4643-a447-c90e9a27bb8a",
        "name": "Discharge Date",
        "description": "Discharge Date",
        "legacyVariableName": "INV133",
        "identifier": "8649-6",
        "codeSystem": "LN",
        "dataType": "Date",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "TS",
            "usage": "O",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "1514b03e-e4fb-42f1-b63a-4e6add08d7c6",
        "name": "Duration of Hospital Stay in Days",
        "description": "Duration of Hospital Stay in Days",
        "legacyVariableName": "INV134",
        "identifier": "78033-8",
        "codeSystem": "LN",
        "dataType": "Numeric",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "SN",
            "usage": "O",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "2383f96f-098a-4af3-9ada-f6c6aab923af",
        "name": "Subject Died",
        "description": "Subject Died",
        "legacyVariableName": "INV145",
        "identifier": "77978-5",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "827d2f8f-eec9-49f0-9265-0fc681f120b5",
        "name": "Deceased Date",
        "description": "Deceased Date",
        "legacyVariableName": "INV146",
        "identifier": "N/A: PID-29",
        "codeSystem": "N/A",
        "dataType": "Date",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "PID",
            "fieldPosition": 29,
            "componentPosition": -1,
            "dataType": "TS",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "c30ce921-63d7-4981-833b-5b5c99c51bb3",
        "name": "Condition Code",
        "description": "Condition Code",
        "legacyVariableName": "INV169",
        "identifier": "N/A: OBR-31",
        "codeSystem": "N/A",
        "dataType": "Coded",
        "priority": "R",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBR",
            "fieldPosition": 31,
            "componentPosition": -1,
            "dataType": "CE",
            "usage": "R",
            "cardinality": "[1..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "6665e1dc-de3d-4e98-a4cc-cb26c4289a2e",
        "name": "Local Record ID",
        "description": "Local Record ID",
        "legacyVariableName": "INV168",
        "identifier": "N/A: OBR-3",
        "codeSystem": "N/A",
        "dataType": "Text",
        "priority": "R",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBR",
            "fieldPosition": 3,
            "componentPosition": -1,
            "dataType": "EI",
            "usage": "R",
            "cardinality": "[1..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "313e6282-fa94-43d7-b276-0c9e29f9c091",
        "name": "State Case Identifier",
        "description": "State Case Identifier",
        "legacyVariableName": "INV173",
        "identifier": "77993-4",
        "codeSystem": "LN",
        "dataType": "Text",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "ST",
            "usage": "O",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "17c8098b-0945-4a20-ae3a-0b608964b98c",
        "name": "Legacy Case Identifier",
        "description": "Legacy Case Identifier",
        "legacyVariableName": "INV200",
        "identifier": "77997-5",
        "codeSystem": "LN",
        "dataType": "Text",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "ST",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "b0fa71f1-71c0-4ecb-b2ea-7432f5890ba5",
        "name": "Age at Case Investigation",
        "description": "Age at Case Investigation",
        "legacyVariableName": "INV2001",
        "identifier": "77998-3",
        "codeSystem": "LN",
        "dataType": "Numeric",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "SN",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "6a1a06f1-e752-4f67-948c-851160d9f374",
        "name": "Age Unit at Case Investigation",
        "description": "Age Unit at Case Investigation",
        "legacyVariableName": "INV2002",
        "identifier": "N/A: OBX-6",
        "codeSystem": "N/A",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": "b0fa71f1-71c0-4ecb-b2ea-7432f5890ba5",
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 6,
            "componentPosition": -1,
            "dataType": "CE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "55dd0919-8991-47cd-a946-788634c1d4a9",
        "name": "Case Disease Imported Code",
        "description": "Case Disease Imported Code",
        "legacyVariableName": "INV152",
        "identifier": "77982-7",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "7d1a4941-6a05-45b7-a671-74ea67a1b1d1",
        "name": "Imported Country",
        "description": "Imported Country",
        "legacyVariableName": "INV153",
        "identifier": "INV153",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "1863f6dd-d646-47d5-b886-9080a8cfabc0",
        "name": "Imported State",
        "description": "Imported State",
        "legacyVariableName": "INV154",
        "identifier": "INV154",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "d692f87d-4095-4777-bafb-7049cdc80d07",
        "name": "Imported City",
        "description": "Imported City",
        "legacyVariableName": "INV155",
        "identifier": "INV155",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "bf98da0d-48ef-4bcb-aacc-e3f2a43ab276",
        "name": "Imported County",
        "description": "Imported County",
        "legacyVariableName": "INV156",
        "identifier": "INV156",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "O",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "eac0fcf3-a9e3-4e4a-a731-ec223c4b2ceb",
        "name": null,
        "description": "Repeating Variables for Disease Exposure",
        "legacyVariableName": null,
        "identifier": null,
        "codeSystem": null,
        "dataType": "None",
        "priority": 0,
        "repetitions": 0,
        "relatedElementId": null,
        "mappings": []
      },
      {
        "id": "2cc47e98-8212-4ef1-948a-1e2fcf7309ca",
        "name": "Country of Exposure",
        "description": "Country of Exposure",
        "legacyVariableName": "INV502",
        "identifier": "77984-3",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "cd308f98-95c1-4d93-a9bd-52335c3d3486",
        "name": "State or Province of Exposure",
        "description": "State or Province of Exposure",
        "legacyVariableName": "INV503",
        "identifier": "77985-0",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "40e12cd8-156e-4205-9073-173bce6aef74",
        "name": "City of Exposure",
        "description": "City of Exposure",
        "legacyVariableName": "INV504",
        "identifier": "77986-8",
        "codeSystem": "LN",
        "dataType": "Text",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "ST",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "7cbc5158-8d8e-4a07-92d8-81186115b0b1",
        "name": "County of Exposure",
        "description": "County of Exposure",
        "legacyVariableName": "INV505",
        "identifier": "77987-6",
        "codeSystem": "LN",
        "dataType": "Text",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "ST",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "e4ef9c62-bb10-4908-a218-5381b10dcd2e",
        "name": null,
        "description": "Misc",
        "legacyVariableName": null,
        "identifier": null,
        "codeSystem": null,
        "dataType": "None",
        "priority": 0,
        "repetitions": 0,
        "relatedElementId": null,
        "mappings": []
      },
      {
        "id": "47253d49-9f33-4574-97d4-734e1a646371",
        "name": "Transmission Mode",
        "description": "Transmission Mode",
        "legacyVariableName": "INV157",
        "identifier": "77989-2",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "O",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "85a02430-b77d-4027-8a97-20895cd61c55",
        "name": "Case Class Status Code",
        "description": "Case Class Status Code",
        "legacyVariableName": "INV163",
        "identifier": "77990-0",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "R",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "R",
            "cardinality": "[1..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "074a0eae-f5cb-4db7-84be-d855b1108675",
        "name": "Immediate National Notifiable Condition",
        "description": "Immediate National Notifiable Condition",
        "legacyVariableName": "NOT120",
        "identifier": "77965-2",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "dfa5ee59-5af5-4c65-9f23-54c69b7ab086",
        "name": "Case Outbreak Indicator",
        "description": "Case Outbreak Indicator",
        "legacyVariableName": "INV150",
        "identifier": "77980-1",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "b990f6de-497d-4ffb-89a4-e786075421d4",
        "name": "Case Outbreak Name",
        "description": "Case Outbreak Name",
        "legacyVariableName": "INV151",
        "identifier": "77981-9",
        "codeSystem": "LN",
        "dataType": "Text",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "ST",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "8b866406-5cad-4586-9284-7c0b7537e246",
        "name": "Notification Result Status",
        "description": "Notification Result Status",
        "legacyVariableName": "NOT118",
        "identifier": "N/A: OBR-25",
        "codeSystem": "N/A",
        "dataType": "Coded",
        "priority": "R",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBR",
            "fieldPosition": 25,
            "componentPosition": -1,
            "dataType": "ID",
            "usage": "R",
            "cardinality": "[1..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "5f37a5f6-092e-4911-bcc2-f4016bd5908e",
        "name": "Jurisdiction Code",
        "description": "Jurisdiction Code",
        "legacyVariableName": "INV107",
        "identifier": "77969-4",
        "codeSystem": "LN",
        "dataType": "Text",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "ST",
            "usage": "O",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "c5d4d7a0-123e-4718-835e-1ae09039f43a",
        "name": "Reporting Source Type Code",
        "description": "Reporting Source Type Code",
        "legacyVariableName": "INV112",
        "identifier": "48766-0",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "O",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "2559754c-ef80-4381-a94d-e906314a63e9",
        "name": "Reporting Source ZIP Code",
        "description": "Reporting Source ZIP Code",
        "legacyVariableName": "INV118",
        "identifier": "52831-5",
        "codeSystem": "LN",
        "dataType": "Text",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "ST",
            "usage": "O",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "8f782b26-1227-4505-8e42-8be9e3d44aea",
        "name": "Binational Reporting Criteria",
        "description": "Binational Reporting Criteria",
        "legacyVariableName": "INV515",
        "identifier": "77988-4",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 2147483647,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..*]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "d219d4e1-a3fa-4689-8dc6-8545742643b1",
        "name": "Person Reporting to CDC - Name",
        "description": "Person Reporting to CDC - Name",
        "legacyVariableName": "INV190",
        "identifier": "74549-7",
        "codeSystem": "LN",
        "dataType": "Text",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "ST",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "187044c2-c2a0-4c20-9a02-79b3b114968b",
        "name": "Person Reporting to CDC - Phone Number",
        "description": "Person Reporting to CDC - Phone Number",
        "legacyVariableName": "INV191",
        "identifier": "74548-9",
        "codeSystem": "LN",
        "dataType": "Text",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "ST",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "04514ba0-4f17-4822-96ec-d07d0f97bf90",
        "name": "Person Reporting to CDC - Email",
        "description": "Person Reporting to CDC - Email",
        "legacyVariableName": "INV193",
        "identifier": "74547-1",
        "codeSystem": "LN",
        "dataType": "Text",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "ST",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "20f6160e-7b39-426e-aebf-1e76ce7c7856",
        "name": "Case Investigation Start Date",
        "description": "Case Investigation Start Date",
        "legacyVariableName": "INV147",
        "identifier": "77979-3",
        "codeSystem": "LN",
        "dataType": "Date",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "DT",
            "usage": "O",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "e396d078-4e20-4830-8111-8cdc06fefce3",
        "name": "Date First Electronically Submitted",
        "description": "Date First Electronically Submitted",
        "legacyVariableName": "NOT103",
        "identifier": "N/A: OBR-7",
        "codeSystem": "N/A",
        "dataType": "DateTime",
        "priority": "R",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBR",
            "fieldPosition": 7,
            "componentPosition": -1,
            "dataType": "TS",
            "usage": "R",
            "cardinality": "[1..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "fff2da7c-79de-4582-8560-14cef5f71ccb",
        "name": "Date of Electronic Case Notification to CDC",
        "description": "Date of Electronic Case Notification to CDC",
        "legacyVariableName": "NOT106",
        "identifier": "N/A: OBR-22",
        "codeSystem": "N/A",
        "dataType": "DateTime",
        "priority": "R",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBR",
            "fieldPosition": 22,
            "componentPosition": -1,
            "dataType": "TS",
            "usage": "R",
            "cardinality": "[1..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "54ce917b-82c4-406c-ab82-871536892a20",
        "name": "Date Reported",
        "description": "Date Reported",
        "legacyVariableName": "INV111",
        "identifier": "77995-9",
        "codeSystem": "LN",
        "dataType": "Date",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "DT",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "5cd792cf-fc9a-4bb4-b6b3-90e08f59091d",
        "name": "Earliest Date Reported to County",
        "description": "Earliest Date Reported to County",
        "legacyVariableName": "INV120",
        "identifier": "77972-8",
        "codeSystem": "LN",
        "dataType": "Date",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "TS",
            "usage": "O",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "33ed2ea9-0e8e-44fc-96a3-a4de42e403bf",
        "name": "Earliest Date Reported to State",
        "description": "Earliest Date Reported to State",
        "legacyVariableName": "INV121",
        "identifier": "77973-6",
        "codeSystem": "LN",
        "dataType": "Date",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "TS",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "e5f0a1fa-53d4-4c5f-b63e-880e9c127ccf",
        "name": "MMWR Week",
        "description": "MMWR Week",
        "legacyVariableName": "INV165",
        "identifier": "77991-8",
        "codeSystem": "LN",
        "dataType": "Numeric",
        "priority": "R",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "SN",
            "usage": "R",
            "cardinality": "[1..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "d7fcf097-015e-42a0-8b11-1e795b5820eb",
        "name": "MMWR Year",
        "description": "MMWR Year",
        "legacyVariableName": "INV166",
        "identifier": "77992-6",
        "codeSystem": "LN",
        "dataType": "Date",
        "priority": "R",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "DT",
            "usage": "R",
            "cardinality": "[1..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "300c94b0-2aa5-4174-834c-c2799ac843b8",
        "name": "Date CDC Was First Verbally Notified of This Case",
        "description": "Date CDC Was First Verbally Notified of This Case",
        "legacyVariableName": "INV176",
        "identifier": "77994-2",
        "codeSystem": "LN",
        "dataType": "Date",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "DT",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "2a5d04d1-4fcf-43ba-8654-1dd2172978cf",
        "name": "Date First Reported to PHD",
        "description": "Date First Reported to PHD",
        "legacyVariableName": "INV177",
        "identifier": "77970-2",
        "codeSystem": "LN",
        "dataType": "Date",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "DT",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "575f896d-c491-4605-9414-f0ca1cc446b8",
        "name": "Reporting State",
        "description": "Reporting State",
        "legacyVariableName": "NOT109",
        "identifier": "77966-0",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "R",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "R",
            "cardinality": "[1..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "54d73684-6024-4040-a5de-37f01c4ab80a",
        "name": "Reporting County",
        "description": "Reporting County",
        "legacyVariableName": "NOT113",
        "identifier": "77967-8",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "69a1f2f9-7d4f-4887-90cb-f2cf23447094",
        "name": "National Reporting Jurisdiction",
        "description": "National Reporting Jurisdiction",
        "legacyVariableName": "NOT116",
        "identifier": "77968-6",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "R",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "R",
            "cardinality": "[1..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "4ebe3e8d-a885-495e-883d-7a9e1d56c239",
        "name": "Comment",
        "description": "Comment",
        "legacyVariableName": "INV886",
        "identifier": "77999-1",
        "codeSystem": "LN",
        "dataType": "LongText",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "TX",
            "usage": "O",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },

      {
        "id": "46d17f18c-e4e4-4cbb-815e-ec46cfab2c71",
        "description": "START: Signs and Symptoms Repeating Group",
        "dataType": "None",
        "repetitions": 100,
        "mappings": []
      },

      {
        "id": "c6c8c72d-a379-4046-a5ec-2a1c2c50da06",
        "name": "Signs and Symptoms",
        "description": "Signs and Symptoms",
        "blockId": "46d17f18c-e4e4-4cbb-815e-ec46cfab2c71",
        "legacyVariableName": "N/A",
        "identifier": "56831-1",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "PRIMARY/PARENT",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "1d05f57e-830e-433b-9448-e3535a39cdd9",
        "name": "Signs and Symptoms Indicator",
        "description": "Signs and Symptoms Indicator",
        "blockId": "46d17f18c-e4e4-4cbb-815e-ec46cfab2c71",
        "legacyVariableName": "N/A",
        "identifier": "INV919",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "CHILD",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },

      {
        "id": "c6c8c72d-a379-4046-a5ec-2a1c2c50da06",
        "name": "Signs and Symptoms",
        "description": "Signs and Symptoms",
        "blockId": "46d17f18c-e4e4-4cbb-815e-ec46cfab2c71",
        "legacyVariableName": "N/A",
        "identifier": "56831-1",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 2,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "PRIMARY/PARENT",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "1d05f57e-830e-433b-9448-e3535a39cdd9",
        "name": "Signs and Symptoms Indicator",
        "description": "Signs and Symptoms Indicator",
        "blockId": "46d17f18c-e4e4-4cbb-815e-ec46cfab2c71",
        "legacyVariableName": "N/A",
        "identifier": "INV919",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 2,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "CHILD",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },

      {
        "id": "c6c8c72d-a379-4046-a5ec-2a1c2c50da06",
        "name": "Signs and Symptoms",
        "description": "Signs and Symptoms",
        "blockId": "46d17f18c-e4e4-4cbb-815e-ec46cfab2c71",
        "legacyVariableName": "N/A",
        "identifier": "56831-1",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 3,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "PRIMARY/PARENT",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "1d05f57e-830e-433b-9448-e3535a39cdd9",
        "name": "Signs and Symptoms Indicator",
        "description": "Signs and Symptoms Indicator",
        "blockId": "46d17f18c-e4e4-4cbb-815e-ec46cfab2c71",
        "legacyVariableName": "N/A",
        "identifier": "INV919",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 3,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "CHILD",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },

      {
        "id": "c6c8c72d-a379-4046-a5ec-2a1c2c50da06",
        "name": "Signs and Symptoms",
        "description": "Signs and Symptoms",
        "blockId": "46d17f18c-e4e4-4cbb-815e-ec46cfab2c71",
        "legacyVariableName": "N/A",
        "identifier": "56831-1",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 4,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "PRIMARY/PARENT",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "1d05f57e-830e-433b-9448-e3535a39cdd9",
        "name": "Signs and Symptoms Indicator",
        "description": "Signs and Symptoms Indicator",
        "blockId": "46d17f18c-e4e4-4cbb-815e-ec46cfab2c71",
        "legacyVariableName": "N/A",
        "identifier": "INV919",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 4,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "CHILD",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },



      {
        "id": "c6c8c72d-a379-4046-a5ec-2a1c2c50da06",
        "name": "Signs and Symptoms",
        "description": "Signs and Symptoms",
        "blockId": "46d17f18c-e4e4-4cbb-815e-ec46cfab2c71",
        "legacyVariableName": "N/A",
        "identifier": "56831-1",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 5,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "PRIMARY/PARENT",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "1d05f57e-830e-433b-9448-e3535a39cdd9",
        "name": "Signs and Symptoms Indicator",
        "description": "Signs and Symptoms Indicator",
        "blockId": "46d17f18c-e4e4-4cbb-815e-ec46cfab2c71",
        "legacyVariableName": "N/A",
        "identifier": "INV919",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 5,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "CHILD",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },



      {
        "id": "6d17f18c-e4e4-4cbb-815e-ec46cfab2c71",
        "name": null,
        "description": "END: Signs and Symptoms Repeating Group",
        "legacyVariableName": null,
        "identifier": null,
        "codeSystem": null,
        "dataType": "None",
        "priority": 0,
        "repetitions": 0,
        "relatedElementId": null,
        "mappings": []
      },
      


      {
        "id": "fc005bc2-cf58-4469-8819-1e2a6de0201a",
        "name": "Parotitis Laterality",
        "description": "Parotitis Laterality",
        "legacyVariableName": "INV301",
        "identifier": "INV301",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "336b19a6-e292-4260-a20c-864ca588e12f",
        "name": "Salivary Gland Swelling Onset Date",
        "description": "Salivary Gland Swelling Onset Date",
        "legacyVariableName": "INV288",
        "identifier": "85931-4",
        "codeSystem": "LN",
        "dataType": "Date",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "DT",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "2f8ef5c1-386a-4620-a03b-09a5c4af3fa3",
        "name": "Salivary Gland Swelling Duration in Days",
        "description": "Salivary Gland Swelling Duration in Days",
        "legacyVariableName": "INV303",
        "identifier": "85929-8",
        "codeSystem": "LN",
        "dataType": "Numeric",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "SN",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "bb878d14-7463-4a60-a8e9-3756bb31ff64",
        "name": "Highest Measured Temperature",
        "description": "Highest Measured Temperature",
        "legacyVariableName": "INV202",
        "identifier": "81265-1",
        "codeSystem": "LN",
        "dataType": "Numeric",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "SN",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "7e659b65-89f8-4a8a-a549-9b962b808a3f",
        "name": "Temperature Units",
        "description": "Temperature Units",
        "legacyVariableName": "INV2003",
        "identifier": "N/A: OBX-6 for 81265-1",
        "codeSystem": "N/A",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": "bb878d14-7463-4a60-a8e9-3756bb31ff64",
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 6,
            "componentPosition": -1,
            "dataType": "CE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "f6f40859-f240-4ec6-b50f-9c50a8094c3e",
        "name": "Date of Fever Onset",
        "description": "Date of Fever Onset",
        "legacyVariableName": "INV203",
        "identifier": "81266-9",
        "codeSystem": "LN",
        "dataType": "Date",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "DT",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },




      {
        "id": "57e614b3-e8bd-4d79-98a6-746bb2a85473",
        "description": "Complications Repeating Group",
        "dataType": "None",
        "repetitions": 100,
        "mappings": []
      },
      {
        "id": "471b3da9-662b-4add-b14a-6fb6f8a1187f",
        "name": "Type of Complications",
        "description": "Type of Complications",
        "blockId": "57e614b3-e8bd-4d79-98a6-746bb2a85473",
        "legacyVariableName": "N/A",
        "identifier": "67187-5",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "PRIMARY/PARENT",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "4e44e633-e667-4e5e-8822-2615f9691a2a",
        "name": "Type of Complications Indicator",
        "description": "Type of Complications Indicator",
        "blockId": "57e614b3-e8bd-4d79-98a6-746bb2a85473",
        "legacyVariableName": "N/A",
        "identifier": "INV920",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "CHILD",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },

      {
        "id": "471b3da9-662b-4add-b14a-6fb6f8a1187f",
        "name": "Type of Complications",
        "description": "Type of Complications",
        "blockId": "57e614b3-e8bd-4d79-98a6-746bb2a85473",
        "legacyVariableName": "N/A",
        "identifier": "67187-5",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 2,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "PRIMARY/PARENT",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "4e44e633-e667-4e5e-8822-2615f9691a2a",
        "name": "Type of Complications Indicator",
        "description": "Type of Complications Indicator",
        "blockId": "57e614b3-e8bd-4d79-98a6-746bb2a85473",
        "legacyVariableName": "N/A",
        "identifier": "INV920",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 2,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "CHILD",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },

      {
        "id": "471b3da9-662b-4add-b14a-6fb6f8a1187f",
        "name": "Type of Complications",
        "description": "Type of Complications",
        "blockId": "57e614b3-e8bd-4d79-98a6-746bb2a85473",
        "legacyVariableName": "N/A",
        "identifier": "67187-5",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 3,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "PRIMARY/PARENT",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "4e44e633-e667-4e5e-8822-2615f9691a2a",
        "name": "Type of Complications Indicator",
        "description": "Type of Complications Indicator",
        "blockId": "57e614b3-e8bd-4d79-98a6-746bb2a85473",
        "legacyVariableName": "N/A",
        "identifier": "INV920",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 3,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "CHILD",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },

      {
        "id": "471b3da9-662b-4add-b14a-6fb6f8a1187f",
        "name": "Type of Complications",
        "description": "Type of Complications",
        "blockId": "57e614b3-e8bd-4d79-98a6-746bb2a85473",
        "legacyVariableName": "N/A",
        "identifier": "67187-5",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 4,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "PRIMARY/PARENT",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "4e44e633-e667-4e5e-8822-2615f9691a2a",
        "name": "Type of Complications Indicator",
        "description": "Type of Complications Indicator",
        "blockId": "57e614b3-e8bd-4d79-98a6-746bb2a85473",
        "legacyVariableName": "N/A",
        "identifier": "INV920",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 4,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "CHILD",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },


      {
        "id": "471b3da9-662b-4add-b14a-6fb6f8a1187f",
        "name": "Type of Complications",
        "description": "Type of Complications",
        "blockId": "57e614b3-e8bd-4d79-98a6-746bb2a85473",
        "legacyVariableName": "N/A",
        "identifier": "67187-5",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 5,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "PRIMARY/PARENT",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "4e44e633-e667-4e5e-8822-2615f9691a2a",
        "name": "Type of Complications Indicator",
        "description": "Type of Complications Indicator",
        "blockId": "57e614b3-e8bd-4d79-98a6-746bb2a85473",
        "legacyVariableName": "N/A",
        "identifier": "INV920",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 5,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "CHILD",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },






      {
        "id": "58e614b3-e8bd-4d79-98a6-746bb2a85473",
        "name": null,
        "description": "END: Complications Repeating Group",
        "legacyVariableName": null,
        "identifier": null,
        "codeSystem": null,
        "dataType": "None",
        "priority": 0,
        "repetitions": 0,
        "relatedElementId": null,
        "mappings": []
      },
      {
        "id": "66ffc9f3-75bd-4c32-8f18-7d9627c728da",
        "name": null,
        "description": "Complications",
        "legacyVariableName": null,
        "identifier": null,
        "codeSystem": null,
        "dataType": "None",
        "priority": 0,
        "repetitions": 0,
        "relatedElementId": null,
        "mappings": []
      },
      {
        "id": "45310bbd-4cc9-42b1-812f-a3b641cf6ddc",
        "name": "Type of Deafness",
        "description": "Type of Deafness",
        "legacyVariableName": "INV307",
        "identifier": "INV307",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "58b3a974-77d2-4119-bcf4-c3e55a25abec",
        "name": null,
        "description": "Epidemiological Questions",
        "legacyVariableName": null,
        "identifier": null,
        "codeSystem": null,
        "dataType": "None",
        "priority": 0,
        "repetitions": 0,
        "relatedElementId": null,
        "mappings": []
      },
      {
        "id": "989c65b2-7416-4c31-8461-3ef1d8a22834",
        "name": "Length of Time in the US",
        "description": "Length of Time in the US",
        "legacyVariableName": "DEM225",
        "identifier": "DEM225",
        "codeSystem": "PHINQUESTION",
        "dataType": "Numeric",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "SN",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "164e7aa4-31c7-4260-a62f-ca14c77c0f9b",
        "name": "Length of Time in the US Units",
        "description": "Length of Time in the US Units",
        "legacyVariableName": "DEM226",
        "identifier": "N/A: OBX-6 for DEM225",
        "codeSystem": "N/A",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": "989c65b2-7416-4c31-8461-3ef1d8a22834",
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 6,
            "componentPosition": -1,
            "dataType": "CE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "caafaf81-bc39-49c8-803c-0d99452bdfbc",
        "name": "Import Status",
        "description": "Import Status",
        "legacyVariableName": "INV293",
        "identifier": "INV293",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "84635bf8-19c6-43a4-a4be-eea3837200b6",
        "name": "International Destination(s) of Recent Travel",
        "description": "International Destination(s) of Recent Travel",
        "legacyVariableName": "TRAVEL05",
        "identifier": "82764-2",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 2147483647,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..*]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "566f3665-f02d-4856-96f1-acf44ad58b04",
        "name": "Date of Return from Travel",
        "description": "Date of Return from Travel",
        "legacyVariableName": "TRAVEL08",
        "identifier": "TRAVEL08",
        "codeSystem": "PHINQUESTION",
        "dataType": "Date",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "DT",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "257d6a57-2c9f-429a-aa29-39ac52519f78",
        "name": "Patient Address City",
        "description": "Patient Address City",
        "legacyVariableName": "DEM161",
        "identifier": "N/A: PID -11.3",
        "codeSystem": "N/A",
        "dataType": "Text",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "PID",
            "fieldPosition": 11,
            "componentPosition": 3,
            "dataType": "ST",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "87627d8f-4f2d-492e-814d-8eaa0878f293",
        "name": "Case Investigation Status Code",
        "description": "Case Investigation Status Code",
        "legacyVariableName": "INV109",
        "identifier": "INV109",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "b6ec50f7-5b6d-47d9-824e-48efd6fc8cc4",
        "name": "Detection Method",
        "description": "Detection Method",
        "legacyVariableName": "INV159",
        "identifier": "INV159",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "4f13407f-ea42-4c16-92e9-87f8636b49a3",
        "name": "Transmission Setting",
        "description": "Transmission Setting",
        "legacyVariableName": "INV224",
        "identifier": "81267-7",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "c07c73eb-8946-4876-a11e-a17ac4580ab3",
        "name": "Age and Setting Verified",
        "description": "Age and Setting Verified",
        "legacyVariableName": "INV216",
        "identifier": "85700-3",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "a54581e3-f805-4667-944e-c272c2937961",
        "name": "Epi-Linked",
        "description": "Epi-Linked",
        "legacyVariableName": "INV217",
        "identifier": "INV217",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "48281e1b-4800-4c2d-9bee-1a5d40641189",
        "name": null,
        "description": "Industry and Occupation Repeating Group",
        "legacyVariableName": null,
        "identifier": null,
        "codeSystem": null,
        "dataType": "None",
        "priority": 0,
        "repetitions": 0,
        "relatedElementId": null,
        "mappings": []
      },
      {
        "id": "e83000bf-fdab-4894-b91e-e181571320e9",
        "name": "Current Occupation",
        "description": "Current Occupation",
        "legacyVariableName": "85658-3",
        "identifier": "85658-3",
        "codeSystem": "LN",
        "dataType": "Text",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "ST",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "96c0e36d-dfcd-4ae6-a14b-5531cc67cd13",
        "name": "Current Occupation Standardized",
        "description": "Current Occupation Standardized",
        "legacyVariableName": "85659-1",
        "identifier": "85659-1",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "ce18c48f-bc47-4952-84af-47b6a3b7c80f",
        "name": "Current Industry",
        "description": "Current Industry",
        "legacyVariableName": "85078-4",
        "identifier": "85078-4",
        "codeSystem": "LN",
        "dataType": "Text",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "ST",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "c69a07de-16bb-45f7-b77c-168ca9a023f8",
        "name": "Current Industry Standardized",
        "description": "Current Industry Standardized",
        "legacyVariableName": "85657-5",
        "identifier": "85657-5",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "48281e1b-4800-4c2d-9bee-1a5d40641189",
        "name": null,
        "description": "END: Industry and Occupation Repeating Group",
        "legacyVariableName": null,
        "identifier": null,
        "codeSystem": null,
        "dataType": "None",
        "priority": 0,
        "repetitions": 0,
        "relatedElementId": null,
        "mappings": []
      },
      {
        "id": "dd23ec58-ab86-4d87-8fac-49f61b4e7a23",
        "name": null,
        "description": "Laboratory Epidemiology Questions",
        "legacyVariableName": null,
        "identifier": null,
        "codeSystem": null,
        "dataType": "None",
        "priority": 0,
        "repetitions": 0,
        "relatedElementId": null,
        "mappings": []
      },
      {
        "id": "067a457d-bb29-4a13-a88e-ca9d308f1ff4",
        "name": "Laboratory Testing Performed",
        "description": "Laboratory Testing Performed",
        "legacyVariableName": "INV740",
        "identifier": "LAB630",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "1edb75d6-e380-4e97-b1b1-d2cd2d2626fc",
        "name": "Laboratory Confirmed",
        "description": "Laboratory Confirmed",
        "legacyVariableName": "INV164",
        "identifier": "INV164",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "0a4be3a9-dc42-4e36-90d5-784f211b01c3",
        "name": "Specimen Sent to CDC",
        "description": "Specimen Sent to CDC",
        "legacyVariableName": "LAB515",
        "identifier": "82314-6",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "c585d845-e715-4e9f-a465-8e79615bd054",
        "name": null,
        "description": "VPD Linkage",
        "legacyVariableName": null,
        "identifier": null,
        "codeSystem": null,
        "dataType": "None",
        "priority": 0,
        "repetitions": 0,
        "relatedElementId": null,
        "mappings": []
      },
      {
        "id": "1eb2afb6-0af1-4336-875c-f5d2c4d72234",
        "name": "VPD Lab Message Reference Laboratory",
        "description": "VPD Lab Message Reference Laboratory",
        "legacyVariableName": "LAB143",
        "identifier": "LAB143",
        "codeSystem": "PHINQUESTION",
        "dataType": "Text",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "ST",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "36d36831-fdfa-4847-9f68-152bfb49adce",
        "name": "VPD Lab Message Patient Identifier",
        "description": "VPD Lab Message Patient Identifier",
        "legacyVariableName": "LAB598",
        "identifier": "LAB598",
        "codeSystem": "PHINQUESTION",
        "dataType": "Text",
        "priority": "P",
        "repetitions": 2147483647,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "ST",
            "usage": "RE",
            "cardinality": "[0..*]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "5bb377ef-522e-48b0-98ff-6239a4e455cf",
        "name": "VPD Lab Message Specimen Identifier",
        "description": "VPD Lab Message Specimen Identifier",
        "legacyVariableName": "LAB125",
        "identifier": "LAB125",
        "codeSystem": "PHINQUESTION",
        "dataType": "Text",
        "priority": "P",
        "repetitions": 2147483647,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "ST",
            "usage": "RE",
            "cardinality": "[0..*]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },




      {
        "id": "cec88d73-e352-45b9-a6a1-1fc400cf6387",
        "description": "Epidemiology Laboratory Repeating Group Section",
        "dataType": "None",
        "priority": 0,
        "repetitions": 100,
        "mappings": []
      },
      {
        "id": "46235f48-c656-4118-9589-cfbbc8b4d65b",
        "name": "Test Type",
        "description": "Test Type",
        "blockId": "cec88d73-e352-45b9-a6a1-1fc400cf6387",
        "legacyVariableName": "INV290",
        "identifier": "INV290",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "ce95e33c-b803-4428-bd19-99e58bde8945",
        "name": "Test Result",
        "description": "Test Result",
        "blockId": "cec88d73-e352-45b9-a6a1-1fc400cf6387",
        "legacyVariableName": "INV291",
        "identifier": "INV291",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "048e8187-1aa0-43cc-9629-fc6206378472",
        "name": "Test Result Quantitative",
        "description": "Test Result Quantitative",
        "blockId": "cec88d73-e352-45b9-a6a1-1fc400cf6387",
        "legacyVariableName": "LAB628",
        "identifier": "LAB628",
        "codeSystem": "PHINQUESTION",
        "dataType": "Text",
        "priority": "P",
        "repetitions": 1,
        "instance": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "ST",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "95ef7134-f721-4a42-ad6a-455e35c53195",
        "name": "Result Units",
        "description": "Result Units",
        "blockId": "cec88d73-e352-45b9-a6a1-1fc400cf6387",
        "legacyVariableName": "LAB115",
        "identifier": "LAB115",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "234d51de-ec96-4843-b75d-7442219978c1",
        "name": "Test Result Comments",
        "description": "Test Result Comments",
        "blockId": "cec88d73-e352-45b9-a6a1-1fc400cf6387",
        "legacyVariableName": "N/A",
        "identifier": "8251-1",
        "codeSystem": "LN",
        "dataType": "LongText",
        "priority": "O",
        "repetitions": 1,
        "instance": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "TX",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "926fb037-04c3-4dbf-8e5d-da5adaba04ba",
        "name": "Specimen Source",
        "description": "Specimen Source",
        "blockId": "cec88d73-e352-45b9-a6a1-1fc400cf6387",
        "legacyVariableName": "N/A",
        "identifier": "31208-2",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "c94d7a1b-b4e8-4487-b8aa-fad74c5006f3",
        "name": "Specimen Collection Date/Time",
        "description": "Specimen Collection Date/Time",
        "blockId": "cec88d73-e352-45b9-a6a1-1fc400cf6387",
        "legacyVariableName": "LAB163",
        "identifier": "68963-8",
        "codeSystem": "LN",
        "dataType": "DateTime",
        "priority": "P",
        "repetitions": 1,
        "instance": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "TS",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "2aae324d-48b1-4443-9a9c-ef1eb04ecb34",
        "name": "Date Specimen Sent to CDC",
        "description": "Date Specimen Sent to CDC",
        "blockId": "cec88d73-e352-45b9-a6a1-1fc400cf6387",
        "legacyVariableName": "LAB516",
        "identifier": "85930-6",
        "codeSystem": "LN",
        "dataType": "DateTime",
        "priority": "P",
        "repetitions": 1,
        "instance": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "TS",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "b08aaccb-7344-4897-829e-6d303c96abea",
        "name": "Performing Laboratory Type",
        "description": "Performing Laboratory Type",
        "blockId": "cec88d73-e352-45b9-a6a1-1fc400cf6387",
        "legacyVariableName": "LAB606",
        "identifier": "82771-7",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "O",
        "repetitions": 1,
        "instance": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },


      {
        "id": "46235f48-c656-4118-9589-cfbbc8b4d65b",
        "name": "Test Type",
        "description": "Test Type",
        "blockId": "cec88d73-e352-45b9-a6a1-1fc400cf6387",
        "legacyVariableName": "INV290",
        "identifier": "INV290",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 2,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "ce95e33c-b803-4428-bd19-99e58bde8945",
        "name": "Test Result",
        "description": "Test Result",
        "blockId": "cec88d73-e352-45b9-a6a1-1fc400cf6387",
        "legacyVariableName": "INV291",
        "identifier": "INV291",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 2,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "048e8187-1aa0-43cc-9629-fc6206378472",
        "name": "Test Result Quantitative",
        "description": "Test Result Quantitative",
        "blockId": "cec88d73-e352-45b9-a6a1-1fc400cf6387",
        "legacyVariableName": "LAB628",
        "identifier": "LAB628",
        "codeSystem": "PHINQUESTION",
        "dataType": "Text",
        "priority": "P",
        "repetitions": 1,
        "instance": 2,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "ST",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "95ef7134-f721-4a42-ad6a-455e35c53195",
        "name": "Result Units",
        "description": "Result Units",
        "blockId": "cec88d73-e352-45b9-a6a1-1fc400cf6387",
        "legacyVariableName": "LAB115",
        "identifier": "LAB115",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 2,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "234d51de-ec96-4843-b75d-7442219978c1",
        "name": "Test Result Comments",
        "description": "Test Result Comments",
        "blockId": "cec88d73-e352-45b9-a6a1-1fc400cf6387",
        "legacyVariableName": "N/A",
        "identifier": "8251-1",
        "codeSystem": "LN",
        "dataType": "LongText",
        "priority": "O",
        "repetitions": 1,
        "instance": 2,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "TX",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "926fb037-04c3-4dbf-8e5d-da5adaba04ba",
        "name": "Specimen Source",
        "description": "Specimen Source",
        "blockId": "cec88d73-e352-45b9-a6a1-1fc400cf6387",
        "legacyVariableName": "N/A",
        "identifier": "31208-2",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 2,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "c94d7a1b-b4e8-4487-b8aa-fad74c5006f3",
        "name": "Specimen Collection Date/Time",
        "description": "Specimen Collection Date/Time",
        "blockId": "cec88d73-e352-45b9-a6a1-1fc400cf6387",
        "legacyVariableName": "LAB163",
        "identifier": "68963-8",
        "codeSystem": "LN",
        "dataType": "DateTime",
        "priority": "P",
        "repetitions": 1,
        "instance": 2,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "TS",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "2aae324d-48b1-4443-9a9c-ef1eb04ecb34",
        "name": "Date Specimen Sent to CDC",
        "description": "Date Specimen Sent to CDC",
        "blockId": "cec88d73-e352-45b9-a6a1-1fc400cf6387",
        "legacyVariableName": "LAB516",
        "identifier": "85930-6",
        "codeSystem": "LN",
        "dataType": "DateTime",
        "priority": "P",
        "repetitions": 1,
        "instance": 2,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "TS",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "b08aaccb-7344-4897-829e-6d303c96abea",
        "name": "Performing Laboratory Type",
        "description": "Performing Laboratory Type",
        "blockId": "cec88d73-e352-45b9-a6a1-1fc400cf6387",
        "legacyVariableName": "LAB606",
        "identifier": "82771-7",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "O",
        "repetitions": 1,
        "instance": 2,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },














      {
        "id": "cec88d73-e352-45b9-a6a1-1fc400cf6387",
        "name": null,
        "description": "END: Epidemiology Laboratory Repeating Group Section",
        "legacyVariableName": null,
        "identifier": null,
        "codeSystem": null,
        "dataType": "None",
        "priority": 0,
        "repetitions": 0,
        "relatedElementId": null,
        "mappings": []
      },
      {
        "id": "2ab1e7bd-40f8-403e-8e9f-4373e53fd901",
        "name": null,
        "description": "Lab Ending Header Row",
        "legacyVariableName": null,
        "identifier": null,
        "codeSystem": null,
        "dataType": "None",
        "priority": 0,
        "repetitions": 0,
        "relatedElementId": null,
        "mappings": []
      },
      {
        "id": "6bf4972f-1da2-4da8-ab41-76b9f317f242",
        "name": null,
        "description": "Epidemiology Questions About Vaccine History",
        "legacyVariableName": null,
        "identifier": null,
        "codeSystem": null,
        "dataType": "None",
        "priority": 0,
        "repetitions": 0,
        "relatedElementId": null,
        "mappings": []
      },
      {
        "id": "ba205776-af41-43a8-bf9d-052c5710e802",
        "name": "Did the Subject Ever Receive a Vaccine Against This Disease",
        "description": "Did the Subject Ever Receive a Vaccine Against This Disease",
        "legacyVariableName": "VAC126",
        "identifier": "VAC126",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "1b520497-d45b-404e-9815-6e78143ff210",
        "name": "Number of Doses Received On or After 1st Birthday",
        "description": "Number of Doses Received On or After 1st Birthday",
        "legacyVariableName": "VAC129",
        "identifier": "VAC129",
        "codeSystem": "PHINQUESTION",
        "dataType": "Numeric",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "SN",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "0f014118-c44f-409d-aea7-17766250c272",
        "name": "Date of Last Dose Prior to Illness Onset",
        "description": "Date of Last Dose Prior to Illness Onset",
        "legacyVariableName": "VAC142",
        "identifier": "VAC142",
        "codeSystem": "PHINQUESTION",
        "dataType": "Date",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "DT",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "afa1f601-a69e-4031-89e7-46283c2681b8",
        "name": "Vaccination Doses Prior to Onset",
        "description": "Vaccination Doses Prior to Onset",
        "legacyVariableName": "VAC140",
        "identifier": "82745-1",
        "codeSystem": "LN",
        "dataType": "Numeric",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "SN",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "4e95d4e1-58bc-417e-9e3a-d175eb1f77b7",
        "name": "Vaccinated per ACIP Recommendations",
        "description": "Vaccinated per ACIP Recommendations",
        "legacyVariableName": "VAC148",
        "identifier": "VAC148",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "aab5a3ac-f8e4-4582-819e-9cf1f1a035b5",
        "name": "Reason Not Vaccinated Per ACIP Recommendations",
        "description": "Reason Not Vaccinated Per ACIP Recommendations",
        "legacyVariableName": "VAC149",
        "identifier": "VAC149",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "8876e1f8-7e38-44f6-ad86-43ebd9f0fa93",
        "name": "Vaccine History Comments",
        "description": "Vaccine History Comments",
        "legacyVariableName": "VAC133",
        "identifier": "VAC133",
        "codeSystem": "PHINQUESTION",
        "dataType": "LongText",
        "priority": "P",
        "repetitions": 2147483647,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "TX",
            "usage": "RE",
            "cardinality": "[0..*]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },











      {
        "id": "8d41d84d-2fde-4ca2-a69c-6b3dd0eb9f65",
        "description": "Vaccination History Repeating Group Section to specify the detailed vaccine record information - Repeats for each vaccine dose.",
        "dataType": "None",
        "priority": 0,
        "repetitions": 100,
        "mappings": []
      },

      {
        "id": "8e0b0b63-8c7e-437c-9657-4745bf938c0e",
        "name": "Vaccine Type",
        "description": "Vaccine Type",
        "blockId": "8d41d84d-2fde-4ca2-a69c-6b3dd0eb9f65",
        "legacyVariableName": "VAC101",
        "identifier": "30956-7",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "7beb8dd6-a256-4c4b-9037-8915682228a9",
        "name": "Vaccine Administered Date",
        "description": "Vaccine Administered Date",
        "blockId": "8d41d84d-2fde-4ca2-a69c-6b3dd0eb9f65",
        "legacyVariableName": "VAC103",
        "identifier": "30952-6",
        "codeSystem": "LN",
        "dataType": "Date",
        "priority": "P",
        "repetitions": 1,
        "instance": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "DT",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "CHILD",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "c7dab0cd-9d38-4636-8e5e-d8ddd3a5fff9",
        "name": "Vaccine Dose Number",
        "description": "Vaccine Dose Number",
        "blockId": "8d41d84d-2fde-4ca2-a69c-6b3dd0eb9f65",
        "legacyVariableName": "VAC120",
        "identifier": "30973-2",
        "codeSystem": "LN",
        "dataType": "Numeric",
        "priority": "P",
        "repetitions": 1,
        "instance": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "SN",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "CHILD",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "3748e3c5-ac40-4e3d-b8a9-fc5eb7643f0a",
        "name": "Vaccine Manufacturer",
        "description": "Vaccine Manufacturer",
        "blockId": "8d41d84d-2fde-4ca2-a69c-6b3dd0eb9f65",
        "legacyVariableName": "VAC107",
        "identifier": "30957-5",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "CHILD",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "5a860f85-19da-4324-8052-78f3dbf776ce",
        "name": "Vaccine Lot Number",
        "description": "Vaccine Lot Number",
        "blockId": "8d41d84d-2fde-4ca2-a69c-6b3dd0eb9f65",
        "legacyVariableName": "VAC108",
        "identifier": "30959-1",
        "codeSystem": "LN",
        "dataType": "Text",
        "priority": "P",
        "repetitions": 1,
        "instance": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "ST",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "8b6091eb-79b2-46ac-8748-8ed65838fa13",
        "name": "Vaccine Expiration Date",
        "description": "Vaccine Expiration Date",
        "blockId": "8d41d84d-2fde-4ca2-a69c-6b3dd0eb9f65",
        "legacyVariableName": "VAC109",
        "identifier": "VAC109",
        "codeSystem": "PHINQUESTION",
        "dataType": "Date",
        "priority": "P",
        "repetitions": 1,
        "instance": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "DT",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "CHILD",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "0815e827-e12e-45f8-914a-7464da9ae765",
        "name": "National Drug Code (NDC)",
        "description": "National Drug Code (NDC)",
        "blockId": "8d41d84d-2fde-4ca2-a69c-6b3dd0eb9f65",
        "legacyVariableName": "VAC153",
        "identifier": "VAC153",
        "codeSystem": "PHINQUESTION",
        "dataType": "Text",
        "priority": "P",
        "repetitions": 1,
        "instance": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "ST",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "8fc202b7-649d-4376-b4d2-42458cd3c713",
        "name": "Vaccination Record Identifier",
        "description": "Vaccination Record Identifier",
        "blockId": "8d41d84d-2fde-4ca2-a69c-6b3dd0eb9f65",
        "legacyVariableName": "VAC102",
        "identifier": "VAC102",
        "codeSystem": "PHINQUESTION",
        "dataType": "Text",
        "priority": "O",
        "repetitions": 1,
        "instance": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "ST",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "CHILD",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "ec5e641e-c43d-45b8-8c75-723cef6758f5",
        "name": "Vaccine Event Information Source",
        "description": "Vaccine Event Information Source",
        "blockId": "8d41d84d-2fde-4ca2-a69c-6b3dd0eb9f65",
        "legacyVariableName": "VAC147",
        "identifier": "VAC147",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "O",
        "repetitions": 1,
        "instance": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "CHILD",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },












      {
        "id": "8e0b0b63-8c7e-437c-9657-4745bf938c0e",
        "name": "Vaccine Type",
        "description": "Vaccine Type",
        "blockId": "8d41d84d-2fde-4ca2-a69c-6b3dd0eb9f65",
        "legacyVariableName": "VAC101",
        "identifier": "30956-7",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 2,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "7beb8dd6-a256-4c4b-9037-8915682228a9",
        "name": "Vaccine Administered Date",
        "description": "Vaccine Administered Date",
        "blockId": "8d41d84d-2fde-4ca2-a69c-6b3dd0eb9f65",
        "legacyVariableName": "VAC103",
        "identifier": "30952-6",
        "codeSystem": "LN",
        "dataType": "Date",
        "priority": "P",
        "repetitions": 1,
        "instance": 2,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "DT",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "CHILD",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "c7dab0cd-9d38-4636-8e5e-d8ddd3a5fff9",
        "name": "Vaccine Dose Number",
        "description": "Vaccine Dose Number",
        "blockId": "8d41d84d-2fde-4ca2-a69c-6b3dd0eb9f65",
        "legacyVariableName": "VAC120",
        "identifier": "30973-2",
        "codeSystem": "LN",
        "dataType": "Numeric",
        "priority": "P",
        "repetitions": 1,
        "instance": 2,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "SN",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "CHILD",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "3748e3c5-ac40-4e3d-b8a9-fc5eb7643f0a",
        "name": "Vaccine Manufacturer",
        "description": "Vaccine Manufacturer",
        "blockId": "8d41d84d-2fde-4ca2-a69c-6b3dd0eb9f65",
        "legacyVariableName": "VAC107",
        "identifier": "30957-5",
        "codeSystem": "LN",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 1,
        "instance": 2,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "CHILD",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "5a860f85-19da-4324-8052-78f3dbf776ce",
        "name": "Vaccine Lot Number",
        "description": "Vaccine Lot Number",
        "blockId": "8d41d84d-2fde-4ca2-a69c-6b3dd0eb9f65",
        "legacyVariableName": "VAC108",
        "identifier": "30959-1",
        "codeSystem": "LN",
        "dataType": "Text",
        "priority": "P",
        "repetitions": 1,
        "instance": 2,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "ST",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "8b6091eb-79b2-46ac-8748-8ed65838fa13",
        "name": "Vaccine Expiration Date",
        "description": "Vaccine Expiration Date",
        "blockId": "8d41d84d-2fde-4ca2-a69c-6b3dd0eb9f65",
        "legacyVariableName": "VAC109",
        "identifier": "VAC109",
        "codeSystem": "PHINQUESTION",
        "dataType": "Date",
        "priority": "P",
        "repetitions": 1,
        "instance": 2,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "DT",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "CHILD",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "0815e827-e12e-45f8-914a-7464da9ae765",
        "name": "National Drug Code (NDC)",
        "description": "National Drug Code (NDC)",
        "blockId": "8d41d84d-2fde-4ca2-a69c-6b3dd0eb9f65",
        "legacyVariableName": "VAC153",
        "identifier": "VAC153",
        "codeSystem": "PHINQUESTION",
        "dataType": "Text",
        "priority": "P",
        "repetitions": 1,
        "instance": 2,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "ST",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "YES",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "8fc202b7-649d-4376-b4d2-42458cd3c713",
        "name": "Vaccination Record Identifier",
        "description": "Vaccination Record Identifier",
        "blockId": "8d41d84d-2fde-4ca2-a69c-6b3dd0eb9f65",
        "legacyVariableName": "VAC102",
        "identifier": "VAC102",
        "codeSystem": "PHINQUESTION",
        "dataType": "Text",
        "priority": "O",
        "repetitions": 1,
        "instance": 2,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "ST",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "CHILD",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "ec5e641e-c43d-45b8-8c75-723cef6758f5",
        "name": "Vaccine Event Information Source",
        "description": "Vaccine Event Information Source",
        "blockId": "8d41d84d-2fde-4ca2-a69c-6b3dd0eb9f65",
        "legacyVariableName": "VAC147",
        "identifier": "VAC147",
        "codeSystem": "PHINQUESTION",
        "dataType": "Coded",
        "priority": "O",
        "repetitions": 1,
        "instance": 2,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "OBX",
            "fieldPosition": 5,
            "componentPosition": -1,
            "dataType": "CWE",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "CHILD",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },











      {
        "id": "8d41d84d-2fde-4ca2-a69c-6b3dd0eb9f65",
        "name": null,
        "description": "END: [Optional/Preferred] Vaccination History Repeating Group Section",
        "legacyVariableName": null,
        "identifier": null,
        "codeSystem": null,
        "dataType": "None",
        "priority": 0,
        "repetitions": 0,
        "relatedElementId": null,
        "mappings": []
      },
      {
        "id": "88a79779-b98e-45db-89b2-5646270fdec0",
        "name": null,
        "description": "END: EPIDEMIOLOGIC INFORMATION SECTION",
        "legacyVariableName": null,
        "identifier": null,
        "codeSystem": null,
        "dataType": "None",
        "priority": 0,
        "repetitions": 0,
        "relatedElementId": null,
        "mappings": []
      },
      {
        "id": "88a79779-b98e-45db-89b2-5646270fdec0",
        "name": null,
        "description": "END: EPIDEMIOLOGIC INFORMATION SECTION",
        "legacyVariableName": null,
        "identifier": null,
        "codeSystem": null,
        "dataType": "None",
        "priority": 0,
        "repetitions": 0,
        "relatedElementId": null,
        "mappings": []
      }
    ]
    )
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
