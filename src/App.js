import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import MessageMappingGuide from './MessageMappingGuide';
import HL7Parser from './HL7Parser';

class App extends Component {

  state = {
    messageMappingGuide: new MessageMappingGuide("Generic V2 20171208", [
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
      }
    ])
  };

  render() 
  {
    const message = 
`MSH|^~\&|SendAppName^2.16.840.1.114222.nnnn^ISO|Sending-Facility^2.16.840.1.114222.nnnn^ISO|PHINCDS^2.16.840.1.114222.4.3.2.10^ISO|PHIN^2.16.840.1.114222^ISO|20141225120030.1234-0500||ORU^R01^ORU_R01|TM_CN_TC01_GENV2|T|2.5.1|||||||||NOTF_ORU_v3.0^PHINProfileID^2.16.840.1.114222.4.10.3^ISO~Generic_MMG_V2.0^PHINMsgMapID^2.16.840.1.114222.4.10.4^ISO
PID|1||GenV2_TC01^^^SendAppName&2.16.840.1.114222.nnnn&ISO||~^^^^^^S||19640502|F||2106-3^White^CDCREC^C^Caucasian^L|^^^48^77018^^^^48201|||||||||||2135-2^Hispanic or Latino^CDCREC|||||||20140302
OBR|1|""|GenV2_TC01^SendAppName^2.16.840.1.114222.nnnn^ISO|68991-9^Epidemiologic Information^LN|||20140227170100|||||||||||||||20140227170100|||F||||||11550^Hemolytic uremic syndrome postdiarrheal^NND
OBX|1|ST|32624-9^Other Race Text^LN||Apache||||||F
OBX|2|CWE|78746-5^Country of Birth^LN||USA^United States^ISO3166_1||||||F
OBX|3|CWE|77983-5^Country of Usual Residence^LN||USA^United States^ISO3166_1||||||F
OBX|4|TS|11368-8^Date of Illness Onset^LN||20140224||||||F
OBX|5|TS|77976-9^Illness End Date^LN||20140302||||||F
OBX|6|SN|77977-7^Illness Duration^LN||^6|d^day^UCUM|||||F
OBX|7|CWE|77996-7^Pregnancy Status^LN||N^No^HL70136||||||F
OBX|8|TS|77975-1^Diagnosis Date^LN||20140225||||||F
OBX|9|CWE|77974-4^Hospitalized^LN||Y^Yes^HL70136||||||F
OBX|10|TS|8656-1^Admission Date^LN||20140226||||||F
OBX|11|TS|8649-6^Discharge Date^LN||20140302||||||F
OBX|12|SN|78033-8^Duration of Stay in days^LN||^4|d^day^UCUM|||||F
OBX|13|CWE|77978-5^Subject Died^LN||Y^Yes^HL70136||||||F
OBX|14|ST|77993-4^State Case Id^LN||TX4321||||||F
OBX|15|ST|77997-5^Legacy Case ID^LN||48432148S012014||||||F
OBX|16|SN|77998-3^Age at Case Investigation^LN||^49|a^year^UCUM|||||F
OBX|17|CWE|77982-7^Case Disease Imported Code^LN||C1512888^International^UML||||||F
OBX|18|CWE|INV153^Imported Country^PHINQUESTION||MEX^Mexico^ISO3166_1||||||F
OBX|19|CWE|77984-3^Country of Exposure or Country Where Disease was Acquired^LN|1|USA^United States^ISO3166_1||||||F
OBX|20|CWE|77985-0^State or Province of Exposure^LN|1|48^Texas^FIPS5_2||||||F
OBX|21|ST|77986-8^City of Exposure^LN|1|Houston||||||F
OBX|22|ST|77987-6^County of Exposure^LN|1|Harris||||||F
OBX|23|CWE|77989-2^Transmission Mode^LN||416086007^Foodborne Transmission^SCT||||||F
OBX|24|CWE|77990-0^Case Class Status Code^LN||410605003^Confirmed Present^SCT||||||F
OBX|25|CWE|77965-2^Immediate National Notifiable Condition^LN||N^No^HL70136||||||F
OBX|26|CWE|77980-1^Case Outbreak Indicator^LN||Y^Yes^HL70136||||||F
OBX|27|ST|77981-9^Case Outbreak Name^LN||HANSENOUTB1||||||F
OBX|28|ST|77969-4^Jurisdiction Code^LN||S01||||||F
OBX|29|CWE|48766-0^Reporting Source Type Code^LN||1^Hospital^HL70406||||||F
OBX|30|ST|52831-5^Reporting Source Zip Code^LN||77018||||||F
OBX|31|CWE|77988-4^Binational Reporting Criteria^LN||PHC1140^Exposure to a suspected product from Mexico or Canada^CDCPHINVS||||||F
OBX|32|ST|74549-7^Person Reporting to CDC - Name^LN||Smith, John||||||F
OBX|33|ST|74548-9^Person Reporting to CDC - Phone Number^LN||(444)321-1234||||||F
OBX|34|ST|74547-1^Person Reporting to CDC - Email^LN||jsmith@txdoh.org||||||F
OBX|35|DT|77979-3^Investigation Start Date^LN||20140225||||||F
OBX|36|DT|77995-9^Date Reported^LN||20140225||||||F
OBX|37|TS|77972-8^Earliest Date reported to county^LN||20140225||||||F
OBX|38|TS|77973-6^Earliest Date reported to State^LN||20140225||||||F
OBX|39|SN|77991-8^MMWR Week^LN||^9||||||F
OBX|40|DT|77992-6^MMWR Year^LN||2014||||||F
OBX|41|DT|77994-2^Date CDC Was First Verbally Notified of This Case^LN||20140225||||||F
OBX|42|DT|77970-2^Date First Reported to PHD^LN||20140225||||||F
OBX|43|CWE|77966-0^Reporting State^LN||48^Texas^FIPS5_2||||||F
OBX|44|CWE|77967-8^Reporting County^LN||48201^Harris, TX^FIPS6_4||||||F
OBX|45|CWE|77968-6^National Reporting Jurisdiction^LN||48^Texas^FIPS5_2||||||F
OBX|46|TX|77999-1^Comment Field^LN||||||||F`;
    const messageMappingGuide = this.state.messageMappingGuide;

    const result = new HL7Parser().parse(message, messageMappingGuide);

    return (
      <div className="container">
        <h1>{messageMappingGuide.name}</h1>
        <br />
        <Table messageMappingGuide={messageMappingGuide} />
      </div>
    );
  }
}

export default App;
