import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import List from '../components/List/List';

const SecondPage = () => (
  <Layout>
    <hr />
    <List>
      <h1>About This Site</h1>
      <p>This is the finest product review page you can find on the internet. We specialize in reviewing products we've never actually ever tried. That's how we know we're good.</p>
      <p>My name is Besian Kodra and I am the creator of this website.</p>
      <p>This whole project started days ago after I received the Individual Project requirements for my Web Programming course at MATC. Once I read through the requirements, I decided to make a product review website.</p>
      <p>The rest is history.</p>
      <Link to="/">Home</Link>
    </List>
    <hr />
  </Layout>
)

export default SecondPage
