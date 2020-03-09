import React, { useState } from "react"

const PageSept = () => {
    var[input, setInput] = useState("")
    var[input2, setInput2] = useState("")
    var [value, setValue] = useState(0)
    var [value2, setValue2] = useState(0)
    var [resultat, setResultat] = useState(0)
    var copier = (e) => {
        input = e.target.value
        
        setValue(input)
        
    }
    var copier2 = (e) => {
        input2 = e.target.value
        setValue2(input2)
    }
    var Addition = () => {
        setResultat(Number(value)+Number(value2))
        
    }

    var [input3, setInput3] = useState(0)
    var [value3, setValue3] = useState("")

    var copier3 = (e) => {
        input3 =e.target.value
        setValue3(input3)
    }
    var un = () => {
        setValue3("1")
        if (value !== "") {
            setValue3(value3 + "1")
            
        }
    }
    var deux = () => {
        setValue3("2")
        if (value !== "") {
            setValue3(value3 + "2")
            
        }
    }
    var trois = () => {
        setValue3("3")
        if (value !== "") {
            setValue3(value3 + "3")
            
        }
    }
    var quatre = () => {
        setValue3("4")
        if (value !== "") {
            setValue3(value3 + "4")
            
        }
    }
    var cinq = () => {
        setValue3("5")
        if (value !== "") {
            setValue3(value3 + "5")
            
        }
    }
    var six = () => {
        setValue3("6")
        if (value !== "") {
            setValue3(value3 + "6" )
            
        }
    }
    var sept = () => {
        setValue3("7")
        if (value !== "") {
            setValue3(value3 + "7")
            
        }
    }
    var huit = () => {
        setValue3("8")
        if (value !== "") {
            setValue3(value3 + "8")
            
        }
    }
    var neuf = () => {
        setValue3("9")
        if (value !== "") {
            setValue3(value3 + "9")
            
        }
    }
    var zero = () => {
        setValue3("0")
        if (value !== "") {
            setValue3(value3 + "0")
            
        }
    }
    var signeFois = () => {
        setValue3("*")
        if (value !== "") {
            setValue3(value3 + "*")
            
        }
    }
    var signeMoins = () => {
        setValue3("-")
        if (value !== "") {
            setValue3(value3 + "-")
            
        }
    }
    var signePlus = () => {
        setValue3("+")
        if (value !== "") {
            setValue3(value3 + "+")
            
        }
    }
   
    var signeDivision = () => {
        setValue3("/")
        if (value !== "") {
            setValue3(value3 + "/")
            
        }
    }
    var signeEgal = () => {
        setValue3("=")
        if (value3 !== "") {
            let a = eval(value3)
            setValue3(value3 + "=" + a)
            
        }
    }
    var clear = () => {
        setValue3("0")
        if (value !== "") {
            setValue3("")
            
        }
    }
    




    
        
    
    return (
        <div className="container">
            <h1 className = "text-center">
                exo 7
            </h1>
            <br/>
            <hr/>
            <div className="row">
                <input type="text" value = {value} onChange = {copier} />
                <br/>
                <h2>+</h2>
                <br/>
                <input type="text" value =  {value2} onChange = {copier2} />
                <br/>
                <button onClick = {Addition} >=</button>
                <br/>
                <h2>la Reponse est : {resultat} </h2>
                </div>
                <br/>

                <hr/>
                <p className="text-warning bg-secondary">
               voila :     {value3}
                </p>
                <div className="row">
                    <input type="text" onChange= {copier3} value ={value3} className="forim-control"/>
                </div>
                <div className="row row1">
                    <div className="col-1"><button className="btn btn-primary" onClick = {un}>1</button></div>
                    <div className="col-1"><button className="btn btn-primary" onClick = {deux} >2</button></div>
                    <div className="col-1"><button className="btn btn-primary" onClick = {trois}>3</button></div>
                    <div className="col-1"><button className="btn btn-primary" onClick = {signePlus}>+</button></div>
                </div>
                <div className="row row2">
                    <div className="col-1"><button className="btn btn-primary" onClick = {quatre}>4</button></div>
                    <div className="col-1"><button className="btn btn-primary" onClick = {cinq}>5</button></div>
                    <div className="col-1"><button className="btn btn-primary" onClick = {six}>6</button></div>
                    <div className="col-1"><button className="btn btn-primary" onClick = {signeMoins}>-</button></div>
                </div>
                <div className="row row3">
                    <div className="col-1"><button className="btn btn-primary" onClick = {sept}>7</button></div>
                    <div className="col-1"><button className="btn btn-primary" onClick = {huit}>8</button></div>
                    <div className="col-1"><button className="btn btn-primary" onClick = {neuf}>9</button></div>
                    <div className="col-1"><button className="btn btn-primary" onClick = {signeFois}>*</button></div>
                </div>
                <div className="row  row4">
                    <div className="col-1"><button className="btn btn-primary" onClick = {clear} >C</button></div>
                    <div className="col-1"><button className="btn btn-primary" onClick = {zero} >0</button></div>
                    <div className="col-1"><button className="btn btn-primary" onClick = {signeEgal}  >=</button></div>
                    <div className="col-1"><button className="btn btn-primary" onClick = {signeDivision}>/</button></div>
                </div>

 
        </div>
    )

}



export default PageSept