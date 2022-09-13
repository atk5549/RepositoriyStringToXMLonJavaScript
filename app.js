var data = `<BillofLading xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" DocumentModeID="1003202E" xmlns="urn:customs.ru:Information:TransportDocuments:Sea:BillofLading:5.19.0">
  <DocumentID xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">cb3b0aac-fb1a-4d94-89f3-a17ab46eb4fb</DocumentID>
  <LanguageCode>EN</LanguageCode>
  <BillofLadingId>dbcf3a7f-8871-4758-938f-1148fa6b8616</BillofLadingId>
  <RegistrationDocument>
    <PrDocumentName xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">Коносамент</PrDocumentName>
    <PrDocumentNumber xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">НОМЕРКНС</PrDocumentNumber>
  </RegistrationDocument>
  <Vessel>
    <Name xmlns="urn:customs.ru:Information:TransportDocuments:TransportCommonAgregateTypesCust:5.14.3">ТР АНТОН ГУРИН</Name>
    <Shipmaster xmlns="urn:customs.ru:Information:TransportDocuments:TransportCommonAgregateTypesCust:5.14.3">ЛУКЬЯНЕНКО</Shipmaster>
    <NationalityCode xmlns="urn:customs.ru:Information:TransportDocuments:TransportCommonAgregateTypesCust:5.14.3">643</NationalityCode>
    <NationalityVessel xmlns="urn:customs.ru:Information:TransportDocuments:TransportCommonAgregateTypesCust:5.14.3">РОССИЯ</NationalityVessel>
    <NationalityVesselCode xmlns="urn:customs.ru:Information:TransportDocuments:TransportCommonAgregateTypesCust:5.14.3">RU</NationalityVesselCode>
  </Vessel>
  <Loading>
    <Name xmlns="urn:customs.ru:Information:TransportDocuments:TransportCommonAgregateTypesCust:5.14.3">RUEEZ</Name>
  </Loading>
  <Unloading>
    <Name xmlns="urn:customs.ru:Information:TransportDocuments:TransportCommonAgregateTypesCust:5.14.3">CNDLC</Name>
  </Unloading>
  <Carrier>
    <OrganizationName xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">Саксин Сергей Владимирович</OrganizationName>
    <ShortName xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">ООО "ДАЛЬРИФЕР"</ShortName>
    <OrganizationLanguage xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">RU</OrganizationLanguage>
    <RFOrganizationFeatures xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">
      <OGRN>1032501909032</OGRN>
      <INN>2538079121</INN>
      <KPP>253801001</KPP>
    </RFOrganizationFeatures>
    <OKPOID xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">0000001524</OKPOID>
    <OKATOCode xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">5401369000</OKATOCode>
    <Address xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">
      <PostalCode>690039</PostalCode>
      <CountryCode>RU</CountryCode>
      <CounryName>РОССИЯ</CounryName>
      <Region>Приморский край</Region>
      <City>г. Владивосток</City>
      <StreetHouse>проспект 100-летия Владивостока, 105 A. офис 262-Б</StreetHouse>
    </Address>
  </Carrier>
  <Consignee>
    <OrganizationName xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">получатель</OrganizationName>
    <OrganizationLanguage xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">EN</OrganizationLanguage>
    <RFOrganizationFeatures xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0" />
  </Consignee>
  <Consignor>
    <OrganizationName xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">JSC OKEANRYBFLOT</OrganizationName>
    <OrganizationLanguage xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">EN</OrganizationLanguage>
    <RFOrganizationFeatures xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0" />
  </Consignor>
  <Goods>
    <GoodsDescription xmlns="urn:customs.ru:CommonAggregateTypes:5.10.0">ТОВАР</GoodsDescription>
    <GoodsNumeric xmlns="urn:customs.ru:Information:TransportDocuments:TransportCommonAgregateTypesCust:5.14.3">1</GoodsNumeric>
    <PlacesQuantity>0</PlacesQuantity>
    <GrossWeightQuantity>0.00</GrossWeightQuantity>
  </Goods>
  <DocumentSignature>
    <PersonName>ЛУКЬЯНЕНКО ВИТАЛИЙ ЮРЬЕВИЧ</PersonName>
    <PersonPost>КАПИТАН</PersonPost>
  </DocumentSignature>
  <CustomsCode>10702020</CustomsCode>
  <DestinationOfficeIdentifier>10702020</DestinationOfficeIdentifier>
</BillofLading>
`





// function StringToXML(oString) {
//   //code for IE
//   if (window.ActiveXObject) { 
//   var oXML = new ActiveXObject("Microsoft.XMLDOM"); oXML.loadXML(oString);
//   return oXML;
//   }
//   // code for Chrome, Safari, Firefox, Opera, etc. 
//   else {
//   return (new DOMParser()).parseFromString(oString, "text/xml");
//   }
//  }

// StringToXML(oString)


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

downloadFiles(data, "test.xml")