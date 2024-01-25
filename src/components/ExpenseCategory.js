import React from 'react';

const categories = ['Alimentos', 'Transporte', 'Tecnología', 'Entretenimiento', 'Educación', 'Cuidado Personal', 'Salud', 'Impuestos', 'Otros'];

const ExpenseCategory = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className='flex flex-col '>
      <label className="mb-2 text-left text-goldMedium w-full">
        Categoría:
        <select className='w-full h-10 bg-graphiteLight' value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default ExpenseCategory;