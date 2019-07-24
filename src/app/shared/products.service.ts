import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private Products: any[] = [
  {
    ref: 'OP-0096',
    company: 'lactosa',
    country: 'Antiguo Cuscatlan, el salvador',
    name: 'bolsa pouch para queso moz...' ,
    price: '40,00 miliares 5.304,00 uds',
    identity: 'Hace 335 dias',
    date1: 'Hayssil Ayala',
    view: '85%',
    state: 'Alta',
    icon: './../../assets/img/alta.png',
    gastos: '0,00 usd',
    img: './../../assets/img/1.jpg'
},
{
  ref: 'OP-0097',
  company: 'unilever el salvador',
  country: 'San Salvador, el salvador',
  name: 'lienzo mult bco term 220x0.00...' ,
  price: '1.000,00 kg 3.160,00 Usd',
  identity: 'Hace 374 dias',
  date1: 'Hayssil Ayala',
  view: '95%',
  state: 'Alta',
  icon: './../../assets/img/alta.png',
  gastos: '199,00 usd',
  img: './../../assets/img/maizena.jpg'
},
{
  ref: 'OP-0098',
  company: 'unilever el salvador',
  country: 'San Salvador, el salvador',
  name: 'bob ldpe tc trans 50 gr' ,
  price: '2.500,00 Kg 7.500,00 Uds',
  identity: 'Hace 246 dias',
  date1: 'Hayssil Ayala',
  view: '95%',
  state: 'Alta',
  icon: './../../assets/img/alta.png',
  gastos: '0,00 usd',
  img: './../../assets/img/maizena.jpg'
},
{
  ref: 'OP-0099',
  company: 'unilever el salvador',
  country: 'San Salvador, el salvador',
  name: 'Lámina jabon xtra' ,
  price: '40,00 miliares 5.304,00 uds',
  identity: 'Hace 331 dias',
  date1: 'Hayssil Ayala',
  view: '95%',
  state: 'Alta',
  icon: './../../assets/img/alta.png',
  gastos: '0,00 usd',
  img: './../../assets/img/1.jpg'
},
{
  ref: 'OP-00100',
  company: 'lactosa',
  country: 'Antiguo Cuscatlan, el salvador',
  name: 'bolsa pouch para queso moz...' ,
  price: '40,00 miliares 5.304,00 uds',
  identity: 'Hace 335 dias',
  date1: 'Hayssil Ayala',
  view: '85%',
  state: 'Baja',
  gastos: '0,00 usd',
  icon: './../../assets/img/baja.png',
  img: './../../assets/img/1.jpg'
},
{
  ref: 'OP-0103',
  company: 'lactosa',
  country: 'Antiguo Cuscatlan, el salvador',
  name: 'bolsa pouch para queso moz...' ,
  price: '40,00 miliares 5.304,00 uds',
  identity: 'Hace 335 dias',
  date1: 'Hayssil Ayala',
  view: '85%',
  state: 'Alta',
  gastos: '0,00 usd',
  icon: './../../assets/img/alta.png',
  img: './../../assets/img/1.jpg',
},
{
  ref: 'OP-0104',
  company: 'lactosa',
  country: 'Antiguo Cuscatlan, el salvador',
  name: 'bolsa pouch para queso moz...' ,
  price: '40,00 miliares 5.304,00 uds',
  identity: 'Hace 335 dias',
  date1: 'Hayssil Ayala',
  view: '85%',
  state: 'Alta',
  gastos: '0,00 usd',
  icon: './../../assets/img/alta.png',
  img: './../../assets/img/1.jpg'
},
{
  ref: 'OP-0105',
  company: 'lactosa',
  country: 'Antiguo Cuscatlan, el salvador',
  name: 'bolsa pouch para queso moz...' ,
  price: '40,00 miliares 5.304,00 uds',
  identity: 'Hace 335 dias',
  date1: 'Hayssil Ayala',
  view: '85%',
  state: 'Alta',
  icon: './../../assets/img/alta.png',
  gastos: '0,00 usd',
  img: './../../assets/img/1.jpg'
},
{
  ref: 'OP-0106',
  company: 'lactosa',
  country: 'Antiguo Cuscatlan, el salvador',
  name: 'bolsa pouch para queso moz...' ,
  price: '40,00 miliares 5.304,00 uds',
  identity: 'Hace 335 dias',
  date1: 'Hayssil Ayala',
  view: '85%',
  state: 'Alta',
  icon: './../../assets/img/alta.png',
  gastos: '0,00 usd',
  img: './../../assets/img/1.jpg'
},
{
  ref: 'OP-0107',
  company: 'lactosa',
  country: 'Antiguo Cuscatlan, el salvador',
  name: 'bolsa pouch para queso moz...' ,
  price: '40,00 miliares 5.304,00 uds',
  identity: 'Hace 335 dias',
  date1: 'Hayssil Ayala',
  view: '85%',
  state: 'Alta',
  icon: './../../assets/img/alta.png',
  gastos: '0,00 usd',
  img: './../../assets/img/1.jpg'
},
];

  constructor( ) {

  }

  getProducts() {
    return this.Products;
  }
}
export interface Products {
  ref: string;
  company: string;
  country: string;
  name: string;
  price: string;
  identity: string;
  date1: string;
  view: string;
  state: string;
  gastos: string;
  icon: string;
  img: string;
}
