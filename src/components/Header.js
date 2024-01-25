import React from 'react';
import { Link} from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

const Header = () => {
  const { currentUser, logout } = useUserContext();

  return (
    <header className="bg-graphiteDark text-goldLight p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home" className="text-xl font-bold text-goldLight">
          CashFlowHub
        </Link>

        {currentUser ? (
          <div className="flex items-center">
            <p className="text-goldLight mr-4">Bienvenido, {currentUser.name}!</p>
            <button onClick={logout} className="text-goldLight">
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <Link to="/login" className="text-goldLight">
            Iniciar Sesión
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;