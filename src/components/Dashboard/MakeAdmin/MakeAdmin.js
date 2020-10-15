import React, { useContext } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const MakeAdmin = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('email', data.email);

        fetch('https://hidden-savannah-07241.herokuapp.com/addAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert("admin created succesfully")
            })
            .catch(error => {
                console.error(error)
            })
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <Dashboard></Dashboard>
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-between p-4">
                            <h2>Add Services</h2>
                            <div className="row">
                                <img src={loggedInUser.photo} style={{ borderRadius: '50%', width: '50px' }} alt="" />
                                <h2 className="ml-3">{loggedInUser.name}</h2>
                            </div>
                        </div>
                        <div className="col-md-12 addService p-3">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="card" style={{ borderRadius: '15px' }}>
                                    <div className="row px-4 py-5">
                                        <div className="col-md-8 col-sm-12 col-11 pr-5">
                                            <div className="form-group">
                                                <label htmlFor="Service Title">Email</label>
                                                <div className="row">
                                                    <div className="col-md-10 col-sm-10">
                                                        <input type="email" name="email" ref={register({ required: true })} className="form-control" placeholder="Service Title" />
                                                        {errors.email && <span className="text-danger">This field is required</span>}
                                                    </div>
                                                    <div>
                                                        <input type="submit" value="Submit" className="btn bgBrand text-white px-3 float-right" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;