import React from 'react';
import Main from './components/Main/Main'
import MarqueeBar from './components/MarqueeBar/MarqueeBar';
import Layout from './components/Layout/Layout';
import Posts from "./components/Posts"


export default function Home() {
  return (
    <Layout>
      <Main />
    </Layout>
  )
}
