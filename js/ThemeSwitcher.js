// Переключатель тем оформления на основной страницы и во фрейме

document.addEventListener("load", switchOnLoad()); 

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    frame.contentWindow.document.body.classList.toggle('light-theme');

    document.body.classList.toggle('dark-theme');
    frame.contentWindow.document.body.classList.toggle('dark-theme');
});

// Смена внешнего вида переключателя светлой/тёмной тем 
switcher.addEventListener('click', function() {
    this.classList.toggle('switcher-off');    
});


/* 
Т.к. скрипт был перенесён в отдельный файл и подгружается при клике по элементу Switcher, 
появилась необходимости моментальной смены темы оформления при запуске скрипта.
*/
function switchOnLoad() {
    document.body.setAttribute('class', 'dark-theme');
    frame.contentWindow.document.body.setAttribute('class','dark-theme');
    switcher.classList.toggle('switcher-off'); 
};
