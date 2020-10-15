import React from 'react';

const Contact = () => {
    return (

        <form>
            <div className="form-group">
                <input type="email" className="form-control py-4" placeholder="Email" />
            </div>
            <div className="form-group">
                <input type="email" className="form-control py-4" placeholder="Your name/Company's name" />
            </div>
            <div className="form-group">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="btn btn-dark px-5">Send</button>
        </form>

    );
};

export default Contact;