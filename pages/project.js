import Head from 'next/head'

import MainLayout from '../components/mainLayout.js'

function About() {
  return (
    <MainLayout>
      <Head>
        <title>Vasyokkrut contacts</title>
      </Head>
      <div style={{backgroundColor:'#ccc', height:'15rem'}} >
        <h1 style={{margin:'0'}} >
          This page is in development, here will be info about my project
        </h1>
      </div>
    </MainLayout>
  )
}

export default About
