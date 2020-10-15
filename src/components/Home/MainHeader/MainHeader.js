import React from 'react';
import frame from '../../../images/logos/Frame.png'
const MainHeader = () => {
    return (
        <div className="col-md-10 m-auto row">
            <div className="col-md-5 col-sm-10 col-10 d-flex align-items-center">
                <div>
                    <h1 className="mb-4"><strong>Let’s Grow Your <br />  Brand To The <br /> Next Level</strong></h1>
                    <p className="mb-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptas, natus nisi, nulla culpa sequi ab vitae, exercitationem ex nam consequuntur laboriosam.</p>
                    <button className="btn btn-dark px-5">Hire us</button>
                </div>
            </div>
            <div className="col-md-7 col-sm-10 col-10">
                <img src={frame} style={{ width: '90%' }} className="img-fluid" alt="" />
            </div>
        </div>
    );
};

export default MainHeader;