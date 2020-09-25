import React, { useContext } from 'react'
import { Prov } from '../../../_useLanguage'
import './Cognitivity.css'
export default function Cognitivity() {
    const { skills } = useContext(Prov)
    return (
        <div className="cognitivity">
            <div className="cogItem">
                <div className="cogTitle">{skills.team}</div>
                <div className="cogValue">
                    <div className="valueWrapper">
                        <CognitivityValue value="70%" />
                    </div>
                </div>
            </div>
            <div className="cogItem">
                <div className="cogTitle">{skills.creativity}</div>
                <div className="cogValue">
                    <div className="valueWrapper">
                        <CognitivityValue value="90%" />
                    </div>
                </div>
            </div>
            <div className="cogItem">
                <div className="cogTitle">{skills.adapt}</div>
                <div className="cogValue">
                    <div className="valueWrapper">
                        <CognitivityValue value="70%" />
                    </div>
                </div>
            </div>
            <div className="cogItem">
                <div className="cogTitle">{skills.com}</div>
                <div className="cogValue">
                    <div className="valueWrapper">
                        <CognitivityValue value="55%" />
                    </div>
                </div>
            </div>
            <div className="cogItem">
                <div className="cogTitle">{skills.plan}</div>
                <div className="cogValue">
                    <div className="valueWrapper">
                        <CognitivityValue value="75%" />
                    </div>
                </div>
            </div>
            <div className="cogItem">
                <div className="cogTitle">{skills.inov}</div>
                <div className="cogValue">
                    <div className="valueWrapper">
                        <CognitivityValue value="85%" />
                    </div>
                </div>
            </div>
        </div>
    )
}


function CognitivityValue({ value }) {
    return (
        <div style={{
            height: "75%",
            width: value,
            borderRadius: "30px",
            backgroundColor: "#4b9cd6",
            maxWidth: "90%",
            marginLeft: "5px"
        }}></div>
    )
}