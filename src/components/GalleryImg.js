import React, { useState, useEffect } from 'react';
import { db } from './Firebase';


const GalleryImg = (props) => {
    const [images, setImages] = useState([]);

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
               console.log(img)
               return <img src={img.imageUrl}/>
           })} 

        </>

    );
};


export default GalleryImg;