import React, { useEffect, useState } from 'react';
import 'firebase/auth';
import CrudTask from './CrudTask';
import { db } from './Firebase';





const Task = () => {

    const [tasks, setTasks] = useState([]);
    const [currenId, setCurrenId] = useState('');


    const addOrEdit = async (taskObjec) => {
        if (currenId === '') {
            await db.collection('tasks').doc().set(taskObjec);

        } else {
            await db.collection('tasks').doc(currenId).update(taskObjec);

            setCurrenId('');
        }
    };

    const getTask = async () => {
        db.collection('tasks').onSnapshot(
            (querySnapshot) => {
                const docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
                });
                setTasks(docs);
            });
    }

    const onDeleteTask = async (id) => {
        if (window.confirm('estas seguro que quieres eliminarlo')) {
            await db.collection('tasks').doc(id).delete();
            console.log('eliminado')
        }

    }

    useEffect(() => {
        getTask();
    }, []);


    return (
        <>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">agregar tareas</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <CrudTask {...{ currenId, tasks, addOrEdit }} />
                </div>
                <div className="col-md-7">
                    <div>lista de tareas</div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">In Charged</th>
                                <th scope="col">description</th>
                                <th scope="col">Address</th>
                                <th scope="col">Latitude</th>
                                <th scope="col">Longitude</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => {
                                return <tr key={index}>
                                    <th scope="row">1</th>
                                    <td>{task.inCharge}</td>
                                    <td>{task.description}</td>
                                    <td>{task.address}</td>
                                    <td>{task.lat}</td>
                                    <td>{task.lng}</td>
                                    <td><button onClick={() => setCurrenId(task.id)} type="button" class="btn btn-primary">editar</button></td>
                                    <td><button onClick={() => onDeleteTask(task.id)} type="button" class="btn btn-danger">eliminar</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
           
        </>

    );
};


export default Task;