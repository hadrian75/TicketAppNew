/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  module: {
    rules: [
      //...
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  screens: {
   'x-sm': '352px',
  },
  theme: {
    extend: {
      fontFamily:{
         'manrope': ['Manrope', 'sans-serif'],
         'kanit': ['Kanit', 'sans-serif'],
         'Urbanist':['Urbanist', 'sans-serif'],
         'Montserrat':['Montserrat', 'sans-serif']
      },
      backgroundImage: theme => ({
        'firstlog_img': "url(../images/accLog.svg)"
      }),
      height: {
        '80screen': '80vh', 
      },
      fontSize: {
        '10xl': ['9rem', {
          lineHeight: '7rem',
          letterSpacing: '-0.02em',
          fontWeight: '800',
      }],
    },
    colors: {
        
        'primary': '#F66E46',
        'primary-80': '#F88B6B',
        'primary-60': '#FAA890',
        'primary-40': '#FBC5B5',
        'primary-20': '#FDE2DA',


        'base': '#1f1f1f',
        'base-80': '#4c4c4c',
        'base-60': '#787878',
        'base-40': '#a5a5a5',
        'base-20': '#d2d2d2',
    
       'success': '#53D258',
       'success-80': '#75DB79',
       'success-60': '#98E49B',
       'success-40': '#BAEDBC',
       'success-20': '#DDF6DE',
    
       'warning': '#E4C65B',
       'warning-80': '#E9D17C',
       'warning-60': '#EFDD9D',
       'warning-40': '#F4E8BD',
       'warning-20': '#FAF4DE',
    
       'error': '#E25C5C',
       'error-80': '#E87D7D',
       'error-60': '#EE9D9D',
       'error-40': '#F3BEBE',
       'error-20': '#F9DEDE',
    
       'info': '#2685CA',
       'info-80': '#519DD5',
       'info-60': '#7DB6DF',
       'info-40': '#A8CEEA',
       'info-20': '#D4E7F4',
    
        "frameColor": "#172154",
        "frameColor-80": "#454D76",
        "frameColor-60": "#747A98",
        "frameColor-40": "#A2A6BB",
        "frameColor-20": "#D1D3DD",

        "PinkyBanner": "#EA047E",
        "BlueBanner": "#072871",
        "YellowBanner": "#FFB200",
        "FontDoubleBanner": "#2192FF",
        "OutlineFontBanner": "#434343"
    },
    keyframes: {
      "slide-in": {
        "0%": {
          "-webkit-transform": "translateX(120%)",
          transform: "translateX(120%)",
        },
        "100%": {
          "-webkit-transform": "translateX(0%)",
          transform: "translateX(0%)",
        },

      },
      "shake": {
        "0%": {
          "-webkit-transform":"translateY(10px)",
          transform: "translateY(10px)"
        },
        "25%": {
          "-webkit-transform":"translateY(-10px)",
          transform: "translateY(-10px)"
        },
        "50%": {
          "-webkit-transform":"translateY(10px)",
          transform: "translateY(10px)"
        },
        "75%": {
          "-webkit-transform":"translateY(-10px)",
          transform: "translateY(-10px)"
        },
        "100%": {
          "-webkit-transform":"translateY(-10px)",
          transform: "translateY(10px) "
        }
      },
      "ease-down": {
        "0%": {transform: "height-0"},
        "100%": {transform: "height-100"}
      }

  
  },
  transitionProperty:{
      "height": "height"
  },
    animation: {
      "slide-in": "slide-in 0.5s ease-out",
      "shaking": "shake 3s linear 0s infinite",
      "ease-down": "ease-down 3s ease-in-out"
    },
    
    
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
}