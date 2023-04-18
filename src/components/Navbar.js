import React,{useRef, useState} from 'react';
import {FaBars, FaTimes,FaRegUser, FaWallet } from "react-icons/fa"
import  "../../src/components/css/navbar.css"
import { ConnectToMetamask } from './Connect';
import { Menu, Image, Divider, Dropdown, Label } from 'semantic-ui-react';

import logo from "../../src/components/images/logo.jpg"

function Navbar() {

                const navRef = useRef();
                const [walletAddress, setWalletAddress] = useState("")

                const [open, setOpen] = React.useState(true)


            const showNav = ()=>{
                navRef.current.classList.toggle("responsive_nav")
            }

            const  WalletDropdown =(props)=> {
                return (
                <li className={`dropdownitems ${open ? 'active' : 'inactive'}`}>
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

            <span className='header_search'> 
                 <input type='text' placeholder='Enter text to search'/>
            
                  <button>search</button>
            </span>
            
                <a href='/tickets'><h3 style={{marginLeft: 50, marginRight: 20}}>create tickets</h3></a>
                <a href='/generate-image'><h3 style={{marginLeft: 30, marginRight: 30}}>Generate Image</h3></a>
                <a href='/profile'><h3> <FaRegUser/> Profile</h3></a>
            <nav className='nav' ref={navRef}>
        
                <div><button onClick={async ()=> {
                   const {address } =await ConnectToMetamask()
                   setWalletAddress(address)
                }}>{walletAddress.length > 0 ? ("Connected: " + String(walletAddress).substring(0, 6) +"..." +String(walletAddress).substring(38)) : ( <span>ConnectWallet</span>)}</button></div>

                <div className='drop'>

                        <div style={{marginLeft:50}} onClick={()=>setOpen(true)}><FaWallet/></div>

                        <div className="wallet_dropdown" >
                            <ul onMouseLeave={()=>{setOpen(false)}}>   
                                <li><WalletDropdown link = "/products/wallet"  text = "Stakings"/></li> 
                                <li><WalletDropdown link = "/products/transfer"  text = "Investing"/></li>   
                            </ul>           
                        </div>
                </div>
                

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