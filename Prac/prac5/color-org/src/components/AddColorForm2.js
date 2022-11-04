import React, {useRef} from "react";

const AddColorForm2 = function({onNewColor = f=>f}) {
    const [title, setTitle] = useState("")
    const submit = e => {
        e.preventDefault()
        onNewColor(title)
        setTitle("")
    }

    return (
        <form onSubmit={submit}>
            <input 
                value={title}
                onChange={event => setTitle(event.target.value)}
                type="text" placeholder="color title..." required/>
            <button>ADD</button>
        </form>
    )
}

export default AddColorForm2;