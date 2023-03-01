// Переключатель светлой/тёмной тем основной страницы и фрейма

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
Скрипт был перенесён в отдельный файл и теперь подгружается при клике по элементу Switcher.
Для устранения необходимости второго клика введена моментальная смена темы при подгрузке скрипта.
*/
function switchOnLoad() {
    document.body.setAttribute('class', 'dark-theme');
    frame.contentWindow.document.body.setAttribute('class','dark-theme');
    switcher.classList.toggle('switcher-off'); 
};
