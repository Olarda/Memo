import React, {Component} from 'react';
import './DisableCard.scss';
import {cn} from '@bem-react/classname';
import {connect} from "react-redux";

const disableCard= cn('DisableCard');

class DisableCard extends Component {
    //
    // clickHandler(e) {
    //     const cardType = e.currentTarget.getAttribute('cardtype');
    //     const cardId = e.currentTarget.getAttribute('cardid');
    //     this.props.setCard(cardType, cardId);
    //
    //     this.props.flip(this);
    // }


    render() {

        return (
            <div className={disableCard()}
                 style={this.props.style}
                 cardtype={this.props.img}
                 cardid = {this.props.id}
                 type = {this.props.type}
            >
                <div className={disableCard('Front')}>
                    <img className={disableCard('BackImage')}
                         srcSet={`/assets/${this.props.img}.jpg 1x , /assets/${this.props.img}-2x.jpg 2x`} alt='img'/>
                    {/*<img className={card('FrontImage')} srcSet={`/assets/bg.jpg 1x , /assets/bg-2x.jpg 2x`} alt='img'/>*/}
                </div>
                <div className={disableCard('Back')}>

                </div>
            </div>
        )
    }

}


export default connect()(DisableCard);