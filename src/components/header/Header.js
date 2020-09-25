import React, { useContext } from 'react'
import './Header.css'
import instagram from './instagram.png'
import linkedin from './linkedin.png'
import github from './github.png'
import google from './google.png'
import { Prov } from '../../_useLanguage'

export default function Header() {
    const { header } = useContext(Prov)
    return (
        <div className="header">
            <div className="imgWrapper"></div>
            <div className="infoWrapper">
                <div className="nameWrapper">
                    <div>
                        <span className="nameIntro">{header.intro} </span><span className="headerName">FRANCO DI NÁPOLI</span>
                    </div>
                    <div className="nameTitle">
                        {header.title}
                    </div>
                </div>
                <div className="personalInfo">
                    <div className="pInfoItem">
                        <div className="infoItemTitle">{header.age}</div>
                        <div className="infoItemResp">20</div>
                    </div>
                    <div className="pInfoItem">
                        <div className="infoItemTitle">{header.addr}</div>
                        <div className="infoItemResp">Zapiola 260, Villa Luzuriaga</div>
                    </div>
                    <div className="pInfoItem">
                        <div className="infoItemTitle">Email:</div>
                        <div className="infoItemResp">francoadinapoli@gmail.com</div>
                    </div>
                    <div className="pInfoItem">
                        <div className="infoItemTitle">{header.phone}</div>
                        <div className="infoItemResp">+54 9 011 2191 6528</div>
                    </div>
                    <div className="pInfoItem">
                        <div className="infoItemTitle">{header.lang}</div>
                        <div className="infoItemResp">{header.lang_value}</div>
                    </div>
                    <div className="pInfoItem">
                        <div className="infoItemTitle">{header.nac}</div>
                        <div className="infoItemResp">{header.nac_value}</div>
                    </div>
                </div>
                <div className="socialMedia">
                    <a href="https://www.instagram.com/fraancodinapoli/" target="_blank" rel="noopener noreferrer">
                        <div className="socialImgWrapper">
                            <img src={instagram} alt="instagram" />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/franco-di-n%C3%A1poli-47243b183/" target="_blank" rel="noopener noreferrer">
                        <div className="socialImgWrapper">
                            <img src={linkedin} alt="linkedin" />
                        </div>
                    </a>

                    <a href="https://github.com/francoadn" target="_blank" rel="noopener noreferrer">
                        <div className="socialImgWrapper">
                            <img src={github} alt="github" />
                        </div>
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=francoadinapoli@gmail.com" target="_blank" rel="noopener noreferrer">
                        <div className="socialImgWrapper">
                            <img src={google} alt="google" />
                        </div>
                    </a>

                </div>

            </div>
        </div>
    )
}
