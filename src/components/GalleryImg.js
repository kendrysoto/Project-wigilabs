import React, { useState, useEffect } from 'react';
import { db } from './Firebase';


const GalleryImg = (props) => {
    const [images, setImages] = useState([]);

    const mystyle = {
        width: "18rem",
        margin: "15px",
        float: "left",
        height: "350px",
        marginBottom: "10px",
    };
    const mystyle2 = {
        position: "absolute",
        left: "0px",
        right: "0px",
        bottom: "0px",
        top: "50px",
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
                        <div slyle={mystyle2}>
                            <div class="card-body">
                                <h5 class="card-title">{img.titulo}</h5>
                            </div>
                        </div>
                    </div>
                )
            })}

        </>
    );
};


export default GalleryImg;