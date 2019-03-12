import React from 'react';
import './formfields.scss';

export default class Textbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="col-75">
            <input type="text" id={this.props.name} name={this.props.name} placeholder={this.props.placeholder}/>
        </div>
    );
  }
}
