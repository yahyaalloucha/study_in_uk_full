import React, { Component } from "react";
import Co from "./console.jpg";
import { HashLink } from "react-router-hash-link";
import { Mycontext } from "../Mycontext/Context";

class Consol extends Component {
  render() {
    return (
      <Mycontext.Consumer>
        {() => (
          <div className="consolt-container">
            <img className="consolt-pic" src={Co} alt="" />

            <div className="consolt-div " id="Consoltation">
              Ask us anything
            </div>

            <div className="consolt-enter">
              Enter your information in the form below
            </div>

            <div className="consolt-form">
              <form action="" class="pageclip-form" method="post">
                <input
                  className="consolt-info"
                  type={Text}
                  name="name"
                  required
                  placeholder="Enter your Name..."
                ></input>
                <input
                  className="consolt-info"
                  type={Text}
                  name="email"
                  required
                  placeholder="Enter your email..."
                ></input>
                <textarea
                  className="consolt-touch"
                  type={Text}
                  name="body"
                  required
                  placeholder="Ask here..."
                ></textarea>

                <button class="pageclip-form__submit" type="submit">
                  submit
                </button>
              </form>
            </div>

            <div className="consolt-or">
              <p>Or you can:</p>
            </div>

            <div className="consolt-div-button">
              <HashLink className="consolt-hash" smooth to="/#CONTACTS">
                <button className="consolt-button">contact us here</button>
              </HashLink>
            </div>
          </div>
        )}
      </Mycontext.Consumer>
    );
  }
}

export default Consol;
