import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  // Cargar usuarios desde localStorage al iniciar
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);

    const storedCurrentUser = JSON.parse(localStorage.getItem('currentUser'));
    setCurrentUser(storedCurrentUser);
  }, []);

  const handleUserRegister = (newUser) => {
    const isEmailUnique = !users.some((user) => user.email === newUser.email);

    if (isEmailUnique) {
      setUsers([...users, newUser]);
      localStorage.setItem('users', JSON.stringify([...users, newUser]));

      // Mantener al usuario actualizado solo si no hay un usuario autenticado actualmente
      if (!currentUser) {
        setCurrentUser(newUser);
        localStorage.setItem('currentUser', JSON.stringify(newUser));
      }

      navigate('/home');
    } else {
      alert('El correo electrónico ya está registrado. Por favor, utiliza otro.');
    }
  };

  const addExpenseToCurrentUser = (newExpense) => {
    const updatedUser = {
      ...currentUser,
      expenses: [...currentUser.expenses, newExpense],
      balance: currentUser.balance + parseFloat(newExpense.amount),
    };
  
    const updatedUsers = users.map((user) =>
      user.email === updatedUser.email ? updatedUser : user
    );
  
    setUsers(updatedUsers);
    setCurrentUser(updatedUser);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

/*   const handleUserSelect = (userId) => {
    const selectedUser = users.find((user) => user.name === userId);
    setCurrentUser(selectedUser);
  }; */

  const handleUserLogin = (email, password) => {
    const user = users.find((user) => user.email === email && user.password === password);
  
    if (user) {
      setCurrentUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      console.log('Login successful');
      navigate('/home');
      return true; // Devuelve true en caso de éxito
    } else {
      console.log('Login failed');
      return false; // Devuelve false en caso de credenciales incorrectas
    }
  };

  const logout = () => {
    // Lógica para cerrar sesión
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <UserContext.Provider value={{ users, currentUser, handleUserRegister, addExpenseToCurrentUser, handleUserLogin, logout }}>
      {children}
    </UserContext.Provider>
  );
};
