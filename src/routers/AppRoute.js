import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Reservation from '../components/Reservation/Reservation';
import ReservationForm from '../components/ReservationForm/ReservationForm';
import CalendarComponent from '../components/Reservation/Calendar';
import EventReservation from '../components/Reservation/EventReservation';
import RunReports from '../components/Reservation/RunReports';
import ManageFaculty from '../components/Reservation/ManageFaculty'
import ManageStaff from '../components/Reservation/ManageStaff'
import ManageOtherusers from '../components/Reservation/ManageOtherusers'
import ManageStaffpos from '../components/Reservation/ManageStaffpos'
import ManageOthervenues from '../components/Reservation/ManageOthervenues'
import ManageInst from '../components/Reservation/ManageInst'
import ManageProgram from '../components/Reservation/ManageProgram'
import ManageRecti from '../components/Reservation/ManageRecti'
import ManageTime from '../components/Reservation/ManageTime'
import SysetmSetting from '../components/Reservation/SystemSetting'



const AppRouter = () => (
  <Router>
    <>
      <Routes>
        <Route
          element={<Reservation />}
          exact
          path={ROUTES.RESERVATION}
        />
        <Route
          element={<ReservationForm />}
          exact
          path={ROUTES.RESERVATIONFORM}
        />
        <Route
          element={<CalendarComponent />}
          exact
          path={ROUTES.CALENDAR}
        />
        <Route
          element={<EventReservation />}
          exact
          path={ROUTES.EVENTRESERVATION}
        />
        <Route
          element={<RunReports />}
          exact
          path={ROUTES.RUNREPORTS}
        />
        <Route
          element={<ManageFaculty />}
          exact
          path={ROUTES.MANAGEFACULTY}
        />
        <Route
          element={<ManageStaff />}
          exact
          path={ROUTES.MANAGESTAFF}
        />
        <Route
          element={<ManageOtherusers />}
          exact
          path={ROUTES.MANAGEOTHERUSERS}
        />
        <Route
          element={<ManageStaffpos />}
          exact
          path={ROUTES.MANAGESTAFFPOS}
        />
        <Route
          element={<ManageOthervenues />}
          exact
          path={ROUTES.MANAGEOTHERVENUES}
        />
        <Route
          element={<ManageInst />}
          exact
          path={ROUTES.MANAGEINST}
        />
        <Route
          element={<ManageProgram />}
          exact
          path={ROUTES.MANAGEPROGRAM}
        />

<Route
          element={<ManageRecti />}
          exact
          path={ROUTES.MANAGERECTI}
        />

<Route
          element={<ManageTime />}
          exact
          path={ROUTES.MANAGETIME}
        />

<Route
          element={<SysetmSetting />}
          exact
          path={ROUTES.SYSTEMSETTING}
        />
        
        {/* <PublicRoute component={view.PageNotFound} /> */}
      </Routes>
      
    </>
  </Router>
);

export default AppRouter;
