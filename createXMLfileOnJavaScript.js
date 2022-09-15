/* 
1) сначало готовим тэги с данными полученными из таблицы aggrid
2) представим что у Нас данные поступили в массив anyResults
*/


var dataFROMgrids = [

    '539b957b-9622-4d31-89cc-81e3ecd171e9',
    'RU',
    'ЮКЭ (ИЭЗ РФ)',
    'false',
    '25',
    '0',
    'ОСТРОГОРСКИЙ',
    'ДМИТРИЙ',
    'ВЛАДИМИРОВИЧ',
    'КАПИТАН',
    '2022-08-14',
    'КАПИТАН ПРЯХА',
    'ОСТРОГОРСКИЙ',
    '643',
    '2022-08-14',
    'ВЛАДИВОСТОК (РФ)'

];


var tagList = [
    'crewList1', // <CrewList xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" DocumentModeID="1003205E" xmlns="urn:customs.ru:Information:TransportDocuments:Sea:CrewList:5.16.0">
    'DocumentID1', // <DocumentID xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">539b957b-9622-4d31-89cc-81e3ecd171e9</DocumentID>
    'LanguageCode1', // <LanguageCode>RU</LanguageCode>
    'DeparturePort1', // <DeparturePort>ЮКЭ (ИЭЗ РФ)</DeparturePort>
    'ArrivalIndicator1', // <ArrivalIndicator>false</ArrivalIndicator>
    'RUPersonnel1', // <RUPersonnel>25</RUPersonnel>
    'ForeignPersonnel1', // <ForeignPersonnel>0</ForeignPersonnel>

    'DocumentSignature1', // <DocumentSignature>
    'PersonSurname1', // <PersonSurname xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">ОСТРОГОРСКИЙ</PersonSurname>
    'PersonName1', // <PersonName xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">ДМИТРИЙ</PersonName>
    'PersonMiddleName1', // <PersonMiddleName xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">ВЛАДИМИРОВИЧ</PersonMiddleName>
    'PersonPost1', // <PersonPost xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">КАПИТАН</PersonPost>
    'IssueDate1', // <IssueDate xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">2021-06-09</IssueDate>
    'DocumentSignature2', // </DocumentSignature>

    'Vessel1', // <Vessel>
    'Name1', // <Name xmlns="urn:customs.ru:Information:TransportDocuments:TransportCommonAgregateTypesCust:5.14.3">КАПИТАН ПРЯХА</Name>
    'Shipmaster1', // <Shipmaster xmlns="urn:customs.ru:Information:TransportDocuments:TransportCommonAgregateTypesCust:5.14.3">ЦАЮК</Shipmaster>
    'NationalityCode1', // <NationalityCode xmlns="urn:customs.ru:Information:TransportDocuments:TransportCommonAgregateTypesCust:5.14.3">643</NationalityCode>
    'Vessel2', // </Vessel>

    'Sailing1', // <Sailing>
    'DateSailing1', // <Date xmlns="urn:customs.ru:Information:TransportDocuments:TransportCommonAgregateTypesCust:5.14.3">2022-08-14</Date>
    'NameSailing1', // <Name xmlns="urn:customs.ru:Information:TransportDocuments:TransportCommonAgregateTypesCust:5.14.3">ВЛАДИВОСТОК (РФ)</Name>
    'Sailing2', // </Sailing>

    'crewList2' // </CrewList>
];




let inputDataToTag;

var crewList = [`<CrewList xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" DocumentModeID="1003205E" xmlns="urn:customs.ru:Information:TransportDocuments:Sea:CrewList:5.16.0">`, `</CrewList>`];

var DocumentID = [`  <DocumentID xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">`, `</DocumentID>`];
var LanguageCode = [`  <LanguageCode>`, `</LanguageCode>`];
var DeparturePort =  [`  <DeparturePort>`, `</DeparturePort>`];
var ArrivalIndicator =  [`  <ArrivalIndicator>`, `</ArrivalIndicator>`];
var RUPersonnel =  [`  <RUPersonnel>`, `</RUPersonnel>`];
var ForeignPersonnel =  [`  <ForeignPersonnel>`, `</ForeignPersonnel>`];

var DocumentSignature =  [`  <DocumentSignature>`, `  </DocumentSignature>`];
var PersonSurname =  [`    <PersonSurname xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">`, `</ForeignPersonnel>`];
var PersonName =  [`    <PersonName xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">`, `</PersonName>`];
var PersonMiddleName =  [`    <PersonMiddleName xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">`, `</PersonMiddleName>`];
var PersonPost =  [`    <PersonPost xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">`, `</PersonPost>`];
var IssueDate =  [`    <IssueDate xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">`, `</IssueDate>`];

