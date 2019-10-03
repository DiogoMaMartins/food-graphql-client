import React from 'react';
import { compose, graphql } from 'react-apollo';
import styled from 'styled-components';
import StoreSelect from '../StoreSelect';
import ProductTable from '../ProductTable';
import { Form,H1,Button } from './styles';

interface CreateReservationProps {
  // createReservation: Function
}

const CreateReservation = React.memo(({ /* createReservation */ }: CreateReservationProps) => {
  const [reservationProducts, setReservationProducts] = React.useState<{ [key: string]: number }>({});
  const [storeId, setStoreId] = React.useState<string>('');
  const onChangeQuantity = React.useCallback((productId: string, quantity: string) => {
    setReservationProducts(rps => ({
      ...rps,
      [productId]: parseInt(quantity, 10)
    }));
  }, []);

  const onSubmit = React.useCallback((e) => {
    e.preventDefault();

    console.log("hello",reservationProducts)
  }, [reservationProducts]);

  return (
    <Form >
      <H1>Create reservation</H1>
      <StoreSelect value={storeId} onChange={setStoreId} />
      <ProductTable storeId={storeId} onChangeQuantity={onChangeQuantity} />
      <Button onClick={onSubmit} type="submit">Reserve</Button>
    </Form >
  );
});

export default CreateReservation;
