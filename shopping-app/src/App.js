import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import ImgCarousel from './Components/ImageCarousel/imgCarousel' ;
import Card from './Components/Cards/Cards';
import Banner2 from './Components/Banner2/Banner2';
import YoungFav from './Components/YoungFav/YoungFav';
import Download from './Components/DownloadPage/Download';
import Footer from './Components/Footer/Footer';
import Banner3 from './Components/Banner3/Banner3';

function App() {
  return (
    <>
      <NavBar/>
      <Banner/>
      <ImgCarousel/>
      <Card/>
      <Banner2/>
      <YoungFav/>
      <Download/>
      <Banner3/>
      <Footer/>
    </>
  );
}

export default App;
