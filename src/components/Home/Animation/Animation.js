import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const Animation = ({modalIsOpen,setIsOpen}) => {
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };
      function closeModal(){
        setIsOpen(false);
      }
    return (


        <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            onRequestClose={closeModal}
        >

            <div className="col-md-12 m-auto">
                <div className="testSpring">
                    <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
                        <circle cx="170" cy="170" r="160" stroke="#E2007C" />
                        <circle cx="170" cy="170" r="135" stroke="#404041" />
                        <circle cx="170" cy="170" r="110" stroke="#E2007C" />
                        <circle cx="170" cy="170" r="85" stroke="#404041" />
                    </svg>
                </div>
            </div>
        </Modal >
       
    );
};

export default Animation;
