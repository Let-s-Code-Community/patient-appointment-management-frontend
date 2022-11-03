import React from 'react'
import SectionHeader from '../components/SectionHeader'
import SectionIntro from '../components/SectionIntro'
import SectionSubHeader from '../components/SectionSubHeader'


const Homepage = () => {
  return (
    <React.Fragment>
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
      <SectionSubHeader />
      <SectionHeader />
      <SectionIntro />
    </React.Fragment>
  )
}

export default Homepage