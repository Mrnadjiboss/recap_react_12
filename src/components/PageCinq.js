import React, { useState } from "react"

const PageCinq = () => {
    const[img, setImg] = useState([ <img src="../img/egg.jpg" alt="" className="img-fluid"/>])
    const image = () => {
        let copieImg = [...img]
        
        copieImg.push(img[0])
        
        setImg(copieImg)
        
    }
    const retirerImg = () =>{
        let copie = [...img]
        let copie2 = [...img]
        copie.pop()
        copie2.push(img[0])
        setImg(copie)
        if (copie.length === 0) {
            setImg(img)
            
        }
        
    }
    const tousRetirer = () => {
        let trash = [...img]
        let fill = [...img]
        fill.push(img[0])
        trash.splice(0, img.length-1)
        setImg(trash)
        if (trash.length === 0) {
            setImg(fill)
            
        }
    }
    
    
    return (
        <div className="container">
            <h1 className = "text-center">
                Faire apparaitre des Oeufs 
            </h1>
            <br/>
            <hr/>
            <div className="row">
                {img}
             

            </div>
            <div className="row">
                <button className="btn btn-warning btn-outline-light" onClick = {image}>
                    ajouter
                </button>
                <button className="btn btn-warning btn-outline-light" onClick = {retirerImg}>
                    retirer
                </button>
                <button className="btn btn-warning btn-outline-light" onClick = {tousRetirer}>
                    Tous retirer
                </button>
            </div>
        </div>
    )

}



export default PageCinq
