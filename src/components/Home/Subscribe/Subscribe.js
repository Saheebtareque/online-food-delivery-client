import React from 'react';
import { Form,Button} from 'react-bootstrap';


const Subscribe = () => {
    return (
        <div className="my-5">
          <h1 className="text-success">Get updated with our new arriving meals:</h1>
           <Form className="my-5 mx-5">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter your email here" />
    <Form.Text >
   <h3 className="text-warning"> Be the lucky winner to get FREE premium meals for one week. We are also offer you latest deal in your inbox!</h3>
    </Form.Text>
  </Form.Group>

  <Button variant="warning" type="submit">
    Subscribe
  </Button>
</Form>
        </div>
    );
};

export default Subscribe;