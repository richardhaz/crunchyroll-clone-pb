/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        xl: '1130px'
      }
    },
    zIndex: {
      sidebar: '6000',
      navbar: '9000',
      'general-content': '7000'
    },
    fontFamily: {
      nunito: 'Nunito, sans-serif'
    },
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1400px'
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      },
      animation: {
        spin: 'spin 6s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite'
      },
      colors: {
        'typography-light': '#DADADA',
        primary: '#f47521',
        navbar: '#23252B',
        'carousel-green': '#2abdbb',
        'carousel-orange': '#fab818'
      },
      fontSize: {
        10: '10px',
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        16: '16px',
        17: '17px',
        18: '18px',
        19: '19px',
        20: '20px',
        21: '21px',
        22: '22px',
        23: '23px',
        24: '24px',
        25: '25px',
        26: '26px',
        27: '27px',
        28: '28px',
        29: '29px',
        30: '30px',
        31: '31px',
        32: '32px',
        33: '33px',
        34: '34px',
        35: '35px',
        36: '36px'
      },
      width: {
        400: '400px',
        450: '450px',
        500: '500px',
        600: '600px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1100: '1100px',
        1200: '1200px',
        1400: '1400px'
      },
      height: {
        navbar: '60px',
        100: '100px',
        200: '200px',
        300: '300px',
        400: '400px',
        450: '450px',
        500: '500px',
        600: '600px',
        700: '700px',
        800: '800px',
        900: '900px'
      },
      borderWidth: {
        1: '1px'
      },
      boxShadow: {
        'auth-box': '0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%)'
      }
    }
  },
  plugins: []
};
