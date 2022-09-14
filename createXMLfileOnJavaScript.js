/* 
1) сначало готовим тэги с данными полученными из таблицы aggrid
2) представим что у Нас данные поступили в массив anyResults
*/


var dataFROMgrids = ['Vasya1', 'Vasya2', 'vasya3'];


var tagList = [
    'BillofLading1',
    'DocumentID1',
    'LanguageCode1',
    'BillofLadingId1',
    'BillofLading2'
];




let inputDataToTag;
var BillofLading = [`<BillofLading xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" DocumentModeID="1003202E" xmlns="urn:customs.ru:Information:TransportDocuments:Sea:BillofLading:5.19.0">`, `</BillofLading>`];
var DocumentID = [`  <DocumentID xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">`, `</DocumentID>`];
var LanguageCode = [`  <LanguageCode>`, `</LanguageCode>`];
var BillofLadingId =  [`  <BillofLadingId>`, `</BillofLadingId>`];



var exampleData = ``;
let i = 0;

for (indexTags = 0; indexTags < tagList.length; ++indexTags) {
    var tagsByIndex = tagList[indexTags]

    if (tagsByIndex === 'BillofLading1') {
        tagsByIndex = BillofLading
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
           
    if (tagsByIndex === 'BillofLadingId1') {
        tagsByIndex = BillofLadingId
        exampleData = exampleData + tagsByIndex[0].trimEnd() + dataFROMgrids[i] + tagsByIndex[1].trimEnd() + '\n'
        i++
    }

    if (tagsByIndex === 'BillofLading2') {
        tagsByIndex = BillofLading
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