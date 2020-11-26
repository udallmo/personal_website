import React, { Component } from 'react';
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple,lightBlue } from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => ({
  root: {
    color: "white",
    backgroundColor: "rgb(81, 134, 169)",
    margin: "1vw 0.5vw",
    '&:hover': {
      backgroundColor: "rgb(48, 101, 136)",
    },
  },
}))(Button);

class CustomizedButtons extends Component {
    render(){
        const theme = createMuiTheme({
            palette: {
              primary: green,
            },
          });
    
        const classes = makeStyles((theme) => ({
            margin: {
              margin: theme.spacing(1),
            },
          }));

        return (
              <ColorButton variant="contained" color="primary" className={classes.margin}>
                {this.props.title}
              </ColorButton>
          );
    }
}

export default CustomizedButtons;

