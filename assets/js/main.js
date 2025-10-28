/* ================================================= */
/* MAIN.JS - PONTO DE ENTRADA DO JAVASCRIPT MODULAR  */
/* ================================================= */

import { initMenuMobile } from './modules/menu.js';
import { initFormValidation } from './modules/validacao.js'; 
import { initSpa } from './modules/spa.js'; 

document.addEventListener('DOMContentLoaded', () => {
    console.log("Aplicação Círculo das Artes iniciada.");

    // Módulo 1: Inicializa o menu hambúrguer
    initMenuMobile();

    // Módulo 2: Inicializa as máscaras e validações do formulário
    const form = document.querySelector('form');
    if (form) {
        initFormValidation(form);
    }
    
    // Módulo 3: Inicializa o sistema de SPA Básico e renderiza os templates
    initSpa(); 
});