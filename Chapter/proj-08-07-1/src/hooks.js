import { useState, useEffect } from "react";
import Fetch from "./Fetch";

export const useFetch = uri => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        if (!uri) return
        fetch(uri)
        .then(response => response.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError)
    }, [uri])

    return { loading, data, error }
}