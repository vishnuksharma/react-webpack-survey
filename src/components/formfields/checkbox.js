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
    return (
        <div className="col-75">
            <label className="container">Hindi
            <input ref={this.props.name} onChange={this.handleSelect} type="checkbox" name={this.props.name}/>
            <span className="checkmark"></span>
            </label>
            <label className="container">English
            <input ref={this.props.name} onChange={this.handleSelect} type="checkbox" name={this.props.name} />
            <span className="checkmark"></span>
            </label>
            <label className="container">French
            <input ref={this.props.name} onChange={this.handleSelect} type="checkbox" name={this.props.name} />
            <span className="checkmark"></span>
            </label>
            <label className="container">German
            <input ref={this.props.name} onChange={this.handleSelect} type="checkbox" name={this.props.name} />
            <span className="checkmark"></span>
            </label>
        </div>
    );
  }
}
