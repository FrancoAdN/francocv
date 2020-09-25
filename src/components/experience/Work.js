import React from 'react'
import './Work.css'

export default function Work({ work, left }) {
    const { comp, job, start, description } = work
    if (!left) {
        return (
            <div className="work-rigth">
                <div className="borderWork-right"></div>
                <div className="infoWork">
                    <div className="workEmp">{comp}</div>
                    <div className="workTit">{job}</div>
                    <div className="workStart">{start}</div>
                    <div className="workDescription">{description}</div>
                </div>
            </div>
        )
    }

    return (
        <div className="work">
            <div className="borderWork"></div>
            <div className="infoWork">
                <div className="workEmp">{comp}</div>
                <div className="workTit">{job}</div>
                <div className="workStart">{start}</div>
                <div className="workDescription">{description}</div>
            </div>
        </div>
    )
}
