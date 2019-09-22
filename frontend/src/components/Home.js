
import React from 'react'
import { Helmet } from "react-helmet";
import Script from "react-inline-script"
import "bulma/css/bulma.css";

function Home() {
  return (<div>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item">
          Transcom
      </a>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            Home
        </a>

          <a className="navbar-item">
            Documentation
        </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              More
          </a>

            <div className="navbar-dropdown">
              <a className="navbar-item">
                About
            </a>
              <a className="navbar-item">
                Jobs
            </a>
              <a className="navbar-item">
                Contact
            </a>
              <hr className="navbar-divider" />
              <a className="navbar-item">
                Report an issue
            </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">
                Log in
            </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="hero is-info is-large">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Transcom
          
      </h1>
          <h2 class="subtitle">
            Large subtitle
      </h2>
        </div>
      </div>
    </section>
    <footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
  </div>
</footer>

  </div>)
}
export default Home;
// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
