import React from 'react';
import {AppBar, FlatButton} from 'material-ui'
import {Link} from 'react-router-dom';


class Nav extends React.Component{
  render() {
    return(
    <AppBar title="My App" style={style.title} showMenuIconButton={false}>
      <Link to="/"><FlatButton primary={true} label="Home" style={style}/></Link>
      <Link to="/about"><FlatButton primary={true} label="About" style={style}/></Link>
      <Link to="/contact"><FlatButton label="Contact" primary={true} style={style}/></Link>
    </AppBar>
  )
  }
}

const style = {
  margin: 10,
  color: 'white',
  background: '#00BCD4',
  textSize: 1000,
  fontFamily:"Raleway"
};

style.title = {
  fontFamily:'Raleway'
};

export default Nav;
