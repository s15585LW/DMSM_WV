module.exports = {runRequest_SOAP: function (Operation, arg) {

    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
    var DOMParser = require('xmldom').DOMParser;
    var xmlhttp = new XMLHttpRequest()
    var sr ='<?xml version="1.0" encoding="utf-8"?><soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"><soap12:Body>' + 
    '<'+ Operation + ' xmlns="http://tempuri.org/">' +
    Json2Xml(arg) +
    '</' + Operation + '>'+
    '</soap12:Body></soap12:Envelope>'

    xmlhttp.open('POST', 'http://dkvdc-wmes0001/MESServices/MESConfirmOperation.asmx?wsdl', false)
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    var resultss 
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 &&
            xmlhttp.status == 200) {
                try{
                    var parser = new DOMParser()
                    xmlDoc = parser.parseFromString(xmlhttp.responseText, "text/xml")                    
                    resultss = xmlDoc.getElementsByTagName(Operation+"Result")[0].childNodes[0].nodeValue 
                    return false
                } catch(err){}
                
            }

    }
    xmlhttp.send(sr);  
    return resultss

    function Json2Xml(arg){
        myObj = JSON.parse(arg);
        var txt =""
        for (x in myObj) {
        txt += "<" + x + ">" + myObj[x] + "</" + x + ">";
        }
        return txt
    }

}
}