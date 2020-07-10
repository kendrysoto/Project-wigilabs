import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import { db } from './Firebase';



const CrudTask = (props) => {


    const initialFieldValue = {
        inCharge: '',
        description: '',
        address: '',
        location: '',
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
                                <i className="fas fa-mobile-alt"></i>
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
                                <i className="fas fa-envelope"></i>
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
                                <i className="fas fa-envelope"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="location" name="location"
                            value={task.location}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group input-group ">
                        <button type="submit" value="save" className="btn btn-primary btn-block"
                           
                        > {props.currenId === '' ? 'save' : 'update'} </button>
                    </div>
                </div>

            </form>

        </div>

    );
};


export default CrudTask;