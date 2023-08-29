'use client'
import Layout from '../components/Layout'
import '../firebase'
import React from 'react'
import Doc from './Doc'
const page = () => {
  return (
    <Layout>
        <Doc></Doc>
    </Layout>
  )
}

export default page