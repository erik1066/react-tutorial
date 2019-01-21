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
        "id": "d49a2f0c-a725-4872-8a50-4698a7f96cd4",
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
        "id": "eca939d2-ff3c-4d8d-933a-6cf3e4d227d9",
        "name": null,
        "description": "START: EPIDEMIOLOGIC INFORMATION SECTION: The observations in this section will be mapped under an \"Epidemiologic Information\" category OBR segment with an OBR-4 value of '68991-9^Epidemiologic Information^LN'",
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
        "id": "dc202063-873d-4b56-9281-284df7925d13",
        "name": null,
        "description": "START: Maternal Information Section",
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
        "id": "36896bb1-71c5-41e4-a7c0-79acac5726cc",
        "name": "Mother's State",
        "description": "Mother's State",
        "legacyVariableName": "MTH166",
        "identifier": "N/A: NK1-4.4",
        "codeSystem": "N/A",
        "dataType": "Text",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "NK1",
            "fieldPosition": 4,
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
        "id": "ded9e144-08a3-4025-ab28-e3979b5bdd4a",
        "name": "Mother's Country of Residence",
        "description": "Mother's Country of Residence",
        "legacyVariableName": "MTH167",
        "identifier": "N/A: NK1-4.6",
        "codeSystem": "N/A",
        "dataType": "Coded",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "NK1",
            "fieldPosition": 4,
            "componentPosition": 6,
            "dataType": "ID",
            "usage": "RE",
            "cardinality": "[0..1]",
            "repeatingGroupElement": "NO",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "c0fac402-2d15-46fe-baad-5deee488174c",
        "name": "Mother's County of Residence",
        "description": "Mother's County of Residence",
        "legacyVariableName": "MTH168",
        "identifier": "N/A: NK1-4.9",
        "codeSystem": "N/A",
        "dataType": "Coded",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "NK1",
            "fieldPosition": 4,
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
        "id": "894ddff0-7f16-4cd2-9f92-03538c96546b",
        "name": "Mother's Zip Code",
        "description": "Mother's Zip Code",
        "legacyVariableName": "MTH169",
        "identifier": "N/A: NK1-4.5",
        "codeSystem": "N/A",
        "dataType": "Text",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "NK1",
            "fieldPosition": 4,
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
        "id": "a2586d11-0d43-400e-b8a1-5147f45a1b3f",
        "name": "Mother's Birthdate",
        "description": "Mother's Birthdate",
        "legacyVariableName": "MTH153",
        "identifier": "N/A: NK1-16",
        "codeSystem": "N/A",
        "dataType": "DateTime",
        "priority": "P",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "NK1",
            "fieldPosition": 16,
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
        "id": "6e2d728e-3a6d-4b77-ba27-162a736436bd",
        "name": "Number of Previous Pregnancies",
        "description": "Number of Previous Pregnancies",
        "legacyVariableName": "",
        "identifier": "75201-4",
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
        "id": "8705a839-cba4-4b1d-86f4-2d2a8cc92f3c",
        "name": "Number of Total Live Births",
        "description": "Number of Total Live Births",
        "legacyVariableName": "",
        "identifier": "75202-2",
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
        "id": "1853bcde-a1f0-4d8a-8274-246bfec58adf",
        "name": "Last Menstrual Period",
        "description": "Last Menstrual Period",
        "legacyVariableName": "N/A",
        "identifier": "75203-0",
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
        "id": "5a42da8e-980c-4b8b-bcd6-0448c3576c43",
        "name": "Date of First Prenatal Visit for This Pregnancy",
        "description": "Date of First Prenatal Visit for This Pregnancy",
        "legacyVariableName": "",
        "identifier": "75200-6",
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
        "id": "ebe6718c-929a-432e-969c-bec4c42a8cda",
        "name": "Prenatal Visit Indicator",
        "description": "Prenatal Visit Indicator",
        "legacyVariableName": "N/A",
        "identifier": "75204-8",
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
        "id": "c488c9ad-5653-400b-bb42-d36003bec620",
        "name": "Trimester of First Prenatal Visit",
        "description": "Trimester of First Prenatal Visit",
        "legacyVariableName": "N/A",
        "identifier": "75163-6",
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
        "id": "859a71a4-2de0-4a0e-83ad-1e494303b7ab",
        "name": "Mother's Ethnicity",
        "description": "Mother's Ethnicity",
        "legacyVariableName": "MTH159",
        "identifier": "NA: NK1-28",
        "codeSystem": "N/A",
        "dataType": "Coded",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "NK1",
            "fieldPosition": 28,
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
        "id": "a04278e2-1060-40ed-b089-95b2ca595325",
        "name": "Mother's Race",
        "description": "Mother's Race",
        "legacyVariableName": "MTH157",
        "identifier": "NA: NK1-35",
        "codeSystem": "N/A",
        "dataType": "Coded",
        "priority": "P",
        "repetitions": 2147483647,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "NK1",
            "fieldPosition": 35,
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
        "id": "6f6924ac-8166-47a8-8e1e-574d146b9506",
        "name": "Mother's Marital Status",
        "description": "Mother's Marital Status",
        "legacyVariableName": "MTH165",
        "identifier": "N/A: NK1-14",
        "codeSystem": "N/A",
        "dataType": "Coded",
        "priority": "O",
        "repetitions": 1,
        "relatedElementId": null,
        "mappings": [
          {
            "obrParent": 1,
            "segmentType": "NK1",
            "fieldPosition": 14,
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
        "id": "8492edaf-706a-420c-af3e-e1764790c25d",
        "name": "Mother's HIV Status During Pregnancy",
        "description": "Mother's HIV Status During Pregnancy",
        "legacyVariableName": "STD106",
        "identifier": "75179-2",
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
        "id": "44285c0d-c337-482c-bb08-4870ebff9cf5",
        "name": "Mother's Clinical Stage of Syphilis During Pregnancy",
        "description": "Mother's Clinical Stage of Syphilis During Pregnancy",
        "legacyVariableName": "N/A",
        "identifier": "75180-0",
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
        "id": "61d3e177-c818-44dc-9320-3a6d9d4e1d78",
        "name": "Mother's Surveillance Stage of Syphilis During Pregnancy",
        "description": "Mother's Surveillance Stage of Syphilis During Pregnancy",
        "legacyVariableName": "N/A",
        "identifier": "75181-8",
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
        "id": "e4aac8ac-5638-4dc9-a083-b4a445474487",
        "name": "Date When Mother Received Her First Dose of Benzathine Penicillin",
        "description": "Date When Mother Received Her First Dose of Benzathine Penicillin",
        "legacyVariableName": "N/A",
        "identifier": "75182-6",
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
        "id": "d1037cc2-389f-4a56-9a2d-3045a3ec2cee",
        "name": "Trimester in Which Mother Received Her First Dose of Benzathine Penicillin",
        "description": "Trimester in Which Mother Received Her First Dose of Benzathine Penicillin",
        "legacyVariableName": "N/A",
        "identifier": "75183-4",
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
        "id": "5c7b8960-bc22-4e7a-8652-61e8b9c765f7",
        "name": "Mother's Treatment",
        "description": "Mother's Treatment",
        "legacyVariableName": "N/A",
        "identifier": "75184-2",
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
        "id": "f604010c-c9fe-40b4-8ca1-e441efbc6dbb",
        "name": "Appropriate Serologic Reponse",
        "description": "Appropriate Serologic Reponse",
        "legacyVariableName": "N/A",
        "identifier": "75185-9",
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
        "id": "dc202063-873d-4b56-9281-284df7925d13",
        "name": null,
        "description": "END: Maternal Information Section",
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
        "id": "e058f8e3-05d6-4649-b5d4-fefcd8376831",
        "name": null,
        "description": "START: Maternal Laboratory Interpretive Information",
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
        "id": "1932ada7-e8e6-4c9a-a085-dab90b2149c7",
        "name": "Non-treponemal Test or Treponemal Test at First Prenatal Visit",
        "description": "Non-treponemal Test or Treponemal Test at First Prenatal Visit",
        "legacyVariableName": "N/A",
        "identifier": "75164-4",
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
        "id": "8e7579c1-b8a9-4ee4-b7ac-2f9a823a6089",
        "name": "Non-treponemal Test or Treponemal Test at 28-32 Weeks Gestation",
        "description": "Non-treponemal Test or Treponemal Test at 28-32 Weeks Gestation",
        "legacyVariableName": "N/A",
        "identifier": "75165-1",
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
        "id": "f22f4f13-7086-43b1-b2de-65fb435fdb65",
        "name": "Non-treponemal Test or Treponemal Test at Delivery",
        "description": "Non-treponemal Test or Treponemal Test at Delivery",
        "legacyVariableName": "N/A",
        "identifier": "75166-9",
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
        "id": "4a79876d-b221-4c39-bfec-c59890289af9",
        "name": null,
        "description": "START: Epidemiologic Lab Interpretative questions repeating group (Mother and Infant)",
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
        "id": "993681c4-2e95-4c6a-a4e1-325082051d5d",
        "name": "Lab Test Performed Modifier",
        "description": "Lab Test Performed Modifier",
        "legacyVariableName": "",
        "identifier": "LAB588",
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
            "repeatingGroupElement": "PRIMARY/PARENT",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "46235f48-c656-4118-9589-cfbbc8b4d65b",
        "name": "Test Type",
        "description": "Test Type",
        "legacyVariableName": "INV290",
        "identifier": "INV290",
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
            "repeatingGroupElement": "PRIMARY/PARENT",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "ce95e33c-b803-4428-bd19-99e58bde8945",
        "name": "Test Result",
        "description": "Test Result",
        "legacyVariableName": "INV291",
        "identifier": "INV291",
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
            "repeatingGroupElement": "CHILD",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "d6a1d582-baf1-46b8-923f-d4b901012f17",
        "name": "Nontreponemal serologic syphilis test result",
        "description": "Nontreponemal serologic syphilis test result",
        "legacyVariableName": "STD123",
        "identifier": "STD123",
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
            "repeatingGroupElement": "CHILD",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "140693c4-ba0e-450e-a896-c524698bb98a",
        "name": "Date of lab result",
        "description": "Date of lab result",
        "legacyVariableName": "LAB167",
        "identifier": "82772-5",
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
            "repeatingGroupElement": "CHILD",
            "name": "hl7-v251-oru-r01"
          }
        ]
      },
      {
        "id": "aad6513a-5471-433b-a701-3c8857df4dfa",
        "name": null,
        "description": "START: Infant Information",
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
        "id": "c8eb6be2-7cba-4ccf-99f8-297e01a8bffa",
        "name": "Vital Status",
        "description": "Vital Status",
        "legacyVariableName": "N/A",
        "identifier": "75186-7",
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
        "id": "c043c3a2-57b9-4370-809e-672404244da8",
        "name": "Birth Weight",
        "description": "Birth Weight",
        "legacyVariableName": "DEM229",
        "identifier": "56056-5",
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
        "id": "5c697ed9-9095-4440-813a-19731932c9bb",
        "name": "Gestational Age",
        "description": "Gestational Age",
        "legacyVariableName": "DEM228",
        "identifier": "57714-8",
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
        "id": "6fb156c8-90be-4e72-ab85-83042a50d902",
        "name": "Clinical Signs of Congenital Syphilis",
        "description": "Clinical Signs of Congenital Syphilis",
        "legacyVariableName": "N/A",
        "identifier": "75193-3",
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
        "id": "c6e8e3eb-1f9c-4fa4-ac31-2ba6e5a89d04",
        "name": null,
        "description": "START: Other Infant Laboratory Interpretive Information",
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
        "id": "561b9398-db3e-447d-ba13-ace6098aa44a",
        "name": "Long Bone X-rays for Infant",
        "description": "Long Bone X-rays for Infant",
        "legacyVariableName": "N/A",
        "identifier": "75194-1",
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
        "id": "5021dd13-0ad4-4f40-96ea-b7d0833ac050",
        "name": "Darkfield Exam, DFA, or Special Stain Test Findings",
        "description": "Darkfield Exam, DFA, or Special Stain Test Findings",
        "legacyVariableName": "N/A",
        "identifier": "75192-5",
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
        "id": "e835d645-67f7-4c1a-9385-6050e260aeb8",
        "name": "CSF WBC Count",
        "description": "CSF WBC Count",
        "legacyVariableName": "N/A",
        "identifier": "LP48341-9",
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
        "id": "8607ba71-f9de-421f-bf45-ae252e7223d3",
        "name": "CSF Protein Level",
        "description": "CSF Protein Level",
        "legacyVariableName": "N/A",
        "identifier": "LP69956-8",
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
        "id": "518b0d33-a307-4ecf-af73-79a2b44f4096",
        "name": "CSF VDRL Test Finding",
        "description": "CSF VDRL Test Finding",
        "legacyVariableName": "N/A",
        "identifier": "75195-8",
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
        "id": "580496a3-d266-4450-b573-c97a5464f11a",
        "name": "Infant Treated",
        "description": "Infant Treated",
        "legacyVariableName": "N/A",
        "identifier": "75207-1",
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
        "id": "53be6949-addf-4073-b6b2-e15acfe7f50a",
        "name": "Stillbirth Indicator",
        "description": "Stillbirth Indicator",
        "legacyVariableName": "",
        "identifier": "75207-1",
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
      }
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
