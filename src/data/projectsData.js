import inventoryBackend from '../images/inventory backend.png'
import inventoryFrontend from '../images/inventory front end.png'
import inventoryFrontendGroup from '../images/Irving99.png'
import reel_List from '../images/Reel_List.png'
import classpilot from '../images/classpilot.png'
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
        overview:'This project was developed to showcase technical proficiency in Spring Security, utilizing JWT, authentication/authorization, and BCrypt. I personally contributed to the project by building up the project scaffolding using the spring initializr website, outline the different project layers separating the controller, service and the repository layers. I also added the db connection using the spring data jpa.',
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
    {
        name:'Inventory App Front End (Group Project)',
        overview:'This is an inventory app front end which we built to demonstrate our skills with front end technologies. It has features like view all inventory, view a single inventory, adding to inventory, removing from inventory. I contributed by building the scaffolding with Vite, Routes with React Router and ',
        technologies:['HTML 5','CSS 3','JavaScript', 'Reactjs'],
        github:'https://github.com/irving-99/inventory-app?tab=readme-ov-file',
        deployed:'https://github.com/irving-99/inventory-app?tab=readme-ov-file',
        image:inventoryFrontendGroup,
        id:nanoid()
    }
]

export default projects