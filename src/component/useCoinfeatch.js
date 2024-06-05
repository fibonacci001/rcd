import axios from "axios"; 
import { useQuery } from "@tanstack/react-query";

const FetchCoin = async () => {
    const res = await axios.get("https://my-json-server.typicode.com/fibonacci001/cbdata/crypto/");
    return res.data; // Use axios.get
  };

  const useCoin = () => {
    const { data: products, isLoading, error } = useQuery({
        queryKey: ['coin'],
        queryFn: FetchCoin
    })
    return { products, isLoading, error };
  }
   
  export default useCoin;