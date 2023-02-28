'use strict'

const tabItem = document.querySelectorAll('.tabs__btn-item')
const tabContent = document.querySelectorAll('.tabs__content-item')

tabItem.forEach(function(element) {
    element.addEventListener('click', openContent)
})

function openContent(event) {
    const tabTarget = event.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item) {
        item.classList.remove('tabs__btn-item--active')
    })

    tabContent.forEach(function(item){
        item.classList.remove('tabs__content-item--active')
    })

    tabTarget.classList.add('tabs__btn-item--active')

    document.querySelector(`#${button}`).classList.add('tabs__content-item--active')
}

//burger

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.navigation__list');

menuBtn.addEventListener('click', ()=> {
    menu.classList.toggle('navigation__list--active')
})