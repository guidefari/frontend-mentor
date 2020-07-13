import { createGlobalStyle } from 'styled-components';

import Manrope from './Manrope-VariableFont_wght.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Manrope';
        src: local('Manrope)
        url(${Manrope}) format('ttf'),
        font-weight: 300;
        font-style: normal;
    }
`;