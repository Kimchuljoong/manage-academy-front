/**
 * created by kimchj
 * created at 2023/02/27
 */

import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';


const ClassDetailPage = () => {

    const [teachers, setTeachers] = useState(['a', 'b', 'c'])
    const [list, setList] = useState([])

    const add = () => {
        setList([...list, ''])
    }

    const remove = (targetId) => {
        setList(list.filter((e, idx) => {
            return idx !== targetId
        }))
    }

    return (
        <div>
            <div className="d-flex justify-content-center mb-3">
                <h2>수업 등록/수정</h2>
            </div>
            <Form className="">
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label >Class Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Class Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="teacher">
                    <Form.Label>Teacher</Form.Label>
                    <Form.Select size="md">
                        {teachers.map((teacher, idx) => {
                            return ( <option value={idx}>{teacher}</option> )
                        })}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="occupancy">
                    <Form.Label>Occupancy</Form.Label>
                    <Form.Select size="md">
                        {[...Array(parseInt(25))].map((n, idx) => {
                            return ( <option value={idx}>{idx}</option> )
                        })}
                    </Form.Select>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={5} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="curriculum">
                    <div className="d-flex justify-content-between mb-1">
                        <Form.Label>Curriculum</Form.Label>
                        <Button onClick={() => add()}>Add</Button>
                    </div>
                    <div className="border rounded" placeholder="">
                    {
                        list.map((e, idx) => {
                            return (
                                <div className="d-flex">
                                    <div className="align-middle text-center"> {idx+1}</div>
                                    <Form.Control
                                        className="border rounded-0" 
                                        type="text" 
                                        placeholder="step" 
                                        value={e} 
                                        onChange={
                                            (e) => {
                                                list[idx] = e.target.value
                                                setList([...list])
                                            }
                                        }/>
                                        <Button
                                            className="btn btn-danger"
                                            onClick={
                                                () => remove(idx)
                                            }>
                                            remove
                                        </Button>
                                </div>)
                        })
                    }                        
                    </div>
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default ClassDetailPage;