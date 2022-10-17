import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const about = () => {
  return (
    <div>
  <Layout pageTitle="About Page">
  <p>Hi, Just learning how to deploy my first gatsby website</p>
  </Layout>
    </div>
  )
}

export const Head = () => <title>About Me</title>
export default about