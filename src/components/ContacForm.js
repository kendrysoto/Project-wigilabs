import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import { useChat } from './usechat';
import { db } from './Firebase';


const ContactForm = () => {
    const initialFieldValue = {
        fullName: '',
        mobile: '',
        email: '',
        address: '',
    }
    const mystyle = {
        marginLeft: "auto",
        marginRight: "auto",
    };
    const [contactInfo, setContactInfo] = useState(initialFieldValue);
    const handleInputChange = (e) => {
        contactInfo[e.target.name] = e.target.value;
        setContactInfo({ ...contactInfo })
    }

    const addOrEdit = (e) => {
        e.preventDefault();

        db.collection('contactsInfo').add({
            timestamp: Date.now(),
            contactInfo
        })
    }



    return (
        <div>
            <form autoComplete="off"   >
                <div className="form-group input-group ">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-user"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="full Name" name="fullName"
                        value={contactInfo.fullName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-row" >
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="mobile" name="mobile"
                            value={contactInfo.mobile}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Email" name="email"
                            value={contactInfo.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group input-group ">
                        <textarea className="form-control" placeholder="Address" name="address"
                            value={contactInfo.address}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group input-group ">
                        <button type="submit" value="save" className="btn btn-primary btn-block"
                            onClick={addOrEdit}
                        > enviar </button>
                    </div>
                </div>
            </form>
        </div>

    );
};


export default ContactForm;