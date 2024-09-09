// theme.js
const lightTheme = {
    name: 'Light',
    p_bg: '#fff',
    s_bg: '#e6e6e6',
    p_col: '#212529',

    colors: {
      primary: '#fff', // Blue
      secondary: '#6c757d', // Gray
      background: '#fff', // White
      text: '#212529', // Dark Gray
    },
    textColor(){
      return { color: this.colors.text }
    },
    bgColor(){
      return  `backgroundColor: '${this.colors.background}'`
    }
  };
  
  const darkTheme = {
    name: 'Dark',
    p_bg: '#333',
    s_bg: '#404040',
    p_col: '#fff',

    colors: {
      primary: '#282c34', // Dark Gray
      secondary: '#495057', // Light Gray
      background: '#212529', // Dark Gray
      text: '#fff', // White
    },
    textColor(){
      return {color: this.colors.text}
    },
    bgColor(){
      return { backGroundColor: this.backGroundColor }
    }
  };
  
  export { lightTheme, darkTheme };
  