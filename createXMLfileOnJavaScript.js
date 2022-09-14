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
    'ДМИТРИЙ'

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
    'PersonName', // <PersonName xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">ДМИТРИЙ</PersonName>


    'DocumentSignature2', // </DocumentSignature>

    'crewList2'
];




let inputDataToTag;
var crewList = [`<CrewList xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" DocumentModeID="1003205E" xmlns="urn:customs.ru:Information:TransportDocuments:Sea:CrewList:5.16.0">`, `</CrewList>`];
var DocumentID = [`  <DocumentID xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">`, `</DocumentID>`];
var LanguageCode = [`  <LanguageCode>`, `</LanguageCode>`];
var DeparturePort =  [`  <DeparturePort>`, `</DeparturePort>`];
var ArrivalIndicator =  [`  <ArrivalIndicator>`, `</ArrivalIndicator>`];
var RUPersonnel =  [`  <RUPersonnel>`, `</RUPersonnel>`];
var ForeignPersonnel =  [`  <ForeignPersonnel>`, `</ForeignPersonnel>`];
var PersonSurname =  [`    <PersonSurname xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">`, `</ForeignPersonnel>`];
var PersonName =  [`    <PersonName xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">`, `</PersonName>`];



var DocumentSignature =  [`  <DocumentSignature>`, `  </DocumentSignature>`];




var exampleData = ``;
let i = 0;

for (indexTags = 0; indexTags < tagList.length; ++indexTags) {
    var tagsByIndex = tagList[indexTags]

    if (tagsByIndex === 'crewList1') {
        tagsByIndex = crewList
        exampleData = exampleData + tagsByIndex[0].trimEnd() + '\n'
    }

    if (tagsByIndex === 'DocumentID1') {
        tagsByIndex = DocumentID
        exampleData = exampleData + tagsByIndex[0].trimEnd() + dataFROMgrids[i] + tagsByIndex[1].trimEnd() + '\n'
        i++
    }

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






    if (tagsByIndex === 'DocumentSignature2') {
        tagsByIndex = DocumentSignature;
        exampleData = exampleData + tagsByIndex[1].trimEnd()  + '\n';
    }



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