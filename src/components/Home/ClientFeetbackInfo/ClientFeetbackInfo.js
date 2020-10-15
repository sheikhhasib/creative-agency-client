import React from 'react';

const ClientFeetbackInfo = ({ client }) => {
    return (
        <div className="card col-md-3 col-sm-5 col-10 m-4 p-4" >
            <div className="row">
                <div>
                <img src={client.image} style={{width:"60px" ,borderRadius:'50%'}} alt="" />
                </div>
                <div className="ml-4">
                    <h3>{client.name}</h3>
                    <h6>{client.companyname}</h6>
                </div>
            </div>
            <div className="my-4">
                <p>{client.description}</p>
            </div>
        </div>
    );
};

export default ClientFeetbackInfo;