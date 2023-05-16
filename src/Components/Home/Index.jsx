
import { useEffect, useState } from "react";
import { getProducts } from "../Context/ApiFetch.jsx";
import { Header } from "../../componentes/header.jsx";
import CardProduct from "../Product/index.jsx";

import './index.css'



function Home() {
  const [products, setProducts] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  const [search, setSearch] = useState("");
  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  let results;
  if (selectedCategory == '' && searcher == "") 
  { results = products }

  if (selectedCategory == '' && searcher != "" && products) {
    results = products.filter((product) => product.title.toLowerCase().includes(search.toLocaleLowerCase()))
  }
  if (selectedCategory != '' && searcher == "") {
    results = products.filter((product) => product.category.includes(selectedCategory))
  }
  if (selectedCategory != '' && searcher != "") {
    let resultCategory = products.filter((product) => product.category.includes(selectedCategory))
    results = resultCategory.filter((product) => product.title.toLowerCase().includes(search.toLocaleLowerCase()))
  }

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <>
    <Header></Header>
      <main>
    
        <div>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Todas</option>
            <option value="smartphones">smartphones</option>
            <option value="laptops">laptops</option>
            <option value="fragrances">fragrances</option>
            <option value="skincare">skincare</option>
            <option value="groceries">groceries</option>
            <option value="home-decoration">home-decoration</option>
          </select>
          <p>Opción seleccionada: {selectedCategory}</p>
        </div>

        <section className="productos">
          <input
            type="search"
            value={search}
            placeholder="Search"
            onChange={searcher}
          />
          <img alt="Lupa" />
          <p>home</p>
          {products == null
            ? "Loading..."
            : results.map((product) => {
                console.log(product);
                return <CardProduct key={product.id} producto={product} />;
              })}
        </section>
      </main>

    </>
  );
}

export default Home;


