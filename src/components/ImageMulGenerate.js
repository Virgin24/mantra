import React, { useState } from "react";
const token = "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"


const MulImageGenerator = () => {
  const [images, setImages] = useState([]);
  const [inputs, setInputs] = useState("");

  const generateImages = () => {
    const inputArray = inputs.split(",").map((input) => input.trim());
    const promises = inputArray.map((input) =>
      fetch("https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "Authorization" : `Bearer ${token}`
        },
        body: JSON.stringify({ inputs: input }),
      }).then((res) => res.blob())
    );
    Promise.all(promises).then((blobs) => {
      const urls = blobs.map((blob) => URL.createObjectURL(blob));
      setImages(urls);
    });
  };

  const handleInputs = (event) => {
    setInputs(event.target.value);
  };

  const downloadImage = (images) => {
    
    if (!images) return; 
    const link = document.createElement("a");
    link.href = images;
    link.download = "generated-image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

 const  renderNFTform =() =>  {
     
    return (
        <div>
           <form onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="inputs">Title of collcetion</label>
            <input type="text" id="inputs" value={inputs} onChange={handleInputs} />
            <br/>
             <label>Description</label>
            <input type="text" id="inputs" value={inputs} onChange={handleInputs} />
            <br/>
             <label>Price</label>
            <input type="text" id="inputs" value={inputs} onChange={handleInputs} />
            <br/>
             <label>Royalty</label>
            <input type="text" id="inputs" value={inputs} onChange={handleInputs} />


            <button type="submit" onClick={{}}>

          Generate Images
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
    
    <div className="container">
      <h2>Image Generator</h2>
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="inputs">Enter input text(s) separated by commas:</label>
        <input type="text" id="inputs" value={inputs} onChange={handleInputs} />
        <button type="submit" onClick={generateImages}>
          Generate Images
        </button>
      </form>
      <div style={{marginTop: 10}} className="image-box">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Generated Image ${index}`} />
        ))}
      </div>
        <div>
        <button onClick={() => downloadImage(images)}>Download</button>
        <button onClick={() => renderNFTform()}>Create NFT collection</button>
        </div>
    </div>
    </>
    
  );
};

export default MulImageGenerator;
