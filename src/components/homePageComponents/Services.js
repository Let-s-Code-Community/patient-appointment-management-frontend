import React from 'react'
import SectionHeader from '../SectionHeader'
import SectionIntro from '../SectionIntro'
import SectionSubHeader from '../SectionSubHeader'
import ServiceContainer from './ServiceContainer'

const Services = () => {
  return (
    <section className='mt-4 w-4/6 mx-auto'>
    <SectionSubHeader />
    <SectionHeader />
    <SectionIntro />
    <ServiceContainer />
    
    </section>
  )
}

export default Services