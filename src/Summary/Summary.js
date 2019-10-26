import React, { Component } from "react"
import SummaryDetail from '../SummaryDetail/SummaryDetail'
import Total from '../Total/Total'

class Summary extends Component {
    render(){
        const summary = Object.keys(this.props.selected).map((feature, idx) => 
            <SummaryDetail currencyFormat={this.props.currencyFormat} feature={feature}
            idx={idx} key={idx} selected={this.props.selected}/>
        );
      
        
        return(
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <Total selected={this.props.selected} currencyFormat={this.props.currencyFormat}/>
            </section>
        )
    }
}

export default Summary