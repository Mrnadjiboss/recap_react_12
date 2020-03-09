import React, { useEffect } from "react"
import { useState } from "react"

const PageQuatre = () => {

    const[display, setDisplay] = useState({
        divRouge1 : "divRouge bg-danger col-4 ml-3 d-none",
        divRouge2 : "divRouge bg-danger col-4 ml-3 d-block",
        value : 0
    })
    var teleportation = () => {
        return(
            setDisplay({
                divRouge1 : "divRouge bg-danger col-4 ml-3 d-block",
                divRouge2 : "divRouge bg-danger col-4 ml-3 d-none",
                value : display.value + 1

            })
        )
    }
    var teleportation2 = () => {
        return(
            setDisplay({
                divRouge1 : "divRouge bg-danger col-4 ml-3 d-none",
                divRouge2 : "divRouge bg-danger col-4 ml-3 d-block",
                value : display.value + 1

            })
        )
    }
    useEffect(teleportation)
    
    

    return (
        <div className="container">
            <h1 className = "text-center">
                exo4
        
            </h1>
            <div className="row">

            <div className="divBleu1 col-4 bg-primary">
                <br/>
                <br/>
                <div className= {display.divRouge1}>
                    <br/>
                    <br/>

                </div>
                <br/>
                <br/>
            </div>
            <div className="divBleu2 col-4 bg-primary ml-3">
                <br/>
                <br/>
                <div className= {display.divRouge2}>
                <br/>
                    <br/>


                </div>
                <br/>
                <br/>
            </div>
            </div>

            <div className="row">
                <button className="btn btn-lg btn-primary" onClick = {display.divRouge2 === "divRouge bg-danger col-4 ml-3 d-block" ? teleportation : teleportation2 }>Changer</button>
                <button className="btn btn-lg btn-warning">vous avez appuyez {display.value} </button>
            
            </div>

            
        </div>
    )

}



export default PageQuatre