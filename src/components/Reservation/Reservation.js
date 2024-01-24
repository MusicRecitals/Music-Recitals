import React from 'react'
import {Link} from 'react-router-dom';

import "./Reservation.css"; 

const Reservation = () => {
  return (
    <div className="Reservation">
      <div className="NavBar">
        <a href="https://herbergerinstitute.asu.edu/">Herberger Image</a>
        <div className="NavBarLeft">
          <a href="https://www.asu.edu/">ASU Home</a>
          <a href="https://webapp4.asu.edu/myasu/">My ASU</a>
          <a href="https://www.asu.edu/academics/colleges-schools">Colleges & Schools</a>
          <a href="https://www.asu.edu/index/">A-Z Index</a>
          <a href="https://search.asu.edu/?search-tabs=web_dir_faculty_staff">Directory</a>
          <a href="https://www.asu.edu/map/interactive/">Map</a>
        </div>
      </div>
      <h1>Reservations</h1>
      <div className='Line'></div>
      <h2>Your Reservations</h2>
      <p>This is a list of event you have submitted</p>
    
    <table className="rtable">
        <tr>
            <th>Reservation Request</th>
            <th>Event Title	</th>
            <th>Event Date and Time</th>
            <th>Event Venue</th>
            <th>Submit Date Time</th>
            <th>Approval Status</th>
            <th>Information Form</th>
            <th>Program Form</th>
            <th>Actions</th>
        </tr>
    </table>
    <p>You do not have any reservations</p>
    <Link to="/reservation-form">
      <button>New Reservation</button>
      </Link>
    
    <h2>Student Recitals Pending Approval</h2>
    <p>This is a list of all student recitals on which you are listed as a faculty liaison this semester and that need your approval.</p>
    <table className="rtable">
        <tr>
            <th>Reservation Request</th>
            <th>Event Title	</th>
            <th>Event Date and Time</th>
            <th>Event Venue</th>
            <th>Submit Date Time</th>
            <th>Action</th>    
        </tr>
    </table>
    <p>There are no reservations that require approval at this time</p>
    <h2>Approved Student Recitals</h2>
    <p>This is a list of all student recitals that you have approved.</p>
    <table className="rtable">
        <tr>
            <th>Reservation Request</th>
            <th>Event Title	</th>
            <th>Event Date and Time</th>
            <th>Event Venue</th>
            <th>Submit Date Time</th>
            <th>Status</th>  
        </tr>
    </table>
    <p>There are no reservations that you are listed as liaison.</p>
    <div className="Footer1" >
    <div className='Footer2'>
          <a href="https://www.asu.edu/about/copyright-trademark">Copyright & Trademark</a>
        
          <a href="https://accessibility.asu.edu/report">Accessibility</a>
          <a href="https://www.asu.edu/about/privacy">Privacy</a>
          <a href="https://cfo.asu.edu/emergency">Emergency</a>
          <a href="https://www.asu.edu/about/contact">Contact ASU</a>
        </div>   
    </div>
    <div className='Footer3'>
          <p className='Footer4'>Herberger Institute for Design and the Arts</p>
          <p>School of Music</p>
          <p>PO Box 870405 | Tempe, AZ 85287-0405 | <a href="https://www.asu.edu/map/interactive/?campus=tempe">Campus map |</a> 480.965.3371</p>
          <a href="https://music.asu.edu/contact/">Contact School of Music </a>
          <a href="https://herbergerinstitute.asu.edu/resources/web-update-request">Web Updates</a>
        
    </div>

    </div>
    
  );
}

export default Reservation;
