import React, { useEffect } from "react"
import { useState } from "react"

const PageTrois = () => {
   

    var [input, setInput] = useState("inconnu")
    var [value, setValue] = useState("")

    var changer = (e) => {
        input = e.target.value
        
        setValue(input)
        
        
    }
    var go = () => {
        input = value
        setInput(input)
    }

   
    return (
       
        <div className="container">
            <h1 className = "text-center">
                exo3
            </h1>
            
            <br/>
            <h1>
            welcome    {input}
            </h1>
            <div className="row">
                <input type="text"  onChange= {changer} value = {value} className ="b"  onChange = {changer } />
                <button className="btn btn-warning"  onClick = {go}  >
                    click click click
                </button>
            </div>

        </div>
    )

}



export default PageTrois