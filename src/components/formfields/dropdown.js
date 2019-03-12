import React from 'react';
import './formfields.scss';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="col-75">
            <select id={this.props.name} name={this.props.name}>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="germany">Germany</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
            </select>
        </div>
    );
  }
}
