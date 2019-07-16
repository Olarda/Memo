import React, {Component} from 'react';
import './Card.scss';
import {cn} from '@bem-react/classname';
import {connect} from "react-redux";

const card = cn('Card');

class Card extends Component {


    clickHandler(e) {

        const cardType = e.currentTarget.getAttribute('cardtype');
        const cardId = e.currentTarget.getAttribute('cardid');


        console.log(this.props.gameState, 'gameState')


        //если нажата пауза
        if (!this.props.gameState) {
            return;
        }


        if (this.props.clickCardArr && this.props.clickCardArr.length === 2) {
            return;
        }

        //если карта кликабельна
        if (!this.props.setCard) {
            return
        }

        this.props.setCard(cardType, cardId);

        this.props.flip(this);


    }

    render() {

        return (
            <div className={card()}
                 style={this.props.style}
                 onClick={this.clickHandler.bind(this)}
                 cardtype={this.props.img}
                 cardid={this.props.id}
                 type={this.props.type}

            >
                <div className={card('Front')}>
                    <img className={card('FrontImage')} srcSet={`/assets/bg.jpg 1x , /assets/bg-2x.jpg 2x`} alt='img'/>
                </div>
                <div className={card('Back')}>
                    <img className={card('BackImage')}
                         srcSet={`/assets/${this.props.img}.jpg 1x , /assets/${this.props.img}-2x.jpg 2x`} alt='img'/>

                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        clickCardArr: state.cardsData.clickCardArr,
        gameState: state.timer.gameState
    }
}


export default connect(mapStateToProps)(Card);