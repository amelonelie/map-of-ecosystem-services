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
        buttons: [
            "Provisioning Ecosystem Services",
            "Cultural Ecosystem Services",
            "Regulating and Maintenance Ecosystem Services"
        ], 
        esDefinition: {
            title: "Definition of 25 selected Ecosystem Services",
            citation: "According to Haida et al., 2015",
            buttons: [
                "Provisioning Ecosystem Services",
                "Cultural Ecosystem Services",
                "Regulating and Maintenance Ecosystem Services"
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
        buttons: [
            "Bereitstellende Ökosystemdienstleistungen",
            "Kulturelle Ökosystemdienstleistungen",
            "Regulierende und unterstützende Ökosystemdienstleistungen"
        ], 
        esDefinition: {
            title: "Definition von 25 ausgewählten Ökosystemdienstleistungen",
            citation: "Laut Haida et al., 2015",
            buttons: [
                "Bereitstellende Ökosystemdienstleistungen",
                "Kulturelle Ökosystemdienstleistungen",
                "Regulierende und unterstützende Ökosystemdienstleistungen"
            ]
        }
    }
};


const cardTranslations = {
    en: [
    // Provisioning Services
    { frontText: "Fresh Water", backText: "Provision and storage of fresh water.", color: "#6495ED" },
    { frontText: "Fodder", backText: "Food for domesticated animals.", color: "#6495ED" },
    { frontText: "Food", backText: "Ecosystems provide the conditions for growing food in wild habitats and in managed agro-ecosystems, including crops, livestock, aquaculture, and wild food.", color: "#6495ED" },
    { frontText: "Raw Materials", backText: "Ecosystems provide a great diversity of materials for construction, landscaping, and ornaments.", color: "#6495ED" },
    { frontText: "Medicinal Resources", backText: "Ecosystems provide resources used for biomedical products, natural medicine, pharmaceuticals, etc.", color: "#6495ED" },
    { frontText: "Energy", backText: "Ecosystems provide multiple means, which can be used for energy production, e.g. hydropower, wood fuel and biofuel from agricultural products.", color: "#6495ED" },
    // Regulating and Maintaining Services
    { frontText: "Water Cycle", backText: "Refers to the water cycling affected by plant processes in the system.", color: "#1157D9" },
    { frontText: "Nutrient Cycle", backText: "Recycling and storage of nutrients to maintain healthy soils and productive ecosystems.", color: "#1157D9" },
    { frontText: "Primary Production", backText: "Building of biomass.", color: "#1157D9" },
    { frontText: "Natural Hazard Regulation", backText: "Influence of ecosystems on moderation of extreme events, e.g., storms, floods, rockfalls, or avalanches.", color: "#1157D9" },
    { frontText: "Soil Erosion Regulation", backText: "Vegetation can prevent soil erosion to maintain arable land and to prevent damage from erosion/siltation.", color: "#1157D9" },
    { frontText: "Water Flow Regulation", backText: "Land cover can regulate water run-off and river discharge.", color: "#1157D9" },
    { frontText: "Pollination", backText: "Pollination of wild plants and crops.", color: "#1157D9" },
    { frontText: "Biodiversity", backText: "The presence or absence of selected species, functional groups of species, or species composition.", color: "#1157D9" },
    { frontText: "Habitat", backText: "The provision of suitable habitats for different species, functional groups, or processes essential for ecosystem functioning.", color: "#1157D9" },
    { frontText: "Biological Control", backText: "Control of pests and diseases.", color: "#1157D9" },
    { frontText: "Soil formation and fertility", backText: "Maintenance of the natural productivity of soil", color: "#1157D9" },
    { frontText: "Water quality", backText: "Ecosystems play a role in pollution control/detoxification and filtering of dust particles", color: "#1157D9" },
    { frontText: "Global climate regulation", backText: "Ecosystems play an important role in climate by either sequestering or emitting greenhouse gases", color: "#1157D9" },
    { frontText: "Local climate regulation", backText: "Land cover can locally affect temperature, air moisture, wind, radiation and precipitation", color: "#1157D9" },
    { frontText: "Air quality regulation", backText: "Maintenance of (clean) air", color: "#1157D9" },
    // Cultural Services
    { frontText: "Recreation", backText: "Natural landscapes and urban green spaces play a role in maintaining mental and physical health.", color: "#082B6A" },
    { frontText: "Tourism", backText: "Nature tourism provides economic benefits and is a source of income for many countries.", color: "#082B6A" },
    { frontText: "Aesthetic Appreciation", backText: "Attractive landscapes provide enjoyment of scenery.", color: "#082B6A" },
    { frontText: "Spiritual Values", backText: "Ecosystems are used for religious or historic purposes and can foster a local identity and sense of belonging.", color: "#082B6A" },
],
de: [
    // Bereitstellungsdienstleistungen
    { frontText: "Frischwasser", backText: "Bereitstellung und Speicherung von Frischwasser.", color: "#6495ED" },
    { frontText: "Futter", backText: "Nahrung für domestizierte Tiere.", color: "#6495ED" },
    { frontText: "Lebensmittel", backText: "Ökosysteme schaffen die Bedingungen für den Anbau von Lebensmitteln in wilden Lebensräumen und in bewirtschafteten Agrarökosystemen, einschließlich Nutzpflanzen, Vieh, Aquakultur und Wildnahrung.", color: "#6495ED" },
    { frontText: "Rohstoffe", backText: "Ökosysteme bieten eine große Vielfalt an Materialien für Bau, Landschaftsgestaltung und Ornamente.", color: "#6495ED" },
    { frontText: "Medizinische Ressourcen", backText: "Ökosysteme liefern Ressourcen für biomedizinische Produkte, Naturmedizin, Arzneimittel usw.", color: "#6495ED" },
    { frontText: "Energie", backText: "Ökosysteme bieten verschiedene Möglichkeiten, die zur Energieerzeugung genutzt werden können, z. B. Wasserkraft, Holzenergie und Biokraftstoffe aus landwirtschaftlichen Produkten.", color: "#6495ED" },

    // Regulierung und Erhaltungsdienstleistungen
    { frontText: "Wasserkreislauf", backText: "Bezieht sich auf den Wasserkreislauf, der durch pflanzliche Prozesse im System beeinflusst wird.", color: "#1157D9" },
    { frontText: "Nährstoffkreislauf", backText: "Recycling und Speicherung von Nährstoffen, um gesunde Böden und produktive Ökosysteme zu erhalten.", color: "#1157D9" },
    { frontText: "Primärproduktion", backText: "Aufbau von Biomasse.", color: "#1157D9" },
    { frontText: "Regulierung von Naturgefahren", backText: "Einfluss von Ökosystemen auf die Minderung extremer Ereignisse wie Stürme, Überschwemmungen, Steinschläge oder Lawinen.", color: "#1157D9" },
    { frontText: "Regulierung der Bodenerosion", backText: "Vegetation kann Bodenerosion verhindern, um Ackerland zu erhalten und Schäden durch Erosion/Sedimentation zu vermeiden.", color: "#1157D9" },
    { frontText: "Regulierung des Wasserflusses", backText: "Landbedeckung kann den Wasserabfluss und den Flussabfluss regulieren.", color: "#1157D9" },
    { frontText: "Bestäubung", backText: "Bestäubung von Wildpflanzen und Kulturpflanzen.", color: "#1157D9" },
    { frontText: "Biodiversität", backText: "Das Vorhandensein oder Fehlen ausgewählter Arten, funktionaler Artengruppen oder Artenzusammensetzungen.", color: "#1157D9" },
    { frontText: "Lebensraum", backText: "Die Bereitstellung geeigneter Lebensräume für verschiedene Arten, funktionale Gruppen oder Prozesse, die für das Funktionieren des Ökosystems wesentlich sind.", color: "#1157D9" },
    { frontText: "Biologische Kontrolle", backText: "Bekämpfung von Schädlingen und Krankheiten.", color: "#1157D9" },
    { frontText: "Bodenbildung und Fruchtbarkeit", backText: "Erhaltung der natürlichen Produktivität des Bodens.", color: "#1157D9" },
    { frontText: "Wasserqualität", backText: "Ökosysteme spielen eine Rolle bei der Schadstoffkontrolle/Entgiftung und beim Filtern von Staubpartikeln.", color: "#1157D9" },
    { frontText: "Globale Klimaregulierung", backText: "Ökosysteme spielen eine wichtige Rolle im Klima, indem sie Treibhausgase speichern oder freisetzen.", color: "#1157D9" },
    { frontText: "Lokale Klimaregulierung", backText: "Landbedeckung kann lokal Temperatur, Luftfeuchtigkeit, Wind, Strahlung und Niederschläge beeinflussen.", color: "#1157D9" },
    { frontText: "Regulierung der Luftqualität", backText: "Erhaltung sauberer Luft.", color: "#1157D9" },

    // Kulturelle Dienstleistungen
    { frontText: "Erholung", backText: "Naturlandschaften und städtische Grünflächen spielen eine Rolle für die mentale und physische Gesundheit.", color: "#082B6A" },
    { frontText: "Tourismus", backText: "Naturtourismus bietet wirtschaftliche Vorteile und ist eine Einkommensquelle für viele Länder.", color: "#082B6A" },
    { frontText: "Ästhetische Wertschätzung", backText: "Attraktive Landschaften ermöglichen den Genuss von Szenerien.", color: "#082B6A" },
    { frontText: "Spirituelle Werte", backText: "Ökosysteme werden für religiöse oder historische Zwecke genutzt und können eine lokale Identität und ein Zugehörigkeitsgefühl fördern.", color: "#082B6A" },
]
};


