import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const FetchCoin = (id) => {
    return axios.get(`https://my-json-server.typicode.com/fibonacci001/cbdata/crypto/${id}`)
  }

  export const useCoindata = (id) => {



    
    return useQuery({
        queryKey: ['coindata', id], 
        queryFn: () => FetchCoin(id), 
      });


     
    
  
    // return { products, isLoading, error };
  };