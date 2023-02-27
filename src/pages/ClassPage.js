/**
 * created by kimchj
 * created at 2023/02/26
 */

import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Class from "../components/Class";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const ClassPage = () => {

    let lst = ['a', 'b', 'c', 'd'];

    return (
        <>
            <div className="d-flex flex-row justify-content-between p-5">
                <div></div>
                <h2>수업 목록</h2>
                <Link to="/"><Button >수업 등록</Button></Link>
            </div>
            
            <ListGroup as="ul">
                {
                    lst.map(element => {
                        return (<Class />);
                    })
                }
            </ListGroup>
            
        </>
    );
}

export default ClassPage;