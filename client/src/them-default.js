import {purple200,white} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

 const muiTheme = getMuiTheme({
  appBar:{backgroundColor:purple200},
  raisedButton: {
    textColor:white,
    
  },
});
export default muiTheme;