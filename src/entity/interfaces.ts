
export interface Product {
  id:number;
  price:number;
  productName:string;
  description:string;
  store:Store
}

export interface Store {
  id: string;
  shopName: string;
  street:string;
  number:string;
  postalCode:number;
  city:string;
  product:Product
}
