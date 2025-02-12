import React from 'react'

const Header = ({array,setarray}) => {















  return (
    <div>
      <div className="container-fluid">
        <div className="col-lg">
          <nav class="navbar navbar-light bg-light justify-content-center gap-2">
            <a class="navbar-brand" href='/' className='headlogo'>URBAN MONKEYS&reg; </a>




            <form class="form-inline d-flex justify-content-around gap-2">
              <input class="form-control int mr-sm-2 w-75" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-dark my-2 my-sm-0 w-25" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
              <div className="d-flex ms-5 icons justify-content-center gap-3">
                {/* <a href='/cart'><i class="fa-solid fa-cart-shopping"></i></a> */}
                {/* <a href="#"><i class="fa-regular fa-heart"></i></a> */}
                <a href="#"><i class="fa-regular fa-user"></i></a>

              </div>
            </form>

          </nav>
        </div>

      </div>

    </div>
  )
}

export default Header
