// Скрипт выезжающего по нажатию кнопки футтера
'use strict'
const footer = document.querySelector('#FooterContainer');
const push = document.getElementById('FooterPusher');
const pushIcon = document.getElementById('pushIcon');

document.addEventListener("load", up());

footPush.addEventListener('click', function() {
    if (footer.classList.contains('down')) { up() } else { down() }
});

function setAttributes(footElem, options) {
    Object.keys(options).forEach(function(attr){
        footElem.setAttribute(attr, options[attr])
    })
}

function up() {
    footer.classList.remove('down');
    footer.classList.add('up');
    setAttributes(push, {'style': 'transform: rotate(180deg) translateY(-10px)'});
    setAttributes(pushIcon, {'alt':'Скрыть футтер', 'title':'Скрыть футтер'});
}

function down() {
    footer.classList.remove('up');
    footer.classList.add('down');
    setAttributes(push, {'style': 'transform: rotate(0deg)'});
    setAttributes(pushIcon, {'alt':'Показать футтер', 'title':'Показать футтер'});
} 