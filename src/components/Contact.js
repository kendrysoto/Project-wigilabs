import React, { useState } from 'react';
import 'firebase/auth';
import ContacForm from './ContacForm';




const Contact = () => {
    

    return (
        <>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Registrar contacto</h1>
                    <p class="lead">Send your information to contact you</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <ContacForm />
                </div>
                
            </div>

        </>

    );
};


export default Contact;