import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import {Routes,Route} from 'react-router-dom';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import CreatePost from "./pages/CreatePost";
function App(){
  return (
    <>
      <Navbar />
      <main>
        

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/notifications" element={<Notifications/>} />
          <Route path="/createpost" element={<CreatePost/>}/>
        </Routes>
      </main>
    </>
  );
}
export default App;