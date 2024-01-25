import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import Swal from 'sweetalert2';

const LoginForm = () => {
  const navigate = useNavigate();
  const { handleUserLogin } = useUserContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const success = await handleUserLogin(email, password);
      if (success) {
        navigate('/home');
      } else {
        setError('Credenciales incorrectas. Por favor, verifica tu email y contraseña.');
        // Mostrar SweetAlert de error
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Credenciales incorrectas. Por favor, verifica tu email y contraseña.',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-graphiteMedium text-gold-500 p-8 mt-16 rounded-md shadow-md">
      <h2 className="text-2xl mb-4 text-gold-500">Iniciar Sesión</h2>
      <form onSubmit={handleLogin} className="flex flex-col items-center w-full">
        <label className="flex flex-col mb-2 text-left text-gold-500 w-3/4">
          Correo Electrónico:
          <input type="email" value={email} onChange={handleEmailChange} className="w-full p-2 mb-4 bg-graphiteLight rounded-md text-goldMedium" />
        </label>
        <label className="flex flex-col mb-2 text-left text-gold-500 w-3/4">
          Contraseña:
          <input type="password" value={password} onChange={handlePasswordChange} className="w-full p-2 mb-4 bg-graphiteLight rounded-md text-goldMedium" />
        </label>
        <button type="submit" className="bg-gold-500 text-gray-800 p-2 rounded cursor-pointer shadow-md">
          Iniciar Sesión
        </button>
      </form>
      {loading && <p>Cargando...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <p className="mt-4 text-gold-500">
        ¿Eres nuevo?{' '}
        <Link to="/register" className="underline">
          Regístrate aquí
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;

