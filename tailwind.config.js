module.exports = {
    content: [
        './src/**/*.js',
        './public/index.html',
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    '50': '#fffbea',
                    '100': '#fff3c4',
                    '200': '#fce588',
                    '300': '#fadb5f',
                    '400': '#f7c948',
                    '500': '#f0b429',
                    '600': '#de911d',
                    '700': '#cb6e17',
                    '800': '#b44d12',
                    '900': '#8d2b0b',
                },
                graphiteDark: '#2c3e50',
                graphiteMedium: '#547c8c',
                graphiteLight: '#a2b7c0',
                goldDark: '#efb810',
                goldMedium: '#f9db5c',
                goldLight: '#f7d382',
            },
        },
    },
    plugins: [],
}