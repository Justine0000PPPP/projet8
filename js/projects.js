// =========================
// PROJECTS.JS
// Gestion des projets JSON
// =========================


// =========================
// DOM LOADED
// =========================

document.addEventListener('DOMContentLoaded', () => {

    loadProjects();

});


// =========================
// CHARGER PROJETS JSON
// =========================

async function loadProjects() {

    try {

        // =========================
        // FETCH JSON
        // =========================

        const response = await fetch('./data/projects.json');

        const projects = await response.json();


        // =========================
        // GENERER CARDS
        // =========================

        displayProjects(projects);

    }

    catch (error) {

        console.error(
            'Erreur chargement projets :',
            error
        );

    }

}


// =========================
// AFFICHER PROJETS
// =========================

function displayProjects(projects) {

    // =========================
    // CONTAINER
    // =========================

    const projectsContainer = document.querySelector(
        '.projects-carousel'
    );


    // Vérification

    if (!projectsContainer) return;


    // =========================
    // RESET
    // =========================

    projectsContainer.innerHTML = '';


    // =========================
    // BOUCLE PROJETS
    // =========================

    projects.forEach(project => {

        // =========================
        // CARD
        // =========================

        const projectCard = document.createElement('div');

        projectCard.classList.add('project-card');


        // =========================
        // TEMPLATE HTML
        // =========================

        projectCard.innerHTML = `

            <a href="./projects.html?id=${project.id}">

                <img
                    src="${project.image}"
                    alt="${project.title}"
                >

                <h3>
                    ${project.title}
                </h3>

                <p>
                    ${project.description}
                </p>

            </a>

        `;


        // =========================
        // AJOUT DOM
        // =========================

        projectsContainer.appendChild(projectCard);

    });

}