function populateCards(lang) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; // Clear existing cards

    const cardsData = cardTranslations[lang];
    cardsData.forEach(card => {
        // Create card elements
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        const cardInnerDiv = document.createElement("div");
        cardInnerDiv.classList.add("card-inner");

        const cardFront = document.createElement("div");
        cardFront.classList.add("card-front");
        cardFront.style.backgroundColor = card.color;
        cardFront.textContent = card.frontText;

        const cardBack = document.createElement("div");
        cardBack.classList.add("card-back");
        cardBack.textContent = card.backText;

        // Append elements
        cardInnerDiv.appendChild(cardFront);
        cardInnerDiv.appendChild(cardBack);
        cardDiv.appendChild(cardInnerDiv);
        cardContainer.appendChild(cardDiv);
    });
}


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

       // Update Button Texts
    const buttons = document.querySelectorAll('#button-container button');
    buttons.forEach((button, index) => {
        button.textContent = langData.buttons[index];
    });
    // Update ES Definition Title
    document.getElementById('es-definition').textContent = langData.esDefinition.title;

    // Update Citation
    const citationElement = document.querySelector('#ES-container + p');
    citationElement.innerHTML = `According to <a href="https://link.springer.com/article/10.1007/s10113-015-0759-4" target="_blank">${langData.esDefinition.citation}</a>`;

    // Update ES Buttons
    const esButtons = document.querySelectorAll('#ES-container .ESbutton');
    esButtons.forEach((button, index) => {
        button.textContent = langData.esDefinition.buttons[index];
    });
    // Update iframe maps
    updateMapLinks(lang);
    populateCards(lang);
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
