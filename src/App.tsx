import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminHeader from "./Components/AdminHeader";
import Dashboard from "./Components/Dashboard/Dashboard";
import CelebrityRequest from "./Components/CelebrityRequest/CelebrityRequest";
import SponsoredEvent from "./Components/SponsoredEvent/SponsoredEvent";
import Reports from "./Components/Reports/Reports";
import Support from "./Components/Support/Support";
import BlockedUsers from "./Components/BlockedUsers/BlockedUsers";
import SponsoredEventForm from "./Components/SponsoredEvent/CreateEvent";


function App() {
  return (
    <Router>
      <AdminHeader />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/celebrity-request" element={<CelebrityRequest />} />
        <Route path="/sponsored-event" element={<SponsoredEvent />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/support" element={<Support />} />
        <Route path="/blocked-users" element={<BlockedUsers />} />
        <Route path="/create-event" element={<SponsoredEventForm />} />
      </Routes>
    </Router>
  );
}

export default App;