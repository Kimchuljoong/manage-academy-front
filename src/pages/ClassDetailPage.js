/**
 * created by kimchj
 * created at 2023/02/27
 */

import React from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';


const ClassDetailPage = () => {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <h2>수업 등록/수정</h2>
            </div>
            <Form className="">
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label >Class Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Class Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="teacher">
                    <Form.Label>Teacher</Form.Label>
                    <Form.Control type="text" placeholder="Enter Teacher Name" />
                </Form.Group>

                <Form.Group className="mb3" controlId="occupancy">
                    <Form.Label>Occupancy</Form.Label>
                    <Form.Select size="lg">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default ClassDetailPage;