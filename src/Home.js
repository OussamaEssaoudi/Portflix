import BackEnd from "./BackEnd";
import Banner from "./Banner";
import Episodes from "./Episodes";
import FrontEnd from "./FrontEnd";
import Navbar from "./Navbar";
import Projets from "./Projets";
import ShowInfo from "./ShowInfo";



function Home() {
    return (
      <>
      {/**/}<Navbar/>
      <Banner/>
      <ShowInfo/>
      <Episodes/>
      <Projets/>
      <FrontEnd/>
      <BackEnd/>{/**/}
      
      
      </>
    );
  }
  
  export default Home;