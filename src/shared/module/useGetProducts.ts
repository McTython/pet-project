import { useEffect, useState } from "react";
import { IProduct } from "../config/interfaces/IProduct";
import { $api } from "../api/apiinstance";
import { AxiosResponse } from "axios";

const useGetProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = async (): Promise<AxiosResponse<IProduct[]>> => {
    return await $api.get("/products");
  };

  useEffect(() => {
    (async () => {
      const req = await getProducts();
      setProducts(req.data);
    })();
  }, []);

  return { products, setProducts };
};

export default useGetProducts;
