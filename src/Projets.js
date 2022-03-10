import "./Projets.css";
import thumb1 from "./thumb1.png"
import { IoIosPlay } from 'react-icons/io';
import { MdOutlineInfo } from 'react-icons/md';
import { HiOutlineChevronRight } from 'react-icons/hi';


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


function Projets() {
    return (
      <section className="banner">
        <div className="z-30 w-full projets">
            <div className="container mx-auto">
              <h1 className="text-white font-bold xl:text-3xl text-2xl relative top-10 flex pl-5 xl:pl-0">Projets<span className="text-white pl-1 pt-2"><HiOutlineChevronRight size={23}/></span></h1>
              <div class="grid gap-x-1 gap-y-10 grid-cols-1 xl:grid-cols-5 place-items-center pt-20 pb-14 ">
              {projets.map((ep) =>{
                  return(
                      <div className={`${ep.thumb}  proj_thumb bg-cover`}>
                        
                      </div>
                  );
              })}
                
                              
                              
              </div>
            </div>
        </div>
      </section>
    );
  }
  
  export default Projets;