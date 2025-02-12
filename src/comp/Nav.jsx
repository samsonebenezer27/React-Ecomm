import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {





  return (






    < div className='navbar navii justify-content-center gap-2'>
      <div className=' d-flex gap-4 list-unstyled text-decoration-none'>
        <Link to='/' className="router-li"><li>HOME</li></Link>
        <Link to='/About' className="router-li"><li>ABOUT</li></Link>
        <Link to='/Product' className="router-li"><li>PRODUCT</li></Link>
        <Link to='/cart' className="router-li"><li>CART</li></Link>
      </div>



    </div>



























  )
}

export default Nav







