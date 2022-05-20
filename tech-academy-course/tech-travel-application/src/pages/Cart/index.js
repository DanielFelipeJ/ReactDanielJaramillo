import React, { useContext, useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import {
  Container,
  ContainerList,
  TravelItem,
  Info,
  Quantity,
  Subtotal,
  ContainerTotal,
  TitleTotal,
  TotalToPay,
  Container2,
} from './styles';
import CartContext from '../../context/cart';

function Cart() {
  const { state, setState } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const subtotal = state.cart.map((el) => el.price * el.quantity);
    setTotal(subtotal.reduce((a, b) => a + b, 0));
  }, []);

  return (
    <>
      <Container>
        <ContainerList>
          {state.cart.map((el) => (
            <TravelItem key={2}>
              <img src={el.photo} alt="titulo del viaje" />
              <Info>
                <p>{el.title}</p>
                <strong>${el.price}</strong>
              </Info>
              <Quantity readOnly type="number" value={el.quantity} />
              <Subtotal>
                <p>${el.quantity * el.price}</p>
                <button type="button">
                  <MdDelete size={24} color="#0676d9" />
                </button>
              </Subtotal>
            </TravelItem>
          ))}
        </ContainerList>
      </Container>
      <Container2>
        <ContainerTotal>
          <TitleTotal class="TitleTotal">
            <h1>Total a pagar:</h1>
          </TitleTotal>
          <TotalToPay class="TotalToPay">
            <h1>${total}</h1>
          </TotalToPay>
        </ContainerTotal>
      </Container2>
    </>
  );
}

export default Cart;
