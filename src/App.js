import {Routes, Route, BrowserRouter} from "react-router-dom"
import Navbar from "./components/Navbar"
import Generate from "./components/ImageGenerate"
import Profile from "./components/Profile"
import Tickets from "./components/Tickets"
import Home from "./components/Home"
import Notfound from "./components/NotFound"

 export default function App() {

  return (
          <div>
              <Navbar />

               <BrowserRouter>

                    <Routes> 
                      <Route path="/" element={<Home />}/>
                      <Route path="/generate-image"  element={<Generate/>}/> 
                      <Route path= "/profile" element= { <Profile /> } /> 
                      <Route path= "/tickets" element= {<Tickets/> } /> 
                      {/* <Route path= "*" element= { <AuthRoute/> } />  */}
                      <Route path= "*" element= { <Notfound/> } /> 

                    </Routes>

                </BrowserRouter> 
          </div>
  )

}
          