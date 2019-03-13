import React from 'react';
import './formfields.scss';

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="col-75">
            <label className="container">Hindi
            <input type="checkbox" name={this.props.name}/>
            <span className="checkmark"></span>
            </label>
            <label className="container">English
            <input type="checkbox" name={this.props.name} />
            <span className="checkmark"></span>
            </label>
            <label className="container">French
            <input type="checkbox" name={this.props.name} />
            <span className="checkmark"></span>
            </label>
            <label className="container">German
            <input type="checkbox" name={this.props.name} />
            <span className="checkmark"></span>
            </label>
        </div>
    );
  }
}
