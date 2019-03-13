import React from 'react';
import './formfields.scss';

export default class RadioBtn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="col-75">
            <label htmlFor={this.props.name}>
                <input type="radio" id={this.props.name} name={this.props.name} value="Male" /> Male
            </label>
            <label>
                <input type="radio" id={this.props.name} name={this.props.name}value="Female" />Female
            </label>
            <label>
                <input type="radio" id={this.props.name} name={this.props.name} value="Other" />Other
            </label>
        </div>
    );
  }
}
