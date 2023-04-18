import {Routes, Route, BrowserRouter} from "react-router-dom"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import Tickets from "./components/Tickets"
import Home from "./components/Home"
import Notfound from "./components/NotFound"
import NavHeader from "../src/components/NavHeader"
import ImageGenerator from "../src/components/ImageGenerate"
import MulImageGenerator from "./components/ImageMulGenerate"

 export default function App() {

  return (
          <div>
              <Navbar />

               <BrowserRouter>

                    <Routes> 
                      <Route path="/" element={<Home />}/>
                      <Route path="/generate-image"  element={<ImageGenerator/>}/>
                      <Route path="/generate-multiple-image"  element={<MulImageGenerator/>}/> 
                      <Route path= "/profile" element= { <Profile /> } /> 
                      <Route path= "/tickets" element= {<Tickets/> } />
                      <Route path= "/testpage" element= {<NavHeader/> } /> 
                      {/* <Route path= "*" element= { <AuthRoute/> } />  */}
                      <Route path= "*" element= { <Notfound/> } /> 

                    </Routes>

                </BrowserRouter> 
          </div>
  )

}
          