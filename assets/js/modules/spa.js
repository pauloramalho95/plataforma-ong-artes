import { getAllProjects, createProjectCardTemplate } from './templates.js';

function renderProjectCards() {
    const container = document.querySelector('.cards-container');
    if (!container) return; 

    const projects = getAllProjects();
    
    container.innerHTML = ''; 

    projects.forEach(project => {
        const htmlString = createProjectCardTemplate(project);
        container.innerHTML += htmlString;
    });
    console.log("SPA Básico: Projetos renderizados dinamicamente.");
}

export function initSpa() {
    renderProjectCards();
    console.log("Módulo SPA Básico iniciado.");
}