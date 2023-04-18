import React, { useState } from "react";
import { abi } from "./constant";

  const token = "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"


function ImageGenerator() {
  const [inputText, setInputText] = useState("");
  const [numImages, setNumImages] = useState(0);
  const [imageUrls, setImageUrls] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleNumImagesChange = (event) => {
    setNumImages(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Call Hugging Face API to generate images
    fetch("https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization" : `Bearer ${token}`

      },
      body: JSON.stringify({ inputs: inputText }),
    })
      .then((res) => res.blob())
      .then((blob) => {
        // Generate array of image URLs
        const urls = [];
        for (let i = 0; i < numImages; i++) {
          urls.push(window.URL.createObjectURL(blob));
        }
        setImageUrls(urls);
      });
  };   

  const downloadImage = (imageUrls) => {
    
    if (!imageUrls) return; 
    const link = document.createElement("a");
    link.href = imageUrls;
    link.download = "generated-image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const  renderNFTform =(images) =>  {
           const [title , setTitle] = useState("")
           const [description, setDescription] = useState("")
           const [price, setPrice] = useState("")
           const [royalty, setRoyalty] = useState("")

           contract_address = "";
         
           const contract = ethers.Contract(abi, contract_address, signer)

           const resp = contract.createToken(url, )

    return (
        <div>
           <form onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="inputs">Title of collcetion</label>
            <input type="text" id="inputs" value={inputs} onChange={(e)=>setTitle(e.target.value)} />
            <br/>
             <label>Description</label>
            <input type="text" id="inputs" value={inputs} onChange={(e)=>setDescription(e.target.value)} />
            <br/>
             <label>Price</label>
            <input type="text" id="inputs" value={inputs} onChange={(e)=>setPrice(e.target.value)} />
            <br/>
             <label>Royalty</label>
            <input type="text" id="inputs" value={inputs} onChange={(e)=>setRoyalty(e.target.value)} />


            <button type="submit" onClick={{}}>

           Create Collection
        </button>
      </form>
        </div>
    )
  }

  

  return (
      <>
          <div className="accordion">
              <div><a href="/generate-image">generate with one text</a> </div>
              <div><a href="/generate-multiple-image">generate with multiple texts</a> </div>    
          </div>

          <hr/>
          
          <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input text:
          <input type="text" value={inputText} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Number of images:
          <input type="number" value={numImages} onChange={handleNumImagesChange} />
        </label>
        <br/>
        <input type="checkbox" />
        <span>do you want a single image</span>
          <br/>
          <input type="checkbox"  />
        <span>is a ticket</span>
        <br />
        <button type="submit">Generate Images</button>
      </form>

      <div className="image-container">
        {imageUrls.map((url, index) => (
          <div className="image-box" key={index}>
            <img src={url} alt={`Generated image ${index}`} />
          </div>
        ))}
      </div>

      <button onClick={() => downloadImage(images)}>Download</button>
       
      <button onClick={() =>renderNFTform(images)}>Create NFT Collection</button>

    </div>
      </>
    
  );
}

export default ImageGenerator;


