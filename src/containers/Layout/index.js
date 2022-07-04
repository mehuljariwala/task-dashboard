import { useEffect } from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useNavigate,
} from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Main from "../../components/main";
import Dashboard from "../../pages/dashboard";
import Financials from "../../pages/financials";
import Knowledge from "../../pages/knowledge";
import Tasks from "../../pages/tasks";
import Reports from "../../pages/reports";
import Matters from "../../pages/matters";
import Document from "../../pages/document";
import People from "../../pages/people";

const Layout = () => {
  const HomePage = () => {
    const navigate = useNavigate();
    useEffect(() => {
      navigate("/dashboard");
    }, [navigate]);
    return null;
  };
  return (
    <div className="App">
      <Router>
        <Sidebar>
          <Main>
            <Routes>
              <Route path="/" element={<Tasks />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/finacials" element={<Financials />} />
              <Route path="/knowledge" element={<Knowledge />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/matters" element={<Matters />} />
              <Route path="/document" element={<Document />} />
              <Route path="/people" element={<People />} />
            </Routes>
          </Main>
        </Sidebar>
      </Router>
    </div>
  );
};

export default Layout;
