import React from 'react'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import { Col, Container, Row } from 'reactstrap'
import Subtitle from '../shared/Subtitle'
import '../styles/home.css';
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'

const Home = () => {
  return <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle 
              d-flex align-items-center">
                <Subtitle subtitle={"Let's getting around this world"} />
                <img src={worldImg} alt="" />
                </div>
                <h1>
                  Enjoy how the nature will gives the best{" "}
                  <span className='highlight'>memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
          </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
                </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls/>
                </div>
              </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-3">
                <img src={heroImg02} alt="" />
                </div>
            </Col>
        <SearchBar />
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className='services__subtitle'>
              Look at What We Offer
              </h5>
            <h2 className='services__title'>
              Something best for you
              </h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={"Heaven Places"} />
            <h2 className='featured__tour-title'>Your next trip starts here</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
  </>
}

export default Home