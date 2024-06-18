// import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import AddEvent from "./pages/AddEvent"
import EditEvent from "./pages/EditEvent";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from './pages/RegisterPage';
// import { setAuthToken } from './api';

const App = () => {
  // const [token, setToken] = useState(null);

  // useEffect(() => {
  //   if (token) {
  //     setAuthToken(token);
  //   }
  // }, [token]);

  return (
    <>
    <Router>
      <Routes>
         
        {/* <Route path="/login" element= {< LoginPage setToken={setToken} /> }/> */}
        {/* <Route path="/register" element= {< RegisterPage /> }/> */}
        {/* <Route path="/add" element= {<AddEvent token={token} /> }/> */}
        {/* <Route path="/create" element= {token ? <AddEvent token={token} /> : <Navigate to="/login" />}/> */}
        {/* <Route path="/edit/:id" element= {<EditEvent token={token} /> }/> */}
        {/* <Route path="/edit/:id" element= {token ? <EditEvent token={token} /> : <Navigate to="/login" /> }/> */}
        {/* <Route path="/" element= {<Home token={token} /> }/> */}
        <Route path="/" element= {<Home /> }/>
        <Route path="/" element= {<AddEvent /> }/>
        <Route path="/" element= {<EditEvent /> }/>


       
      
      </Routes>
    </Router>
    </>
  );
};

export default App;
