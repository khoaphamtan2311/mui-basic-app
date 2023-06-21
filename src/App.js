import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import JobDetail from "./pages/JobDetail";
import JobDetailModal from "./components/JobDetailModal";

function App() {
  const location = useLocation();

  return (
    <>
      <Routes
        location={
          location.state?.backgroundLocation
            ? location.state.backgroundLocation
            : location
        }
      >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="job/:id" element={<JobDetail />} />
        </Route>
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      <Routes>
        <Route path="/job/:id" element={<JobDetailModal />}></Route>
      </Routes>
    </>
  );
}

export default App;
