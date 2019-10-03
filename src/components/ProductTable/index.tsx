import React from 'react';
import { Query } from 'react-apollo';
import QuantitySelect from '../QuantitySelect';
//import * as queries from '../../queries';
import {  Table,Tr,Description,PriceTd,QuantityTd,ProductName } from './styles';
import { Product } from '../../entity/interfaces'
import gql from 'graphql-tag';


interface ProductTableProps {
  onChangeQuantity: Function;
  storeId: string
}

interface ID {
  id:string
}


const ProductQuery = gql`
  query($id:String!) {
    getStoreById(id:$id){
        id
        shopName
        street
        number
        city
        postalCode
        id
        products{
        id
        description
        productName
        price

    }
}
  }
`;

const TableData = (data:any,onChangeQuantity:any) => {
  return(
    <Table>
      <thead>
      <Tr>
        <th>Price</th>
        <th>Description</th>
        <th>ProductName</th>
      </Tr>
      </thead>
      <tbody>
      {
        data.getStoreById.products.map(({id,productName,description,price}:Product) => (


          <Tr key={id}>
            <PriceTd>{price}</PriceTd>
            <Description>{description}</Description>
            <ProductName>{productName}</ProductName>
            <td><QuantitySelect id={id} onChange={onChangeQuantity}/></td>


          </Tr>
        ))
      }
      </tbody>
    </Table>
  )
}

const ProductTable = React.memo(({ onChangeQuantity, storeId }: ProductTableProps) => {

  let id = storeId
  return (
    <Query query={ProductQuery} variables={{ id }}>
    {({loading,error,data}) => {
      if(loading) return <p>Loading...</p>;
      if (error) return <p>Please Select one Store</p>;
        console.log("im data",data.getStoreById.products)
        return TableData(data,onChangeQuantity)

    }}
    </Query>
  );
});

export default ProductTable;
