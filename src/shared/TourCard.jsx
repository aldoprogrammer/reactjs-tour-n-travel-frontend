import React from 'react'
import { Card, CardBody } from 'reactstrap'
import photo from '../assets/images/tour-img01.jpg'
const TourCard = () => {
  return (
    <div className='tour__card'>
        <Card>
            <div className="tour__img">
                <img src={photo} alt="" />
                <span>Best Destination</span>
            </div>
        </Card>            
        <CardBody>
            <div className="card__top d-flex align-items-center justify-content-between">
                <span className="tour__location d-flex align-items-center gap-1">
                    
                </span>
            </div>
        </CardBody>
    </div>
  )
}

export default TourCard