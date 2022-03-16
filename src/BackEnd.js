import "./Projets.css";
import thumb1 from "./thumb1.png"
import { IoLogoReact } from 'react-icons/io';
import { MdOutlineInfo } from 'react-icons/md';
import { HiOutlineChevronRight } from 'react-icons/hi';
import Slider from './components/NetflixSlider'

{/*
const projets = [
  {
		number: 1,
    title: "Oussama à l’EMSI",
    year: "2018",
    thumb: "proj_irrigation",
    time: "2 ans",
    desc: 'Aprés avoir obtenu son Bac S à Marrakech, Oussama débarque à l’EMSI de Casablanca (École Marocaine des Sciences de l\'Ingénieur) pour découvrir le monde de l\’informatique et devenir un développeur.',
	},
  {
		number: 2,
    title: "En Route vers la Licence",
    year: "2020",
    thumb: "proj_autoneumVBA",
    time: "1 an",
    desc: 'Oussama fait le choix d’aller étudier en France et d\'intégrer une licence informatique à l\’Université de Rouen Normandie.',
	},
  {
		number: 3,
    title: "proj_univMaintenance",
    year: "2021",
    thumb: "proj_univMaintenance",
    time: "5 mois",
    desc: 'Oussama doit réaliser un stage de 3 mois pour ses études. Mais avec une prolongation de stage, il passe 5 mois avec AUTONEUM à Aubergenville, pour développer un outil d\’évaluation de budget ...',
	},
  {
		number: 4,
    title: "Jamais 3 sans 5, un Master GIL",
    year: "2021/2023",
    thumb: "proj_linuxdeamon",
    time: "2 ans",
    desc: 'Son diplome de licence informatique en poche, Oussama continue l\’aventure à l\’Université de Rouen Normandie en choisissant le Master Génie de l\'Informatique Logiciel.',
	},
  {
		number: 4,
    title: "Jamais 3 sans 5, un Master GIL",
    year: "2021/2023",
    thumb: "proj_Store",
    time: "2 ans",
    desc: 'Son diplome de licence informatique en poche, Oussama continue l\’aventure à l\’Université de Rouen Normandie en choisissant le Master Génie de l\'Informatique Logiciel.',
	},
];
*/}

const movies = [
  {
    id: 1,
    image: '/node.jpg',
    imageBg: '/react.jpg',
    title: 'Smart irrigation',
    descFr: 'Développement d’un site web et d’une application mobile permettant le contrôle d’un système d’irrigation à distance',
    descEn: 'Development of a website and a mobile application allowing remote control of an irrigation system',
    lang: ['React', 'Tailwind', 'MySQL',],
  },
  {
    id: 3,
    image: '/java.jpg',
    imageBg: '/typescript.jpg',
    title: 'Maintenance app',
    descFr: 'Permettant aux utilisateurs de scanner un code QR ou de visiter une URL d’une ressource, donnant accès à son formulaire de rapport d’anomalie. Le rapport sera transmis directement à l’agent responsable de la ressource.',
    descEn: 'Allowing users to scan a QR code or visit a URL of a resource, giving access to its anomaly report form. The report will be transferred directly to the agent in charge of the resource.',
    lang: ['React', 'NodeJS', 'MongoDB',],
  },
  {
    id: 2,
    image: '/django.jpg',
    imageBg: '/tailwind.jpg',
    title: 'VBA tool',
    descFr: 'Développement d’un outil pour évaluer le budget et gérer la charge de travail / le département, la fonction et le projet. l’outil pourra évoluer dans le futur pour étendre l’application à d’autres services, d’autres familles de produits…',
    descEn: 'I built a tool to evaluate the budget & manage the workload / dept, function & project. the tool could evolve in the future to extend the application to other departments, other product families…',
    lang: ['Excel VBA',],
  },
  {
    id: 4,
    image: '/mysql.jpg',
    imageBg: '/figma.jpg',
    title: 'Linux deamon',
    descFr: 'composé d’un démon et d’un client : un client peut faire une requête et le démon se chargera de traiter les requêtes de plusieurs clients.',
    descEn: 'composed of a daemon and a client: A client can make a request & the daemon will take care of processing requests of multiple clients.',
    lang: ['Linux', 'POSIX',],
  },
  {
    id: 5,
    image: '/mongodb.jpg',
    imageBg: '/proj_Store1.jpg',
    title: 'Ecommerce store',
    descFr: 'Développement d’un site ecommerce permettant de mettre en vente différentes catégorie de vétements.',
    descEn: 'e-commerce website proposing different categories of clothing.',
    lang: ['JS', 'CSS', 'HTML',],
  },
  {
    id: 6,
    image: '/proj_Store1.jpg',
    imageBg: '/proj_Store1.jpg',
    title: 'Ecommerce store',
    descFr: 'Développement d’un site ecommerce permettant de mettre en vente différentes catégorie de vétements.',
    descEn: 'e-commerce website proposing different categories of clothing.',
  },
];


function BackEnd() {
    return (
      
      

            <div className="banner container mx-auto">
            <h1 className="text-white font-bold xl:text-2xl text-2xl relative top-10 flex pl-5 xl:pl-14 pb-10">BackEnd<span className="text-white pl-1 pt-2"><HiOutlineChevronRight size={23}/></span></h1>
              <Slider>
                {movies.map(movie => (
                  <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
                ))}
              </Slider>

            </div>
    );
  }
  
  export default BackEnd;
  
  
  
  
  
  
  {/*<section className="banner">
        <div className="z-30 w-full projets">
            <div className="container ">
              <h1 className="text-white font-bold xl:text-3xl text-2xl relative top-10 flex pl-5 xl:pl-0">Projets<span className="text-white pl-1 pt-2"><HiOutlineChevronRight size={23}/></span></h1>
              <div class="grid gap-x-10 gap-y-16 grid-cols-1 xl:grid-cols-5 place-items-center pt-20 pb-14 xl:pl-0">
              {projets.map((ep) =>{
                  return(
                      <div className={`${ep.thumb}  proj_thumb bg-cover`}>
                        
                      </div>
                  );
              })}
                
                              
                              
              </div>
            </div>
        </div>
            </section>*/
          }