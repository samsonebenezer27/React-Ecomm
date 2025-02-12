import React from 'react'

const Footer = () => {

  return (
    <div>

      <div className="container-fluid foot-bg">
        <div className=" container mt-5">
          <div className="col-lg">
            <h3 className='justify-content-center m-2 mt-5'>JOIN THE NEWSLETTER FOR THE EXCLUSIVE UPDATES</h3>
            <div className="form d-flex">
            <input type="email" name='Email' placeholder='YOUR EMAIL ADDRESS' className='w-100 mt-2 p-2' required />
            <button type='submit' className='butsub mt-2 p-2'><i class="fa-solid fa-arrow-right"></i></button>
            </div>
            
          </div>



        </div>
        <div className="container">
          <div className="row mt-3">
            <div className="col-lg-4">
              <h5 className='sub-cont'>COOL STUFF</h5>
              <ul className='links list-unstyled text-dark'>
                <li className='cont-li m-2'><a href="./About">About us</a></li>
                <li className='cont-li m-2'><a href="#">BLOG</a></li>
                <li className='cont-li m-2'><a href="#">SHOP ALL</a></li>
                <li className='cont-li m-2'><a href="#">NEW ARRIVALS</a></li>
                 <li className='cont-li m-2'><a href="#">HATS AND CAPS</a></li> 
                {/* // <li className='cont-li m-2'><a href="#">APPAREL</a></li>
                // <li className='cont-li m-2'><a href="#">EYEWEAR</a></li> */} 
              </ul>
            </div>
            <div className="col-lg-4">
              <h5 className='sub-cont'>LEGAL</h5>
              <ul className='links list-unstyled text-dark'>
                <li className='cont-li m-2'><a href="#">TERMS AND CONDITIONS</a></li>
                <li className='cont-li m-2'><a href="#">PRIVACY POLICY</a></li>
                <li className='cont-li m-2'><a href="#">SHIPPING POLICY</a></li>
                <li className='cont-li m-2'><a href="#">RETURNS POLICY</a></li>
                
              </ul>
            </div>
            <div className="col-lg-4">
              <h5 className='sub-cont'>LET'S CONNECT</h5>
              <ul className='links list-unstyled text-dark'>
                <li className='cont-li m-2'><a href="#">EMAIL</a></li>
                <li className='cont-li m-2'><a href="#">WHATSAPP</a></li>
                <li className='cont-li m-2'><a href="#">contact us</a></li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Footer
