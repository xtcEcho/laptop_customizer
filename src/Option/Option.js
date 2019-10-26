import React, {Component} from 'react'
import slugify from 'slugify';
 
class Option extends Component{
    render(){
        const itemHash = slugify(JSON.stringify(this.props.itemInfo));
        return (
            <div key={itemHash} className="feature__item">
                <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(this.props.featureName)}
                    checked={this.props.itemInfo.name === this.props.selected[this.props.featureName].name}
                    onChange={e => this.props.updateFeature(this.props.featureName, this.props.itemInfo)}
                />
                <label htmlFor={itemHash} className="feature__label">
                    {this.props.itemInfo.name} ({this.props.currencyFormat.format(this.props.itemInfo.cost)})
                </label>
            </div>
        );
    }
}

export default Option