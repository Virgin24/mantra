import React,{useRef} from 'react';
import {FaBars, FaTimes,FaRegUser, FaWallet } from "react-icons/fa"
import  "../../src/components/css/navbar.css"
import logo from "../../src/components/images/logo.jpg"

function Navbar() {

                const navRef = useRef();

                const [open2, setOpen2] = React.useState(true)


            const showNav = ()=>{
                navRef.current.classList.toggle("responsive_nav")
            }

            const  WalletDropdown =(props)=> {
                return (
                <li className={`dropdownitems ${open2 ? 'active' : 'inactive'}`}>
                    <a href={`${props.link}`}>{props.text}</a>
                </li>
                
                )
            }   

    return (
        <header>

            <a href="/" style={{marginTop:20, marginLeft:20,textDecoration:"none", display:"flex"}}>
                <img src={logo} alt="logo" height={50} width={50} />
                <h3 style={{marginTop:10, marginLeft:5, color: "black"}}>
                    Mantra
                </h3>
            </a>

            
            
            <nav ref={navRef} style= {{}}>

            <input type='text' placeholder='Enter text to search '/>
            <button>search</button>
                
                    <div  >
                    </div>
                 
                    <div style={{}} className="wallet_dropdown" onClick={()=>setOpen2(true)}>

                    <a style={{marginRight:40}} href="/profile"><FaRegUser/></a> 

                        <ul onMouseLeave={()=>{setOpen2(false)}}>   <FaWallet/>
                            <WalletDropdown link = "/products/wallet"  text = "Stakings"/>
                            <WalletDropdown link = "/products/transfer"  text = "Investing"/>  
                        </ul>
                      </div>
             

                    <span>
                                                

                    </span>

                <button className="nav-btn nav-close-btn" onClick={showNav}>
                   <FaTimes />
                </button>

            </nav>
           
            <button className="nav-btn" onClick={showNav}>
                    <FaBars />
            </button>
      
       </header>
      );
}

export default Navbar;