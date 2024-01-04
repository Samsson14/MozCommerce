import { Container, Button, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductList({price,product, title}) {
  return (
    <Container>
        {title && <h2 className="my-3">{title}</h2>}
        <Row className="my-3">
        {product.map((product) => (
          <Col key={product.id} md={3}>
            <Card className="my-3">
              <Link to={`/product/${product.id}`}>
              <Card.Img variant="top" src={product.image} alt={product.title} />
              </Link>
              <Card.Body>
                <Card.Text><span className="fw-bold">Nome: </span>{product.title}</Card.Text>
                <Card.Text><span className="fw-bold">Endreço: </span>{product.address}</Card.Text>
                <Card.Text><span className="fw-bold">Preço: </span>{product.price.toFixed(2)} MT</Card.Text>
                <Button variant="dark">Adicionar ao Carrinho</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProductList