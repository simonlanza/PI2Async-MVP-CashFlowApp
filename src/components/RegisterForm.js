
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import Swal from 'sweetalert2';

const RegisterForm = () => {
  const navigate = useNavigate();
  const { handleUserRegister } = useUserContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegister = () => {
    const newUser = {
      name,
      email,
      password,
      expenses: [],
      balance: 0,
    };

    handleUserRegister(newUser);
    Swal.fire({
      icon: 'success',
      title: 'Usuario creado exitosamente',
      showConfirmButton: false,
      timer: 1500,
    });
    navigate('/home');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-graphiteMedium text-gold-500 p-8 mt-16 rounded-md shadow-md">
      <h2 className="text-2xl mb-4 text-gold-500">Registro de Usuario</h2>
      <form className="flex flex-col items-center w-full">
        <label className=" flex flex-col w-3/4 mb-2 text-left text-gold-500">
          Nombre:
          <input type="text" value={name} onChange={handleNameChange} className="w-full p-2 mb-4 bg-graphiteLight rounded-md text-goldMedium" />
        </label>
        <label className="flex flex-col w-3/4 mb-2 text-left text-gold-500">
          Correo Electrónico:
          <input type="email" value={email} onChange={handleEmailChange} className="w-full p-2 mb-4 bg-graphiteLight rounded-md text-goldMedium" />
        </label>
        <label className=" flex flex-col w-3/4 mb-2 text-left text-gold-500">
          Contraseña:
          <input type="password" value={password} onChange={handlePasswordChange} className="w-full p-2 mb-4 bg-graphiteLight rounded-md text-goldMedium" />
        </label>
        <button onClick={handleRegister} className="bg-gold-500 text-gray-800 p-2 rounded cursor-pointer shadow-md">
          Registrar Usuario
        </button>
      </form>
      <p className="mt-4 text-gold-500">
        ¿Ya tienes cuenta?{' '}
        <Link to="/login" className="underline">
          Inicia sesión aquí
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;