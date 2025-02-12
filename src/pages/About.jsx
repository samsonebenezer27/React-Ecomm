import React from 'react'
import video from '../videos/about.webm'
import aboutpic from '../img/vision-about.png'
import caropic from '../img/caro.png'
import caro2 from '../img/collab-caro.png'
import timephoto from '../img/um-partner.png'
import founder from '../img/founder.png'


const About = () => {
  return (
    <div>

      <div className="container-fluid mt-1">
        <video src={video} autoPlay className='video'></video>


      </div>
      {/* vision */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg">
            <h2 className='vision'>
              VISION
            </h2>
            <img src={aboutpic} alt="" className='w-100 p-3' />
          </div>
        </div>

      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6"><p className='text-start text'>
            We aspire to create designs that are a blend of passion and love for our culture. We aim to help our community express and explore their inner street artist. We strive to encourage and uplift everyday artists by giving them the tools to overcome their challenges, and build a community of like-minded people. By helping one another, we believe our community has the power to change the world.</p></div>
          <div className="col-lg-6"><p className='text-start text'>The hustle is real. There are no rules for achieving your goals and living the life that you want to live. We are determined to change the severe lack of representation and awareness of this multi-talented underground street community of India.</p></div>
        </div>
      </div>

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

      {/* timeline */}
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

      {/* founder */}
      
      <div className="container mt-4">
        <div className="row">
          <h2 className='vision'>OUR FOUNDER- YASH GANGWAL</h2>

          
          <div className="col-lg-6">
            <img src={founder} alt=""  className='w-75 mt-3'/>
          </div>
          

          <div className="col-lg-6">
            <p className='text-start mt-5 text-justify'>Brought up in Hongkong, in the summer of 2011, after completing his graduation in Australia, Yash moved back to India with the fear of having to join his Dad's diamond business.</p>
            <p className='text-start text-justify'>He couldn't settle for a boring 9 to 5 job. His love for art, hip hop and skateboarding made him meet so many of you. The sheer lack of representation of the underground street culture of India got to him. He was determined to change that using streetwear as his tool.</p>
            <p className='text-start text-justify'>When he isn’t handling business or skateboarding, he’s either cooking up a storm in the kitchen or trying to become a better tennis player these days.</p>
          </div>
        </div>
      </div>




    </div>
  )
}

export default About
