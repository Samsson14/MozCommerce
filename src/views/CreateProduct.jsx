import { useState } from 'react';
import {Container, Card, Form, Button, Col, Row, ProgressBar} from 'react-bootstrap';
import {VscDiffAdded} from 'react-icons/vsc';
import useCreateProduct from '../hooks/project/useCreateProduct'

function CreateProduct() {
  
    const [title, setTitle] = useState("");
    const [foneNumber, setFoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [brand, setBrand] = useState("");
    const [categ, setCateg] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    const [inStock, setInStock] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");
    const [error, setError] = useState(null);
    const {submitForm, progress} = useCreateProduct()
    const types = ['image/png', 'image/jpeg', 'image/jpg'];
    
    const handlerUrl = (event) => {
        let selectedFile = event.target.files[0];
        if(selectedFile && types.includes(selectedFile.type)) {
            setImg(selectedFile);
            setError(null);
        } else {
            setImg(null);
            setError('Please select a valid image type pgn or jpeg')
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        submitForm(title, foneNumber, address, brand, categ, desc, img, inStock, size, price)
    }

  return (
    <Container>
            <Card className='p-5 m-5'>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col xs={12} md={6}>
                            {/* title field */}
                            <Form.Group className='my-2' controlId='title'>
                                <Form.Label>Nome do produto:</Form.Label>
                                <Form.Control value={title} 
                                required
                                onChange={e => setTitle(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                            {/* number field */}
                            <Form.Group className='my-2' controlId='number'>
                                <Form.Label>Numero de telefone:</Form.Label>
                                <Form.Control value={foneNumber} 
                                required
                                onChange={e => setFoneNumber(e.target.value)} type='number'></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={12}>
                            {/* address field */}
                            <Form.Group className='my-2' controlId='address'>
                                <Form.Label>Endereço:</Form.Label>
                                <Form.Control value={address} 
                                required
                                onChange={e => setAddress(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                            {/* brand field */}
                            <Form.Group className='my-2' controlId='brand'>
                                <Form.Label>Marca do product:</Form.Label>
                                <Form.Control value={brand} 
                                required
                                onChange={e => setBrand(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                            {/* categories field */}
                            <Form.Group className='my-2' controlId='categories'>
                                <Form.Label>Categorias:</Form.Label>
                                <Form.Control value={categ} 
                                required
                                onChange={e => setCateg(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={12}>
                            {/* description field */}
                            <Form.Group className='my-2' controlId='description'>
                                <Form.Label>Descrição:</Form.Label>
                                <textarea cols="12" rows="2" className='form-control' value={desc} 
                                required
                                onChange={e => setDesc(e.target.value)}></textarea>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={12}>
                            {/* image field */}
                            <Form.Group className='my-2' controlId='images'>
                                <Form.Label>Imagens do producto:</Form.Label>
                                <Form.Control type='file' 
                                onChange={handlerUrl}></Form.Control>
                                <ProgressBar animated now={progress} className='my-2'/>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={2}>
                            {/* inStock field */}
                            <Form.Group className='my-2' controlId='inStock'>
                                <Form.Label>Quantidade:</Form.Label>
                                <Form.Control type='number' value={inStock} 
                                required
                                onChange={e => setInStock(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                            {/* size field */}
                            <Form.Group className='my-2' controlId='size'>
                                <Form.Label>Tamanho: </Form.Label>
                                <Form.Control value={size} 
                                required
                                onChange={e => setSize(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                            {/* Price field */}
                            <Form.Group className='my-2' controlId='price'>
                                <Form.Label>preço:</Form.Label>
                                <Form.Control type='number' value={price}
                                onChange={e => setPrice(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={3} className='m-auto'>
                             <Button type='submit' className='' bg='dark' variant='dark'><VscDiffAdded/> Pubilcar</Button>
                        </Col>
                    </Row>
                </Form>
                {error && <div className='error'> {error} </div>}
            </Card>
        </Container>
  )
}

export default CreateProduct