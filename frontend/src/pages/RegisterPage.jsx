
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import Register from '../components/Register';
import { register } from "../api"


const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      // const response = await axios.post('/auth/register', data);
      const response = await register('/auth/register', data);
      // setToken(response.data.token);
      console.log("response", response)
      navigate('/');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div>
      
      <Register onRegister={handleRegister} />
    </div>
  );
};

export default RegisterPage;
