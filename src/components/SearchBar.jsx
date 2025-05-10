import { useState } from "react"
import "./searchBar.css"

const searchBar = ({onSubmit}) => {
    const [term,setTerm] = useState ('')

    const handleForSubmit = (event) => {
        event.preventDefault()
        console.log('Necesito decirle al componente papa sobre los datos')
        onSubmit(term)
    }

    const handleChange = (event) => {
        setTerm(event.target.value)
    }

    console.log('term', term)

    return (
        <div className='search-bar'>
            <form onSubmit={handleForSubmit}>
                <label>Termino de la busqueda</label>
                <input onChange ={handleChange} value={term}></input>
            </form>
        </div>
    )
}

export default searchBar