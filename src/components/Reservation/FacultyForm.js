import "./FacultyForm.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const FacultyForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className="Reservation">
        <div className="NavBar">
          <a href="https://herbergerinstitute.asu.edu/">Herberger Image</a>
          <div className="NavBarLeft">
            <a href="https://www.asu.edu/">ASU Home</a>
            <a href="https://webapp4.asu.edu/myasu/">My ASU</a>
            <a href="https://www.asu.edu/academics/colleges-schools">
              Colleges & Schools
            </a>
            <a href="https://www.asu.edu/index/">A-Z Index</a>
            <a href="https://search.asu.edu/?search-tabs=web_dir_faculty_staff">
              Directory
            </a>
            <a href="https://www.asu.edu/map/interactive/">Map</a>
          </div>
        </div>
        <div className="Form">
          <h2>School of Music Online Event Scheduling System</h2>
          <div className="Line"></div>
          <p className="Main">EVENT/RESERVATION FORM</p>
          <div className="Line"></div>
          <form>
            <p className="Main">
              Event Type{" "}
              <select>
                <option value="cl">Faculty Form</option>
              </select>
            </p>
            <div className="Line"></div>
            <p className="Main">Event Status</p>
            <div>
              <input type="radio" value="Active" name="status" /> Pending
              Liaison Approval | &nbsp;
              <input type="radio" value="Cancelled" name="status" /> Pending
              Admin Approval | &nbsp;
              <input type="radio" value="Deleted" name="status" /> Approved |
              &nbsp;
              <input type="radio" value="Deleted" name="status" /> Pending
              Cancellation | &nbsp;
              <input type="radio" value="Deleted" name="status" /> Cancelled |
              &nbsp;
              <input type="radio" value="Deleted" name="status" />{" "}
              Denied/Deleted
            </div>
            <p className="Main">Event Owner</p>
            <select>
              <option value="Please Select a Venue">Select Liason</option>
              <option value="Please Select a Venue">Davis, Jayson</option>
              <option value="Evelyn Smith Music Theatre">Aoki, Miki</option>
            </select>
            <p className="Main">
              Received Recital Form: No [Save event to enable upload]
            </p>
            <div>
              <input value="ASU Gammage" type="checkbox" />
              <label>Info form not required</label>{" "}
            </div>
            <p className="Main">
              Received Program Form: No [Save event to enable upload]
            </p>
            <div>
              <input value="ASU Gammage" type="checkbox" />
              <label>Program form not required</label>{" "}
            </div>
            <p className="Main">Series</p>
            <select>
              <option value="Please Select a Venue">Select Recital Type</option>
              <option value="Evelyn Smith Music Theatre">
                Faculty Artist Series
              </option>
              <option value="Katzin Concert Hall">Guest Artist Series</option>
              <option value="Organ Hall">Guitar Series</option>
              <option value="Recital Hall">Music Theatre and Opera</option>
            </select>
            <p className="Main">Event Title</p>
            <textarea></textarea>
            <p className="Main">Venue</p>
            <select>
              <option value="Please Select a Venue">
                Please Select a Venue
              </option>
              <option value="Evelyn Smith Music Theatre">
                Evelyn Smith Music Theatre
              </option>
              <option value="Katzin Concert Hall">Katzin Concert Hall</option>
              <option value="Organ Hall">Organ Hall</option>
              <option value="Recital Hall">Recital Hall</option>
            </select>
            <p className="Main">Event Date</p>
            <DatePicker
              className="Date"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <Link to="/calendar">
              {" "}
              <a
                classname="callink"
                href="https://musicrecitals.hida.asu.edu/calendar.php"
              >
                View calendar (new window)
              </a>{" "}
            </Link>
            <p className="Main">Start Time</p>
            <table className="even">
              <th>
                <td>
                  <select>
                    <option value="Please Select a Venue">1</option>
                    <option value="Evelyn Smith Music Theatre">2</option>
                    <option value="Katzin Concert Hall">3</option>
                    <option value="Organ Hall">4</option>
                    <option value="Recital Hall">5</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option value="Please Select a Venue">00</option>
                    <option value="Evelyn Smith Music Theatre">05</option>
                    <option value="Katzin Concert Hall">10</option>
                    <option value="Organ Hall">15</option>
                    <option value="Recital Hall">20</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option value="Please Select a Venue">AM</option>
                    <option value="Evelyn Smith Music Theatre">PM</option>
                  </select>
                </td>
              </th>
            </table>
            <p className="Main">End Time</p>
            <table className="even">
              <th>
                <td>
                  <select>
                    <option value="Please Select a Venue">1</option>
                    <option value="Evelyn Smith Music Theatre">2</option>
                    <option value="Katzin Concert Hall">3</option>
                    <option value="Organ Hall">4</option>
                    <option value="Recital Hall">5</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option value="Please Select a Venue">00</option>
                    <option value="Evelyn Smith Music Theatre">05</option>
                    <option value="Katzin Concert Hall">10</option>
                    <option value="Organ Hall">15</option>
                    <option value="Recital Hall">20</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option value="Please Select a Venue">AM</option>
                    <option value="Evelyn Smith Music Theatre">PM</option>
                  </select>
                </td>
              </th>
            </table>
            <p className="Main">Override</p>
            <input value="test" type="checkbox" /> Save event regardless of
            conflict with other event(s)
            <p className="Main">Administrative Options</p>
            <div>
              <input value="ASU Gammage" type="checkbox" />
              <label> Event Requires Call Time</label>{" "}
            </div>
            <div>
              <input value="ASU Gammage" type="checkbox" />
              <label> Event Staff Time</label>
            </div>
            <p className="Main">Faculty Message</p>
            <textarea></textarea>
            <p className="Main">Notes</p>
            <textarea></textarea>
            <p className="Main">Ticketed</p>
            <select name="Available time">
              <option>Select</option>
              <option> No</option>
              <option>Yes</option>
            </select>
            &nbsp;
            <p className="Main">Event Description (required)</p>
            <p className="Description">
              This is the description for the public web calendar.
            </p>
            <p className="Description">
              Email photos for this listing to MusicEvents@asu.edu.
            </p>
            <p className="Description">
              Type "Do Not List" if you do not want this event listed on the
              public events calendar.
            </p>
            <textarea></textarea>
            <div className="Painobox1">
              <p className="Piano">Piano Tech Options</p>

              <div>
                <input value="ASU Gammage" type="checkbox" id="id1" />
                <label for="id1"> Grand Piano</label>{" "}
              </div>
              <div>
                <input value="ASU Gammage" type="checkbox" />
                <label> New York Steinway</label>
              </div>

              <div>
                <input value="ASU Gammage" type="checkbox" />
                <label> Hamburg Steinway Piano</label>
              </div>
              <div>
                <input value="ASU Gammage" type="checkbox" />
                <label> Bösendorfer Piano</label>
              </div>
              <div>
                <input value="ASU Gammage" type="checkbox" />
                <label> 2 Grand Pianos</label>
              </div>
              <div>
                <input value="ASU Gammage" type="checkbox" />
                <label> Upright Piano</label>
              </div>
              <div>
                <input value="ASU Gammage" type="checkbox" />
                <label> Harpsichord - German Single</label>
              </div>
              <div>
                <input value="ASU Gammage" type="checkbox" />
                <label> Harpsichord - French Double</label>
              </div>
              <div>
                <input value="ASU Gammage" type="checkbox" />
                <label> Harpsichord - Italian</label>
              </div>
              <div>
                <input value="ASU Gammage" type="checkbox" />
                <label> Fortepiano</label>
              </div>
              <div>
                <input value="ASU Gammage" type="checkbox" />
                <label> Interior Piano Performance</label>
              </div>
              <div>
                <input value="ASU Gammage" type="checkbox" />
                <label> Prepared Piano</label>
              </div>
              <div>
                <input value="ASU Gammage" type="checkbox" />
                <label> None</label>
              </div>

              <p className="Main">Notes</p>
              <textarea></textarea>
            </div>
            <div className="space"></div>
            <div className="Painobox1">
              <p className="Piano">Audio Tech Entry Screen</p>
              <div>
                <input value="ASU Gammage" type="checkbox" />
                <label> No A/V</label>
              </div>
              <div>
                <input value="ASU Gammage" type="checkbox" />
                <label> Includes audio/Visual</label>
              </div>
              <div>
                <input value="ASU Gammage" type="checkbox" />
                <label> No REC</label>
              </div>
              <p className="Main">Notes</p>

              <textarea></textarea>
            </div>
            <div>
              <button>Submit</button>
              <button>Cancel</button>
            </div>
            {/*<p className="Main">Venue</p>
            <select>
              <option value="Please Select a Venue">
                Please Select a Venue
              </option>
              <option value="Evelyn Smith Music Theatre">
                Evelyn Smith Music Theatre
              </option>
              <option value="Katzin Concert Hall">Katzin Concert Hall</option>
              <option value="Organ Hall">Organ Hall</option>
              <option value="Recital Hall">Recital Hall</option>
            </select>
            <p className="Main">Event Date</p>
            <DatePicker
              className="Date"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <Link to="/calendar">
              {" "}
              <a
                classname="callink"
                href="https://musicrecitals.hida.asu.edu/calendar.php"
              >
                View calendar (new window)
              </a>{" "}
            </Link>
            <p className="Main">Start Time</p>
            <table className="even">
              <th>
                <td>
                  <select>
                    <option value="Please Select a Venue">1</option>
                    <option value="Evelyn Smith Music Theatre">2</option>
                    <option value="Katzin Concert Hall">3</option>
                    <option value="Organ Hall">4</option>
                    <option value="Recital Hall">5</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option value="Please Select a Venue">00</option>
                    <option value="Evelyn Smith Music Theatre">05</option>
                    <option value="Katzin Concert Hall">10</option>
                    <option value="Organ Hall">15</option>
                    <option value="Recital Hall">20</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option value="Please Select a Venue">AM</option>
                    <option value="Evelyn Smith Music Theatre">PM</option>
                  </select>
                </td>
              </th>
            </table>
            <p className="Main">End Time</p>
            <table className="even">
              <th>
                <td>
                  <select>
                    <option value="Please Select a Venue">1</option>
                    <option value="Evelyn Smith Music Theatre">2</option>
                    <option value="Katzin Concert Hall">3</option>
                    <option value="Organ Hall">4</option>
                    <option value="Recital Hall">5</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option value="Please Select a Venue">00</option>
                    <option value="Evelyn Smith Music Theatre">05</option>
                    <option value="Katzin Concert Hall">10</option>
                    <option value="Organ Hall">15</option>
                    <option value="Recital Hall">20</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option value="Please Select a Venue">AM</option>
                    <option value="Evelyn Smith Music Theatre">PM</option>
                  </select>
                </td>
              </th>
            </table>
            <p className="Main">Override</p>
            <input value="test" type="checkbox" /> Save event regardless of
            conflict with other event(s)
            <p className="Main">Recurrence</p>
            <table className="even4">
              <td>
                <th>
                  {" "}
                  <input type="radio" value="Active" name="status" /> None |{" "}
                </th>
                <th>
                  {" "}
                  <input type="radio" value="Active" name="status" /> Daily |{" "}
                </th>
                <th>
                  {" "}
                  <input type="radio" value="Active" name="status" /> Weekly |{" "}
                </th>
                <th>
                  {" "}
                  <input type="radio" value="Active" name="status" /> Monthly |{" "}
                </th>
                <th>
                  {" "}
                  <input
                    type="radio"
                    value="Active"
                    name="status"
                  /> Yearly{" "}
                </th>
              </td>
            </table>
            <p>
              Repeat every week on the selected days of the week until the end
              date
            </p>
            <p className="Main">Days of the week</p>
            <table className="even3">
              <th>
                <td>
                  {" "}
                  <input value="test" type="checkbox" />
                  Sunday |
                </td>
                <td>
                  {" "}
                  <input value="test" type="checkbox" />
                  Monday |
                </td>
                <td>
                  {" "}
                  <input value="test" type="checkbox" />
                  Tuesday |
                </td>
                <td>
                  {" "}
                  <input value="test" type="checkbox" />
                  Wednesday |{" "}
                </td>
              </th>

              <th>
                <td>
                  {" "}
                  <input value="test" type="checkbox" />
                  Thursday |{" "}
                </td>
                <td>
                  {" "}
                  <input value="test" type="checkbox" />
                  Friday |
                </td>
                <td>
                  {" "}
                  <input value="test" type="checkbox" />
                  Saturday |
                </td>
              </th>
            </table>
            <p className="Main">End Date</p>
            <DatePicker
              className="Date"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <p className="Main">Faculty Liaison</p>
            <select>
              <option value="Please Select a Venue">Davis, Jayson</option>
              <option value="Evelyn Smith Music Theatre">Aoki, Miki</option>
            </select>
            
            <p className="Main">Saving Options for Recurring Events</p>
            <table className="even2">
              <th>
                <td>
                  <input type="radio" value="Active" name="status" /> Update all
                  events in this series |{" "}
                </td>
                <td>
                  {" "}
                  <input type="radio" value="Active" name="status" /> Update
                  only this event
                </td>
              </th>
            </table>
            <button>Submit</button>
  <button>Cancel</button> */}
          </form>
          <div className="Footer1">
            <div className="Footer2">
              <a href="https://www.asu.edu/about/copyright-trademark">
                Copyright & Trademark
              </a>

              <a href="https://accessibility.asu.edu/report">Accessibility</a>
              <a href="https://www.asu.edu/about/privacy">Privacy</a>
              <a href="https://cfo.asu.edu/emergency">Emergency</a>
              <a href="https://www.asu.edu/about/contact">Contact ASU</a>
            </div>
          </div>
          <div className="Footer3">
            <p className="Footer4">
              Herberger Institute for Design and the Arts
            </p>
            <p>School of Music</p>
            <p>
              PO Box 870405 | Tempe, AZ 85287-0405 |{" "}
              <a href="https://www.asu.edu/map/interactive/?campus=tempe">
                Campus map |
              </a>{" "}
              480.965.3371
            </p>
            <a href="https://music.asu.edu/contact/">
              Contact School of Music{" "}
            </a>
            <a href="https://herbergerinstitute.asu.edu/resources/web-update-request">
              Web Updates
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default FacultyForm;
