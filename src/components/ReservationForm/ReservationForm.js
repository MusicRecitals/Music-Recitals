import "./ReservationForm.css"; 
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';


const ReservationForm = () => {
    const [startDate, setStartDate] = useState(new Date());


    return (<>
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
      <div className="Form">
        <h2>Reservations</h2>
        <div className='Line'></div>
        <p className="Main">Faculty Recital Date Request</p>
        <form>
            <p className="Main">Recital Type</p>
            <select>
                <option value="Select Recital Type">Select Recital Type</option>
                <option value="Faculty Artist Series">Faculty Artist Series</option>
                <option value="Guest Artist Series">Guest Artist Series</option>
                <option value="Guitar Series">Guitar Series</option>
                <option value="Music Theatre and Opera">Music Theatre and Opera</option>
                <option value="Organ Series">Organ Series</option>
                <option value="Student Ensemble Series">Student Ensemble Series</option>
                <option value="Student Recital Series">Student Recital Series</option>
                <option value="Studio Recital Series">Studio Recital Series</option>
            </select>
            <p className="Main">Event Title</p>
            <textarea className="Title"></textarea>
            <p className="Main">Venue</p>
            <select>
                <option value="Please Select a Venue">Please Select a Venue</option>
                <option value="Evelyn Smith Music Theatre">Evelyn Smith Music Theatre</option>
                <option value="Katzin Concert Hall">Katzin Concert Hall</option>
                <option value="Organ Hall">Organ Hall</option>
                <option value="Recital Hall">Recital Hall</option>
            </select>
            <p className="Main">Date</p>
            <DatePicker className="Date" selected={startDate} onChange={(date) => setStartDate(date)} /><Link to="/calendar"> <a classname="callink" href="https://musicrecitals.hida.asu.edu/calendar.php">View calendar (new window)</a> </Link>
            <p className="Main">Time</p>
            <select name="Available time">
                <option >12:00PM-1:30PM</option>
            </select>
            <p className="Main">Event Description (required)</p>
            <p className="Description">This is the description for the public web calendar.</p>
            <p className="Description">Email photos for this listing to MusicEvents@asu.edu.</p>
            <p className="Description">Type "Do Not List" if you do not want this event listed on the public events calendar.</p>
            <textarea></textarea>
            <p className="Main">Comment (optional)</p>
            <p className="Description">Message to the Events Office Staff</p>
            <textarea></textarea>
            <p className="Main">Ticketed (see Ticket Guidlines below)</p>
            <select name="Available time">
                <option >Select</option>
                <option> No</option>
                <option>Yes</option>
            </select>
            <p className="Main">Ticket Guidelines</p>
            <p className="Guide">• All faculty recitals in School of Music facilities are ticketed.</p>
            <p className="Guide">• Most guest recitals in School of Music facilities are ticketed. If a guest recital is free or reservations are required, add note in the comment box above.</p>
            <p className="Guide">• All student recitals in School of Music facilities are free.</p>
            <button>Submit</button>
            <button>Cancel</button>
 
        </form>    
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

      </div>
    </>);
}
export default ReservationForm;


