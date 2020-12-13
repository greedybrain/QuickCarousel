import React, { Component } from 'react';

class Image extends Component {
        render() {
                return (
                        <div className="image_wrapper">
                                <img src={this.props.img.path} alt="this pic"/>
                        </div>
                );
        }
}

export default Image;