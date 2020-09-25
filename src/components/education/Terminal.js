import React, { useEffect, useState } from 'react'
import './Terminal.css'
import close from './close.png'
import min from './minimize.png'
import max from './maximize.png'
import house from './house.png'
import 'fontsource-cascadia-code'
export default function Terminal({ education, closeTerm }) {
    const [date, setDate] = useState("")
    const { title, institute, start, description } = education
    useEffect(() => {
        let aux = new Date()
        aux = aux.toString()
        aux = aux.split(" ")
        let temp = ""
        for (let i = 0; i < 5; i++)
            temp += `${aux[i]} `

        setDate(temp)

    }, [])
    return (
        <div className="terminal">
            <div className="terminalToolbar">
                <div className="termInteractions">
                    <img src={close} alt="close" onClick={() => closeTerm(false)} />
                    <img src={min} alt="minimize" onClick={() => closeTerm(false)} />
                    <img src={max} alt="maximize" />
                </div>
                <div className="termName">
                    <img src={house} alt="house" />
                    <span>francoadn — -bash — 80x24 </span>
                </div>
                <div className="termSpacer"></div>
            </div>
            <div className="terminalBody">
                <div>Last login: {date}on ttys000</div>
                <div>francodn@Francos-MacBook-Air: ~ % ./education.py</div>
                <div className="programContent">
                    <div className="body-command">
                        <div className="command">Title:</div>
                        <div className="commandResponse" style={{ fontSize: "32px" }}>{title}</div>
                        <div className="body-space"></div>
                    </div>
                    <div className="body-command">
                        <div className="command">Institute:</div>
                        <div className="commandResponse" style={{ fontSize: "22px" }}>{institute}</div>
                        <div className="body-space"></div>
                    </div>
                    <div className="body-command">
                        <div className="command">Start-End:</div>
                        <div className="commandResponse">{start}</div>
                        <div className="body-space"></div>
                    </div>
                    <div className="body-command">
                        <div className="command">Description:</div>
                        <div className="commandResponse">{description}</div>
                        <div className="body-space"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}
