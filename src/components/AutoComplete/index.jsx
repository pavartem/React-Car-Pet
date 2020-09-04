import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.css';

export class AutoComplete extends Component {
    render() {
        return (
            <div className='auto-complete'>
                <div className="list-group">
                    {this.props.autoComplete.map(auto =>
                        <div
                            key={`${auto.make} ${auto.model}`}
                            className="list-group-item list-group-item-action"
                            onClick={() => {
                                this.props.setName(`${auto.make} ${auto.model}`);
                                this.props.toggleAutoComplete(false);
                            }}
                        >
                            {auto.make} {auto.model}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        autoComplete: state.autoComplete,
    }
}

export default connect(mapStateToProps)(AutoComplete);
