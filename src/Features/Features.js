import React, {Component} from 'react'
import SingleFeature from '../SingleFeature/SingleFeature'


class Features extends Component {
    render(){
        const features = Object.keys(this.props.features).map((feature, idx) => 
            <SingleFeature featureName={feature} featureInfo={this.props.features[feature]} featureIdx={idx} key={idx}
            selected={this.props.selected} currencyFormat={this.props.currencyFormat} 
            updateFeature={this.props.updateFeature}/>
        );
        return(
            <div className="Features">
                <form className="main__form">
                    <h2>Customize your laptop</h2>
                    {features}
                </form>
            </div>
        )
    }
}

export default Features