import { db } from "../DB/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Image, Card, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useProjectContext from "../hooks/project/useProjectContext"
import ProductSlide from "../components/ProductSlide";

 function ProductDetails() {
  const {id} = useParams();
  const {products} = useProjectContext()
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const dataRef = doc(db, 'produtos', id);
  const [data, setData] = useState('');
  useEffect(() => {
    const fetchData = async() => {
      try {
        const fetch = await getDoc(dataRef);
        if(fetch.exists()) {
          setData(fetch.data());
          setIsPending(true);
        } else {
          setError('Documento não encotrado')
          console.log('Documento não encotrado');
          setIsPending(true);
        }
      } catch (error) {
        setError(`Erro ao obter o documento: ${error}`);
        console.log(`Erro ao obter o documento: ${error}`);
        setIsPending(true);
      }
      
    }

    fetchData();
  }, [])
  
  return (
      <Container>
        {!isPending && <div className="spinner-border text-center-secondary my-3" role="status">
                            <span className="visually-hidden">Loading...</span>
                      </div>}
        {error && <div className="error">{error}</div>}
        {data && <div key={data.id}>
                <Row className="text-center my-2">
                  <Col>
                    <h1>{data.title}</h1>
                  </Col>
                </Row>

                <Row className="text-center my-2">
                  <Col md={6}>
                    <Card>
                      <Card.Img variant="top" src={data.image} alt={data.title} />
                    </Card>
                  </Col>

                  <Col md={6}>
                    <Card>
                      <Card.Body>
                        <Card.Text>Nome do produto: {data.title}</Card.Text>
                        <Card.Text>Preço: R$ {data.price.toFixed(2)}</Card.Text>
                        <Card.Text>Categorias: {data.categories.join(', ')}</Card.Text>
                        <Card.Text>Quantidade: {data.inStock}</Card.Text>
                        <Card.Text>Preço: {data.price.toFixed(2)}</Card.Text>
                        <Card.Text>Tamanho: {data.size.join()}</Card.Text>
                        <Card.Text>Marca: {data.brand}</Card.Text>    
                        <Button variant="dark">Adicionar ao Carrinho</Button>
                      </Card.Body>
                    </Card>
                  </Col>        
                </Row>
                <Row className="my-2">
                    <Card>
                      <Card.Body>
                          <Card.Text className="text-start"><span className="fw-bold">Contacto do vendedor:</span> {data.foneNumber}</Card.Text>
                          <Card.Text><span className="fw-bold">Descrição:</span> {data.desc}</Card.Text>
                          <Card.Text className="text-end"><span className="fw-bold">Endreço:</span> {data.address}</Card.Text>
                      </Card.Body>
                    </Card>
                </Row>
      </div>}
      <Carousel>
      {products && 
            <Carousel.Item key={products.id}>
              <Card className="person-card">
                <Link to={`/product/${products.id}`}>
                <Card.Img className="person-image" variant="top" src={products.image} />
                </Link>
                <Card.Body>
                  <Card.Text><span className="fw-bold">Nome: </span>{products.title}</Card.Text>
                  <Card.Text><span className="fw-bold">Endreço: </span>{products.address}</Card.Text>
                  <Card.Text><span className="fw-bold">Preço: </span>{products.price} MT</Card.Text>
                  <Button variant="dark">Adicionar ao Carrinho</Button>
                </Card.Body>

              </Card>
            </Carousel.Item>

      }
      </Carousel>

      </Container>
   )
 }
 
 export default ProductDetails