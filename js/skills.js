// =========================
// SKILLS.JS
// Gestion compétences JSON
// =========================


// =========================
// DOM LOADED
// =========================

document.addEventListener('DOMContentLoaded', () => {

    loadSkills();

});


// =========================
// CHARGER SKILLS JSON
// =========================

async function loadSkills() {

    try {

        // =========================
        // FETCH JSON
        // =========================

        const response = await fetch('./data/skills.json');

        const skills = await response.json();


        // =========================
        // GENERER SKILLS
        // =========================

        displaySkills(skills);

    }

    catch (error) {

        console.error(
            'Erreur chargement compétences :',
            error
        );

    }

}


// =========================
// AFFICHER COMPETENCES
// =========================

function displaySkills(skills) {

    // =========================
    // CONTAINER
    // =========================

    const skillsContainer = document.querySelector(
        '.skills-container'
    );


    // Vérification

    if (!skillsContainer) return;


    // =========================
    // RESET
    // =========================

    skillsContainer.innerHTML = '';


    // =========================
    // BOUCLE SKILLS
    // =========================

    skills.forEach(skill => {

        // =========================
        // CARD
        // =========================

        const skillCard = document.createElement('div');

        skillCard.classList.add('skill-card');


        // =========================
        // TEMPLATE HTML
        // =========================

        skillCard.innerHTML = `

            <img
                src="${skill.icon}"
                alt="${skill.name}"
            >

            <h3>
                ${skill.name}
            </h3>

            <p>
                ${skill.description}
            </p>

            <div class="skill-level">

                <div
                    class="skill-progress"
                    style="width: ${skill.level};"
                ></div>

            </div>

            <span class="skill-percent">
                ${skill.level}
            </span>

        `;


        // =========================
        // AJOUT DOM
        // =========================

        skillsContainer.appendChild(skillCard);

    });

}