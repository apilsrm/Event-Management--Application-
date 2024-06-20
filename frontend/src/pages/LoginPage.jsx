
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Login from '../components/Login';
// import { login } from "../api"


const LoginPage = ({ setToken }) => {
  const navigate = useNavigate();

  const handleLogin = async (data) => {

      await axios
      .post('http://localhost:8000/api/auth/login', data)
      .then((res) => {
        // console.log(res.data)
        setToken(res.data.token);
      navigate('/');
        
      })
      .catch((err) => {
        console.log('Login error:',err);
        // console.log("resdata", res.data)
       
      });
    //   const response = await axios.post('http://localhost:8000/api/auth/login', data);

  };

  return (
    <div>
      
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
