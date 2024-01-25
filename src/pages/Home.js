import React, { useState } from 'react';
import RegisterExpense from '../components/RegisterExpense';
import ExpenseCategory from '../components/ExpenseCategory';
import ExpenseListByCategory from '../components/ExpenseListByCategory';
import { useUserContext } from '../context/UserContext';
import PieChart from '../components/PieChart';

const Home = () => {
  const { currentUser } = useUserContext();
  const [selectedCategory, setSelectedCategory] = useState('Alimentos');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='content-center'>
      {currentUser ? (
        <>
          {/* Componente para registrar gastos */}
          <RegisterExpense/>

          <section className='flex flex-col justify-center content-center bg-graphiteMedium p-4 rounded-md shadow-md mt-12'>

            {/* Componente de selección de categoría */}
            <ExpenseCategory selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />

            {/* Componente para visualizar gastos por categoría */}
            {selectedCategory && <ExpenseListByCategory selectedCategory={selectedCategory} />}

            <PieChart />
          </section>
        </>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
};

export default Home;