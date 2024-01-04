import {Form, Row, Col, Button} from 'react-bootstrap'
import { FormContainer } from '../components/FormContainer';
import { FaGoogle } from 'react-icons/fa';
import { useState } from 'react';
import { UseSignup } from '../hooks/auth/useSignup'; 
function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {signup, signInWithGoogle, error, isPending} = UseSignup()
    const signupHandler = async(e) => {
        e.preventDefault();
        await signup(email, password)

    }
    const signGoggle = async(e) => {
        e.preventDefault();
        await signInWithGoogle()
    }

    return (
        <FormContainer> 
            <Form>
                <Row>
                    <Col className='my-2' xs={12} md={12}>
                        <Form.Group controlId='emaiControler'>
                            <Form.Label>Email: </Form.Label>
                            <Form.Control type='email'
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col className='my-2' xs={12} md={12}>
                        <Form.Group controlId='paswwordControler'>
                            <Form.Label>Password: </Form.Label>
                            <Form.Control type='password'
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}></Form.Control>
                        </Form.Group>
                    </Col>
                    {/* email and password signup */}
                        <Button type='submit' className='my-2' disabled={!isPending} onClick={signupHandler}> Sign up </Button>
                    {/* google signup */}
                        <Button type='submit' className='my-2' disabled={!isPending} onClick={signGoggle}> Sign in with google <FaGoogle/> </Button>
                    {/* error message */}
                    {error && <div className='error'>{error}</div>}
                </Row>
            </Form>
        </FormContainer>
     ); 
}

export default SignIn    