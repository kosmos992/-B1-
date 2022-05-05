import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Map from "./components/Map";
import SearchModal from "./components/SearchModal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const ctrlModal = () => setShowModal(!showModal);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              메인페이지
              <Link to="/search">(주소검색)</Link>
              <button onClick={ctrlModal}>"진짜주소검색"</button>
              <Map />
              {showModal ? <SearchModal></SearchModal> : null}
            </div>
          }
        />
        <Route
          path="/search"
          element={
            <div>
              검색화면
              <Link to="/">(돌아가기)</Link>
            </div>
          }
        />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
