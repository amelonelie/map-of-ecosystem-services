const buttons = document.querySelectorAll('.segmented-button');
const iframe = document.getElementById('map-frame');
const langBtn = document.getElementById('lang-btn');  // Language button for the top-right corner

// Map of translations for different languages
const translations = {
    en: {
        header: "The Map of Ecosystem Services",
        description: "Select an Ecosystem Service Category and explore it in Innsbruck!",
        opinionsHeader: "What Does the Population Say?",
        getInvolvedTitle: "Get Involved!",
        getInvolvedIntro: "Your input is crucial in helping us create a comprehensive map of Innsbruck’s ecosystem services.",
        getInvolvedSteps: [
            "Enter the location name: Share a natural spot in or around Innsbruck that you think provides valuable ecosystem services.",
            "Select the ecosystem service category: Choose whether this location supports provisioning, regulating and maintenance, or cultural services.",
            "Enter the coordinates if you know them."
        ],
        projectInfo: {
            title: "About this Website",
            description: "Our project aims to create a comprehensive, participatory, and interactive map that highlights the various ecosystem services in and around Innsbruck. By mapping natural areas such as forests, rivers, and alpine meadows, the tool will showcase the vital services these ecosystems provide, including water purification, carbon storage, flood regulation, and recreational opportunities. This interactive platform invites local residents, students, and visitors to explore how nature supports human well-being and contributes to sustainable urban development. Through community involvement, the map will also collect insights and data from citizens, enriching the tool and fostering greater environmental awareness. Designed as both an educational resource and a practical guide for planners and policymakers this project helps inform better decision-making for the conservation and sustainable management of Innsbruck’s natural landscapes."
        }
    },
    de: {
        header: "Die Karte der Ökosystemdienstleistungen",
        description: "Wählen Sie eine Kategorie der Ökosystemdienstleistungen und erkunden Sie sie in Innsbruck!",
        opinionsHeader: "Was sagt die Bevölkerung?",
        getInvolvedTitle: "Machen Sie mit!",
        getInvolvedIntro: "Ihr Beitrag ist entscheidend, um eine umfassende Karte der Ökosystemdienstleistungen von Innsbruck zu erstellen.",
        getInvolvedSteps: [
            "Geben Sie den Namen des Ortes ein: Teilen Sie mit uns einen Ort in oder um Innsbruck, der Ihrer Meinung nach wertvolle Ökosystemdienstleistungen bietet.",
            "Wählen Sie die Kategorie der Ökosystemdienstleistung: Wählen Sie, ob dieser Ort unterstützende, regulierende oder kulturelle Dienstleistungen bietet.",
            "Geben Sie die Koordinaten ein, wenn Sie sie kennen."
        ],
        projectInfo: {
            title: "Über diese Webseite",
            description: "Unser Projekt zielt darauf ab, eine umfassende, partizipative und interaktive Karte zu erstellen, die die verschiedenen Ökosystemdienstleistungen in und um Innsbruck aufzeigt. Durch die Kartierung von Gebieten wie Wäldern, Flüssen und Almwiesen wird das Tool die lebenswichtigen Leistungen dieser Ökosysteme aufzeigen, darunter Wasserreinigung, Kohlenstoffspeicherung, Hochwasserregulierung und Erholungsmöglichkeiten. Diese interaktive Plattform lädt Anwohner, Studierende und Besuchende dazu ein, zu erkunden, wie die Natur das menschliche Wohlbefinden unterstützt und zu einer nachhaltigen Stadtentwicklung beiträgt. Durch die Beteiligung der Bevölkerung wird die Karte auch Erkenntnisse und Daten von Bürgern sammeln, die das Projekt bereichern und ein größeres Umweltbewusstsein fördern. Das Projekt ist sowohl als pädagogische Ressource als auch als praktischer Leitfaden für Planer und politische Entscheidungsträger konzipiert und trägt zu einer besseren Entscheidungsfindung für die Erhaltung und nachhaltige Bewirtschaftung der Innsbrucker Naturlandschaften bei."
        }
    }
};

// Function to switch between languages
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

// Function to update map links based on language
function updateMapLinks(lang) {
    const mapBasePath = `maps/${lang}/`;

    document.querySelectorAll('.segmented-button').forEach(button => {
        const originalMap = button.getAttribute('data-original-map');
        if (!originalMap) {
            console.error("data-original-map attribute missing for button:", button);
            return;
        }

        // Update the map path with the language base path
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

// Event listener for language switch button in the top-right corner
langBtn.addEventListener('click', () => {
    const currentLang = langBtn.getAttribute('data-lang');
    const newLang = currentLang === 'en' ? 'de' : 'en';
    switchLanguage(newLang);
    // Update the language button text and data-lang attribute
    langBtn.textContent = newLang === 'en' ? '🇬🇧 English' : '🇩🇪 Deutsch';
    langBtn.setAttribute('data-lang', newLang);
});

// Set the default language when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const defaultLang = 'en'; // Set default language to English
    langBtn.textContent = '🇬🇧 English';
    langBtn.setAttribute('data-lang', defaultLang);
    switchLanguage(defaultLang);

    // Ensure the first button in the segmented buttons is active
    const firstButton = document.querySelector('.segmented-button');
    if (firstButton) {
        firstButton.classList.add('active');
        document.getElementById('map-frame').src = firstButton.getAttribute('data-map');
    }
});

// Set up event listeners for segmented buttons to change maps
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));  // Remove active class from all buttons
        button.classList.add('active');  // Add active class to the clicked button

        const mapFile = button.getAttribute('data-map');
        iframe.src = mapFile;
    });
});