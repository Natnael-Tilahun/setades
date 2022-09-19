import React from "react";
import Cards from "../../components/Cards";
import data from "../../data";

function Products() {
  const cards = data.map((item) => {
    return (
      <Cards
        url={item.url}
        title={item.title}
        price={item.price}
        id={item.id}
        key={item.id}
      />
    );
  });
  return (
    <div className="px-10 pt-5 pb-10 h-auto min-h-[calc(100vh-310px)]">
      <h1 className="text-center font-bold pb-10 underline text-xl">
        Our Products
      </h1>
      <div className="flex gap-7 flex-wrap justify-center">{cards}</div>
    </div>
  );
}

export default Products;
