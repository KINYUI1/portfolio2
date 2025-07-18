import unsplashImages from '../images/unsplash-images.png'
import reel_List from '../images/Reel_List.png'
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
        image:unsplashImages,
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
        name:'Number Guessing game',
        overview:'This is a game build with HTML 5, CSS3 and vanilla JavaScript. it starts by generating a random number value between and and 50 giving you five attempts in the first level to figure the value. there is an input field for you to input your answer and check. it response with the right directive telling you if your answer is above the random value, less than or you have the correct answer. if after five attempts you cant figure out the right answer you loose a life and you have a total of three lives. if you if you get the answer correctly you get a correct value increase and having three correct values you move to the next level and the number of attempts decrease by one with the same rules applying.You loose the game if you fail three times in a single level which is 15 attempts in level 1. there are sound effects depending on what action that you take and background music.something very significant at the upper left angle of the screen',
        technologies:['HTML 5','CSS 3','JavaScript'],
        github:'https://github.com/KINYUI1/MOD1-PROJECT',
        deployed:'https://kinyui1.github.io/MOD1-PROJECT/',
        image:guessingGame,
        id:nanoid()
    },
]

export default projects