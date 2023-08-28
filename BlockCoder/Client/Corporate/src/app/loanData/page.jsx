'use client'
import Layout from '../components/Layout'
import '../firebase'
import React from 'react'
import Scrapper from './Scrapper'
const page = () => {
  return (
    <Layout>
        <Scrapper></Scrapper>
    </Layout>
  )
}

export default page