import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import img from '../img/img.jpeg'
const Test = () => {
  const peopleData = [
    {
      name: 'Nome 1',
      description: 'Descrição 1',
    },
    {
      name: 'Nome 2',
      description: 'Descrição 2',
    },
    {
      name: 'Nome 3',
      description: 'Descrição 2',
    },
    {
      name: 'Nome 4',
      description: 'Descrição 2',
    },
    // Adicione mais dados conforme necessário
  ];
    return (
      <Carousel>
        {peopleData.map((person, index) => (
          <div key={index}>
          <Carousel.Item>
            <Card className="person-card">
              <Card.Img className="person-image" variant="top" src={img} />
              <Card.Body>
                <Card.Title>{person.name}</Card.Title>
                <Card.Text>{person.description}</Card.Text>
                <Button variant="primary">Adicionar</Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item >
            <Card className="person-card">
              <Card.Img className="person-image" variant="top" src={img} />
              <Card.Body>
                <Card.Title>{person.name}</Card.Title>
                <Card.Text>{person.description}</Card.Text>
                <Button variant="primary">Adicionar</Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item >
            <Card className="person-card">
              <Card.Img className="person-image" variant="top" src={img} />
              <Card.Body>
                <Card.Title>{person.name}</Card.Title>
                <Card.Text>{person.description}</Card.Text>
                <Button variant="primary">Adicionar</Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
          </div>
          
        ))}
      </Carousel>
    );
  };
  
  export default Test;
  