import React, { useState, useEffect } from 'react';
import { db } from './Firebase';


const GalleryImg = (props) => {
    const [images, setImages] = useState([]);
    const mystyle = {
        width: "18rem",
        margin:"15px",
        
      };

    const getImages = async () => {
        db.collection('gallery').onSnapshot(
            (querySnapshot) => {
                const docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
                });
                setImages(docs);
            });
    }

    useEffect(() => {
        getImages();
    }, []);

    

    return (
        <>
           {images.map(img => {
               console.log(images)
               console.log('ssssssssssss')
               return (
                <div key={img.id} class="card" style={mystyle} >
                <img src={img.imageUrl} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{img.titulo}</h5>
                 
                  
                </div>
              </div>



               )
           })} 

        </>

    );
};


export default GalleryImg;