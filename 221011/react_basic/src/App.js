import './css/style.css';
import Footer from './components/Footer';
import Header from './components/Layout';
import image1 from './img/member1.jpg';
import image2 from './img/member2.jpg';

function App() {
  const divStyle = {
    width:300,
    height:300,
    background: `url(${image2}) no-repeat center/cover`
  };

  return (
    <figure>
      <Header/>

      <img src={image1} />
      <div style={divStyle}></div>

      <Footer/>
    </figure>
  );
}

export default App;