var Vessel =  [`  <Vessel>`, `  </Vessel>`];
var Name =  [`    <Name xmlns="urn:customs.ru:Information:TransportDocuments:TransportCommonAgregateTypesCust:5.14.3">`, `</Name>`];
var Shipmaster =  [`    <Shipmaster xmlns="urn:customs.ru:Information:TransportDocuments:TransportCommonAgregateTypesCust:5.14.3">`, `</Shipmaster>`];
var NationalityCode =  [`    <NationalityCode xmlns="urn:customs.ru:Information:TransportDocuments:TransportCommonAgregateTypesCust:5.14.3">`, `</NationalityCode>`];

var Sailing =  [`  <Sailing>`, `  </Sailing>`];
var DateSailing =  [`    <Date xmlns="urn:customs.ru:Information:TransportDocuments:TransportCommonAgregateTypesCust:5.14.3">`, `</Date>`];
var NameSailing =  [`    <Name xmlns="urn:customs.ru:Information:TransportDocuments:TransportCommonAgregateTypesCust:5.14.3">`, `</Name>`];







var exampleData = ``;
let i = 0;

for (indexTags = 0; indexTags < tagList.length; ++indexTags) {
    var tagsByIndex = tagList[indexTags]

    // <CrewList xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" DocumentModeID="1003205E" xmlns="urn:customs.ru:Information:TransportDocuments:Sea:CrewList:5.16.0">
    if (tagsByIndex === 'crewList1') {
        tagsByIndex = crewList
        exampleData = exampleData + tagsByIndex[0].trimEnd() + '\n'
    }

    // <DocumentID xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">539b957b-9622-4d31-89cc-81e3ecd171e9</DocumentID>
    if (tagsByIndex === 'DocumentID1') {
        tagsByIndex = DocumentID
        exampleData = exampleData + tagsByIndex[0].trimEnd() + dataFROMgrids[i] + tagsByIndex[1].trimEnd() + '\n'
        i++
    }

    // <LanguageCode>RU</LanguageCode>
    if (tagsByIndex === 'LanguageCode1') {
        tagsByIndex = LanguageCode
        exampleData = exampleData + tagsByIndex[0].trimEnd() + dataFROMgrids[i] + tagsByIndex[1].trimEnd() + '\n'
        i++
    }
      
    // <DeparturePort>ЮКЭ (ИЭЗ РФ)</DeparturePort>
    if (tagsByIndex === 'DeparturePort1') {
        tagsByIndex = DeparturePort
        exampleData = exampleData + tagsByIndex[0].trimEnd() + dataFROMgrids[i] + tagsByIndex[1].trimEnd() + '\n'
        i++
    }

    // <ArrivalIndicator>false</ArrivalIndicator>
    if (tagsByIndex === 'ArrivalIndicator1') {
        tagsByIndex = ArrivalIndicator
        exampleData = exampleData + tagsByIndex[0].trimEnd() + dataFROMgrids[i] + tagsByIndex[1].trimEnd() + '\n'
        i++
    }

    // <RUPersonnel>25</RUPersonnel>
    if (tagsByIndex === 'RUPersonnel1') {
        tagsByIndex = RUPersonnel
        exampleData = exampleData + tagsByIndex[0].trimEnd() + dataFROMgrids[i] + tagsByIndex[1].trimEnd() + '\n'
        i++
    }


    // <ForeignPersonnel>0</ForeignPersonnel>
    if (tagsByIndex === 'ForeignPersonnel1') {
        tagsByIndex = ForeignPersonnel
        exampleData = exampleData + tagsByIndex[0].trimEnd() + dataFROMgrids[i] + tagsByIndex[1].trimEnd() + '\n'
        i++
    }

    // <DocumentSignature>
    if (tagsByIndex === 'DocumentSignature1') {
        tagsByIndex = DocumentSignature;
        exampleData = exampleData + tagsByIndex[0].trimEnd()  + '\n';
    }



    // <PersonSurname xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">ОСТРОГОРСКИЙ</PersonSurname>
    if (tagsByIndex === 'PersonSurname1') {
        tagsByIndex = PersonSurname
        exampleData = exampleData + tagsByIndex[0].trimEnd() + dataFROMgrids[i] + tagsByIndex[1].trimEnd() + '\n'
        i++
    }

    // <PersonName xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">ДМИТРИЙ</PersonName>
    if (tagsByIndex === 'PersonName1') {
        tagsByIndex = PersonName
        exampleData = exampleData + tagsByIndex[0].trimEnd() + dataFROMgrids[i] + tagsByIndex[1].trimEnd() + '\n'
        i++
    }

    // <PersonMiddleName xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">ВЛАДИМИРОВИЧ</PersonMiddleName>
    if (tagsByIndex === 'PersonMiddleName1') {
        tagsByIndex = PersonMiddleName
        exampleData = exampleData + tagsByIndex[0].trimEnd() + dataFROMgrids[i] + tagsByIndex[1].trimEnd() + '\n'
        i++
    }



    // <PersonPost xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">КАПИТАН</PersonPost>
    if (tagsByIndex === 'PersonPost1') {
        tagsByIndex = PersonPost
        exampleData = exampleData + tagsByIndex[0].trimEnd() + dataFROMgrids[i] + tagsByIndex[1].trimEnd() + '\n'
        i++
    }

    // <IssueDate xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">2021-06-09</IssueDate>
    if (tagsByIndex === 'IssueDate1') {
        tagsByIndex = IssueDate
        exampleData = exampleData + tagsByIndex[0].trimEnd() + dataFROMgrids[i] + tagsByIndex[1].trimEnd() + '\n'
        i++
    }


    // </DocumentSignature>
    if (tagsByIndex === 'DocumentSignature2') {
        tagsByIndex = DocumentSignature;
        exampleData = exampleData + tagsByIndex[1].trimEnd()  + '\n';
    }

    // <Vessel>
    if (tagsByIndex === 'Vessel1') {
        tagsByIndex = Vessel;
        exampleData = exampleData + tagsByIndex[0].trimEnd()  + '\n';
    }

    // <Name xmlns="urn:customs.ru:Information:TransportDocuments:TransportCommonAgregateTypesCust:5.14.3">КАПИТАН ПРЯХА</Name>
    if (tagsByIndex === 'Name1') {
        tagsByIndex = Name
        exampleData = exampleData + tagsByIndex[0].trimEnd() + dataFROMgrids[i] + tagsByIndex[1].trimEnd() + '\n'
        i++
    }

    // <Shipmaster xmlns="urn:customs.ru:Information:TransportDocuments:TransportCommonAgregateTypesCust:5.14.3">ЦАЮК</Shipmaster>
    if (tagsByIndex === 'Shipmaster1') {
        tagsByIndex = Shipmaster
        exampleData = exampleData + tagsByIndex[0].trimEnd() + dataFROMgrids[i] + tagsByIndex[1].trimEnd() + '\n'
        i++
    }


    // <NationalityCode xmlns="urn:customs.ru:Information:TransportDocuments:TransportCommonAgregateTypesCust:5.14.3">643</NationalityCode>
    if (tagsByIndex === 'NationalityCode1') {
        tagsByIndex = NationalityCode
        exampleData = exampleData + tagsByIndex[0].trimEnd() + dataFROMgrids[i] + tagsByIndex[1].trimEnd() + '\n'
        i++
    }

    // </Vessel>
    if (tagsByIndex === 'Vessel2') {
        tagsByIndex = Vessel;
        exampleData = exampleData + tagsByIndex[1].trimEnd()  + '\n';
    }


    
    // <Sailing>
    if (tagsByIndex === 'Sailing1') {
        tagsByIndex = Sailing;
        exampleData = exampleData + tagsByIndex[0].trimEnd()  + '\n';
    }
    
    // <Date xmlns="urn:customs.ru:Information:TransportDocuments:TransportCommonAgregateTypesCust:5.14.3">2022-08-14</Date>
    if (tagsByIndex === 'DateSailing1') {
        tagsByIndex = DateSailing
        exampleData = exampleData + tagsByIndex[0].trimEnd() + dataFROMgrids[i] + tagsByIndex[1].trimEnd() + '\n'
        i++
    }

    // <Name xmlns="urn:customs.ru:Information:TransportDocuments:TransportCommonAgregateTypesCust:5.14.3">ВЛАДИВОСТОК (РФ)</Name>
    if (tagsByIndex === 'NameSailing1') {
        tagsByIndex = NameSailing
        exampleData = exampleData + tagsByIndex[0].trimEnd() + dataFROMgrids[i] + tagsByIndex[1].trimEnd() + '\n'
        i++
    }



    // </Sailing>
    if (tagsByIndex === 'Sailing2') {
        tagsByIndex = Sailing;
        exampleData = exampleData + tagsByIndex[1].trimEnd()  + '\n';
    }


    // </CrewList>
    if (tagsByIndex === 'crewList2') {
        tagsByIndex = crewList
        exampleData = exampleData + tagsByIndex[1].trimEnd()
    }
   
};
console.log(exampleData)
// downloadFiles(exampleData, "test.xml")



function downloadFiles(data, file_name, file_type) {
  var file = new Blob([data], {type: file_type});
  if (window.navigator.msSaveOrOpenBlob) 
      window.navigator.msSaveOrOpenBlob(file, file_name);
  else { 
      var a = document.createElement("a"),
              url = URL.createObjectURL(file);
      a.href = url;
      a.download = file_name;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);  
      }, 0); 
  }
  
}