import React from 'react';
import './contactUs.css';

function ContactUs() {
  return (
    <div className="contact-us_container main_content container">
      <h2>Campus and Office Hours</h2>
      <ul>
        <li>Chicago IL 
          <ul className="chicago">
            <li>122 S. Michigan Avenue
              <ul>
                <li>2nd floor access Mondays - Fridays, from 8am - 5pm</li>
                <li>Contact: (312) 261-3333</li>
              </ul>
            </li>
            <li>18 S. Michigan Avenue
              <ul>
                <li>Building access Mondays - Fridays, from 6am - 10pm</li>
                <li>Evening and weekend access limited for instructional purposes only</li>
                <li>Contact: (312) 261-3333</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Lisle, IL
          <ul className="other_addresses">
            <li>Building access Mondays - Fridays, from 8am - 5pm</li>
            <li>Evening and weekend access limited for instructional purposes only.</li>
            <li>Contact: (630) 874-4444</li>
          </ul>
        </li>
        <li>Tampa, FL
          <ul className="other_addresses">
            <li>Building access Mondays - Fridays, from 8am - 5pm</li>
            <li>Evening and weekend access limited for instructional purposes only.</li>
            <li>Contact: 1-800-366-6581</li>
          </ul>
        </li>
        <li>Wheeling, IL
          <ul className="other_addresses">
            <li>Building access Mondays - Fridays, from 8am - 5pm</li>
            <li>Evening and weekend access limited for instructional purposes only.</li>
            <li>Contact: (847) 947-5555</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default ContactUs;