import React, { useState } from 'react';
import 'firebase/auth';
import ContacForm from './ContacForm';
import Chat from './Chat';


const Contact = () => {
    const mystyle2 = {
        backgroundColor: "#1E90FF",

    };

    return (
        <>
            <Chat />
            <div style={mystyle2} class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Register contact</h1>
                    <p class="lead">Send your information to contact him or write to Chat</p>
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