import React, { Component } from 'react';

class SkillComponent extends Component {

    get skillColor() {
        switch(this.props.category) {
            case 'web': return '#29BF12';
            case 'bigdata': return '#2F4858';
            case 'devops': return '#D63230';
            case 'microservices': return '#FF9914';
            default: return null;
        }
    }

    render() {
        return <span 
                    style={{ backgroundColor: this.skillColor }}
                    className="uk-label uk-margin-right">{this.props.skill}</span>;
    }
}

export default SkillComponent;