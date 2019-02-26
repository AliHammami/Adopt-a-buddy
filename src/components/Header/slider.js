import React from 'react';
import { Link } from 'react-router-dom';

const Slider = () => (
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active" />
      <li data-target="#myCarousel" data-slide-to="1" />
      <li data-target="#myCarousel" data-slide-to="2" />
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="first-slide" src="https://kiheiveterinaryclinic.com/wp-content/uploads/2016/02/bg3-2000x600.jpg" alt="First slide" />
        <div className="container">
          <div className="carousel-caption">
            <h2>Trouvez votre nouveau Buddy Dog</h2>
            <p className="carousel-caption-cit">"On n'a pas deux coeurs, un pour les animaux et un pour les humains. On a un coeur ou on n'en a pas."</p>
            <p className="carousel-caption-cit-name">Lamartine</p>
            <p><Link className="btn btn-lg nav-link-search-slide" to={'/recherche?searchbox="marseille"'} role="button">À Marseille</Link></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img className="second-slide" src="https://woofdorf.com/wp-content/uploads/sites/7729/2018/07/banner-about-2000x600.jpg" alt="Second slide" />
        <div className="container">
          <div className="carousel-caption">
            <h2>Trouvez votre nouveau Buddy Cat</h2>
            <p className="carousel-caption-cit">"Les animaux sont des amis tellement agréables - ils ne posent jamais de questions, ils ne font aucune critique."</p>
            <p className="carousel-caption-cit-name">George Eliot</p>
            <p><Link className="btn btn-lg nav-link-search-slide" to={'/recherche?searchbox="grenoble"'} role="button">À Grenoble</Link></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img className="third-slide" src="https://kiheiveterinaryclinic.com/wp-content/uploads/2016/02/bg7-2000x600.jpg" alt="Third slide" />
        <div className="container">
          <div className="carousel-caption">
            <h2>Trouvez votre nouveau Buddy</h2>
            <p className="carousel-caption-cit">"On peut juger de la grandeur d'une nation par la façon dont les animaux y sont traités."</p>
            <p className="carousel-caption-cit-name">Gandhi</p>
            <p><Link className="btn btn-lg nav-link-search-slide" to={'/recherche?searchbox="perpignan"'} role="button">À Perpignan</Link></p>
          </div>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>

);

export default Slider;
