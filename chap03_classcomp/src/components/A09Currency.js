import React, { Component } from "react";
import PropTypes from 'prop-types'

class A09Currency extends Component {
  constructor() {
    super();

    this.state = {
      qty: 3,
      cost: 5,
      inCurr: 'USD'
    }
    this.countries = ['USD', 'EUR', 'KRW'];
    this.rate = {USD: 1, EUR: 0.98, KRW: 0.00073};
    this.options = this.countries.map(item => <option key={item}>{item}</option>)
  }

  onTotal = () => {
    const total = this.countries.map(item => {
      const value = (this.state.qty * this.state.cost * this.rate[this.state.inCurr] / this.rate[item]).toFixed(2);
      return <span key={item}>{item}: {value} {' '}</span>
    });
    return total;
  }

  changeNumber = evt => {
    let value = Number(evt.target.value);
    if (isNaN(value)) value = 0;
    this.setState({[evt.target.name]: value});
  };
  changeString = evt => {
    if (evt.target.value.trim() !== 0) {
      this.setState({[evt.target.name]: evt.target.value});
    }
  }
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        Qty: <input type="number" name="qty" className="form-control" 
            value={this.state.qty} onChange={this.changeNumber} />
        Cost: <input type="number" name="cost" className="form-control"
            value={this.state.cost} onChange={this.changeNumber}  />
        Country: {this.state.inCurr}
        <select className="form-control" name="inCurr"
          value={this.state.inCurr} onChange={this.changeString}>{this.options}</select>
        <br />
        <div>Total: {this.state.cost * this.state.qty}</div>
        <div>
          Total: {this.onTotal()}
        </div>
      </div>
    );
  }
}
export default A09Currency;

A09Currency.defaultProps = {
  title: 'A09 Title'
}
A09Currency.propTypes = {
  title: PropTypes.string,
}