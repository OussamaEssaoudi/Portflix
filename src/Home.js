import Banner from "./Banner";
import Episodes from "./Episodes";
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
      <Projets/>{/**/}
      
      
      </>
    );
  }
  
  export default Home;