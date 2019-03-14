import React from 'react';
import './formfields.scss';

export default class RadioBtn extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(val) {
    // console.log(val.target.checked)
    const nextEle = document.querySelector('.nextBtn button');
    if (val.target.checked !== ''){
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
            <label htmlFor={this.props.name}>
                <input onChange={this.handleSelect} type="radio" id={this.props.name} name={this.props.name} value="Male" /> Male
            </label>
            <label>
                <input onChange={this.handleSelect} type="radio" id={this.props.name} name={this.props.name}value="Female" />Female
            </label>
            <label>
                <input onChange={this.handleSelect} type="radio" id={this.props.name} name={this.props.name} value="Other" />Other
            </label>
        </div>
    );
  }
}
