import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import NavBar from "./NavBar";
import Card from "./Card";
import Footer from "./Footer";
import Card2 from "./Card2";


function App() {
  return (//className="App"
    <div>
      <NavBar/>
    <div className="container">
      <Header 
      title="¡Bienvenidos!" 
      descripcion="lorem ipsum es simplemente texto ficticio de la industria de la imprenta y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando un impresor desconocido tomó una galera de tipos y la codificó para hacer un libro de muestras tipográficas. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de hojas de Letraset que contenían pasajes de Lorem Ipsum y, más recientemente, con software de autoedición como Aldus PageMaker, que incluía versiones de Lorem Ipsum."
      />
      <Card2/>
    </div>
      <Footer/>
    </div>
  );
}

export default App;
