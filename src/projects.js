import cvIcon from './assets/projects-icons/cv.svg';
import cIcon from './assets/projects-icons/c.svg'
import rpgIcon from './assets/projects-icons/rpg.svg'

const projects = [

    {

        name:'Meu Curriculum Vitae',
        about:'Essa página frontend feita em React é um dos meus primeiros projetos web, quis dar esse destaque especial pois fiz com muito carinho para compilar minhas habilidades e conhecimentos',
        img:cvIcon,
        tags:[
            
            {text:'React', type:'react'},
            {text:'Javascript', type:'js'},
            {text:'HTML', type:'html'},
            {text:'CSS', type:'css'},
        ],
        link:'https://github.com/Ilwel/curriculum',

    },
    {

        name:'Lista Encadeada em C',
        about:'Me desafiei a implementar essa clássica estrutura de dados seguindo a forte sintaxe dessa linguagem',
        img:cIcon,
        tags:[
            
            {text:'C', type:'css'},
            {text:'Structured Data', type:'node'},
        ],
        link:'https://github.com/Ilwel/listaEncadeadaC',

    },
    {

        name:'SMC CRUD',
        about:'Fiz um simples CRUD em Express para gerenciar fichas de rpg armazenadas em um banco de dados mySql',
        img:rpgIcon,
        tags:[
            
            {text:'NodeJS', type:'node'},
            {text:'Javascript', type:'js'},
            {text:'mySQL', type:'css'},
            {text:'Bootstrap', type:'bt'},
        ],
        link:'https://github.com/Ilwel/smc_crud',

    },

]

export default projects;