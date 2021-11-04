import React from 'react';
import { Accordion } from 'react-bootstrap';

const Faqs = () => {
    return (
        <div className="mx-3">
            <h1 className="text-success">FAQS</h1>
            <Accordion >
  <Accordion.Item className="my-3" eventKey="0">
    <Accordion.Header>Why choose us?</Accordion.Header>
    <Accordion.Body>
     We ensure you get your hot food at your doorstep within the faten time possible
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="my-3" eventKey="1">
    <Accordion.Header>Services you will get from us</Accordion.Header>
    <Accordion.Body>
    This will  fundamentally change the way yours family eat. Previously, dinner meant picking a restaurant on seamless and waiting for food to arrive. 
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="my-3" eventKey="2">
    <Accordion.Header>The most special thing about us?</Accordion.Header>
    <Accordion.Body>
    You will get our services 24x7 and get endless couple with more and more delivery.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    );
};

export default Faqs;