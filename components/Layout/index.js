import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

// **
// import styles
// **
import "./layout.scss"

const Loader = dynamic(import('../Loading/page-loader'), {
  ssr: false,
  loading: () => null
})

const Layout = ({children, customClass }) => (
  <div className={`root ${customClass ? customClass : ''}`}>
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content='Seguí el estado de los proyectos de Ley.' />
      <title>Bilog Soluciones Informáticas</title>
    </Head>
    <main>
      {children}
    </main>
    <Loader />
  </div>
)

export default Layout