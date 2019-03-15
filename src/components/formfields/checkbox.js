import React from 'react';
import './formfields.scss';

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(val) {
    // console.log(val.target.checked)
    const nextEle = document.querySelector('.nextBtn button');
    if (val.target.checked){
        nextEle.disabled = false;
        nextEle.classList.remove("disabled");
    } else {
        nextEle.disabled = true;
        nextEle.classList.add("disabled");
    }
  }
  render() {
    const checkbox = this.props.name;
    const hindi = checkbox+'hindi';
    const eng = checkbox+'eng';
    const french = checkbox+'french';
    const german = checkbox+'german';
    return (
        <div className="col-75">
            <label className="container">Hindi
            <input ref={this.props.name} onChange={this.handleSelect} type="checkbox" name={hindi} value="Hindi"/>
            <span className="checkmark"></span>
            </label>
            <label className="container">English
            <input ref={this.props.name} onChange={this.handleSelect} type="checkbox" name={eng} value="English" />
            <span className="checkmark"></span>
            </label>
            <label className="container">French
            <input ref={this.props.name} onChange={this.handleSelect} type="checkbox" name={french} value="French" />
            <span className="checkmark"></span>
            </label>
            <label className="container">German
            <input ref={this.props.name} onChange={this.handleSelect} type="checkbox" name={german} value="German" />
            <span className="checkmark"></span>
            </label>
        </div>
    );
  }
}
