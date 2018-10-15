import React from 'react';

import './footer.scss';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <h3>{this.props.footerText}</h3>
      </footer>
    );
  }
}

export default Footer;