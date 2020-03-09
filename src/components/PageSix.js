import React, { useState } from "react"


const PageSix = () => {
    var [cl1, cl2] = useState({
        class : "container bg-secondary w-100 h-100 d-block"

    })
  
    
    var[init, final] = useState([<div className= {cl1.class}>
    <button onClick = {() => { cl2({class : "container bg-secondary w-100 h-100 d-none" })
    console.log("yes")
}} >X</button>
    <input type= "checkbox"/>

</div>])
var push = () => {
    let copie = [...init]
    copie.push(init[0])
    final(copie)
}

    return(
        <div className="container">
            <div className="row d-flex">
                <input type="text" className = "form-control"/>
                <button className="btn btn-warning" onClick = {push}> appuyez </button>
                </div>
                <hr/>
                <br/>
                <hr/>
                <div className={cl1.class}>
                    {init}
                </div>
                

        </div>
    )
}

export default PageSix