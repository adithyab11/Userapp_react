import React from 'react'

const NavUser = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">ADD USER</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/search">SEARCH</a>
        <a class="nav-link" href="/delete">DELETE</a>
        <a class="nav-link" href="/view">VIEW USER</a>
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavUser