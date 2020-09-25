import React, { useContext } from 'react'
import './About.css'
import { Prov } from '../../_useLanguage'

export default function About() {
    const { about } = useContext(Prov)
    return (
        <div className="aboutContainer">
            <div className="mainTextWrapper">
                <p>
                    {about.main}
                </p>
            </div>
            <div className="downloadWrapper">
                <a href={about.cv} download="cv di Nápoli.pdf">
                    <h4 className="downloadcv">{about.download}</h4>
                </a>
            </div>
        </div>
    )
}
