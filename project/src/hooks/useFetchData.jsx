import { useCallback, useEffect } from "react"
import { useState } from "react"

export const useFetchData = (apiCall, options = {}) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  const fetch = useCallback(
    (params) => {
      const { call, controller } = apiCall(params)

      setLoading(true)
      call
        .then((response) => {
          setData(response.data)
          options?.onSuccess?.(response.data)
        })
        .finally(() => {
          setLoading(false)
        })
      return () => controller.abort()
    },
    [apiCall],
  )

  useEffect(() => {
    if (options?.autoFetch) return fetch()
  }, [fetch, options?.autoFetch])

  return { loading, data, fetch }
}
