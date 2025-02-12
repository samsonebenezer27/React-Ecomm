import React, { useState } from 'react'
import image from '../img/bgog.png'
import Product from './Product'
import timephoto from '../img/um-partner.png'
import product from '../image'
import caropic from '../img/caro.png'
import caro2 from '../img/collab-caro.png'


const Home = ({array,setarray}) => {


  
























  return (
    <div>
     


<img src={image} alt="" className='w-100'/>

  {/* community */}
  <div className="container mt-4">
        <div className="row">
          <h2 className='vision'>COMMUNITY</h2>
          <div className="col-lg-6">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner caro11">
                <div class="carousel-item">
                  <img src={caropic} className='d-block w-100' alt="" />
                </div>
                <div class="carousel-item active">
                  <img src={caro2} className='d-block w-100' alt="" />

                </div>

              </div>
            </div>

          </div>
          <div className="col-lg-6">
            <div className="text-center mt-5">
              <h2 className='caroside mt-5'>
                we commit everyday to grow and help make
              </h2>
              <p className='text-start'>India's underground community the most powerful & rich underground community of the world</p>
            </div>

          </div>
        </div>
      </div>



<Product Product={product} array={array} setarray={setarray}></Product>

  <div className="container mt-4">
        <div className="row">
          <h2 className='vision'>TIMELINE</h2>
          <div className="col-lg-6">
            <p className='text-start text2 mt-5'>What started in 2013, with a simple goal of increasing awareness about the skate culture in Mumbai, has now evolved into a deep rooted passion towards accelerating the growth of our community.</p>
            <p className='text-start text2'>Just like the community we represent, we are unorthodox in our methods, eccentric in our style, and determined in our approach. We strive to keep our work unique and smart, with room for a little magic.</p>


          </div>
          <div className="col-lg-6">
            <img src={timephoto} alt="" className='w-100' />
          </div>
        </div>
      </div>    
















    </div>
  )
}

export default Home
