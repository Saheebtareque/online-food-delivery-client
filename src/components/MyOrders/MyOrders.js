import React, { useState,useEffect } from 'react';
import { Button,Card, Col, Row } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';

const MyOrders = () => {
    const { user} = useAuth();
    const [personalOrder, setpersonalOrder] = useState([]);
    useEffect(() => {
        fetch(`https://afternoon-earth-11436.herokuapp.com/orderedmeals`)
            .then(res => res.json())
            .then(data => {
                setpersonalOrder(data)
            }
                )
    }, []);

    const specificUsers = personalOrder.filter(order=>order.email===user.email);

   // DELETE AN USER
const handleDelete = id => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if (proceed) {
        const url = `https://afternoon-earth-11436.herokuapp.com/orderedmeals/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingorders= personalOrder.filter(order => order._id !== id);
                    personalOrder(remainingorders);
                }
            });
    }
}


    return (
        <div>
            <h1> My Orders</h1>
            <Row xs={1}className="g-4 mx-5">
                {
                    specificUsers.map(orders=> 
                    <Col>
                        <Card>
                          <Card.Body>
                            <Card.Title>OrderId:{orders.orderId}</Card.Title>
                            <Card.Text>
                             <h6> Name: <span className="text-success"> {orders.uName} </span></h6>
                             <h6> Meal: <span className="text-success">  {orders.meal} </span></h6>
                             <h6> Orderstatus: <span className="text-success"> {orders.orderStatus} </span></h6>
                             <h6> Price:  <span className="text-success"> {orders.price}</span></h6>
                             <h6> Email:  <span className="text-success"> {orders.email}</span></h6>
                             <h6> Address: <span className="text-success"> {orders.address} </span></h6>
                             <h6> phone: <span className="text-success"> {orders.phone} </span></h6>
                             <Button onClick={() => handleDelete(orders._id)} variant="danger">Delete</Button>
                  
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>)
                }
             </Row>
        </div>
    );
};

export default MyOrders;