import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import  "../../src/components/css/home.css"
import image from "../../src/components/images/financial.png"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "../../src/components/css/navbar.css"
import { ConnectToMetamask } from './Connect';
import {useNavigate} from "react-router-dom"
  

  

function Home() {

    const navigate = useNavigate();

    const handleDragStart = (e) => e.preventDefault();

        const items = [
        <img src={image} onDragStart={handleDragStart} role="presentation" style= {{height:400, width:800}} />,
        <img src={image} onDragStart={handleDragStart} role="presentation" style= {{height:400, width:800}} />,
        <img src={image} onDragStart={handleDragStart} role="presentation" style= {{height:400, width:800}} />,
        ];

        const responsive = {
            0 : {
            items:2,
            },

            512: {
            items: 1
            }

            // this simply means if its more than 521pixels of secreen
            // it should display 4 items, if less display two items
        }
        
        const connect = async () => {
            // await ConnectToMetamask()
              navigate("/generate-image")
        }
        
    return ( 
        <div>
            <div className="page">        
              
                <main>
                 <AliceCarousel
                 infinite
                 autoPlayInterval={1000}
                 animationDuration={1500}
                 disableDotsControls
                 disableButtonsControls
                 responsive={responsive}
                 autoPlay
                 mouseTracking
                 items={items} 
                  
                  /> 
                </main>
                
  
            </div>

             <div className='get'> 
                 <a href='/generate-image'>
                    <span className='get_span' onClick={async()=> {
                        if (window.ethereum.isConnected() == false){
                            await connect ();
                            }
                        }}> 
                         Get Started For Free
                    </span>
              </a>
             </div>
            <footer >
                <p>&copy; 2023 Mantra</p>
            </footer>
        </div>
       
     );
}

export default Home;




