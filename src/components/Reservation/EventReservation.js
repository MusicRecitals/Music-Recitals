import "./EventReservation.css"; 
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';


const EventReservation = () => {
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
        <h2>School of Music Online Event Scheduling System</h2>
        <div className='Line'></div>
        <p className="Main">EVENT/RESERVATION FORM</p>
        <div className='Line'></div>
        <form>
            <p className="Main">Event Type <select>
                <option value="cl">Class</option>
            </select></p>
            <div className='Line'></div>
            <p className="Main">Event Status</p>
            <div>
        <input type="radio" value="Active" name="status" /> Active | 
        <input type="radio" value="Cancelled" name="status" />  Cancelled | 
        <input type="radio" value="Deleted" name="status" />  Deleted
      </div>
        <p className="Main">Event Title</p>
        <textarea></textarea>
            <p className="Main">Venue</p>
            <select>
                <option value="Please Select a Venue">Please Select a Venue</option>
                <option value="Evelyn Smith Music Theatre">Evelyn Smith Music Theatre</option>
                <option value="Katzin Concert Hall">Katzin Concert Hall</option>
                <option value="Organ Hall">Organ Hall</option>
                <option value="Recital Hall">Recital Hall</option>
            </select>
            <p className="Main">Event Date</p>
            <DatePicker className="Date" selected={startDate} onChange={(date) => setStartDate(date)} /><Link to="/calendar"> <a classname="callink" href="https://musicrecitals.hida.asu.edu/calendar.php">View calendar (new window)</a> </Link>
            <p className="Main">Start Time</p>
            <table>
              <th>
                <td><select>
                <option value="Please Select a Venue">1</option>
                <option value="Evelyn Smith Music Theatre">2</option>
                <option value="Katzin Concert Hall">3</option>
                <option value="Organ Hall">4</option>
                <option value="Recital Hall">5</option>
            </select></td>
                <td><select>
                <option value="Please Select a Venue">00</option>
                <option value="Evelyn Smith Music Theatre">05</option>
                <option value="Katzin Concert Hall">10</option>
                <option value="Organ Hall">15</option>
                <option value="Recital Hall">20</option>
            </select></td>
                <td><select>
                <option value="Please Select a Venue">AM</option>
                <option value="Evelyn Smith Music Theatre">PM</option>
                
            </select></td>
              </th>
            </table>
          <p className="Main">End Time</p>
          <table>
              <th>
                <td><select>
                <option value="Please Select a Venue">1</option>
                <option value="Evelyn Smith Music Theatre">2</option>
                <option value="Katzin Concert Hall">3</option>
                <option value="Organ Hall">4</option>
                <option value="Recital Hall">5</option>
            </select></td>
                <td><select>
                <option value="Please Select a Venue">00</option>
                <option value="Evelyn Smith Music Theatre">05</option>
                <option value="Katzin Concert Hall">10</option>
                <option value="Organ Hall">15</option>
                <option value="Recital Hall">20</option>
            </select></td>
                <td><select>
                <option value="Please Select a Venue">AM</option>
                <option value="Evelyn Smith Music Theatre">PM</option>
                
            </select></td>
              </th>
            </table>
            <p className="Main">Override</p>
            <input value = "test" type = "checkbox" /> Save event regardless of conflict with other event(s)
            <p className="Main">Recurrence</p>
            <table>
              <td>
                <th>        <input type="radio" value="Active" name="status" /> None | </th>
                <th>         <input type="radio" value="Active" name="status" /> Daily | </th>
                <th>        <input type="radio" value="Active" name="status" /> Weekly | </th>
                <th>         <input type="radio" value="Active" name="status" /> Monthly | </th>
                <th>         <input type="radio" value="Active" name="status" /> Yearly </th>
              </td>
            </table>
            <p>Repeat every week on the selected days of the week until the end date</p>
            <p className="Main">Days of the week</p>
            <table>
              <th>
                <td>            <input value = "test" type = "checkbox" />Sunday |</td>
                <td>             <input value = "test" type = "checkbox" />Monday |</td>
                <td>             <input value = "test" type = "checkbox" />Tuesday |</td>
                <td>             <input value = "test" type = "checkbox" />Wednesday |</td>
              </th>
              <th>
                <td>            <input value = "test" type = "checkbox" />Thursday |           </td>
                <td>             <input value = "test" type = "checkbox" />Friday |</td>
                <td>             <input value = "test" type = "checkbox" />Saturday |</td>
              </th>
            </table>
            <p className="Main">End Date</p>
            <DatePicker className="Date" selected={startDate} onChange={(date) => setStartDate(date)} />
            <p className="Main">Faculty Liaison</p>
            <select>
                <option value="Please Select a Venue">Davis, Jayson</option>
                <option value="Evelyn Smith Music Theatre">Aoki, Miki</option>
                
            </select>
            <p className="Main">Notes</p>
            <textarea></textarea>
            <p className="Main">Saving Options for Recurring Events</p>
            <table>
              <th>
                <td><input type="radio" value="Active" name="status" /> Update all events in this series | </td>
                <td> <input type="radio" value="Active" name="status" /> Update only this event</td>
              </th>
            </table>
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
export default EventReservation;


