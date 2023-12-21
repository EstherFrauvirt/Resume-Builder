import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Resume Builder</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li style={{color:'gray',marginLeft:'10px'}} class="nav-item">
        <Link to="/home">All Resumes</Link>
        </li>
        <li style={{color:'gray',marginLeft:'10px'}} class="nav-item">
        <Link to="/form">Create New</Link>
        </li>
        <li style={{color:'gray',marginLeft:'10px'}} class="nav-item">
        <Link to="/">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
