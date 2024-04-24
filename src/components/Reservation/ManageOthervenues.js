import React from 'react'
import {Link} from 'react-router-dom';

import "./ManageOthervenues.css"; 

const ManageOthervenues = () => {
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
      <div>
        <p>Show<select><option>25</option><option>50</option><option>100</option></select>entries</p>
      </div>
    <table className='man'>
        <td>
            <th>Venue Name |</th>
            <th>Address |</th>
            <th>City |</th>
            <th>State |</th>
            <th>Zip |</th>
            <th>Phone |</th>
            <th>URL |</th>
            <th>Status</th>
        </td>
        
    </table>
    <table className='man'>
    <td>
            <th>ABC |</th>
            <th>123 A BCDC Dr |</th>
            <th>QWE |</th>
            <th>TYU |</th>
            <th>12345 |</th>
            <th>123 456 7890 |</th>
            <th>URL |</th>
            <th>Active</th>
            
        </td>
    </table>
    <table className='man'>
    <td>
            <th>BNM |</th>
            <th>567 HJK LO Dr |</th>
            <th>IOP |</th>
            <th>RTY |</th>
            <th>78900 |</th>
            <th>111 222 3333 |</th>
            <th>URL |</th>
            <th>Active</th>
        </td>
    </table>
    
      
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

export default ManageOthervenues;
