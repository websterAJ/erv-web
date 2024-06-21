import React from "react";

import "@/styles/ShopFilters.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "@/redux/actions";

const ShopFilters = ({ setCategories, setMaxPrice, setMinPrice }) => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categorias);

  const handleCategoryChange = (category) => {
    setCategories((prev) => {
      const newCategories = prev.categories.includes(category)
        ? prev.categories.filter((cat) => cat !== category)
        : [...prev.categories, category];
      return {
        ...prev,
        categories: newCategories,
      };
    });
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
      <form className="filters__container">
        <div className="filters__category">
          <h3>Categoría</h3>

          {categories?.map((c) => (
            <label key={c.id}>
              <input
                type="checkbox"
                className="input"
                value={c.nombre}
                onChange={(e) => handleCategoryChange(c.nombre)}
              />
              <span className="custom-checkbox"></span>
              {c.nombre}
            </label>
          ))}
        </div>

        <div className="filters__price-range__container">
          <h3>Rango de Precio</h3>

          <div className="filters__price-range">
            <input
              className="filters__input"
              type="text"
              placeholder="Minimo"
              onChange={(e) =>
                setMinPrice((prev) => {
                  return {
                    ...prev,
                    minPrice: e.target.value,
                  };
                })
              }
            />

            <input
              className="filters__input"
              type="text"
              placeholder="Maximo"
              onChange={(e) =>
                setMaxPrice((prev) => {
                  return {
                    ...prev,
                    maxPrice: e.target.value,
                  };
                })
              }
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default ShopFilters;
