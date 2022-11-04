import { useFetch } from "./hooks";

const Fetch = ({ uri, renderSuccess, 
loadingFallback = <p>loading</p>,
renderError = error => (<pr>{JSON.stringify(error, null, 2)}</pr>)}) => {
    const { loading, data, error } = useFetch(uri)
    if (loading) return loadingFallback
    if (error) return renderError(error)
    if (data) return renderSuccess({data})
}

export default Fetch;