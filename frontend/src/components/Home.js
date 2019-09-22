
import React, { Component } from 'react'

class HomepageLayout extends Component{
  render(){
    return(

      
                <section class="hero is-info is-fullheight">
          <div class="hero-head">
              <nav class="navbar">
                  <div class="container">
                      <div class="navbar-brand">
                          <a class="navbar-item" href="../">
                              <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo"/>
                          </a>
                          <span class="navbar-burger burger" data-target="navbarMenu">
                              <span></span>
                              <span></span>
                              <span></span>
                          </span>
                      </div>
                      <div id="navbarMenu" class="navbar-menu">
                          <div class="navbar-end">
                              <span class="navbar-item">
                                  <a class="button is-white is-outlined" href="#">
                                      <span class="icon">
                                          <i class="fa fa-home"></i>
                                      </span>
                                      <span>Home</span>
                                  </a>
                              </span>
                              <span class="navbar-item">
                                  <a class="button is-white is-outlined" href="#">
                                      <span class="icon">
                                          <i class="fa fa-superpowers"></i>
                                      </span>
                                      <span>Examples</span>
                                  </a>
                              </span>
                              <span class="navbar-item">
                                  <a class="button is-white is-outlined" href="#">
                                      <span class="icon">
                                          <i class="fa fa-book"></i>
                                      </span>
                                      <span>Documentation</span>
                                  </a>
                              </span>
                              <span class="navbar-item">
                                  <a class="button is-white is-outlined" href="https://github.com/dansup/bulma-templates/blob/master/templates/landing.html">
                                      <span class="icon">
                                          <i class="fa fa-github"></i>
                                      </span>
                                      <span>View Source</span>
                                  </a>
                              </span>
                          </div>
                      </div>
                  </div>
              </nav>
              </div>

              <div class="hero-body">
                  <div class="container has-text-centered">
                      <div class="column is-6 is-offset-3">
                          <h1 class="title">
                              Coming Soon
                          </h1>
                          <h2 class="subtitle">
                              $this is the best software platform for running an internet business. We handle billions of dollars every year for forward-thinking businesses around the world.
                          </h2>
                          <div class="box">
                              <div class="field is-grouped">
                                  
                                  <p>
                                      <a class="button is-info">
                                          Register Now
                                      </a>
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

          </section>
      )
    }
  }
export default HomepageLayout