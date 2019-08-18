import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import List from '../components/List/List';

const NotFoundPage = () => (
  <Layout>
    <hr />
    <List>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that does not exist... This is a problem.</p>
      <Link to="/">Home</Link>
    </List>
    <hr />
  </Layout>
)

export default NotFoundPage