import React from 'react'
import Main from './Main'
import LanguageStateProvider from './_useLanguage'
export default function App() {
  return (
    <LanguageStateProvider>
      <Main />
    </LanguageStateProvider>
  )
}
