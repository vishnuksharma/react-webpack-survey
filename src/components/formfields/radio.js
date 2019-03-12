import React from 'react';
import './formfields.scss';

export default class RadioBtn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="col-75">
            <input type="radio" name="gender" value="Male" />
            <input type="radio" name="gender" value="Female" />
            <input type="radio" name="gender" value="Other" />
        </div>
    );
  }
}
