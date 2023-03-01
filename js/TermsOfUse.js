// Передача текста в Пользовательское соглашение из отдельного файла

'use strict'

let ToU_text = document.getElementById('TermsOfUseText');

// Честно позаимствованный кусок кода для отображения в качестве текста
// пользовательского соглашения текста из файла 'Terms_of_use.txt', хранящегося на сервере.

function getXmlHttp() {
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

(function () {
    var xmlhttp = getXmlHttp();
    xmlhttp.open('GET', './Terms_of_use.txt');
    // Здесь синхронный request был заменён на асинхронный из-за ругающегося на устаревшие методы браузера.
    xmlhttp.onload = function(e) {
    if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
        var content = xmlhttp.responseText;
        
        ToU_text.append(content);
        document.getElementById('TermsOfUse').removeAttribute('style');
    }
}
xmlhttp.send(null);
})();

