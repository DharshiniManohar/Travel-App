// src/components/Subscribe.js
import React, { Component } from 'react';
import '../styles/Subscribe.css'; // Ensure the path is correct based on your file structure
import notimg from '../assets/notimg.png';
import subs from '../assets/subs.png';

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribed: false,
    };
    this.handleSubscribe = this.handleSubscribe.bind(this);
  }

  handleSubscribe() {
    this.setState({ subscribed: true }); // Optionally, you can add logic here to send the email to a server
  }

  render() {
    return (
      <div className="subscribe-container">
        <div className="subscribe-content">
            <img src={notimg}></img>
          <div className="subscribe-text">
            <h2 className="uptext"> Get Updates & More</h2>
            <p className="upsubtext">Thoughtful thoughts to your inbox</p>
          </div>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button onClick={this.handleSubscribe} className="subscribe-button">
              Subscribe
            </button>
          </div>
          {this.state.subscribed && (
            <div className="notification">
             
              <img src={subs}></img>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Subscribe;
