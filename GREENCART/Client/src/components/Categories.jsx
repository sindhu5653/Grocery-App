import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  organic_vegitable_image,
  fresh_fruits_image,
  bottles_image,
  maggi_image,
  dairy_product_image,
  bakery_image,
  grain_image
} from '../assets/greencart_assets/assets.js';

const categories = [
  {
    text: "Organic veggies",
    path: "Vegetables",
    image: organic_vegitable_image,
    bgColor: "#FEF6DA",
  },
  {
    text: "Fresh Fruits",
    path: "Fruits",
    image: fresh_fruits_image,
    bgColor: "#FEE0E0",
  },
  {
    text: "Cold Drinks",
    path: "Drinks",
    image: bottles_image,
    bgColor: "#F0F5DE",
  },
  {
    text: "Instant Food",
    path: "Instant",
    image: maggi_image,
    bgColor: "#E1F5EC",
  },
  {
    text: "Dairy Products",
    path: "Dairy",
    image: dairy_product_image,
    bgColor: "#FEE6CD",
  },
  {
    text: "Bakery & Breads",
    path: "Bakery",
    image: bakery_image,
    bgColor: "#E0F6FE",
  },
  {
    text: "Grains & Cereals",
    path: "Grains",
    image: grain_image,
    bgColor: "#F1E3F9",
  },
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Categories</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group cursor-pointer py-5 px-3 gap-2 rounded flex flex-col justify-center items-center transition-transform hover:scale-105"
            style={{ backgroundColor: category.bgColor }}
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`);
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={category.image}
              alt={category.text}
              className="transition-transform group-hover:scale-110 max-w-28"
            />
            <p className="text-sm font-medium mt-2 text-center">{category.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
