
import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    // undefined
    // console.log(this.props);
  }
  render() {
    // Showing the props from a class component to a class component
    // console.log(this.props);

    return (
      <footer>
        <p>{this.props.footerText}</p>

      </footer>
    )
  }
}

export default Footer;