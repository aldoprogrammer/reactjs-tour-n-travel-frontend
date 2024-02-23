import React from 'react'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
import { Col } from 'reactstrap'
import ServiceCard from './ServiceCard'

const serviceData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate Weather',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptate.'
    },
    {
        imgUrl: guideImg,
        title: 'Tour Guide',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptate.'
    },
    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptate.'
    }
]

const ServiceList = () => {
  return (
    <>
        {serviceData.map((item, index) => (
            <Col lg='3' key={index}>
                <ServiceCard 
                    item={item} 
                    key={index}
                    
                />
            </Col>
        ))}
    </>
  )
}

export default ServiceList