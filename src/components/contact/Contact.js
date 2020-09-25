import React, { useContext, useState } from 'react'
import './Contact.css'
import { Prov } from '../../_useLanguage'
import axios from 'axios'

export default function Contact() {
    const { contact } = useContext(Prov)
    const [body, setBody] = useState('')
    const [subject, setSubject] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const data = { name, email, subject, body }
        axios.post('http://francoadn.spicy.com.ar/contact', data)
        setBody('')
        setEmail('')
        setName('')
        setSubject('')
    }

    return (
        <form className="contact" onSubmit={handleOnSubmit}>
            <div className="main-contact-wrapper">
                <div className="title-contact">{contact.form_title}</div>

                <div className="row-contact">
                    <div>{contact.name}</div>
                    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} required />
                </div>
                <div className="row-contact">
                    <div>Email:</div>
                    <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div className="row-contact">
                    <div>{contact.subject}</div>
                    <input type="text" name="subject" value={subject} onChange={e => setSubject(e.target.value)} required />
                </div>
                <div className="row-contact-lg">
                    <textarea type="text" name="body" value={body} onChange={e => setBody(e.target.value)} required />
                </div>
            </div>

            <div className="contact-button">
                <button type="submit">{contact.send}</button>
            </div>
        </form>
    )
}
