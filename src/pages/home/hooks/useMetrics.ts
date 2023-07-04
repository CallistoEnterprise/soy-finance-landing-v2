import axios from 'axios'
import { useEffect, useState } from 'react'

const METRICS = 'https://api.callisto.network/soy/metrics'

export const useMetrics = () => {
  const [metricsData, setMetricsData] = useState({
    block_number_swap: 12669555,
    block_number: 12669560,
    result: {
      users: 0,
      trades: 0,
      volume: 0,
      volume_24h: 0,
      soy_circulating_supply: 0,
      soy_IDO: 0,
      total_valueLocked_in_farms: 0,
    },
  })

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(METRICS)
        .then((response) => {
          if (response.data) {
            setMetricsData(response.data)
          }
        })
        .catch((err) => {
          console.error(err)
        })
    }
    fetchData()
  }, [])

  return metricsData
}
