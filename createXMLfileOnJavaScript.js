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

];


var tagList = [
    'crewList1',
    'DocumentID1',
    'LanguageCode1',
    'DeparturePort1', // <DeparturePort>ЮКЭ (ИЭЗ РФ)</DeparturePort>
    'ArrivalIndicator1', // <ArrivalIndicator>false</ArrivalIndicator>
    'RUPersonnel1', // <RUPersonnel>25</RUPersonnel>
    'ForeignPersonnel1', // <ForeignPersonnel>0</ForeignPersonnel>

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
           
    if (tagsByIndex === 'DeparturePort1') {
        tagsByIndex = DeparturePort
        exampleData = exampleData + tagsByIndex[0].trimEnd() + dataFROMgrids[i] + tagsByIndex[1].trimEnd() + '\n'
        i++
    }

    if (tagsByIndex === 'ArrivalIndicator1') {
        tagsByIndex = ArrivalIndicator
        exampleData = exampleData + tagsByIndex[0].trimEnd() + dataFROMgrids[i] + tagsByIndex[1].trimEnd() + '\n'
        i++
    }


    if (tagsByIndex === 'RUPersonnel1') {
        tagsByIndex = RUPersonnel
        exampleData = exampleData + tagsByIndex[0].trimEnd() + dataFROMgrids[i] + tagsByIndex[1].trimEnd() + '\n'
        i++
    }



    if (tagsByIndex === 'ForeignPersonnel1') {
        tagsByIndex = ForeignPersonnel
        exampleData = exampleData + tagsByIndex[0].trimEnd() + dataFROMgrids[i] + tagsByIndex[1].trimEnd() + '\n'
        i++
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