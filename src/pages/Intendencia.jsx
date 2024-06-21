import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "@/redux/actions";

import { BsFilterRight } from "react-icons/bs";

import ShopCard from "@/components/ShopCard";
import SearchBar from "@/components/SearchBar";
import ShopFilters from "@/components/ShopFilters";

import "@/styles/Intendencia.css";

const Intendencia = () => {
  const [openFilters, setOpenFilters] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    categories: [],
    maxPrice: "",
    minPrice: "",
  });

  const dispatch = useDispatch();

  function removeAccents(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  const productos = useSelector((state) =>
    state.productos.filter((producto) => {
      if (
        removeAccents(product.name) ||
        product.categories.length > 0 ||
        product.minPrice ||
        product.maxPrice
      ) {
        const nombreMatch = removeAccents(product.name)
          ? removeAccents(producto.nombre)
              .toLowerCase()
              .includes(removeAccents(product.name).toLowerCase())
          : true;
        const categoriasMatch =
          product.categories.length > 0
            ? product.categories.some((category) =>
                producto.categoria?.includes(category)
              )
            : true;
        const minPriceMatch = product.minPrice
          ? parseFloat(producto.precio) >= parseFloat(product.minPrice)
          : true;
        const maxPriceMatch = product.maxPrice
          ? parseFloat(producto.precio) <= parseFloat(product.maxPrice)
          : true;
        return nombreMatch && categoriasMatch && minPriceMatch && maxPriceMatch;
      }
      return true;
    })
  );

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <div className="intendencia__container">
        <div className="intendencia__filters">
          <div className="search-bar__container">
            <SearchBar setProductName={setProduct} />
          </div>

          <div className="btn__filter">
            <button onClick={() => setOpenFilters((prev) => !prev)}>
              <span>Filtros</span> <BsFilterRight />
            </button>

            <div
              className={`btn__filter-filters ${
                openFilters ? "show-filters" : ""
              }`}
            >
              <ShopFilters
                setCategories={setProduct}
                setMaxPrice={setProduct}
                setMinPrice={setProduct}
              />
            </div>
          </div>

          <div className="intendencia__filters__category">
            <ShopFilters
              setCategories={setProduct}
              setMaxPrice={setProduct}
              setMinPrice={setProduct}
            />
          </div>
        </div>

        <div className="items__container">
          {productos?.length ? (
            productos?.map((producto) => (
              <ShopCard
                key={producto.id}
                id={producto.id}
                imagen={producto.imagen}
                titulo={producto.nombre}
                descripcion={producto.descripcion}
                precio={producto.precio}
              />
            ))
          ) : (
            <h1>No se encontraron Productos</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Intendencia;
