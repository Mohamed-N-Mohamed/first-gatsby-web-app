import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Welcome to my first Gatsby site">
      <p>I'm learing Gatsby by following the Gatsby Tutorial</p>

      <p>Used gatsby plugin to add image </p>

      <StaticImage
        alt="gundam image"
        src="../images/gundam.jpg"
      />
      </Layout>
      
    
    </main>
  )
}



export default IndexPage

export const Head = () => <title>Home Page</title>
