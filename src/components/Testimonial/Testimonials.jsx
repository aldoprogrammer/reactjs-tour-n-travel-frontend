import React from 'react'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import Slider from 'react-slick'
const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive : [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                },

            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
  return (
    <Slider { ... settings}>
        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptas ratione excepturi harum consectetur suscipit quaerat sunt, eius porro quae repudiandae. Aperiam ducimus ex laudantium rerum doloribus officia, ab quidem.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} alt="" className='w-25 h-25 rounded-2'/>
            </div>
            <h5 className='mt-3 mb-0'>John Doe</h5>
            <p>Customer</p>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptas ratione excepturi harum consectetur suscipit quaerat sunt, eius porro quae repudiandae. Aperiam ducimus ex laudantium rerum doloribus officia, ab quidem.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} alt="" className='w-25 h-25 rounded-2'/>
            </div>
            <h5 className='mt-3 mb-0'>John Doe</h5>
            <p>Customer</p>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptas ratione excepturi harum consectetur suscipit quaerat sunt, eius porro quae repudiandae. Aperiam ducimus ex laudantium rerum doloribus officia, ab quidem.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} alt="" className='w-25 h-25 rounded-2'/>
            </div>
            <h5 className='mt-3 mb-0'>John Doe</h5>
            <p>Customer</p>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptas ratione excepturi harum consectetur suscipit quaerat sunt, eius porro quae repudiandae. Aperiam ducimus ex laudantium rerum doloribus officia, ab quidem.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} alt="" className='w-25 h-25 rounded-2'/>
            </div>
            <h5 className='mt-3 mb-0'>John Doe</h5>
            <p>Customer</p>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptas ratione excepturi harum consectetur suscipit quaerat sunt, eius porro quae repudiandae. Aperiam ducimus ex laudantium rerum doloribus officia, ab quidem.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} alt="" className='w-25 h-25 rounded-2'/>
            </div>
            <h5 className='mt-3 mb-0'>John Doe</h5>
            <p>Customer</p>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptas ratione excepturi harum consectetur suscipit quaerat sunt, eius porro quae repudiandae. Aperiam ducimus ex laudantium rerum doloribus officia, ab quidem.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} alt="" className='w-25 h-25 rounded-2'/>
            </div>
            <h5 className='mt-3 mb-0'>John Doe</h5>
            <p>Customer</p>
        </div>

    </Slider>

  )
}

export default Testimonials