const buttons = document.querySelectorAll('.segmented-button');
const iframe = document.getElementById('map-frame');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Change the iframe source
        const mapFile = button.getAttribute('data-map');
        iframe.src = mapFile;
    });
});
const translations = {
    en: {
        header: "The Map of Ecosystem Services",
        description: "Select an Ecosystem Service Category and explore it in Innsbruck!",
        opinionsHeader: "What Does the Population Say?",
        getInvolvedTitle: "Get Involved",
        getInvolvedIntro: "Your input is crucial in helping us create a comprehensive map of Innsbruck’s ecosystem services.",
        getInvolvedSteps: [
            "Enter the location name: Share a natural spot in or around Innsbruck that you think provides valuable ecosystem services.",
            "Select the ecosystem service category: Choose whether this location supports provisioning, regulating and maintenance, or cultural services.",
            "Enter the coordinates if you know them."
        ],
        projectInfo: {
            title: "About this Website",
            description: "Our project aims to create a comprehensive, participatory, and interactive map..."
        }
    },
    de: {
        header: "Die Karte der Ökosystemleistungen",
        description: "Wählen Sie eine Kategorie der Ökosystemdienstleistungen und erkunden Sie sie in Innsbruck!",
        opinionsHeader: "Was sagt die Bevölkerung?",
        getInvolvedTitle: "Mitmachen",
        getInvolvedIntro: "Ihr Beitrag ist entscheidend, um eine umfassende Karte der Ökosystemleistungen von Innsbruck zu erstellen.",
        getInvolvedSteps: [
            "Geben Sie den Namen des Ortes ein: Teilen Sie einen natürlichen Ort in oder um Innsbruck, der Ihrer Meinung nach wertvolle Ökosystemleistungen bietet.",
            "Wählen Sie die Kategorie der Ökosystemdienstleistung: Wählen Sie, ob dieser Ort unterstützende, regulierende oder kulturelle Dienstleistungen bietet.",
            "Geben Sie die Koordinaten ein, wenn Sie sie kennen."
        ],
        projectInfo: {
            title: "Über diese Webseite",
            description: "Unser Projekt zielt darauf ab, eine umfassende, partizipative und interaktive Karte zu erstellen..."
        }
    }
};
function switchLanguage(lang) {
    const langData = translations[lang];
    
    document.querySelector('header h1').textContent = langData.header;
    document.querySelector('p').textContent = langData.description;
    document.getElementById('opinions-header').textContent = langData.opinionsHeader;
    
    // Update Get Involved Section
    document.querySelector('.get-involved-section h2').textContent = langData.getInvolvedTitle;
    document.querySelector('.get-involved-section p').textContent = langData.getInvolvedIntro;
    const steps = document.querySelectorAll('.get-involved-section ol li');
    steps.forEach((li, index) => {
        li.textContent = langData.getInvolvedSteps[index];
    });
    
    // Update Project Info
    document.querySelector('.project-info h2').textContent = langData.projectInfo.title;
    document.querySelector('.project-info p').textContent = langData.projectInfo.description;

    // Update iframe maps
    updateMapLinks(lang);
}
function updateMapLinks(lang) {
    const mapBasePath = `maps/${lang}/`;

    document.querySelectorAll('.segmented-button').forEach(button => {
        // Retrieve the original map path from data-original-map
        const originalMap = button.getAttribute('data-original-map');
        if (!originalMap) {
            console.error("data-original-map attribute missing for button:", button);
            return;
        }

        // Update data-map with the new base path
        const newMapPath = `${mapBasePath}${originalMap}`;
        button.setAttribute('data-map', newMapPath);
    });

    // Update the iframe source if there's an active button
    const activeButton = document.querySelector('.segmented-button.active');
    if (activeButton) {
        const activeMap = activeButton.getAttribute('data-map');
        document.getElementById('map-frame').src = activeMap;
    }
}

document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');

        // Switch language
        const selectedLang = button.getAttribute('data-lang');
        switchLanguage(selectedLang);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const defaultLang = 'en'; // Set default language
    switchLanguage(defaultLang);

    // Ensure the first button is active
    const firstButton = document.querySelector('.segmented-button');
    if (firstButton) {
        firstButton.classList.add('active');
        document.getElementById('map-frame').src = firstButton.getAttribute('data-map');
    }
});

console.log('Lang:', lang);
console.log('Map Base Path:', mapBasePath);
console.log('Updated Map Links:');
document.querySelectorAll('.segmented-button').forEach(button => {
    console.log(button.getAttribute('data-map'));
});