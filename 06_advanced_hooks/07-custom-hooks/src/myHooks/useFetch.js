/**
 * Custom Hook:
 *      Reuse API fetching logic in multiple components.
 *
 * Handles:
 *      - data
 *      - loading state
 *      - error state
 */


import { useEffect, useState } from 'react'


export default function useFetch(url) {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        async function fetchData() {

            try {

                // Fetch data from provided API URL
                const res = await fetch(url)
                const json = await res.json()
                setData(json)

            } catch (err) {

                // Store error if API fails
                setError(err)

            } finally {

                // Stop loading after success or error
                setLoading(false)

            }

        }

        fetchData()

    }, [url])


    return { data, error, loading }

}