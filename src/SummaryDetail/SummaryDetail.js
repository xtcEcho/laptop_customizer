import React, {Component} from 'react'

class SummaryDetail extends Component {
    render(){
        const featureHash = this.props.feature + '-' + this.props.idx;
        const selectedOption = this.props.selected[this.props.feature];
      
        return (
            <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{this.props.feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                  {this.props.currencyFormat.format(selectedOption.cost)}
                </div>
            </div>
        );
    }
}

export default SummaryDetail