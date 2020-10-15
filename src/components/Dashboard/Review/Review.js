import React, { useContext } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';

const Review = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const { name, companyname, description, file} = data;
        const status = "Pending";
        const formData = new FormData()
        formData.append('image', loggedInUser.photo);
        formData.append('name', name);
        formData.append('companyname', companyname);
        formData.append('description', description);

        fetch('http://localhost:5000/addReview', {
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
            <div className="row">
                <Dashboard></Dashboard>
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-between p-4">
                            <h2>Add Review</h2>
                            <div className="row">
                                <img src={loggedInUser.photo} style={{ borderRadius: '50%', width: '50px' }} alt="" />
                                <h2 className="ml-3">{loggedInUser.name}</h2>
                            </div>
                        </div>
                        <div className="col-md-12 addService p-3">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="" style={{ borderRadius: '15px' }}>

                                    <div className="row px-4 py-5">
                                        <div className="col-md-6 col-sm-12 col-11">
                                            <div className="form-group">
                                                <input type="text" name="name" ref={register({ required: true })} className="form-control" placeholder="Your name" />
                                                {errors.name && <span className="text-danger">This field is required</span>}
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="companyname" ref={register({ required: true })} className="form-control" placeholder="Company's name ,Destination" />
                                                {errors.companyname && <span className="text-danger">This field is required</span>}
                                            </div>
                                            <div className="form-group">
                                                <textarea className="form-control" name="description" ref={register({ required: true })} rows="5" placeholder="Description"></textarea>
                                                {errors.description && <span className="text-danger">This field is required</span>}
                                            </div>
                                            <div className="mt-4">
                                                <input type="submit" value="Submit" className="btn bgBrand text-white px-3 float-right" />
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

export default Review;