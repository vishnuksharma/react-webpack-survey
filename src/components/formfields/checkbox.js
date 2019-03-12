import React from 'react';
import './formfields.scss';

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="col-75">
            <label class="container">Hindi
            <input type="checkbox" />
            <span class="checkmark"></span>
            </label>
            <label class="container">English
            <input type="checkbox" />
            <span class="checkmark"></span>
            </label>
            <label class="container">French
            <input type="checkbox" />
            <span class="checkmark"></span>
            </label>
            <label class="container">German
            <input type="checkbox" />
            <span class="checkmark"></span>
            </label>
        </div>
    );
  }
}
