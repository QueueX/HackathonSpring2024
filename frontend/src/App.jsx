
import { Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Authlayout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Authlayout/>}>
          <Route path="" element={<Login />}></Route>
          <Route path="registration" element={<Registration />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;
