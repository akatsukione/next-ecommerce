import * as React from "react";

interface props {
  children: React.ReactNode;
}

interface imageInterface {
  src: string;
  alt: string;
}
interface productsInterface {
  name: string;
  amount: number;
  image: imageInterface;
  price: string;
}
interface contextInterface {
  products: productsInterface[];
  setProducts: React.Dispatch<productsInterface[]>;
}
const context = React.createContext<contextInterface>({
  products: [],
  setProducts: () => [],
});

const ProductContext = ({ children }: props) => {
  const [products, setProducts] = React.useState<productsInterface[]>([]);
  React.useEffect(() => {
    console.log("render");
    const data: any = localStorage.getItem("products");
    if (data !== null) {
      setProducts(JSON.parse(data));
    } else {
      setProducts([]);
    }
  }, []);
  return (
    <context.Provider value={{ products, setProducts }}>
      {children}
    </context.Provider>
  );
};
const useProductContext = () => {
  type contextType = React.Context<contextInterface | null>;
  const { products, setProducts } = React.useContext<contextInterface>(context);
  return { products, setProducts };
};
export { useProductContext, ProductContext };
