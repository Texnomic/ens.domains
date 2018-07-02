import React, { Fragment } from 'react'
import ValueProp from '../components/valueProp/ValueProp'
import Quote from '../components/quote/Quote'
import GetStarted from '../components/getStarted/GetStarted'
import Supported from '../components/supportedApps/Supported'
import RoadMap from '../components/roadMap/RoadMap'
import GetInvolved from '../components/getInvolved/GetInvolved'
import Header from '../components/headers/StickyHeader'
import Footer from '../components/footer/Footer'

const HackPage = () => (
  <Fragment>
    <Header />
    <ValueProp>
      <h2>ENS workshop &amp; Hackathon</h2>
      The second ENS workshop, on <strong>August 10th</strong>, will bring
      together experts from around the Ethereum community to discuss technical
      improvements and the way forward for the Ethereum Name Service. Topics
      will include dispute resolution, user experience, and design of the
      permanent registrar. This will be followed on{' '}
      <strong>August 11th-12th</strong> by a two day ENS focused hackathon
    </ValueProp>
    <Quote quote="11-12th August, 2018" author="Central London" />
    <GetStarted />
    <Supported />
    <RoadMap />
    <GetInvolved />
    <Footer />
  </Fragment>
)

export default HackPage
