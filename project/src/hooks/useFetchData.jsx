import { useCallback, useEffect } from "react"
import { useState } from "react"

export const useFetchData = (apiCall, options = {}) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const fetch = useCallback(
    (params) => {
      const newApiCall = params?.newApiCall
      const { call, controller } = newApiCall
        ? newApiCall(params?.data)
        : apiCall(params?.data)

      setLoading(true)
      const promise = call()
        .then((response) => {
          setData(response.data)
          setError(null)
          return response.data
        })
        .catch((error) => {
          setError(error)
          return Promise.reject(error)
        })
        .finally(() => {
          setLoading(false)
        })

      return { promise, abort: () => controller.abort() }
    },
    [apiCall],
  )

  useEffect(() => {
    if (!options?.autoFetch) return

    const { abort } = fetch()

    return () => abort()
  }, [fetch, options?.autoFetch])

  return { loading, data, error, fetch }
}
