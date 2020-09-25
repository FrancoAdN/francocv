import React, { useContext, useState } from 'react'
import { Prov } from './_useLanguage'

const languages = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' }
]

export default function LanguageSwitcher() {
    const { changeLanguage } = useContext(Prov)
    const [lang, setLang] = useState('es')
    const changeLanguageHandler = (lang) => {
        setLang(lang)
        changeLanguage(lang)
    }

    return (
        <div className="languageSwitcher">
            <LanguageSwitcherSelector
                lang={lang}
                handleChangeLanguage={changeLanguageHandler}
            />
        </div>
    )
}



class LanguageSwitcherSelector extends React.Component {
    onChange = e => {
        this.props.handleChangeLanguage(e.target.className);
    }

    render() {

        return (
            <div className="lang">
                <div
                    className={this.props.lang}
                >
                </div>
                <ul class="dropdown" >
                    {
                        languages.map(lang => {
                            if (lang.code !== this.props.lang)
                                return (<li onClick={this.onChange}><div value={lang.code} className={lang.code} ></div></li>)
                            return <li></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

