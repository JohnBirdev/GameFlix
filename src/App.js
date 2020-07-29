import React from 'react';
//import Menu from './componentes_menu/Menu';
import dadosIniciais from './componentes_menu/data/dados_iniciais.json';
//import BannerMain from '../components/BannerMain';
import Carousel from './componentes_menu/Carousel';
import Footer from './componentes_menu/Footer';
import BannerMain from './componentes_menu/BannerMain';
import Menu from './componentes_menu';


function App() {
  return (
    <div style={{background: '#141414'}}>
        <Menu></Menu>
        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"Aprenda  o básico do software chamado: Aseprite!"}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        /> 
                <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[1]}
        /> 
                <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[2]}
        /> 
                <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[3]}
        /> 
                <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[4]}
        /> 
                <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[5]}
        /> 

        <Footer />
    </div>
  );
}

export default App;
