// Переключатель фреймов
'use strict'
let frameChange = function()  {
    document.getElementById('LoadScreen').setAttribute('style','opacity: 1; cursor: progress');
    setTimeout( () => {frame.contentWindow.location = currentLink}, 600);


    
    frame.onload = () => {
        setTimeout( () => {
            let currentTheme = document.body.getAttribute('class');
            frame.contentDocument.styleSheets[0].cssRules[3].style.setProperty('transition','unset');
            frame.contentDocument.styleSheets[0].cssRules[4].style.setProperty('transition','unset');
            currentTheme.includes('dark-theme') ?  frame.contentDocument.body.setAttribute('class','dark-theme') : frame.contentDocument.body.setAttribute('class','light-theme');
        },700);

        setTimeout( ()=> {
            document.getElementById('LoadScreen').setAttribute('style','opacity: 0; display: none');
            frame.contentDocument.styleSheets[0].cssRules[3].style.setProperty('transition','color 0.5s ease, background 0.5s ease');
            frame.contentDocument.styleSheets[0].cssRules[4].style.setProperty('transition','color 0.5s ease, background 0.5s ease');
        }, 750);
    };
};

