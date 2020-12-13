import React, { Component } from 'react';
import { images } from './data'
import Image from './Image';

class Carousel extends Component {
        state = {
                images,
                target: 0
        }

        renderImages = () => {
                const { images, target } = this.state
                const results = images.map((img, index) => <Image key={index} img={img} />)
                return results[target]
        }

        handlePrevClick = () => {
                const { images, target } = this.state
                if (target === 0) {
                        this.setState({
                                target: images.length - 1
                        })
                } else {
                        this.setState(prevState => ({
                                target: prevState.target - 1
                        }))
                }
        }

        handleNextClick = () => {
                const { images, target } = this.state
                if (images.slice(0)[target + 1] === undefined) {
                        this.setState({
                                target: 0
                        })
                } else {
                        this.setState(prevState => ({
                                target: prevState.target + 1
                        }))
                }
        }

        render() {
                return (
                        <div className="carousel_wrapper">
                                <div className="prev_button">
                                        <button onClick={this.handlePrevClick}>
                                                &#x3c;
                                        </button>
                                </div>
                                {
                                        this.renderImages()
                                }
                                <div className="next_button">
                                        <button onClick={this.handleNextClick}>
                                                &#x3e;
                                        </button>
                                </div>
                        </div>
                );
        }
}

export default Carousel;