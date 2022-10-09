import Loading from "./components/loading";
import Tours from "./components/tours";
import useFetch from "./hooks/usefetch";

const apiUrl = "https://course-api.com/react-tours-project";

function App() {
  const { loading, products, setProducts } = useFetch(apiUrl);
  const removeItem = (id) => {
    const newProducts = products.filter((p) => p.id !== id);
    setProducts(newProducts);
  };

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <main className="container">
      <Tours products={products} removeItem={removeItem} />
    </main>
  );
}

export default App;
