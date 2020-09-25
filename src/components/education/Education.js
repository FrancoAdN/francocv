import React, { useState, useContext } from 'react'
import './Education.css'
import Terminal from './Terminal'
import { Prov } from '../../_useLanguage'

export default function Education() {
    const { education } = useContext(Prov)
    const [one, setOne] = useState(true)
    const [two, setTwo] = useState(true)
    const [three, setThree] = useState(true)
    const [four, setFour] = useState(true)

    return (
        <div className="education">
            <div className="lineEducation">

                {(one) ? (
                    <div className="educationItem">
                        <div className="rightLine"></div>
                        <div className="ItemOne">
                            <Terminal
                                education={education.education[0]}
                                closeTerm={setOne}
                            />
                        </div>
                    </div>) : (
                        <div className="closedOne" onClick={() => setOne(true)}>
                            <img src="https://img.icons8.com/ios-filled/30/000000/command.png" alt="command" />
                        </div>)
                }

                {(two) ? (
                    <div className="educationItemTwo">
                        <div className="leftLine"></div>
                        <div className="ItemTwo">
                            <Terminal
                                education={education.education[1]}
                                closeTerm={setTwo}
                            />
                        </div>
                    </div>
                ) : (
                        <div className="closedTwo" onClick={() => setTwo(true)}>
                            <img src="https://img.icons8.com/ios-filled/30/000000/command.png" alt="command" />
                        </div>)
                }

                {(three) ? (
                    <div className="educationItemThree">
                        <div className="rightLine"></div>
                        <div className="ItemOne">
                            <Terminal
                                education={education.education[2]}
                                closeTerm={setThree}
                            />
                        </div>
                    </div>

                ) : (
                        <div className="closedThree" onClick={() => setThree(true)}>
                            <img src="https://img.icons8.com/ios-filled/30/000000/command.png" alt="command" />
                        </div>)
                }

                {(four) ? (
                    <div className="educationItemFour">
                        <div className="leftLine"></div>
                        <div className="ItemTwo">
                            <Terminal
                                education={education.education[3]}
                                closeTerm={setFour}
                            />
                        </div>
                    </div>

                ) : (
                        <div className="closedFour" onClick={() => setFour(true)}>
                            <img src="https://img.icons8.com/ios-filled/30/000000/command.png" alt="command" />
                        </div>)
                }





            </div>

        </div>

    )
}
