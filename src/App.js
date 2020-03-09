import React , {useState, useEffect} from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
  
} 
from "react-router-dom"
import PageUn from "./components/PageUn"
import PageDeux from "./components/PageDeux"
import PageTrois from "./components/PageTrois"
import PageQuatre from "./components/pageQuatre"
import PageCinq from "./components/PageCinq"
import PageSix from "./components/PageSix"
import PageSept from "./components/PageSept"




const App = () => {
  const[classe,setClasse] = useState("container bg-dark text-white d-none w-100 h-20")

let classe2 = () => {
    return(
      setClasse("container bg-dark text-white d-none w-100 h-20")
    )
}
var [initial, final] = useState([<div style={{padding:"600px", display:"block", color:"red",position:"absolute", top:"0"}} className="container form-control bg-dark  ">
<h1>hello</h1>
<h2>you just got infected by a virus please reboot the comupter</h2>
<h1>with love Najib credits to me no ,natter who i am </h1>
<h2>{}</h2>
</div>])



// useEffect(explode)
console.log(initial)
  return(
    <Router>
      <h1 className="bg-primary text-center  text-warning">
        react Exo 7
      </h1>
      <hr className="bg-warning"/>
      <div className="container border-secondary">
      
      <Link  to = "/home" className = "h1 text-center">
        Home
      </Link>

      <Link  to = "/PageUn" className = "h1 text-center ml-5">
        exo1
      </Link>

      <Link  to = "/PageDeux" className = "h1 text-center ml-5">
        exo2
      </Link>

      <Link  to = "/PageTrois" className = "h1 text-center ml-5">
        exo3
      </Link>
      
      <Link  to = "/PageQuatre" className = "h1 text-center ml-5">
        exo4
      </Link>
      <Link  to = "/PageCinq" className = "h1 text-center ml-5">
        exo5
      </Link>
      <Link  to = "/PageSix" className = "h1 text-center ml-5">
        exo6
      </Link>
      <Link  to = "/PageSept" className = "h1 text-center ml-5">
        exo7
      </Link>
      </div>
      

      <Switch>
        <Route exact path = "./">
          
      
        </Route>

        <Route path = "/PageUn">
        <PageUn />
        </Route>
        <Route path = "/PageDeux">
      {initial}
          

         
        <PageDeux />
        </Route>
        <Route path = "/PageTrois">
        <PageTrois />
        </Route>
        <Route path = "/PageQuatre">

        <PageQuatre />
        </Route>
        <Route path = "/PageCinq">
        <PageCinq />
        </Route>
        <Route path = "/PageSix">
        <PageSix class = {classe.class} sett = {() => {return(classe2)}} />
        </Route>
        <Route path = "/PageSept">
        <PageSept />
        </Route>





      </Switch>
      
    </Router>
 
  )

}



export default App