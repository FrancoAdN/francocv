import React, { useContext, useRef } from 'react';
import { Prov } from './_useLanguage'
import Redirection from './components/redirection/Redirection'
import Header from './components/header/Header'
import About from './components/about/About'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import LangSwitcher from './LangSwitcher'
import skills_img from './components/skills.png'
import contact_img from './components/contact_im.png'
import './App.css'


function Main() {
    const { about, education, work, skills, contact } = useContext(Prov)
    const aboutRef = useRef(null)
    const educationRef = useRef(null)
    const workRef = useRef(null)
    const skillsRef = useRef(null)
    const contactRef = useRef(null)
    return (
        <div className="mainDiv">
            <LangSwitcher />
            <Redirection about={aboutRef} education={educationRef} work={workRef} skills={skillsRef} contact={contactRef} />
            <Header />
            <div className="sectionTitle titleabout" ref={aboutRef}>
                <img src="https://img.icons8.com/ios-glyphs/50/000000/user-male-circle.png" alt="about me" />
                <h1>{about.title}</h1>
            </div>
            <About />
            <div className="sectionTitle titleeducation" ref={educationRef}>
                <img src="https://img.icons8.com/fluent-systems-filled/50/000000/education.png" alt="education" />
                <h1>{education.title}</h1>
            </div>
            <Education />

            <div className="sectionTitleLarge titlework" ref={workRef}>
                <img src="https://img.icons8.com/ios-filled/50/000000/job.png" alt="experience" />
                <h1>{work.title}</h1>
            </div>
            <Experience />

            <div className="sectionTitleSkills titleskills" ref={skillsRef}>
                <div className="skillContainer">
                    <img src={skills_img} alt="skills" />
                </div>
                <h1>{skills.title}</h1>
            </div>
            <Skills />

            <div className="sectionTitleSkills titlecontact" ref={contactRef}>
                <div className="skillContainer">
                    <img src={contact_img} alt="contact" />
                </div>
                <h1>{contact.title}</h1>
            </div>
            <Contact />

        </div>

    );
}

export default Main;
