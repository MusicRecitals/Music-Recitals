import React, { Component , useState} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import './Calendar.css'; 
const CalendarComponent = () => {
    
   const localizer = momentLocalizer(moment);
   const events = [
    {
      title: 'Event 1',
      start: new Date(2023, 10, 1, 10, 0),
      end: new Date(2023, 10, 1, 12, 0),
    },
    {
      title: 'Event 2',
      start: new Date(2023, 10, 2, 14, 0),
      end: new Date(2023, 10, 2, 16, 0),
    },
    {
        title: 'Piano Session',
        start: new Date(2023, 10, 2, 9, 0),
        end: new Date(2023, 10, 2, 16, 0),
      },
    
      {
        title: 'Piano Session',
        start: new Date(2023, 10, 22, 8, 0),
        end: new Date(2023, 10, 22, 14, 0),
      },

      {
        title: 'Piano Session',
        start: new Date(2023, 10, 22, 15, 0),
        end: new Date(2023, 10, 22, 20, 0),
      },
      {
        title: 'Piano Session',
        start: new Date(2023, 10, 22, 4, 0),
        end: new Date(2023, 10, 22, 5, 0),
      },
      {
        title: 'Guitar Practice',
        start: new Date(2023, 10, 27, 8, 15),
        end: new Date(2023, 10, 27, 16, 30),
      },
      {
        title: 'Special event',
        start: new Date(2023, 10, 29, 10, 60),
        end: new Date(2023, 10, 29, 18, 59),  
      },
      {
        title: 'Session',
        start: new Date(2023, 10, 30, 10, 0),
        end: new Date(2023, 10, 30, 17, 30),
      },
      {
        title: 'Session 2',
        start: new Date(2023, 10, 30, 1, 0),
        end: new Date(2023, 10, 30, 4, 40),
      }
  ];

  const [clickedDate, setClickedDate] = useState(null);

  const handleDateClick = (event) => {
    // Handle date click event
    console.log("clikced");
    setClickedDate(event);
    // You can add additional logic here, e.g., open a modal to create an event
  };

    return (
        <div   style={{ textAlign: 'center', paddingTop: '20px' }} >
            
            <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 1200 }}
        className="rbc-calendar" 
        selectable
        onSelectSlot={handleDateClick}
        />
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
        <h3>School Of Music Events Calendar</h3>
        <div className='Line'></div>
        <table className="rtable">
        <tr>
            <th><button>New button</button></th>
            <th> |  </th>
            <th>Select an option below:</th>
            <th> | </th>   
            <th>Search:
                <textarea></textarea>
            </th>
        </tr>

    </table>
        <p>Filters</p>
        
        <div>
        <table>
        <th>   
        <div>  
           
        <input value = "Approved" type = "checkbox"  />
            <span> Approved </span></div>
            <div><input value = "Pending" type = "checkbox"  />
            <span> Pending </span></div>
            <div><input value = "Missiing Info" type = "checkbox"  />
            <span> Missing Info </span>   </div> 
            <div>
        <input value = "Cancelled" type = "checkbox"  />
            <span> Cancelled </span></div>
            <div><input value = "Student Recitals" type = "checkbox"  />
            <span> Student Recitals </span></div>
            <div><input value = "Faculty Recitals" type = "checkbox"  />
            <span> Faculty Recitals </span>   </div>    
            <div>
        <input value = "Rehearsals" type = "checkbox"  />
            <span> Rehearsals </span></div>
            <div><input value = "Lyric Opera Theatre" type = "checkbox"  />
            <span> Lyric Opera Theatre </span></div>
            <div><input value = "Convocations" type = "checkbox"  />
            <span> Convocations </span>   </div> 
            <div>
        <input value = "Events" type = "checkbox"  />
            <span> Events </span></div>
            <div><input value = "Non-Events" type = "checkbox"  />
            <span> Non-Events </span></div>
            <p>Piano/AV</p>
            <div><input value = "Show Piano/AV" type = "checkbox"  />
            <span> Show Piano/AV </span>   </div> 
            <div><input value = "Not Updated" type = "checkbox"  />
            <span> Not Updated</span>   </div> 
            <p>Venues</p>
            <div><input value = "ASU Gammage" type = "checkbox"  />
            <span> ASU Gammage</span>   </div> 
            <div><input value = "E.S. Music Theater" type = "checkbox"  />
            <span> E.S. Music Theater</span>   </div> 
            <div><input value = "Katzin Concert Hall" type = "checkbox"  />
            <span> Katzin Concert Hall</span>   </div> 
            <div><input value = "Organ Hall" type = "checkbox"  />
            <span> Organ Hall</span>   </div> 
            <div><input value = "Recital Hall" type = "checkbox"  />
            <span> Recital Hall</span>   </div> 
            <div><input value = "Other" type = "checkbox"  />
            <span> Other</span>   </div> 
            <p>Options</p>
            <div><input value = "Week Starts On Monday" type = "checkbox"  />
            <span> Week Starts On Monday</span>   
            </div>
            </th>
            <th>
                <div className="mainclass">
                <p>November</p>
                
                    <div className="box1"></div>
                </div>
                
            </th>
        </table>
        </div> 
        

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
        
        
        
    )

   
}
export default CalendarComponent;