import React from 'react';
import './formfields.scss';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(val) {
    const nextEle = document.querySelector('.nextBtn button');
    if (val.target.value !== ''){
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
            <select onChange={this.handleSelect} id={this.props.name} name={this.props.name}>
                <option value="">Select</option>
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
