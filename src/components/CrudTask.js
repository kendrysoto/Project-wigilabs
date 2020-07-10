import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import { db } from './Firebase';
import Map from './Map';
import credentials from './Credentials';


const CrudTask = (props) => {
    const mapUrl = `http://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

    const initialFieldValue = {
        inCharge: '',
        description: '',
        address: '',
        lat: 6.2518401,
        lng: -75.563591
    }

    const [task, setTask] = useState(initialFieldValue);

    const handleInputChange = (e) => {
        task[e.target.name] = e.target.value;
        setTask({ ...task })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.addOrEdit(task);
        setTask({...initialFieldValue})
    }

  

   const getTaskById =  async (id) =>{
        const doc = await db.collection('tasks').doc(id).get();
        setTask({...doc.data()})
    }

    useEffect(() => {
      if(props.currenId === ""){
        setTask({...initialFieldValue})
      }else{
        getTaskById(props.currenId);
      }
    }, [props.currenId]);


    return (
        <div>
            <form autoComplete="off" onSubmit={handleSubmit} >
                <div className="form-group input-group ">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-user"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="incharge" name="inCharge"
                        value={task.inCharge}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-row" >
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            <i class="fas fa-audio-description"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="description" name="description"
                            value={task.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            <i class="fas fa-map-marked"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="address" name="address"
                            value={task.address}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            <i class="fas fa-map-marker-alt"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="lat" name="lat"
                            value={task.lat}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            <i class="fas fa-map-marker-alt"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="lng" name="lng"
                            value={task.lng}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group input-group ">
                        <button type="submit" value="save" className="btn btn-primary btn-block"
                           
                        > {props.currenId === '' ? 'save' : 'update'} </button>
                    </div>
                </div>

            </form>
            {console.log(task)}
            <Map
                lat={task.lat}
                lng={task.lng}
                googleMapURL={mapUrl}
                containerElement={<div style={{ height: '400px' }} />}
                mapElement={<div style={{ height: '100%' }} />}
                loadingElement={<p>Loading</p>}
            />

        </div>

    );
};


export default CrudTask;