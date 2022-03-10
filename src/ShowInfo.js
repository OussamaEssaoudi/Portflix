import "./ShowInfo.css";
import thumb1 from "./thumb1.png"
import { IoIosPlay } from 'react-icons/io';
import { MdOutlineInfo } from 'react-icons/md';
import { HiOutlineChevronRight } from 'react-icons/hi';



function ShowInfo() {
    return (
      <section className="banner z-40">
        <div className=" w-full epis">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 xl:grid-cols-5 place-items-center pt-52 xl:pt-0 pb-0 mx-5 relative xl:bottom-28">
                <div className="xl:col-span-2 hidden md:block">
                  <h2 className="langue pb-9">VF, &nbsp;VOSTFR, &nbsp;Anglais</h2>
                  <p className="about">En recherche d'alternance en informatique, Oussama, dotée d’une grande curiosité, il s’est spécialisée dans le développement front-end et la création de sites internet, même s’il est aussi capable de faire du webdesign ou encore du développement back-end</p>
                </div>
                <div class="xl:col-start-4">
                  <p className="rightInfos pb-9"><span className="grey">Distribution :&nbsp;</span> Oussama Essaoudi (LinkedIn), (Github)</p>
                  <p className="rightInfos pb-9"><span className="grey">Genres :&nbsp;</span>Série Informatique et Technologie, Série Frontend, Série Design et Conception</p>
                  <p className="rightInfos"><span className="grey">Ce programme est :&nbsp;</span>Créatif, Motivé, Perfectionniste et Suceptible</p>
                </div>
                              
              </div>
            </div>
        </div>
      </section>
    );
  }
  
  export default ShowInfo;