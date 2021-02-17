anime({
    targets: '.box-name',
    scale: 3,
    delay:90
});

let skills = [
    {
        id:1,
        title : "PROGRAMMING LANGUAGES",
        elements: [
            {
                name:"JavaScript",
                percentage: 85
            },
            {
                name:"Python",
                percentage: 80
            },
            {
                name:"HTML",
                percentage: 85
            },
            {
                name:"Java",
                percentage: 45
            },
        ]
    },
    {   
        id:2,
        title : "FRONTEND FRAMEWORKS & LIBRARIES",
        elements: [
            {
                name:"Node.js",
                percentage: 72
            },
            {
                name:"D3.js",
                percentage: 35
            },
            {
                name:"React Native",
                percentage: 25
            },
            {
                name:"React.js",
                percentage: 52
            },
            {
                name:"Material UI",
                percentage: 79
            },
            {
                name:"Bootstrap",
                percentage: 85
            },
            
            
        ]
    },
    {
        id:3,
        title : "BACKEND FRAMEWORKS",
        elements: [
            {
                name:"Express.js",
                percentage: 82
            },
            {
                name:"Django",
                percentage: 65
            },  
        ]
    },
    {
        id:4,
        title : "DATABASES",
        elements: [
            {
                name:"MongoDB",
                percentage: 80
            },
            {
                name:"PostgreSQL",
                percentage: 75
            },
            {
                name:"SQLITE 3",
                percentage: 85
            },
            {
                name:"REDIS",
                percentage: 32
            },
            {
                name:"MySQL",
                percentage: 75
            },
        ]
    },
    {
        id:5,
        title : "WEB DESIGN",
        elements: [
            {
                name:"ADOBE XD",
                percentage: 91
            },
        ]
    }
];

//All projects array
let projects = [
    {
        id:1,
        title:"Kin-Hop",

        image:"assets/img/projects/kin-hop.png",

        decription: `Kin-Hop est une startup basée en Republique démocratique du Congo ayant
        pour objectif la promotion de la musique locale. Cette plateforme contient plusieurs fonctionnalités
        poussées comme: Intégration Amazon Web Service (AWS3), les paiements en ligne
        par carte de crédit, la gestion des comptes clients, un BackOffice pour administrateurs et bien d'autres.`,

        technologiesLogoLink: [
            "assets/icomoon/symbol-defs.svg#icon-html5",
            "assets/icomoon/symbol-defs.svg#icon-css3",
            "assets/icomoon/symbol-defs.svg#icon-sass",
            "assets/icomoon/symbol-defs.svg#icon-node-dot-js",
            "assets/icomoon/symbol-defs.svg#icon-mongodb"
            
            
        ]
    }
]

skills.forEach(skill => {
    const container = document.querySelector('.skills-container');
    const HTMLString = `
            <div class="skill-block">
                <span class="block-title">${skill.title}</span>
                <hr class="underline-line">
                <ul class="list" id="skill-list-${skill.id}">
                    
                </ul>
            </div>
        `;
    
        container.innerHTML += HTMLString;

        skill.elements.forEach(element =>{
            const SkillHTMLString = `
            <li class="list-item">
                <span class="name">${element.name}</span>
                <svg class="progress-bar">
                    <rect width="${element.percentage}%" />
                </svg>
            </li>`;
        
            const skillId = `skill-list-${skill.id}`;
            document.getElementById(skillId).innerHTML += SkillHTMLString;
        })
        
});
  


projects.forEach(project =>{
    const container = document.querySelector('.projects-container');

    const projectHTMLString = `
    <div class="project-container">
            <div class="device">
                <div class="row1">
                    <div class="device-btn">
                        <svg class="btn">
                            <circle r="50" fill="gold"/> 
                        </svg>
                        <svg class="btn">
                            <circle r="50" fill="#00ff00"/> 
                        </svg>
                        <svg class="btn">
                            <circle r="50" fill="red"/> 
                        </svg>
                    </div>
                </div>
                <div class="screen" style="">
                <img src="assets/img/projects/kin-hop.png">
                </div>
                <div class="row2">
                    <div class="main-btn"></div>
                </div>
            </div>
            <div class="description">
                <span class="project-title">${project.title}</span>
                <p>${project.decription}</p>
                <div class="technologies-list" id="project-technologies-list-${project.id}">
            
                </div>
            </div>
        </div>`;
        container.innerHTML += projectHTMLString;
        
        project.technologiesLogoLink.forEach(link =>{
            const projectID = `project-technologies-list-${project.id}`;
            document.getElementById(projectID).innerHTML += `
                <svg class="logo">
                    <use href="${link}"></use>
                </svg>`;
        });
});
 