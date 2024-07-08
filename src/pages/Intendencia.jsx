import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "@/redux/actions";

import { BsFilterRight } from "react-icons/bs";

import ShopCard from "@/components/ShopCard";
import SearchBar from "@/components/SearchBar";
import ShopFilters from "@/components/ShopFilters";

import "@/styles/Intendencia.css";
import ArrowPrev from "@/assets/svg/ArrowPrev";
import ArrowNext from "@/assets/svg/ArrowNext";

const Intendencia = () => {
  const [page, setPage] = useState(1);
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
            ? product.categories.some((category) => {
                console.log(category);
                return producto?.categoria_id === category;
              })
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

  const itemsPerPage = 6;
  const totalPages = Math.ceil(productos?.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;

  const paginate = (pageNumber) => {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 0);

    setPage(pageNumber);
  };

  const nextPage = () => {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 0);

    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 0);

    setPage((prevPage) => prevPage - 1);
  };

  const getPaginationButtons = () => {
    const maxButtons = 5;
    let startPage = Math.max(1, page - Math.floor(maxButtons / 2));
    let endPage = startPage + maxButtons - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxButtons + 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  useEffect(() => {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 0);

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
            productos
              ?.slice(startIndex, endIndex)
              .map((producto) => (
                <ShopCard
                  key={producto.id}
                  id={producto.id}
                  imagen={producto.imagen}
                  titulo={producto.nombre}
                  descripcion={producto.descripcion}
                  precio={producto.precio}
                  nombre={producto.nombre}
                />
              ))
          ) : (
            <h1>No se encontraron Productos</h1>
          )}
        </div>

        <div className="pagination-container">
          <button
            className="paginarion-arrow-prev"
            onClick={prevPage}
            disabled={page === 1}
          >
            <ArrowPrev className={"pagination-arrow"} />
          </button>
          {getPaginationButtons().map((pageNumber, index) => (
            <button
              key={index}
              onClick={() => paginate(pageNumber)}
              className={`pagination-page ${
                pageNumber === page ? "active" : ""
              }`}
            >
              {pageNumber}
            </button>
          ))}
          <button
            className="paginarion-arrow-next"
            onClick={nextPage}
            disabled={page === totalPages}
          >
            <ArrowNext className={"pagination-arrow"} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Intendencia;
