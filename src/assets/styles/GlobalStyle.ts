import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&family=Roboto:wght@500&display=swap');
    
    body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', 'Roboto', sans-serif;
    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }

    ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-thumb {
        
    }
    ::-webkit-scrollbar-track {
        
    }
`;

export default GlobalStyle;
