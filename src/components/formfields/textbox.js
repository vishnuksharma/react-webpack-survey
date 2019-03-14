import React from 'react';
import './formfields.scss';

export default class Textbox extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(val) {
    const nextEle = document.querySelector('.nextBtn button');
    if (val.target.value !== '') {
        nextEle.disabled = false;
        nextEle.classList.remove("disabled");
    } else {
        nextEle.disabled = true;
        nextEle.classList.add("disabled");
    }
  }
  render() {
    return (
        <div className="col-75">
            <input onKeyUp={this.handleKeyUp} type="text" id={this.props.name} name={this.props.name} placeholder={this.props.placeholder}/>
        </div>
    );
  }
}
