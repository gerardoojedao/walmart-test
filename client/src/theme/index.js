import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        background: {
            default: "#FAFAFA"
        },
        primary: {
            main: '#174176'
        }
    },
    typography: {
        fontFamily: `"Heebo"`,
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500
    }
});

export default theme;
