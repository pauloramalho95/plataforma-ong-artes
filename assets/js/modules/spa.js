/* ================================================= */
/* MÓDULO: SPA.JS - SINGLE PAGE APPLICATION BÁSICO */
/* Requisito: Implementar sistema de Single Page Application (SPA) básico */
/* ================================================= */

import { getAllProjects, createProjectCardTemplate } from './templates.js';

// Função para renderizar a lista de cards
function renderProjectCards() {
    const container = document.querySelector('.cards-container');

    if (!container) return; 

    const projects = getAllProjects();
    
    // 1. Limpa o container
    container.innerHTML = ''; 

    // 2. Itera sobre os dados e insere o template HTML
    projects.forEach(project => {
        const htmlString = createProjectCardTemplate(project);
        container.innerHTML += htmlString;
    });

    console.log("SPA Básico: Projetos renderizados dinamicamente.");
}


// Função Principal que será chamada pelo main.js
export function initSpa() {
    renderProjectCards();
    console.log("Módulo SPA Básico iniciado.");
}