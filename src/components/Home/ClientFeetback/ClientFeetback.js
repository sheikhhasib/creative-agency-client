import React, { useEffect, useState } from 'react';
import ClientFeetbackInfo from '../ClientFeetbackInfo/ClientFeetbackInfo';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';

const clientInfo = [
    {
        name: 'Nash Patrik',
        company: 'CEO, Manpol',
        img:customer1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
    },
    {
        name: 'Miriam Barron',
        company: 'CEO, Manpol',
        img: customer2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
    },
    {
        name: 'Bria Malone',
        company: 'CEO, Manpol',
        img:customer3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
    },
];

const ClientFeetback = () => {
    const [clientFeetback,setClientFeetback] = useState([]);
    useEffect(()=>{
        fetch('https://hidden-savannah-07241.herokuapp.com/allReview')
        .then(res => res.json())
        .then(data => setClientFeetback(data))
    },[])
    return (
        <div className="col-md-12 m-auto">
            <div className="my-5">
                <h2 className="text-center">Clients <span className="textBrand">Feedback</span></h2>
            </div>
            <div className="row d-flex justify-content-center my-5">
                {
                    clientFeetback.map(client=> <ClientFeetbackInfo key={client._id} client={client}></ClientFeetbackInfo>)
                }
            </div>
        </div>
    );
};

export default ClientFeetback;