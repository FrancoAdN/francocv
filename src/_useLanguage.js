import React, { createContext, useState } from 'react'
import cv_spanish from './CV.pdf'
import cv_english from './cv-english.pdf'

export const Prov = createContext()

export default function LanguageStateProvider(props) {
    const header_english = {
        intro: "HI, I'M",
        title: 'IT Technician & Software Developer',
        age: 'Age:',
        addr: 'Address:',
        phone: 'Phone:',
        lang: 'Languages:',
        nac: 'Nacionality:',
        lang_value: 'Spanish - English',
        nac_value: 'Argentina'
    }

    const header_spanish = {
        intro: "HOLA SOY",
        title: 'Técnico en TI & Desarrollador de Software',
        age: 'Edad:',
        addr: 'Dirección:',
        phone: 'Teléfono:',
        lang: 'Idiomas:',
        nac: 'Nacionalidad:',
        lang_value: 'Castellano - Inglés',
        nac_value: 'Argentina'
    }

    const [header, setHeader] = useState(header_spanish)

    const about_english = {
        title: 'ABOUT ME',
        main: 'I consider myself a responsible, creative person with a great desire to learn, with initiative to solve problems efficiently and achieve both personal and business goals.',
        download: 'DOWNLOAD CV',
        cv: cv_english
    }
    const about_spanish = {
        title: 'PERFIL',
        main: 'Me considero una persona responsable, creativa y con muchas ganas de aprender, con iniciativa para resolver problemas de forma eficiente y lograr objetivos tanto personales como empresariales.',
        download: 'DESCARGAR CV',
        cv: cv_spanish
    }

    const [about, setAbout] = useState(about_spanish)

    const education_english = {
        title: 'EDUCATION',
        education: [
            {
                title: 'Information Systems Engineering',
                institute: 'Universidad Tecnológica Nacional',
                start: '2020 - Present',
                description: 'Currently studying Engineeing at one of the most recognized universities in Argentina.'
            },
            {
                title: 'Certificate in Advanced English',
                institute: 'International House',
                start: '2020 - Present',
                description: 'Taking the C1 level course, in preparation for the CAE international exam.'
            },
            {
                title: 'Hacking with Python',
                institute: 'Udemy',
                start: '2020 - 2020',
                description: 'Hacking-oriented Python course on the Udemy web platform.'
            },
            {
                title: 'Personal and Professional Computer Technician',
                institute: 'Instituto Agustín Elizalde',
                start: '2013 - 2019',
                description: 'Technical college oriented in the area of computer science where I received my secondary education.'
            }
        ]
    }

    const education_spanish = {
        title: 'EDUCACIÓN',
        education: [
            {
                title: 'Ingeniería en Sistemas de Información',
                institute: 'Universidad Tecnológica Nacional',
                start: '2020 - Presente',
                description: 'Cursando actualmente la carrera de Ingeniería en Sistemas de Información en una de las universidades más reconocidas de Argentina.'
            },
            {
                title: 'Certificate in Advanced English',
                institute: 'International House',
                start: '2020 - Presente',
                description: 'Actualmente cursando el nivel C1 de inglés, en preparación para el examen internacional CAE.'
            },
            {
                title: 'Hacking con Python',
                institute: 'Udemy',
                start: '2020 - 2020',
                description: 'Curso de programación en Python orientado a hacking en la plataforma web de Udemy.'
            },
            {
                title: 'Técnico en Informática Personal y Profesional',
                institute: 'Instituto Agustín Elizalde',
                start: '2013 - 2019',
                description: 'Colegio técnico orientado en el área de informática dónde cursé mi educación secundaria.'
            }
        ]
    }

    const [education, setEducation] = useState(education_spanish)

    const work_english = {
        title: 'WORK EXPERIENCE',
        experiences: [
            {
                comp: 'Maxpower Industrial Automation',
                job: 'Software Developer',
                start: '2019 - Present',
                description: 'Development and web design, assembly and layout of corporate system, mobile application development.'
            },
            {
                comp: 'More Clean SRL',
                job: 'IT Technician',
                start: '2018 - Present',
                description: 'Family business. Maintenance and repair of PC both Hardware and Software.'
            },
            {
                comp: 'MOTYVAR SRL',
                job: 'Electronic Technician',
                start: '2018 - 2018',
                description: 'Arming of firefighting equipment, both logically and physically.'
            },
        ]
    }

    const work_spanish = {
        title: 'EXPERIENCIA LABORAL',
        experiences: [
            {
                comp: 'Maxpower Industrial Automation',
                job: 'Desarrollador de Software',
                start: '2019 - Presente',
                description: 'Desarrollo web, armado y maquetado de sistema corporativo, desarrollo de aplicaciones móviles.'
            },
            {
                comp: 'More Clean SRL',
                job: 'Técnico en TI',
                start: '2018 - Presente',
                description: 'Empresa familiar. Mantenimiento y reparación de PC tanto Hardware como Software.'
            },
            {
                comp: 'MOTYVAR SRL',
                job: 'Técnico electrónico',
                start: '2018 - 2018',
                description: 'Armado de equipos contra incendios, tanto lógicamente como físicamente.'
            },
        ]
    }

    const [work, setWork] = useState(work_spanish)

    const skills_english = {
        title: 'SKILLS',
        soft: 'SOFTWARE SKILLS',
        cong: 'COGNITIVITY SKILLS',
        team: 'Teamwork',
        creativity: 'Creativity',
        adapt: 'Adaptability',
        com: 'Comunication',
        plan: 'Planification',
        inov: 'Innovation'
    }

    const skills_spanish = {
        title: 'HABILIDADES',
        soft: 'HABILIDADES DE SOFTWARE',
        cong: 'HABILIDADES COGNITIVAS',
        team: 'Trabajo en equipo',
        creativity: 'Creatividad',
        adapt: 'Adaptabilidad',
        com: 'Comunicación',
        plan: 'Planificación',
        inov: 'Innovación'
    }

    const [skills, setSkills] = useState(skills_spanish)

    const redirection_english = {
        about: 'ABOUT ME',
        skills: 'SKILLS',
        experience: 'EXPERIENCE',
        education: 'EDUCATION',
        contact: 'CONTACT'
    }

    const redirection_spanish = {
        about: 'PERFIL',
        skills: 'HABILIDADES',
        experience: 'EXPERIENCIA',
        education: 'EDUCACIÓN',
        contact: 'CONTACTO'
    }

    const [redirection, setRedirection] = useState(redirection_spanish)

    const contact_english = {
        title: 'CONTACT',
        form_title: 'Send me a message!',
        name: 'Full name:',
        subject: 'Subject',
        send: 'SEND MESSAGE'
    }

    const contact_spanish = {
        title: 'CONTACTO',
        form_title: '¡Envíame un mensaje!',
        name: 'Nombre completo:',
        subject: 'Asunto:',
        send: 'ENVIAR MENSAJE'
    }

    const [contact, setContact] = useState(contact_spanish)


    function changeLanguage(lang) {
        if (lang === "en") {
            setHeader(header_english)
            setAbout(about_english)
            setEducation(education_english)
            setWork(work_english)
            setSkills(skills_english)
            setRedirection(redirection_english)
            setContact(contact_english)
        } else {
            setHeader(header_spanish)
            setAbout(about_spanish)
            setEducation(education_spanish)
            setWork(work_spanish)
            setSkills(skills_spanish)
            setRedirection(redirection_spanish)
            setContact(contact_spanish)
        }
    }

    return (
        <Prov.Provider
            value={{ changeLanguage, about, header, education, work, skills, redirection, contact }}>
            {props.children}
        </Prov.Provider>
    )
}