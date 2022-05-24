import React from 'react'


const Navbar = ({filterItem}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <button className="btn btn-light navbar-brand fw-bold fst-italic" onClick={()=> filterItem("AsianBowl")}>
    <img src="images/abl.jpg" width="40" height="40" class="d-inline-block align-top mx-1" alt=""/>
      AsianBowl</button>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li className="nav-item px-3">
          <button className="btn btn-light fw-semibold"  onClick={() => filterItem("Veg")}>Veg</button>
        </li>
        <li className="nav-item px-3">
          <button className="btn btn-light fw-semibold"  onClick={() => filterItem("Non-Veg")}>Non-Veg</button>
        </li>
        <li className="nav-item px-3">
          <button className="btn btn-light fw-semibold"  onClick={() => filterItem("Vegan")}>Vegan</button>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar;

