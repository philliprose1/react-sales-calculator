import React from 'react';
import './App.css';



class Calculator extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        customers: [],
        totalCustomers: [],
        soldTo: [],
        totalSoldTo: [],
        percentTotal: []
    }
}

incrementc() {
    this.setState({customers: this.setState.customers + parseInt(this.state.totalCustomers)});
}
increments() {
    this.setState({soldTo: this.setState.soldTo + parseInt(this.state.totalSoldTo)});
} 

calculate() {
this.setState({percentTotal: this.setState.percentTotal = parseInt(this.state.totalSoldTo) / parseInt(this.state.totalCustomers) * 100 + 
    ' % of your customers purchased from you.'})
}




render() {
return(
<div id="main">
    <div>
        
        <div>
            <h3>Total Customers:</h3>
            <p>(Enter the total amount of customers)</p>
            <input type="number" onChange={event => this.setState({totalCustomers:event.target.value})} value={this.state.totalCustomers} />
            
            <h4 id="customers">{this.state.totalCustomers}</h4>
             
        </div>
        <div>
            <h3>Total sold to:</h3>
            <p>(Enter the total amount of customers that completed a sale) </p>
            <input type="number" onChange={event => this.setState({totalSoldTo:event.target.value})} value={this.state.totalSoldTo} />
            <h4 id="sold">{this.state.totalSoldTo}</h4>
            
        </div>
        <div>
            <h3>Precentage of customers sold to:</h3>
            <button onClick={this.calculate.bind(this)}>Calculate percent</button>

            <h3>Answer:</h3>
            <h4 id="answer">{this.state.percentTotal}</h4>
        </div>

    </div>
 </div>   
);

    }

}

export default Calculator;

