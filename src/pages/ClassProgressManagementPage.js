import React from "react";
import { Button } from "react-bootstrap";
import Progress from "../components/Progress";

const ClassProgressManagement = () => {
    
    return (
        <>
            <div className="d-flex justify-content-center mb-3">
                <h2>학생 수업 진도</h2>
            </div>
            <div className="d-flex justify-content-end mb-3">
                <Button onClick={null}>Add</Button>
            </div>
            <div className="d-flex flex-column justify-content-between">
                <Progress/>
                <Progress/>
                <Progress/>
                <Progress/>
                <Progress/>
                <Progress/>
                <Progress/>
                <Progress/>
                <Progress/>
                <Progress/>
                <Progress/>
                <Progress/>
                <Progress/>
                <Progress/>
                <Progress/>
                <Progress/>
                <Progress/>
                <Progress/>
                <Progress/>
                <Progress/>
                <Progress/>
                <Progress/>
            </div>
        </>
    );
}

export default ClassProgressManagement;