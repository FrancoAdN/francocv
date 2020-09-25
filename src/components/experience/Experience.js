import React, { useContext } from 'react'
import './Experience.css'
import Work from './Work'
import { Prov } from '../../_useLanguage'

export default function Experience() {
    const { work } = useContext(Prov)
    return (
        <div className="experience">
            <div className="experienceLineOne">
                <div className="horizontalLine">
                    <div className="expLeft">
                        <div className="lineWorkOne"></div>
                        <div className="workExpOne">
                            <Work
                                work={work.experiences[0]}
                                left={true}
                            />
                        </div>

                        <div className="lineWorkThree"></div>
                        <div className="workExpThree">
                            <Work
                                work={work.experiences[2]}
                                left={true}
                            />
                        </div>

                    </div>
                    <div className="expRight">
                        <div className="lineWorkTwo"></div>
                        <div className="workExpTwo">
                            <Work
                                work={work.experiences[1]}
                                left={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
