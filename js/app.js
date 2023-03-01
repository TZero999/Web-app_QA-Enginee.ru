'use strict'

// Объявление переменных
const switcher = document.getElementById('switcher');                                   // Ссылка на переключатель тем
const iframeContainer = document.getElementsByClassName('PageInPage');                  // Ссылка на контейнер, хранящий фрейм
const frame = document.getElementById('frame');                                         // Ссылка на сам фрейм
const footPush = document.getElementById('FooterPusher');                               // Ссылка на кнопку подъёма/опуская футтера

const updated = document.lastModified.substring(3,5)+'.'+document.lastModified.substring(0,2)+'.'+document.lastModified.substring(6,10);
                                                                                        // Форматированная дата обновления index.html

let getScript; let getTheme;                                                            // Загрузчики стилей и скриптов 
let urlChecker = [];

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

// CSS кэширование

// Кэширование sub_main.css
/*let frameStyleCash = getTheme('./css/sub_main.css');
console.log(urlChecker);
*/



/* Future Ideas 

    Решение?:
    Использование postMessageили вызов функции контейнера loadвнутри iframe возможно только при наличии контроля над ним.
    Использование $(window).load()в контейнере также будет ожидать загрузки других ресурсов, таких как изображения и другие фреймы.
    Это не решение, если вы хотите дождаться только определенного iframe.

    Варианты:
    1) Если iframe еще не загружен, мы можем наблюдать .load()событие
    2) Если iframe уже загружен, нам нужно проверитьreadyState
    3) Если readyStateэто complete, мы обычно можем предположить, что iframe уже загружен. Однако из-за вышеупомянутого поведения Chrome нам также необходимо проверить, является ли это readyStateпустой страницей.
    4) Если это так, нам нужно наблюдать readyStateв интервале, чтобы проверить, является ли фактический документ (связанный с атрибутом src)complete


    Ещё интеерсная запись:
    Внешние таблицы стилей не влияют на DOM, поэтому DOMContentLoaded не ждут их.
    Но есть подводный камень. Если у нас есть скрипт после стиля, то этот скрипт должен дождаться загрузки таблицы стилей:
        <link type="text/css" rel="stylesheet" href="style.css">
        <script>
        // the script doesn't execute until the stylesheet is loaded
        alert(getComputedStyle(document.body).marginTop);
        </script>
    Источник: https://javascript.info/onload-ondomcontentloaded
}   
*/