const buttons = document.querySelectorAll('.segmented-button');
const iframe = document.getElementById('map-frame');
const lang = "en";


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
populateCards(lang);

// Set up event listeners for segmented buttons to change maps
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));  // Remove active class from all buttons
        button.classList.add('active');  // Add active class to the clicked button

        const mapFile = button.getAttribute('data-map');
        iframe.src = mapFile;
    });
});
