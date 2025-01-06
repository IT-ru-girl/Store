import { ICartItem, IProduct } from '../Types.tsx';
import huawei from '../public/img/7f9fcf33-931f-42c6-a0af-f45034e50ec1.webp';
import acer from '../public/img/663af186-befc-46b5-a655-14e982d23756.webp';
import mate from '../public/img/0977320b-08ab-4063-bb54-d7d121d22b0f.webp';
import { nanoid } from 'nanoid';

export const PRODUCTS: IProduct[] = [
  {
    id: nanoid(),
    image: huawei,
    name: 'Ноутбук Huawei MateBook',
    price: 64990,
    quantity: 12
  },
  {
    id: nanoid(),
    image: acer,
    name: 'Ноутбук Acer Aspire 3',
    price: 49990,
    quantity: 5
  },
  {
    id: nanoid(),
    image: mate,
    name: 'Ноутбук Huawei MateBook 14',
    price: 99990,
    quantity: 6
  }

];
