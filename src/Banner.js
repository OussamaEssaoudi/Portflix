import "./Banner.css";
import bannerme from "./Banner-Image5.png"
import { IoIosPlay } from 'react-icons/io';
import { MdOutlineInfo } from 'react-icons/md';

function Banner() {
    return (
      <section class="banner">
        <div class="static top-0 w-full bannerimg h-auto z-0">
          {/*<img src={bannerme} alt="" class="w-full object-cover"/>*/}
        <div class="z-20 absolu text-white container mx-auto bannertext hidden md:block">
              <div className="flex pl-5 xl:pl-0">
                <img
                  className="small_netflix_logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/800px-Netflix_2015_N_logo.svg.png"
                  alt="Netflix Logo"
                />
                <p className="pl-3 pt-1 serie">Série</p>
              </div>
              <h1 class="oussama xl:text-9xl text-8xl pl-5 xl:pl-0 pt-2">Oussama</h1>
              <div className="flex pt-6 pl-5 xl:pl-0">
                <button class="inline-block bg-white text-black text-sm font-bold no-underline hover:bg-slate-50 mr-4 pl-4 pr-5 py-3 rounded flex"><span className="pr-1"><IoIosPlay size={19}/></span>Commencer</button>
                <button class="inline-block bg-contact text-white text-sm font-bold no-underline pl-4 pr-5 py-3 rounded flex"><span className="pr-1"><MdOutlineInfo size={20}/></span>Contact</button>
              </div>
              <div className="flex pt-16 pl-5 xl:pl-0 infos">
                <p className="green mr-3 font-bold">Recommandé à 97% </p>
                <p className="pr-3">2000</p>
                <div className="age mr-3"><p className="">21+</p></div>
                <p className="mr-3">1 saison</p>
                <div className="hd mr-3"><p className="">HD</p></div>
              </div>
              
          </div>
        </div>
        
        <div class="z-20 absolute top-56 pt-10 text-white container mx-auto block md:hidden">
              <div className="flex pl-36 xl:pl-0">
                <img
                  className="small_netflix_logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/800px-Netflix_2015_N_logo.svg.png"
                  alt="Netflix Logo"
                />
                <p className="pl-3 pt-1 serie">Série</p>
              </div>
              <h1 class="oussama xl:text-9xl text-8xl pl-12 xl:pl-0 pt-2">Oussama</h1>
              <div className="flex pt-6 ml-16 pl-1 xl:pl-0">
                <button class="inline-block bg-white text-black text-sm font-bold no-underline hover:bg-slate-50 mr-4 pl-3 pr-4 py-2 rounded flex"><span className="pr-1"><IoIosPlay size={19}/></span>Commencer</button>
                <button class="inline-block bg-contact text-white text-sm font-bold no-underline pl-3 pr-4 py-2 rounded flex"><span className="pr-1"><MdOutlineInfo size={20}/></span>Contact</button>
              </div>
              <div className="flex pt-8 xl:pt-16 pl-6 xl:pl-0 infos">
                <p className="green mr-3 font-bold">Recommandé à 97% </p>
                <p className="pr-3">2000</p>
                <div className="age mr-3"><p className="">21+</p></div>
                <p className="mr-3">1 saison</p>
                <div className="hd mr-3"><p className="">HD</p></div>
              </div>
              
          </div>
      </section>
    );
  }
  
  export default Banner;