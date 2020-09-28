import React, { useContext } from 'react'
import './Skills.css'
import Software from './Software/Software'
import Cognitivity from './Cognitivity/Cognitivity'
import { Prov } from '../../_useLanguage'

export default function Skills() {
    const { skills } = useContext(Prov)
    return (
        <div className="skills">
            <div className="skillsItem">
                <div className="skillTitle">
                    <img src="https://img.icons8.com/ios-filled/35/000000/electronics.png" alt="software" />
                    <h2>{skills.soft}</h2>
                </div>
                <div className="skillContainerItem">
                    <Software />
                </div>
            </div>
            <div className="skillsItem">
                <div className="skillTitle">
                    <img src="https://img.icons8.com/ios-glyphs/35/000000/creativity.png" alt="cognitivity" />
                    <h2>{skills.cong}</h2>
                </div>
                <div className="skillContainerItem">
                    <Cognitivity />
                </div>
            </div>

        </div>
    )
}
