import React from 'react'
import './Software.css'
import android from './android.svg'
import arduino from './arduino.svg'
import c from './c.svg'
import csharp from './csharp.svg'
import css from './css.svg'
import django from './django.svg'
import git from './git.svg'
import graphql from './graphql.svg'
import html from './html.svg'
import java from './java.svg'
import javascript from './javascript.svg'
import mongodb from './mongodb.svg'
import mysql from './mysql.svg'
import nodejs from './nodejs.svg'
import processing from './processing.svg'
import python from './python.svg'
import react from './react.svg'
import reactnative from './react-native.svg'
import sqlite from './sqlite.svg'
import swift from './swift.svg'

export default function Software() {
    return (
        <div className="software">
            <div className="row-soft">
                <div className="soft-item">
                    <img src={android} alt="andorid" />
                    <h5>Android</h5>
                </div>
                <div className="soft-item">
                    <img src={arduino} alt="andorid" />
                    <h5>Arduino</h5>
                </div>
                <div className="soft-item">
                    <img src={c} alt="andorid" />
                    <h5>C</h5>
                </div>
                <div className="soft-item">
                    <img src={csharp} alt="andorid" />
                    <h5>C#</h5>
                </div>
            </div>
            <div className="row-soft">
                <div className="soft-item">
                    <img src={css} alt="andorid" />
                    <h5>CSS</h5>
                </div>
                <div className="soft-item">
                    <img src={django} alt="andorid" />
                    <h5>Django</h5>
                </div>
                <div className="soft-item">
                    <img src={git} alt="andorid" />
                    <h5>Git</h5>
                </div>
                <div className="soft-item">
                    <img src={graphql} alt="andorid" />
                    <h5>Graphql</h5>
                </div>
            </div>
            <div className="row-soft">
                <div className="soft-item">
                    <img src={html} alt="andorid" />
                    <h5>HTML</h5>
                </div>
                <div className="soft-item">
                    <img src={java} alt="andorid" />
                    <h5>Java</h5>
                </div>
                <div className="soft-item">
                    <img src={javascript} alt="andorid" />
                    <h5>Javascript</h5>
                </div>
                <div className="soft-item">
                    <img src={mongodb} alt="andorid" />
                    <h5>MongoDB</h5>
                </div>
            </div>
            <div className="row-soft">
                <div className="soft-item">
                    <img src={mysql} alt="andorid" />
                    <h5>MySQL</h5>
                </div>
                <div className="soft-item">
                    <img src={nodejs} alt="andorid" />
                    <h5>NodeJS</h5>
                </div>
                <div className="soft-item">
                    <img src={processing} alt="andorid" />
                    <h5>Processing</h5>
                </div>
                <div className="soft-item">
                    <img src={python} alt="andorid" />
                    <h5>Python</h5>
                </div>
            </div>
            <div className="row-soft">

                <div className="soft-item">
                    <img src={react} alt="andorid" />
                    <h5>React</h5>
                </div>
                <div className="soft-item">
                    <img src={reactnative} alt="andorid" />
                    <h5>React Native</h5>
                </div>
                <div className="soft-item">
                    <img src={sqlite} alt="andorid" />
                    <h5>SQLite</h5>
                </div>
                <div className="soft-item">
                    <img src={swift} alt="andorid" />
                    <h5>SwiftUI</h5>
                </div>

            </div>

        </div>
    )
}
