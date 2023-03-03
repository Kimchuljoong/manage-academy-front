import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from "react-bootstrap";

const StudentPage = () => {

    let classes = ['aaa', 'bbb', 'ccc']

    return (
        <>
            <div>
                <div className="d-flex justify-content-center mb-3">
                    <h2>학생 등록/수정</h2>
                </div>
                <Form className="">
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label >Student Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Student Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="grade">
                        <Form.Label>Grade</Form.Label>
                        <Form.Control type="text" placeholder="Enter Student Grade" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="class">
                        <Form.Label>Class</Form.Label>
                        <div>
                            {
                                classes.map(e => {
                                    return <div className="border">{e}</div>;
                                })
                            }
                        </div>
                        
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    );    
}

export default StudentPage;
