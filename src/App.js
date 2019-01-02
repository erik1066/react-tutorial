import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import MessageMappingGuide from './MessageMappingGuide';
import HL7Parser from './HL7Parser';

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
      }
    ])
  };

  render() 
  {
    const message = 
`MSH|^~\&|SendAppName^2.16.840.1.114222.nnnn^ISO|Sending-Facility^2.16.840.1.114222.nnnn^ISO|PHINCDS^2.16.840.1.114222.4.3.2.10^ISO|PHIN^2.16.840.1.114222^ISO|20141225120030.1234-0500||ORU^R01^ORU_R01|CONSYPH_V1_0_TM_TC08|T|2.5.1|||||||||NOTF_ORU_v3.0^PHINProfileID^2.16.840.1.114222.4.10.3^ISO~Generic_MMG_V2.0^PHINMsgMapID^2.16.840.1.114222.4.10.4^ISO~CongenitalSyphilis_MMG_V1.0^PHINMsgMapID^2.16.840.1.114222.4.10.4^ISO
PID|1||CONSYPH_TC08^^^SendAppName&2.16.840.1.114222.nnnn&ISO||~^^^^^^S||20130917|F||2054-5^Black or African American^CDCREC|^^^17^60643^^^^17031|||||||||||2186-5^Not Hispanic or Latino^CDCREC
NK1|1||MTH|^^^17^60643^USA^^^17031||||||||||S^Single^HL70002||19920827||||||||||||2186-5^Not Hispanic or Latino^CDCREC|||||||2054-5^Black or African American^CDCREC
OBR|1||CONSYPH_TC08^SendAppName^2.16.840.1.114222.nnnn^ISO|68991-9^Epidemiologic Information^LN|||20130922170100|||||||||||||||20140131170100|||C||||||10316^Syphilis, Congenital^NND
OBX|1|CWE|78746-5^Country of Birth^LN||USA^United States^ISO3166_1||||||F
OBX|2|CWE|77983-5^Country of Usual Residence^LN||USA^United States^ISO3166_1||||||F
OBX|3|TS|11368-8^Date of Illness Onset^LN||20130917||||||F
OBX|4|TS|77975-1^Diagnosis Date^LN||20130917||||||F
OBX|5|CWE|77974-4^Hospitalized^LN||N^No^HL70136||||||F
OBX|6|CWE|77978-5^Subject Died^LN||N^No^HL70136||||||F
OBX|7|ST|77993-4^State Case Identifier^LN||<use state-assigned value>||||||F
OBX|8|ST|77997-5^Legacy Case Identifier^LN||61528936181002006||||||F
OBX|9|SN|77998-3^Age at Case Investigation^LN||^1|d^day^UCUM|||||F
OBX|10|CWE|77982-7^Case Disease Imported Code^LN||PHC244^Indigenous, within jurisdiction^CDCPHINVS||||||F
OBX|11|CWE|77984-3^Country of Exposure^LN|1|USA^United States^ISO3166_1||||||F
OBX|12|CWE|77985-0^State or Province of Exposure^LN|1|17^Illinois^FIPS5_2||||||F
OBX|13|ST|77986-8^City of Exposure^LN|1|Chicago||||||F
OBX|14|ST|77987-6^County of Exposure^LN|1|Cook||||||F
OBX|15|CWE|77989-2^Transmission Mode^LN||417409004^Transplacental transmission^SCT||||||F
OBX|16|CWE|77990-0^Case Class Status Code^LN||PHC178^Not a Case^CDCPHINVS||||||F
OBX|17|CWE|77965-2^Immediate National Notifiable Condition^LN||N^No^HL70136||||||F
OBX|18|CWE|77980-1^Case Outbreak Indicator^LN||N^No^HL70136||||||F
OBX|19|ST|77969-4^Jurisdiction Code^LN||S01||||||F
OBX|20|CWE|48766-0^Reporting Source Type Code^LN||1^Hospital^HL70406||||||F
OBX|21|ST|52831-5^Reporting Source Zip Code^LN||60643||||||F
OBX|22|ST|74549-7^Person Reporting to CDC-Name^LN||Smith, John||||||F
OBX|23|ST|74548-9^Person Reporting to CDC-Phone Number^LN||(734)677-7777||||||F
OBX|24|DT|77979-3^Case Investigation Start Date^LN||20130917||||||F
OBX|25|DT|77995-9^Date Reported^LN||20130917||||||F
OBX|26|TS|77972-8^Earliest Date Reported to County^LN||20130918||||||F
OBX|27|TS|77973-6^Earliest Date reported to State^LN||20130920||||||F
OBX|28|SN|77991-8^MMWR Week^LN||^38||||||F
OBX|29|DT|77992-6^MMWR Year^LN||2013||||||F
OBX|30|DT|77970-2^Date First Reported to PHD^LN||20130920||||||F
OBX|31|CWE|77966-0^Reporting State^LN||17^Illinois^FIPS5_2||||||F
OBX|32|CWE|77967-8^Reporting County^LN||17031^Cook^FIPS6_4||||||F
OBX|33|CWE|77968-6^National Reporting Jurisdiction^LN||17^Illinois^FIPS5_2||||||F
OBX|34|NM|75201-4^Number of Pregnancies^LN||2||||||F
OBX|35|NM|75202-2^Number of Total Live Births^LN||2||||||F
OBX|36|DT|75203-0^Last Menstrual Period^LN||20121215||||||F
OBX|37|DT|75200-6^Date of First Prenatal Visit^LN||99999999||||||F
OBX|38|CWE|75204-8^Prenatal Visit Indicator^LN||Y^Yes^HL70136||||||F
OBX|39|CWE|75163-6^Trimester of First Prenatal Visit^LN||UNK^Unknown^NULLFL||||||F
OBX|40|CWE|75179-2^Mother's HIV Status During Pregnancy^LN||UNK^Unknown^NULLFL||||||F
OBX|41|CWE|75180-0^Mother's Clinical Stage of Syphilis During Pregnancy^LN||UNK^Unknown^NULLFL||||||F
OBX|42|CWE|75181-8^Mother's Surveillance Stage of Syphilis During Pregnancy^LN||UNK^Unknown^NULLFL||||||F
OBX|43|CWE|75183-4^Trimester in Which Mother Received Her First Dose of Benzathine Penicillin^LN||25265005^No treatment^SCT||||||F
OBX|44|CWE|75164-4^Non-treponemal Test or Treponemal Test at First Prenatal Visit^LN||Y^Yes^HL70136||||||F
OBX|45|CWE|75165-1^Non-treponemal Test or Treponemal Test at 28-32 Weeks Gestation^LN||Y^Yes^HL70136||||||F
OBX|46|CWE|75166-9^Non-treponemal Test or Treponemal Test at Delivery^LN||Y^Yes^HL70136||||||F
OBX|47|CWE|LAB588^Lab Test Performed Modifier^PHINQUESTION|2|STD150^Mother's First Non-treponemal Test Finding/Information^PHINQUESTION||||||F
OBX|48|CWE|INV290^Test Type^PHINQUESTION|2|20507-0^RPR^LN||||||F
OBX|49|CWE|INV291^Test Result^PHINQUESTION|2|131194007^Non-Reactive^SCT||||||F
OBX|50|DT|82772-5^Date of lab result^LN|2|20130325||||||F
OBX|51|CWE|LAB588^Lab Test Performed Modifier^PHINQUESTION|3|STD151^Mother's Most Recent Non-treponemal Test Finding/Information^PHINQUESTION||||||F
OBX|52|CWE|INV290^Test Type^PHINQUESTION|3|20507-0^RPR^LN||||||F
OBX|53|CWE|INV291^Test Result^PHINQUESTION|3|11214006^Reactive^SCT||||||F
OBX|54|CWE|STD123^Nontreponemal Serologic syphilis test result^PHINQUESTION|3|STD4^1:4^CDCPHINVS||||||F
OBX|55|DT|82772-5^Date of lab result^LN|3|20130918||||||F
OBX|56|CWE|LAB588^Lab Test Performed Modifier^PHINQUESTION|4|STD152^Mother's First Treponemal Test Finding^PHINQUESTION||||||F
OBX|57|CWE|INV290^Test Type^PHINQUESTION|4|PHC1307^Unknown Treponemal Test Type^CDCPHINVS||||||F
OBX|58|CWE|INV291^Test Result^PHINQUESTION|4|11214006^Reactive^SCT||||||F
OBX|59|DT|82772-5^Date of lab result^LN|4|20130325||||||F
OBX|60|CWE|LAB588^Lab Test Performed Modifier^PHINQUESTION|5|STD154^Infant's Non-treponemal Test Finding^PHINQUESTION||||||F
OBX|61|CWE|INV290^Test Type^PHINQUESTION|5|20507-0^RPR^LN||||||F
OBX|62|CWE|INV291^Test Result^PHINQUESTION|5|11214006^Reactive^SCT||||||F
OBX|63|CWE|STD123^Nontreponemal Serologic syphilis test result^PHINQUESTION|5|STD1^1:1^CDCPHINVS||||||F
OBX|64|DT|82772-5^Date of lab result^LN|5|20130918||||||F
OBX|65|CWE|75186-7^Vital Status^LN||438949009^Alive^SCT||||||F
OBX|66|SN|56056-5^Birth Weight^LN||^2785|g^gram^UCUM|||||F
OBX|67|SN|57714-8^Gestational Age^LN||^38|wk^week^UCUM|||||F
OBX|68|CWE|75193-3^Clinical Signs of Congenital Syphilis^SCT||84387000^no signs/asymptomatic^SCT||||||F
OBX|69|CWE|75194-1^Long Bone X-rays for Infant^LN||PHC1289^No x-rays^CDCPHINVS||||||F
OBX|70|CWE|75192-5^Darkfield Exam, DFA, or Special Stain Test Findings^LN||373121007^Test Not done^SCT||||||F
OBX|71|CWE|LP48341-9^CSF WBC Count^LN||H^Above High Normal^HL70078||||||F
OBX|72|CWE|LP69956-8^CSF Protein Level^LN||H^Above High Normal^HL70078||||||F
OBX|73|CWE|75195-8^CSF VDRL Test Finding^LN||NR^Non-reactive^HL70078||||||F
OBX|74|CWE|75197-4^Infant Treated^LN||PHC1294^Yes,with aqueous or procaine penicillin for 10 days^CDCPHINVS||||||F
OBX|75|CWE|75207-1^Stillbirth Indicator^LN||N^No^HL70136||||||F`;
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
