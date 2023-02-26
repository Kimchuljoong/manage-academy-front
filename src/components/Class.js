/**
 * created by kimchj
 * created at 2023/03/26
 */

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";


const Class = (title, subject, teacher="", date, startTime, endTime, studentCount) => {
    //for design
    title = "일1 입시"
    subject = "C언어 파이썬"
    date = "일"
    startTime = "0900"
    endTime = "1230"
    teacher = "kimchj"
    studentCount = 25

    let classStatus = "running"
    
    return (
        <Nav.Link className="container" as={Link} to="/">
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between fw-bold fs-4">
                        <span>{`${title}`}</span>
                        <span>{`${subject}`}</span>
                        <span>{`${date} ${startTime} ~ ${endTime}`}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="">{`${classStatus}`}</span>
                        <div className="d-flex justify-content-end text-muted fs-5">
                            <span className="">{`${teacher} 선생님`}</span>
                            <span className="ms-2 me-2">|</span>
                            <span className="">{`${studentCount}명`}</span>
                        </div>
                    </div>
                </div>
        </Nav.Link>
    );
};

export default Class;