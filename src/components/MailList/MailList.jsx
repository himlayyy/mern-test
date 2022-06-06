import React from 'react'
import "./maillist.css"

function MailList() {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="mailDesc">Sign up and we'll send deals to you</span>
        <div className="mailInputContainer">
            <input type="text" name="email" id="email" placeholder="Your Email" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList
