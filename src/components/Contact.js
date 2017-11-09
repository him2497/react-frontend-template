import React from 'react';

class Contact extends React.Component {

  render() {
    return (
        <div className="grid-container grid-container-padded">
          <div className="grid-container grid-container-padded">
            <div className="grid-x grid-margin-x">
              <div className="cell" style={style.box}>
                <div style={style.headerBackground}>
                  <h1 style={style.title}>Contact</h1>
                </div>



              </div>
            </div>
          </div>
        </div>
    )
  }
}

const style = {

};

style.headerBackground={
  background:'#e6e6e6',
  height: '100px',
  width: 'auto',
  paddingTop:'10px'
}

style.title = {
  fontFamily:'Raleway',
  textAlign: 'Center'
};

style.box = {
  boxShadow: "0 5px 30px #e6e6e6"
}



export default Contact;
