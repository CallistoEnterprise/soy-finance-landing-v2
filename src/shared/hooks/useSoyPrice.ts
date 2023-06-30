import {useEffect, useState} from "react";
import {useFetchTokens} from "../../pages/home/hooks/fetcher-home";

export function useSoyPrice() {
  const tokensData = useFetchTokens();
  const [price, setPrice] = useState<number | null>(0);

  useEffect(() => {
    if(tokensData && tokensData.data) {
      const soy = tokensData.data["0x9fae2529863bd691b4a7171bdfcf33c7ebb10a65"];
      console.log(soy);

      if(soy) {
        setPrice(soy.priceUSD);
      }
    }
  }, [tokensData]);

  return {
    loading: !price,
    price
  }
}
