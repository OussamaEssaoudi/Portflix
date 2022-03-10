import "./Episodes.css";
import thumb1 from "./thumb1.png"
import { IoIosPlay } from 'react-icons/io';
import { MdOutlineInfo } from 'react-icons/md';
import { HiOutlineChevronRight } from 'react-icons/hi';


const episodes = [
  {
		number: 1,
    title: "Oussama à l’EMSI",
    year: "2018",
    thumb: "thumb-epi1",
    time: "2 ans",
    desc: 'Aprés avoir obtenu son Bac S à Marrakech, Oussama débarque à l’EMSI de Casablanca (École Marocaine des Sciences de l\'Ingénieur) pour découvrir le monde de l\’informatique et devenir un développeur.',
	},
  {
		number: 2,
    title: "En Route vers la Licence",
    year: "2020",
    thumb: "thumb-epi2",
    time: "1 an",
    desc: 'Oussama fait le choix d’aller étudier en France et d\'intégrer une licence informatique à l\’Université de Rouen Normandie.',
	},
  {
		number: 3,
    title: "Développer en entreprise",
    year: "2021",
    thumb: "thumb-epi3",
    time: "5 mois",
    desc: 'Oussama doit réaliser un stage de 3 mois pour ses études. Mais avec une prolongation de stage, il passe 5 mois avec AUTONEUM à Aubergenville, pour développer un outil d\’évaluation de budget ...',
	},
  {
		number: 4,
    title: "Jamais 3 sans 5, un Master GIL",
    year: "2021/2023",
    thumb: "thumb-epi4",
    time: "2 ans",
    desc: 'Son diplome de licence informatique en poche, Oussama continue l\’aventure à l\’Université de Rouen Normandie en choisissant le Master Génie de l\'Informatique Logiciel.',
	},
];


function Episodes() {
    return (
      <section className="banner z-30">
        <div className=" w-full  epis relative xl:bottom-12 bottom-0 mt-0">
            <div className="container mx-auto">
              <h1 className="text-white font-bold xl:text-3xl text-2xl relative top-10 flex pl-5 xl:pl-0 xl:pt-0 pt-7">Épisodes<span className="text-white pl-1 pt-2"><HiOutlineChevronRight size={23}/></span></h1>
              <div class="grid gap-y-7 grid-cols-1 grid-rows-2 place-items-center pt-20 pb-0 mx-5">
              {episodes.map((ep) =>{
                  return(
                      <div className={`${ep.number === 1 ? ('bg-epi') : ('')}  w-full `}>
                        <div className="grid xl:grid-cols-9 grid-cols-2 ">
                          <div className="col-span-2">
                          <p className="number-epi relative xl:pt-1 pt-5 top-16 pl-7">{ep.number}</p>
                          <div className={`${ep.thumb} thumb relative bottom-4 xl:float-right xl:left-0 left-20`}></div>
                          </div>
                          <div className="col-span-6">
                          <p className="title-epi relative top-0 left-0 pl-14 pt-4">{ep.title}<span className="year-epi pl-3">-</span><span className="year-epi pl-3">{ep.year}</span></p>
                          <p className="desc-epi text-white relative top-0 right-0 pl-11 pt-2">{ep.desc}</p>
                          </div>
                          <div>
                            <p className="time-epi relative top-7 pr-10 float-right xl:opacity-100 opacity-0">{ep.time}</p>
                          </div>
                        </div>
                      </div>
                  );
              })}
                
                              
                              
              </div>
            </div>
        </div>
      </section>
    );
  }
  
  export default Episodes;