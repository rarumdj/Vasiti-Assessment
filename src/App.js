import { Route, Routes } from "react-router";
import "./App.css";
import Alert from "./Containers/Form/Alert";
import FormPage from "./Page/FormPage";
import Landing from "./Page/Landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Landing />}></Route>
        <Route path="/share-story" element={<FormPage />}></Route>
        <Route path="/success" element={<Alert />}></Route>
      </Routes>
    </div>
  );
}

export default App;
