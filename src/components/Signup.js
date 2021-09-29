import React,{Fragment,useRef} from 'react'
import {Card,Form,Button} from 'react-bootstrap'

const Signup = () => {

    const emailRef=useRef();
    const passwordRef=useRef();
    const confirmPasswordRef=useRef();


    return (
        <Fragment>
            <Card>
                <Card.Body>
                    <h2 className="text-center mt-2">Sign Up</h2>
                    <Form>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group>
                        <Form.Group id='confirm-password'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={confirmPasswordRef} required/>
                        </Form.Group>
                        <Button className="w-100" type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                    Already have an account? Login
                </div>
            
        </Fragment>
    )
}

export default Signup
