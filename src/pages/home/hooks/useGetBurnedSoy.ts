import {useEffect, useState} from "react";
import axios from "axios";

export const useGetBurnedSoy = () => {
  const [burnedSoy, setBurnedSoy] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get('https://soy-supply-api.netlify.app/.netlify/functions/server/burned')
        .then((response) => {
          if (response.data) {
            setBurnedSoy(response.data)
          }
        })
        .catch((err) => {
          console.error(err)
        })
    }
    fetchData()
  }, [])

  return burnedSoy
}
