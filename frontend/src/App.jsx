import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Managers from "./components/managers/Managers";
import AddManager from "./components/managers/AddManager";
import EditManager from "./components/managers/EditManager";
import ViewManager from "./components/managers/ViewManager";
import Agents from "./components/Agents";
import Properties from "./components/Properties";


function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/managers" element={<Managers />} />
            <Route path="/managers/addmanager" element={<AddManager />} />
            <Route path="/managers/editmanager/:id" element={<EditManager />} />
            <Route path="/managers/viewmanager/:id" element={<ViewManager />} />
            <Route path="/viewagents/:id" element={<Agents />} />
            <Route path="/viewproperties/:id" element={<Properties />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
