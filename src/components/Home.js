import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import  "../../src/components/css/home.css"
import image from "../../src/components/images/financial.png"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


function Home() {


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

            
            <footer style={{marginTop:30}}>
                <p>&copy; 2023 Mantra</p>
            </footer>
        </div>
     );
}

export default Home;




