import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useUserContext } from '../context/UserContext';

const PieChart = () => {
    const { currentUser } = useUserContext();
    const chartRef = useRef(null);

    useEffect(() => {
        if (currentUser.expenses.length > 0 && chartRef.current) {
            // Destruye el gráfico anterior si ya existe
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }

            // Agrupar gastos por categoría
            const groupedExpenses = currentUser.expenses.reduce((acc, expense) => {
                const category = expense.category;
                if (!acc[category]) {
                    acc[category] = 0;
                }
                acc[category] += expense.amount;
                return acc;
            }, {});

            const labels = Object.keys(groupedExpenses);
            const amounts = Object.values(groupedExpenses);
            const colors = generateRandomColors(labels.length);

            const ctx = chartRef.current.getContext('2d');
            chartRef.current.chart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels,
                    datasets: [{
                        data: amounts,
                        backgroundColor: colors,
                    }],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: {
                                color: '#f7d382', // Cambia el color del texto de las etiquetas
                            },
                        },
                    },
                },
            });
        }
    }, [currentUser.expenses]);

    // Función para generar colores aleatorios
    const generateRandomColors = (count) => {
        const colors = [];
        for (let i = 0; i < count; i++) {
            colors.push(`rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.7)`);
        }
        return colors;
    };

    return (
        <>
            <div className="border-t-4 border-solid border-graphiteDark mt-8 pt-4">
                <h1 className="text-3xl text-goldLight font-bold pl-4">Desglose</h1>
            </div>
            <div className="w-3/4 mx-auto mt-8">
                <canvas ref={chartRef} />
            </div>
            <div className="text-center mt-4 text-goldMedium">
                <p>Total Gastado: ${currentUser.balance.toFixed(2)}</p>
            </div>
        </>
    );
};

export default PieChart;


