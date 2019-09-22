import React, { Component } from "react";
import "./CSS/home.css";

class HomepageLayout extends Component {
  render() {
    return (
      <section className="hero is-info is-fullheight">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item has-text-white-ter" href="../">
                  TRANSCODE
                </a>
                <span className="navbar-burger burger" data-target="navbarMenu">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                  <span className="navbar-item">
                    <a className="button is-white is-outlined" href="#">
                      <span className="icon">
                        <i className="fa fa-home"></i>
                      </span>
                      <span>Home</span>
                    </a>
                  </span>

                  <span className="navbar-item">
                    <a
                      class="button is-success is-centered has-text-white-ter"
                      style={{ textAlign: `center`, margin: "0 auto" }}
                    >
                      Register
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-6 is-offset-3">
              <h1 className="title">Making Life simpler bit by bit</h1>
              <h2 className="subtitle">
                Providing a better solution to multilingual communication.
              </h2>
              {/* <div className="box is-centered"> */}
              <div className="field is-grouped is-centered">
                {/* <p className="is-pulled-left">
                                      <a className="button is-info has-text-centered">
                                          Register Now
                                      </a>
                                  </p>
                                  <p className="is-pulled-right">
                                      <a className="button is-info has-text-centered">
                                          Register Now
                                      </a>
                                  </p> */}
                <a
                  class="button is-success is-centered has-text-white-ter"
                  style={{ textAlign: `center`, margin: "0 auto" }}
                >
                  Register
                </a>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default HomepageLayout;
