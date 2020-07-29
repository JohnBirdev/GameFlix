
import React  from 'react';
import Logo from '.././assets/imgs/logo_gflix.png';
//import ButtonLink from './componentes_2';

import './Menu.css';
import Button from './Button';

function Menu(){
    return(
  <nav className="Menu">
    <a href="/">
  <img className="Logo" src={Logo} alt="Gameflix Logo"/>
  </a>
  <Button as="a" className="ButtonLink" href="/">
  Novo vídeo
    </Button>
  </nav>
  
  
  
  
    );
  
  
  }
  
  
  export default Menu;