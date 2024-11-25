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
        },
        ecosystemServices: {
            provisioning: [
                { title: "Fresh Water", description: "Provision and storage of fresh water." },
                { title: "Fodder", description: "Food for domesticated animals." },
                { title: "Food", description: "Ecosystems provide the conditions for growing food in wild habitats and in managed agro-ecosystems, including crops, livestock, aquaculture, and wild food." },
                { title: "Raw Materials", description: "Ecosystems provide a great diversity of materials for construction, landscaping, and ornaments." },
                { title: "Medicinal Resources", description: "Ecosystems provide resources used for biomedical products, natural medicine, pharmaceuticals, etc." },
                { title: "Energy", description: "Ecosystems provide multiple means, which can be used for energy production, e.g. hydropower, wood fuel and biofuel from agricultural products." }
            ],
            regulating: [
                { title: "Water Cycle", description: "Refers to the water cycling affected by plant processes in the system." },
                { title: "Nutrient Cycle", description: "Recycling and storage of nutrients to maintain healthy soils and productive ecosystems." },
                { title: "Primary Production", description: "Building of biomass." },
                { title: "Natural Hazard Regulation", description: "Influence of ecosystems on moderation of extreme events, e.g., storms, floods, rockfalls, or avalanches." },
                { title: "Soil Erosion Regulation", description: "Vegetation can prevent soil erosion to maintain arable land and to prevent damage from erosion/siltation." },
                { title: "Water Flow Regulation", description: "Land cover can regulate water run-off and river discharge." },
                { title: "Pollination", description: "Pollination of wild plants and crops." },
                { title: "Biodiversity", description: "The presence or absence of selected species, functional groups of species, or species composition." },
                { title: "Habitat", description: "The provision of suitable habitats for different species, functional groups, or processes essential for ecosystem functioning." },
                { title: "Biological Control", description: "Control of pests and diseases." }
            ],
            cultural: [
                { title: "Recreation", description: "Natural landscapes and urban green spaces play a role in maintaining mental and physical health." },
                { title: "Tourism", description: "Nature tourism provides economic benefits and is a source of income for many countries." },
                { title: "Aesthetic Appreciation", description: "Attractive landscapes provide enjoyment of scenery." },
                { title: "Spiritual Values", description: "Ecosystems are used for religious or historic purposes and can foster a local identity and sense of belonging." }
            ]
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
        },
        ecosystemServices: {
            provisioning: [
                { title: "Frisches Wasser", description: "Bereitstellung und Speicherung von frischem Wasser." },
                { title: "Futter", description: "Futter für domestizierte Tiere." },
                { title: "Lebensmittel", description: "Ökosysteme bieten die Bedingungen für den Anbau von Nahrungsmitteln in wilden Lebensräumen und in bewirtschafteten Agro-Ökosystemen, einschließlich Nutzpflanzen, Viehzucht, Aquakultur und Wildnahrung." },
                { title: "Rohstoffe", description: "Ökosysteme bieten eine große Vielfalt an Materialien für Bau, Landschaftsgestaltung und Dekoration." },
                { title: "Medizinische Ressourcen", description: "Ökosysteme liefern Ressourcen, die für biomedizinische Produkte, Naturmedizin, Pharmazeutika usw. verwendet werden." },
                { title: "Energie", description: "Ökosysteme bieten verschiedene Möglichkeiten, die für die Energieproduktion genutzt werden können, z.B. Wasserkraft, Holzenergie und Biokraftstoffe aus landwirtschaftlichen Produkten." }
            ],
            regulating: [
                { title: "Wasserkreislauf", description: "Bezieht sich auf den Wasserkreislauf, der durch pflanzliche Prozesse im System beeinflusst wird." },
                { title: "Nährstoffkreislauf", description: "Recycling und Speicherung von Nährstoffen zur Erhaltung gesunder Böden und produktiver Ökosysteme." },
                { title: "Primärproduktion", description: "Aufbau von Biomasse." },
                { title: "Regulierung von Naturgefahren", description: "Einfluss von Ökosystemen auf die Mäßigung extremer Ereignisse wie Stürme, Überschwemmungen, Felsstürze oder Lawinen." },
                { title: "Bodenerosionsregulierung", description: "Vegetation kann Bodenerosion verhindern, um Ackerland zu erhalten und Schäden durch Erosion/Versiegelung zu verhindern." },
                { title: "Regulierung des Wasserflusses", description: "Landbedeckung kann den Wasserabfluss und die Flussentladung regulieren." },
                { title: "Bestäubung", description: "Bestäubung von Wildpflanzen und Nutzpflanzen." },
                { title: "Biodiversität", description: "Das Vorhandensein oder Fehlen ausgewählter Arten, funktioneller Gruppen von Arten oder Artenspezifikationen." },
                { title: "Lebensräume", description: "Bereitstellung geeigneter Lebensräume für verschiedene Arten, funktionelle Gruppen oder Prozesse, die für das Funktionieren des Ökosystems wichtig sind." },
                { title: "Biologische Kontrolle", description: "Kontrolle von Schädlingen und Krankheiten." }
            ],
            cultural: [
                { title: "Erholung", description: "Natürliche Landschaften und städtische Grünflächen tragen zur Erhaltung der geistigen und körperlichen Gesundheit bei." },
                { title: "Tourismus", description: "Naturtourismus bringt wirtschaftliche Vorteile und ist eine Einkommensquelle für viele Länder." },
                { title: "Ästhetische Wertschätzung", description: "Attraktive Landschaften bieten Freude an der Szenerie." },
                { title: "Spirituelle Werte", description: "Ökosysteme werden für religiöse oder historische Zwecke genutzt und können eine lokale Identität und ein Zugehörigkeitsgefühl fördern." }
            ]
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

document.addEventListener('DOMContentLoaded', () => {
    const defaultLang = 'en'; // Set default language to English
    langBtn.textContent = '🇬🇧 English';
    langBtn.setAttribute('data-lang', defaultLang);
    updateMapLinks(defaultLang);

    // Ensure the first button in the segmented buttons is active
    const firstButton = document.querySelector('.segmented-button');
    if (firstButton) {
        firstButton.classList.add('active');
        iframe.src = firstButton.getAttribute('data-map');
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