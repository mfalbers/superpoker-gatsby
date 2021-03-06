import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FaSadTear } from 'react-icons/fa'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a page that doesn&#39;t exist... the sadness. <FaSadTear/></p>
  </Layout>
)

export default NotFoundPage
