import React, { useContext } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import './AddService.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import DashboardHeader from '../DashboardHeader/DashboardHeader';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const { serviceTitle, description, file } = data;
        const formData = new FormData()
        formData.append('file', file[0]);
        formData.append('serviceTitle', serviceTitle);
        formData.append('description', description);

        fetch('https://hidden-savannah-07241.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                history.replace('/')
            })
            .catch(error => {
                console.error(error)
            })
    };
    return (
        <div className="container-fluid">
            <DashboardHeader></DashboardHeader>
            <div className="row">
                <Dashboard></Dashboard>
                <div className="col-md-10 addService p-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card" style={{ borderRadius: '15px' }}>
                            <div className="row px-4 py-5">
                                <div className="col-md-6 col-sm-12 col-11 pr-5">
                                    <div className="form-group">
                                        <label htmlFor="Service Title">Service Title</label>
                                        <input type="text" name="serviceTitle" ref={register({ required: true })} className="form-control" placeholder="Service Title" />
                                        {errors.serviceTitle && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Service Title">Description</label>
                                        <textarea className="form-control" name="description" ref={register({ required: true })} rows="4" placeholder="Enter description"></textarea>
                                        {errors.description && <span className="text-danger">This field is required</span>}
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 col-11">
                                    <label htmlFor="">Icon</label><br />
                                    <div className="col-md-6 col-sm-12 custom-file">
                                        <input type="file" className="custom-file-input" name="file" ref={register({ required: true })} />
                                        <label className="custom-file-label" style={{ backgroundColor: '#DEFFED', color: '#009444' }} htmlFor="validatedCustomFile"> <FontAwesomeIcon icon={faCloudUploadAlt}></FontAwesomeIcon> Upload image</label>
                                        {errors.file && <span className="text-danger">This field is required</span>}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="m-4">
                            <input type="submit" value="Submit" className="btn bgBrand text-white px-3 float-right" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;