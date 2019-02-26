import React from 'react';
import {
  Carousel,
  CarouselInner,
  CarouselItem,
  Container,
  Row,
} from 'mdbreact';
import AnimalCard from './AnimalCard';

class AnimalCardsDog extends React.Component {
  renderAnimalsFirst() {
    const dogs = this.props.dogs || [];
    return dogs.slice(-4).map(animal => (
      <AnimalCard key={animal.id} animal={animal} />
    ));
  }

  renderAnimalsSecond() {
    const dogs = this.props.dogs || [];
    return dogs.slice(-8, -4).map(animal => (
      <AnimalCard key={animal.id} animal={animal} />
    ));
  }

  render() {
    return (
      <Container>
        <Carousel activeItem={1} length={2} slide showControls showIndicators multiItem>
          <CarouselInner>
            <Row>
              <CarouselItem itemId="1">
                {this.renderAnimalsFirst()}
              </CarouselItem>
              <CarouselItem itemId="2">
                {this.renderAnimalsSecond()}
              </CarouselItem>
            </Row>
          </CarouselInner>
        </Carousel>
      </Container>
    );
  }
}


export default AnimalCardsDog;
