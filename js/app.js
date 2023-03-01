'use strict'

// Объявление переменных
const switcher = document.getElementById('switcher');                                   // Ссылка на переключатель тем
const iframeContainer = document.getElementsByClassName('PageInPage');                  // Ссылка на контейнер, хранящий фрейм
const frame = document.getElementById('frame');                                         // Ссылка на сам фрейм
const footPush = document.getElementById('FooterPusher');                               // Ссылка на кнопку подъёма/опуская футтера

const updated = document.lastModified.substring(3,5)+'.'+document.lastModified.substring(0,2)+'.'+document.lastModified.substring(6,10);
                                                                                        // Форматированная дата обновления index.html

let getScript; let getTheme;                                                            // Загрузчики стилей и скриптов 
let urlChecker = [];                                                                    // Массив для хранения инфо об уже подгруженных скриптов и стилей

// Cкрипт для подгрузки других скриптов
getScript = (url) => {
    if (!urlChecker.includes(url)) {
    
    urlChecker.push(url);
    let script = document.createElement('script');
    script.setAttribute('src', url);

    if(!document.body.getAttribute('src', url)) {
        if(document.body == null){
            document.head.appendChild(script);
        }else{
            document.body.appendChild(script);
        };
    };
}};

// Cкрипт подгрузки стилей
 getTheme = (theme_url) => {
    if (!urlChecker.includes(theme_url)) {

    urlChecker.push(theme_url);
    let link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', theme_url);
    document.head.appendChild(link);
}};

// Обновление даты внесения последних изменений
document.getElementById('UpdateDate').append(updated);