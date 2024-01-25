import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext';
import ExpenseCategory from './ExpenseCategory';
import Swal from 'sweetalert2';

const RegisterExpense = () => {
  const { currentUser, addExpenseToCurrentUser } = useUserContext();
  const [selectedCategory, setSelectedCategory] = useState('Alimentos');
  const [amount, setAmount] = useState('');
  const [titulo, setTitulo] = useState('');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  const handleRegisterExpense = (e) => {
    e.preventDefault();

    try {
      if (!selectedCategory || !amount || !titulo) {
        throw new Error('Por favor, selecciona una categoría, ingresa el monto y proporciona un título.');
      }

      const newExpense = {
        category: selectedCategory,
        amount: parseFloat(amount),
        titulo: titulo,
      };

      // Llamar a la nueva función para agregar gastos al usuario actual
      addExpenseToCurrentUser(newExpense);

      // Reiniciar el formulario
      setSelectedCategory('');
      setAmount('');
      setTitulo('');

      Swal.fire({
        icon: 'success',
        title: 'Gasto registrado exitosamente',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message,
      });
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col w-3/4 mx-auto bg-graphiteMedium text-goldMedium p-4 rounded-md shadow-md mt-16">
      <h2 className="text-2xl mb-4 text-goldMedium">Registrar Gasto</h2>
      <form className="flex flex-col justify-between w-full" onSubmit={handleRegisterExpense}>
        <ExpenseCategory
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <label className="mb-2 text-left text-goldMedium w-full">
          Monto:
          <input type="number" value={amount} onChange={handleAmountChange} className="w-full p-2 mb-4 bg-graphiteLight" />
        </label>
        <label className="mb-2 text-left text-goldMedium w-full">
          Título:
          <input type="text" value={titulo} onChange={handleTituloChange} className="w-full p-2 mb-4 bg-graphiteLight" />
        </label>
        <button
          type="submit"
          className="bg-goldMedium text-graphiteDark p-2 rounded cursor-pointer shadow-md"
        >
          Registrar Gasto
        </button>
      </form>
    </div>
  );
};

export default RegisterExpense;
