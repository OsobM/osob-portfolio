
/* ==========================================
   THE OSOB FILES
   Tab Navigation and Page Content
========================================== */


/* SIX WEBSITE SECTIONS */

const sections = [

    // ABOUT ME
    {
        tab: "ABOUT ME",
        color: "#d9826d",
        heading: "A little about me.",
        kicker: "Dear reader,",

        description:
            "Welcome to my little corner of the internet. " +
            "A growing collection of stories, photographs, " +
            "observations, and all the odds and ends that make me who I am.",

        a: [
            "An introduction",
            "This is where my personal stories and photographs will live."
        ],

        b: [
            "Things worth keeping",
            "A collection of the people, places, and ideas that shape my world."
        ]
    },


    // ART
    {
        tab: "ART",
        color: "#d8b45e",
        heading: "The art of making.",
        kicker: "Drawn, collected, and unfinished",

        description:
            "A place for the things I make: sketches, design experiments, " +
            "photographs, visual notes, and ideas that have yet to become something.",

        a: [
            "The sketchbook",
            "A home for artwork and creative experiments."
        ],

        b: [
            "Works in progress",
            "Not everything worth sharing has to be finished."
        ]
    },


    // SCHOOL
    {
        tab: "SCHOOL",
        color: "#89ab99",
        heading: "Notes from school.",
        kicker: "Filed under: learning",

        description:
            "My academic journey in computer science, " +
            "from coursework and research to small discoveries made along the way.",

        a: [
            "Course notes",
            "Selected coursework, lessons, and class projects."
        ],

        b: [
            "Research & projects",
            "An index of questions I have tried to answer."
        ]
    },


    // CAREER
    {
        tab: "CAREER",
        color: "#84a8bc",
        heading: "Work & experience.",
        kicker: "The professional record",

        description:
            "My résumé, experience, technical projects, " +
            "and the work I hope to keep doing. Part history, part work in progress.",

        a: [
            "The résumé",
            "Education, experience, skills, and accomplishments."
        ],

        b: [
            "Selected work",
            "Projects and professional work I would like to share."
        ]
    },


    // CURRENTLY
    {
        tab: "CURRENTLY",
        color: "#b49baa",
        heading: "As of lately...",
        kicker: "In the present tense",

        description:
            "A running collection of what I am reading, watching, " +
            "listening to, learning, and thinking about right now.",

        a: [
            "On my mind",
            "Thoughts, passing fascinations, and little observations."
        ],

        b: [
            "Recently discovered",
            "A shelf of recommendations and curiosities."
        ]
    },


    // HOBBIES
    {
        tab: "HOBBIES",
        color: "#c79a6d",
        heading: "Odds & ends.",
        kicker: "Outside the margins",

        description:
            "Hobbies, little adventures, collections, " +
            "and everything I enjoy for no reason other than the joy of it.",

        a: [
            "Spare-time pursuits",
            "The things I enjoy doing just for fun."
        ],

        b: [
            "Little adventures",
            "Places visited, memories collected, and stories to tell."
        ]
    }

];


/* CONNECT JAVASCRIPT TO HTML */

const archive = document.getElementById("archive");
const tabs = document.getElementById("tabs");
const directory = document.getElementById("directory");


/* CREATE TOP TABS AND DIRECTORY BUTTONS */

sections.forEach((section, index) => {

    // Top binder tab
    const tabButton = document.createElement("button");

    tabButton.type = "button";
    tabButton.textContent = section.tab;

    // Give each tab its own color
    tabButton.style.setProperty("--c", section.color);

    // Switch pages when clicked
    tabButton.addEventListener("click", () => {
        showSection(index);
    });

    tabs.appendChild(tabButton);


    // Left-side directory button
    const directoryButton = document.createElement("button");

    directoryButton.type = "button";
    directoryButton.className = "mini-button";
    directoryButton.textContent = section.tab.toLowerCase();

    directoryButton.addEventListener("click", () => {
        showSection(index);
    });

    directory.appendChild(directoryButton);

});


/* UPDATE TEXT ON THE PAGE */

function updateText(elementId, newText) {
    document.getElementById(elementId).textContent = newText;
}


/* SHOW THE SELECTED SECTION */

function showSection(index) {

    const section = sections[index];

    // Change paper background to match the tab
    archive.style.setProperty("--paper", section.color);


    // Highlight selected top tab
    [...tabs.children].forEach((button, buttonIndex) => {

        button.setAttribute(
            "aria-selected",
            String(index === buttonIndex)
        );

    });


    // Mark active directory button
    [...directory.children].forEach((button, buttonIndex) => {

        button.setAttribute(
            "aria-current",
            index === buttonIndex ? "page" : "false"
        );

    });


    // Generate file number
    const fileNumber = String(index + 1).padStart(3, "0");


    // Update file information
    updateText(
        "record",
        "PERSONAL RECORDS / " + String(index + 1).padStart(2, "0")
    );

    updateText("file", "FILE NO. " + fileNumber);


    // Update main content
    updateText("kicker", section.kicker);
    updateText("heading", section.heading);
    updateText("description", section.description);


    // Update journal
    updateText("note1Title", section.a[0]);
    updateText("note1Text", section.a[1]);


    // Update clippings
    updateText("note2Title", section.b[0]);
    updateText("note2Text", section.b[1]);


    // Update footer
    updateText("foot", "— " + fileNumber + " —");


    // Update browser tab title
    document.title = section.tab + " — The Osob Files";
}


/* OPEN ABOUT ME FIRST */

showSection(0);
