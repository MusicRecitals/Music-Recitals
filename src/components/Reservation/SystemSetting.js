import React from 'react'
import {Link} from 'react-router-dom';

import "./SystemSetting.css"; 

const SystemSetting = () => {
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
      <h3>Database Management</h3>
      <div className='Line'></div>
      <p>Back to calendar</p>
      <p>The current school year is from Aug 1, 2023 to Jul 31, 2024</p>
      <p>We are currently in the spring booking semester. Semester is from Jan 1, 2024 to Jul 31, 2024</p>

      <h2>GENRAL SETTINGS</h2>
      <div className='Line'></div>

    <table className='man'>
        <td>
            <th>MusicEvents@asu.edu |</th>
            <th>The email address of the administrator:</th>
        </td>
        
    </table>
    <div className='Line'></div>
    <h2>ADMIN DATES</h2>
    <div className='Line'></div>
    <table className='man'>
    <td>
        <th>2023-11-13 |</th>
            <th>FALL to SPRING transition date</th>
        </td>
    </table>
    <table className='man'>
    <td>
        <th>2023-12-01 |</th>
            <th>FALL: Last day of events</th>
        </td>
    </table>
    <table>
    <td>
        <th>2024-04-26 |</th>
            <th> SPRING: Last day of events</th>
        </td>
    </table>
    <div className='Line'></div>

      
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

export default SystemSetting;
