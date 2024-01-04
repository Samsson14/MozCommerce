import {Form, Row, Col, Button} from 'react-bootstrap'
import { FormContainer } from '../components/FormContainer';
import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { UseLogin } from '../hooks/auth/useLogin';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {isPending, error, login, signInWithGoogle} = UseLogin()
    const signIn = async (e) => {
        e.preventDefault();
        await login(email, password);
    }
    const signInGoggle = async (e) => {
        e.preventDefault();
        await signInWithGoogle();
    }
    
    return (
        <FormContainer> 
            <Form>
                <Row>
                    <Col className='my-3' xs={12} md={12}>
                        <Form.Group controlId='emaiControler'>
                            <Form.Label>Email: </Form.Label>
                            <Form.Control type='email'
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col className='my-3' xs={12} md={12}>
                        <Form.Group controlId='paswwordControler'>
                            <Form.Label>Password: </Form.Label>
                            <Form.Control type='password'
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                        <Button type='submit' className='my-2' disabled={!isPending} onClick={signIn}> Sign in </Button>
                        <Button type='submit' className='my-2' disabled={!isPending} onClick={signInGoggle}> Sign in with google <FaGoogle/> </Button>
                    {/* error message */}
                        {error && <div className='error'>{error}</div>}
         
                </Row>
            </Form>
        </FormContainer>
     ); 
}

export default Login    