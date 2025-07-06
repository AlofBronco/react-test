// src/components/Product.tsx

import css from './Product.module.css';

interface ProductProps {
  name: string;
  imgUrl: string;
  price: number;
}

export default function Product({ name, imgUrl, price }: ProductProps) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} width="480" />
      <p className={css.text}>Price: {price} credits</p>
    </div>
  );
}
