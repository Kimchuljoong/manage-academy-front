import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const Progress = () => {

    const [subjects, setSubjects] = useState(['수업1', '수업2', '수업3', '수업4', '수업5', '수업6', '수업7', '수업8'])
    
    
    let studnets = ['kimchj', 'kkkkk', 'bbbb']

    return (
        <>
            <div className="d-flex flex-row border" >
                <div className="d-flex flex-column text-center" style={{width: '20%'}} >
                    <div className="border-bottom border-end p-1 ">name</div>
                    <select className="form-select p-1">
                        {
                            studnets.map((e, idx) => {
                                return <option key={e} value={idx}> {e}</option>
                            })
                        }
                    </select>
                </div>
                <div className="d-flex flex-column " style={{width: '100%'}}>
                    <div className="text-center border-bottom p-1" >
                        curriculum
                    </div>
                    <div className="d-flex flex-row justify-content-between text-center ">
                        {
                            subjects.map((e, idx) => {
                                return <div key={e} className="border-start p-1" style={{width: '100%'}}>{e}</div>;
                            })
                        }
                        
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Progress;