import React, {useState} from "react"

const PageUn = () => {
    const[titre, setTitre] = useState({
        titre : "titre",
        class : "text-center bg-warning"
        
    })
    const changerTitre = () => {
        return(
            setTitre({
                titre : "Titre Modifier",
                class : "bg-danger text-center text-white"
            })
        )
    }
    const changerTitre2 = () => {
        return(
            setTitre({
                titre : "Titre ",
                class : "text-center bg-warning"
            })
        )
    }

    return (
        <div className="container">
            <h1 className = {titre.class}>
                {titre.titre}
            </h1>

            <button className="btn-secondary btn-outline-warning btn" onClick = {titre.class === "text-center bg-warning" ? changerTitre : changerTitre2}>
                changer titre
            </button>
        </div>
    )

}



export default PageUn