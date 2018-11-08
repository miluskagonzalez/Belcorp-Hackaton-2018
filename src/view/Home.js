import React from 'react';
import esikaLogo from '../assets/img/esikaLogo.PNG';
import lbelLogo from '../assets/img/lbelLogo.PNG';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/Logo.PNG';
import cyzoneLogo from '../assets/img/cyzoneLogo.PNG';
import './Home.css'
import Header from './Header'
import MainCard from '../component/MainCard';

const Home = ({ data: { lbel, esika, cyzone } }) => {

  
  return (
    <div>
        <img src={Logo} className="m-3" alt="Logo de Belcorp" />
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <Link to="/" class="nav-link active">Inicio</Link>
          </li>
          <li class="nav-item">
            <Link to="/esika" class="nav-link">Esika</Link>
          </li>
          <li class="nav-item">
            <Link to="/lbel" class="nav-link">Lbel</Link>
          </li>
        </ul>
      <div className="container">
        <div className="card-deck">
          <MainCard title="ésika" image={esika.cover} link="esika" logo={esikaLogo} slogan="Tú y tu belleza lo pueden todo."/>
          <MainCard title="L'BEL" image={lbel.cover} link="lbel" logo={lbelLogo} slogan="Belleza de verdad para mujeres de verdad." />
          <MainCard title="Cyzone" image={cyzone.cover} link="cyzone" logo={cyzoneLogo} slogan="Atrévete con actitud." />
        </div>
      </div>
    </div>
  );
}

export default Home