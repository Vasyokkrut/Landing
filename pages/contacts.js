import MainLayout from '../components/mainLayout.js'
import Head from 'next/head'

function About() {
  return (
    <MainLayout>
      <Head>
        <title>Vasyokkrut contacts</title>
      </Head>
      <div style={{backgroundColor:'#ccc', height:'15rem'}} >
        <h1 style={{margin:'0'}} >
          This page is in development, here will be info about my contacts
        </h1>
      </div>
    </MainLayout>
  )
}

export default About
