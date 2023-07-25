import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../Store/cartSlice';
import { Card, Button } from 'react-bootstrap';

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeToCart = (id) => {
    dispatch(remove(id));
  };

  const cards = products.map((product) => (
    <div className="col-md-12" style={{ marginBottom: '10px' }} key={product.id}>
      <Card className="h-100" style={{ width: '18rem' }}>
        <div className="text-center">
          <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            Inr: {product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: 'white' }}>
          <Button variant="danger" onClick={() => removeToCart(product.id)}>Remove Item</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <div className="row">
        {cards}
      </div>
    </>
  );
};

export default Cart;
