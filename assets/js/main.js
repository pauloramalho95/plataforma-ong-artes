/* ================================================= */
/* MAIN.JS - PONTO DE ENTRADA DO JAVASCRIPT MODULAR  */
/* ================================================= */

import { initMenuMobile } from './modules/menu.js';
import { initFormValidation } from './modules/validacao.js'; 
import { initSpa } from './modules/spa.js'; 
import { initThemeToggle } from './modules/tema.js'; 

document.addEventListener('DOMContentLoaded', () => {
    console.log("Aplicação Círculo das Artes iniciada.");

    initMenuMobile();
    
    const form = document.querySelector('form');
    if (form) {
        initFormValidation(form);
    }
    
    initSpa(); 
    initThemeToggle(); 
});