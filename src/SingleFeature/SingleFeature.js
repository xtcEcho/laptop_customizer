import React, {Component} from 'react'
import Option from '../Option/Option'


class SingleFeature extends Component{
    render(){
        const featureHash = this.props.featureName + '-' + this.props.featureIdx;
        const options = this.props.featureInfo.map(item => 
            <Option itemInfo={item} featureName={this.props.featureName} selected={this.props.selected}
            currencyFormat={this.props.currencyFormat} updateFeature={this.props.updateFeature}/>
            // const itemHash = slugify(JSON.stringify(item));
            // return (
            //     <div key={itemHash} className="feature__item">
            //       <input
            //         type="radio"
            //         id={itemHash}
            //         className="feature__option"
            //         name={slugify(this.props.featureName)}
            //         checked={item.name === this.props.selected[this.props.featureName].name}
            //         onChange={e => this.updateFeature(this.props.featureName, item)}
            //       />
            //       <label htmlFor={itemHash} className="feature__label">
            //         {item.name} ({this.props.currencyFormat.format(item.cost)})
            //       </label>
            //     </div>
            // );
        );
      
        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{this.props.featureName}</h3>
                </legend>
                {options}
            </fieldset>
        )
    }
}

export default SingleFeature