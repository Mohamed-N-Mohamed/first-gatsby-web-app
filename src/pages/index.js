import * as React from "react"

import { Link } from 'gatsby'

import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Welcome to my first Gatsby site">
      <p>I'm learing Gatsby by following the Gatsby Tutorial</p>
      </Layout>
      
    
    </main>
  )
}



export default IndexPage

export const Head = () => <title>Home Page</title>
