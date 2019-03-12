import React from 'react';
import './formfields.scss';

export default class Numberinput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="col-75">
            <input type="number" id={this.props.name} name={this.props.name} placeholder={this.props.placeholder} />
        </div>
    );
  }
}
