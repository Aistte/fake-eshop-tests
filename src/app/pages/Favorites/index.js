import React from "react";
import "./index.scss";
import { ProductCard } from "../../components";

function Error() {
  return <p>Ohh no, you don't have favorites</p>;
}

function Favorites({ favorites, products = [], cart, ...restProps }) {
  const favoriteProducts = products.filter(product =>
    favorites.includes(product.id)
  );
  return (
    <div className="Favorites">
      {!favoriteProducts.length && <Error />}
      {favoriteProducts.map(data => {
        const { count = 0 } = cart.find(({ id }) => id === data.id) || {};

        return (
          <ProductCard
            {...restProps}
            {...data}
            key={data.id}
            isFavorite
            cartCount={count}
          />
        );
      })}
    </div>
  );
}

export default Favorites;
