
import { Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Authlayout from "./components/Layout";
import { HomeLayout } from "./components/Layout";
import HomePage from "./components/HomePage";
import SinglePageCard from './components/SinglePageCard'

function App() {
  return (
    <>
      <Routes>
        <Route path="/authentification/" element={<Authlayout/>}>
          <Route path="auth" element={<Login />}></Route>
          <Route path="reg" element={<Registration />}></Route>
        </Route>
        <Route path="/" element={<HomeLayout/>}>
          <Route path="" element={<HomePage />}></Route>
          <Route path="cabinet" element={<HomePage />}></Route>
          <Route path=":teamName" element={<SinglePageCard />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;
