import React, { Component } from 'react'

export class Footer extends Component {
  

  render() {
    return (
        
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-info">
            <div className="container">
        <div className=" text-center">
      <span className="text-dark">© 2021 News Company </span>
    </div>
    <ul className="nav justify-content-center my-2 mx-3">
      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><i className="fab fa-twitter"></i></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><i className="fab fa-youtube"></i></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><i className="fab fa-linkedin-in"></i></a></li>

    </ul>
    </div>
  </footer>

    )
  }
}

export default Footer