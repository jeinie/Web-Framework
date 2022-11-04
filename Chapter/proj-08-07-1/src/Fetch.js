import { useFetch } from "./hooks";

const Fetch = ({ uri, renderSuccess, loadingFallback,renderError }) => {
    const { loading, data, error } = useFetch(uri)
    if (loading) return loadingFallback
    if (error) return renderError(error)
    if (data) return renderSuccess({data})
}

export default Fetch;