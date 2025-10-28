/* ================================================= */
/* MÓDULO: TEMPLATES.JS - ESTRUTURAS DE HTML REUTILIZÁVEIS */
/* Requisito: Criar sistema de templates JavaScript */
/* ================================================= */

// Simula dados vindos de um banco de dados
const projectData = [
    {
        id: 1,
        title: "Orquestra Jovem em Expansão",
        category: "Música",
        status: "Concluído",
        description: "Projeto que ensina instrumentos e teoria musical a 80 jovens.",
        impact: "300 vidas transformadas",
        image: "imagens/orquestra-jovem.jpg"
    },
    {
        id: 2,
        title: "Oficinas de Teatro Comunitário",
        category: "Teatro",
        status: "Em Andamento",
        description: "Utilizando o teatro como ferramenta de expressão e diálogo social.",
        impact: "50 apresentações anuais",
        image: "imagens/grupo-teatro.jpg"
    },
    {
        id: 3,
        title: "Laboratório de Artes Visuais",
        category: "Artes Visuais",
        status: "Pendente",
        description: "Campanha para equipar o novo laboratório para aulas de pintura e escultura.",
        impact: "Meta de R$ 10.000,00",
        image: "imagens/jovem-pintando.jpg" 
    }
];

// Função que gera a string HTML para um Card de Projeto
export function createProjectCardTemplate(projeto) {
    const statusClass = projeto.status === 'Concluído' ? 'badge-sucesso' : 
                        projeto.status === 'Em Andamento' ? 'badge-neutro' : 
                        'badge-secundario'; // Pendente/Campanha

    return `
        <article class="card">
            <img src="${projeto.image}" alt="Capa do projeto ${projeto.title}" class="card-imagem">
            <div class="card-content">
                <span class="badge ${statusClass}">${projeto.status}</span>
                <h3 id="project-${projeto.id}">${projeto.title}</h3>
                <p>${projeto.description}</p>
                <p><strong>Impacto:</strong> ${projeto.impact}</p>
                
                <a href="#" class="btn btn-secundario">Ver Detalhes</a>
            </div>
        </article>
    `;
}

// Retorna todos os dados para o módulo SPA
export function getAllProjects() {
    return projectData;
}