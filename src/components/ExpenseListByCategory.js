import React from 'react';
import { useUserContext } from '../context/UserContext';

const ExpenseListByCategory = ({ selectedCategory }) => {
  const { currentUser } = useUserContext();

  // Filtra los gastos por la categoría seleccionada
  const categoryExpenses = currentUser.expenses.filter((expense) => expense.category === selectedCategory);
  const totalExpenses = categoryExpenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="flex flex-col w-3/4 mx-auto bg-graphiteMedium text-goldMedium p-4 rounded-md shadow-md mt-8">
      <h2 className="text-2xl mb-2 text-goldMedium">{`Gastos en ${selectedCategory}`}</h2>
      <table className="w-full border-collapse bg-graphiteDark">
        <thead>
          <tr>
            <th className="border border-goldMedium p-2">Título</th>
            <th className="border border-goldMedium p-2">Monto</th>
          </tr>
        </thead>
        <tbody>
          {categoryExpenses.map((expense, index) => (
            <tr key={index} className="border border-goldMedium">
              <td className="border-r border-goldMedium border-b p-2">{expense.titulo}</td>
              <td className="border-b p-2">{`$${expense.amount.toFixed(2)}`}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="border border-goldMedium p-2"><strong>Total Gastos:</strong></td>
            <td className="border border-goldMedium p-2">{`$${totalExpenses.toFixed(2)}`}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseListByCategory;