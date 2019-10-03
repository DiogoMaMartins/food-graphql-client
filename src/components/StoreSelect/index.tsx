import React from 'react';
import { Query } from 'react-apollo';
import { Store } from '../../entity/interfaces';
//import * as queries from '../../queries';
import {  Select} from './styles';
import gql from 'graphql-tag';
interface StoreSelectProps {
  value: string;
  onChange: Function;
}

const StoreQuery = gql`
  query {
    getListOfStores {
        id
        shopName

    }
  }
`;

const SelectForm  = (data:any,value:any,onChangeStore:any) => {
    return (
      <select value={value} onChange={onChangeStore}>
      <option key="default" value="">Select a store</option>
      {
        data.getListOfStores.map(({id,shopName}: Store) => (
          <option key={id} value={id}>{shopName}</option>
        ))
      }
      </select>
    )
}


const StoreSelect = React.memo(({ value, onChange }: StoreSelectProps) => {
  const onChangeStore = React.useCallback((e) => {
    e.preventDefault();
    onChange(e.target.value);
  }, []);

  return (
    <Query query={StoreQuery}>
      {({loading,error,data}) => {
        if(loading) return <p>Loading...</p>;
        if (error) return <p>Error:(</p>;
          console.log("im data",data.getListOfStores)
          return SelectForm(data,value,onChangeStore)

      }}
    </Query>
  );
});

export default StoreSelect;
