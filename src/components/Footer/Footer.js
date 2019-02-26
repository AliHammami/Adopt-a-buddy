import React from 'react';
import { Link } from 'react-router-dom';
import {
  Col, Container, Row, Footer,
} from 'mdbreact';

const FooterPage = () => (
  <Footer color="blue" className="font-small pt-4 mt-4">
    <Container fluid className="page-footer-container text-center text-md-left">
      <Row>
        <Col md="6">
          <h5 className="title">Présentation</h5>
          <p>
        AdoptABuddy, plateforme de mise en relation entre les personnes<br />souhaitant adopter un animal et les refuges/associations souhaitant<br />faire adopter leurs animaux.
          </p>
        </Col>
        <Col md="3">
          <h5 className="title">Des Buddy dans ces villes !</h5>
          <ul>
            <li className="list-unstyled">
              <Link to={'/recherche?searchbox="chameyrat"'}>Chameyrat</Link>
            </li>
            <li className="list-unstyled">
              <Link to={'/recherche?searchbox="evry"'}>Evry</Link>
            </li>
            <li className="list-unstyled">
              <Link to={'/recherche?searchbox="grenoble"'}>Grenoble</Link>
            </li>
            <li className="list-unstyled">
              <Link to={'/recherche?searchbox="livry+gargan"'}>Livry Gargan</Link>
            </li>
          </ul>
        </Col>
        <Col md="3">
          <h5 className="title">Mais aussi ici !</h5>
          <ul>
            <li className="list-unstyled">
              <Link to={'/recherche?searchbox="marseille"'}>Marseille</Link>
            </li>
            <li className="list-unstyled">
              <Link to={'/recherche?searchbox="mirepoix"'}>Mirepoix</Link>
            </li>
            <li className="list-unstyled">
              <Link to={'/recherche?searchbox="muret"'}>Muret</Link>
            </li>
            <li className="list-unstyled">
              <Link to={'/recherche?searchbox="perpignan"'}>Perpignan</Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    <div className="footer-copyright text-center py-3">
      <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{' '}
        <a href="#"> AdoptAbuddy.com </a>
      </Container>
    </div>
  </Footer>
);

export default FooterPage;
