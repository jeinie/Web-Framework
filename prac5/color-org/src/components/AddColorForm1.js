import React, {useRef} from "react";

const AddColorForm1 = function({onNewColor = f=>f}) {
    const txtTitle = useRef()
    const submit = e => {
        e.preventDefault()
        const title = txtTitle.current.value
        onNewColor(title, color)
        txtTitle.current.value = ""
    }

    return (
        <form onSubmit={submit}>
            <input ref={txtTitle} type="text" placeholder="color title..." required/>
            <button>ADD</button>
        </form>
    )
}

export default AddColorForm1;