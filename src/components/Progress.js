import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const Progress = () => {
    return (
        <>
            <div className="d-flex flex-row border" >
                <div className="d-flex flex-column text-center" >
                    <div className="border-bottom border-end p-1 ">name</div>
                    <div className="border-end p-1">kimchj</div>
                </div>
                <div className="d-flex flex-column " style={{width: '100%'}}>
                    <div className="text-center border-bottom p-1" >
                        curriculum
                    </div>
                    <div className="d-flex flex-row justify-content-between text-center ">
                        <div className="p-1" style={{width: '100%'}}>수업1</div>
                        <div className="border-start p-1" style={{width: '100%'}}>수업1</div>
                        <div className="border-start p-1" style={{width: '100%'}}>수업1</div>
                        <div className="border-start p-1" style={{width: '100%'}}>수업1</div>
                        <div className="border-start p-1" style={{width: '100%'}}>수업1</div>
                        <div className="border-start p-1" style={{width: '100%'}}>수업1</div>
                        <div className="border-start p-1" style={{width: '100%'}}>수업1</div>
                        <div className="border-start p-1" style={{width: '100%'}}>수업1</div>
                        <div className="border-start p-1" style={{width: '100%'}}>수업1</div>
                        <div className="border-start p-1" style={{width: '100%'}}>수업1</div>
                        <div className="border-start p-1" style={{width: '100%'}}>수업1</div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Progress;