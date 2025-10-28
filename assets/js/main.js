/* ================================================= */
/* MAIN.JS - PONTO DE ENTRADA DO JAVASCRIPT MODULAR  */
/* Estado Final da Entrega 3 e Acessibilidade (Antes da Minificação) */
/* ================================================= */

import { initMenuMobile } from './modules/menu.js';
import { initFormValidation } from './modules/validacao.js'; 
import { initSpa } from './modules/spa.js'; 
// NOVO IMPORT DA ENTREGA 4
import { initThemeToggle } from './modules/tema.js'; 

document.addEventListener('DOMContentLoaded', () => {
    console.log("Aplicação Círculo das Artes iniciada.");

    // Módulos da Entrega 3
    initMenuMobile();
    
    // Inicializa as máscaras e validações do formulário
    const form = document.querySelector('form');
    if (form) {
        initFormValidation(form);
    }
    
    // Inicializa o sistema de SPA Básico e renderiza os templates
    initSpa(); 

    // MÓDULO DA ENTREGA 4: Inicializa o toggle de tema (Modo Escuro)
    initThemeToggle(); 
});