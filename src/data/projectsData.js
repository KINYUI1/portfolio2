import inventoryBackend from '../images/inventory backend.png'
import inventoryFrontend from '../images/inventory front end.png'
import reel_List from '../images/Reel_List.png'
import classpilot from '../images/classpilot.png'
import guessingGame from '../images/numberGuessingGame.png'
import eCommerceApi from '../images/eCommerceApi.png'
import { nanoid } from 'nanoid' 
const projects = [
    {
        name:'ClassPilot',
        overview:'This is a full stack class management application build with react js, node js, express js and mongo db. This project was aimed at serving the academic environment for both the teachers and the the students. I handled the scaffolding, the built of the backend and the set up of the run environment with docker for the entire project.',
        technologies:['Material UI','reactJS','Node JS','axios','react-dom','Express JS','Mongo DB', 'Bcrypt', 'Cors', 'Mongoose ODM', 'DotENV'],
        github:'https://github.com/E-DISTRICT/Class-Management',
        deployed:'https://usplash-image-search.netlify.app/',
        image:classpilot,
        id:nanoid()
    },
    {
        name:'Reel List ',
        overview:'Reel List is a simple and user-friendly movie tracking app where users can search for movies and create their own personal watchlist. Built with React and styled using Tailwind CSS, this app leverages the TMDB API to fetch trending movies and search results. I contributed on the logical aspect of the code making sure all the components render correctly',
        technologies:['React JS', 'Tailwind CSS', 'Vite', 'TMDB API'],
        github:'https://github.com/devs-cr/Reel-List',
        deployed:'https://jobs-api-8p9p.onrender.com/api-docs/',
        image:reel_List,
        id:nanoid()
    },
    {
        name:'Promos & Perks API',
        overview:'This project was developed to showcase technical proficiency in Spring Security, utilizing JWT, authentication/authorization, and BCrypt',
        technologies:['Bcrypt', 'Spring Boot', 'Spring Security', 'JWT', 'Java', 'Maven'],
        github:'https://github.com/Promo-Pros/promos-perks-api',
        image:eCommerceApi,
        deployed:"https://e-commerce-api-2.onrender.com/",
        id:nanoid()
    },
    {
        name:'Inventory App Front End',
        overview:'This is an inventory app front end which i built to demonstrate my skills with front end technologies. It has features like view all inventory, view a single inventory, adding to inventory, removing from inventory.',
        technologies:['HTML 5','CSS 3','JavaScript'],
        github:'https://github.com/Clement-Ndimuangu/Inventory-app-frontend-react',
        deployed:'https://github.com/Clement-Ndimuangu/Inventory-app-frontend-react',
        image:inventoryFrontend,
        id:nanoid()
    },{
        name:'Inventory App Back End',
        overview:'This is an inventory app Back end which i built to demonstrate my skills with Back end technologies. It has routs like view all inventory, view a single inventory, adding to inventory, removing from inventory.',
        technologies:['Java','Docker','spring boot'],
        github:'https://github.com/Clement-Ndimuangu/Inventory-app-backend-java',
        deployed:'https://github.com/Clement-Ndimuangu/Inventory-app-backend-java',
        image:inventoryBackend,
        id:nanoid()
    },
]

export default projects