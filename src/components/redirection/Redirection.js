import React, { useContext } from 'react'
import './Redirection.css'
import { Prov } from '../../_useLanguage'

export default function Redirection({ about, education, work, skills, contact }) {
    const { redirection } = useContext(Prov)

    const executeScroll = (ref) => {
        window.scrollTo(0, ref.current.offsetTop)
    }

    return (
        <div className="redirection">
            <div className="redicterionItem" onClick={() => executeScroll(about)}>
                {redirection.about}
            </div>
            <div className="redicterionItem" onClick={() => executeScroll(education)}>
                {redirection.education}
            </div>
            <div className="redicterionItem" onClick={() => executeScroll(work)}>
                {redirection.experience}
            </div>
            <div className="redicterionItem" onClick={() => executeScroll(skills)}>
                {redirection.skills}
            </div>
            <div className="redicterionItem" style={{ borderRight: "none" }} onClick={() => executeScroll(contact)}>
                {redirection.contact}
            </div>
        </div>
    )
}
