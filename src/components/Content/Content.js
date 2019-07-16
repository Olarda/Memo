import React, {Component} from 'react';
import {cn} from '@bem-react/classname';
import Card from '../Card/Card';
import './Content.scss';
import {connect} from 'react-redux';
import setCardAction from '../../actions/actionCard';
import setCheckedCardAction from '../../actions/actionCheckCard';
import setCleanCardsAction from "../../actions/actionСleanCards";
import setEndAction from "../../actions/actionEnd";


const content = cn('Content');

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardArr: [],
            flip: false,
        };

        this.flip = this.flip.bind(this);
    }

    componentWillMount() {
        this.setState({
            cardArr: this.props.cards
        })
    }

    flip(card) {

        this.setState({
            flip: true
        }, this.getEqual);
    }

    getEqual() {

        if (!this.props.equal && this.props.clickCardArr && this.props.clickCardArr.length === 2) {
            console.log('no')
            setTimeout(() => {
                this.setState({
                    flip: false
                });
                this.props.setCleanCards();
            }, 1000)

        }

        if (this.props.equal && this.props.clickCardArr && this.props.clickCardArr.length === 2) {
            // console.log('equal')
            this.props.clickCardArr.forEach(item => {
                // console.log(item, 'item')
                this.props.setCheckedCard(item);
            })
            this.props.setCleanCards();

            if(this.props.checkedCard && this.props.checkedCard.length === 16) {

                this.props.setGameEnd('succes');
            }
            // console.log(this.props.checkedCard, 'checkedArr')
        }

    }

    renderCards() {
        const flipStyle = this.state.flip ? {
            transform: `rotateY(180deg)`
        } : {};


        return this.state.cardArr.map((card, index) => {
            if (this.props.clickCardArr) {
                if (this.props.clickCardArr.includes(`${card.id}`)) {
                    //карточка, на которую нажали
                    return <Card
                                 style={flipStyle}
                                 id={card.id}
                                 key={index}
                                 title={card.title}
                                 flip={this.flip}
                                 img={card.img}
                                 setCard={this.props.setCardFunction}/>
                } else if (this.props.checkedCard) {

                    if (this.props.checkedCard.includes(`${card.id}`)) {
                        // если карточка выбрана верно
                        return <Card style={{transform: `rotateY(180deg)`}}
                                     type='disable'
                                     key={index}
                                     id={card.id}
                                     title={card.title}
                                     img={card.img}/>
                    }
                }
            }
            //карточка, на которую  не нажали
            return <Card key={index}
                         id={card.id}
                         title={card.title}
                         flip={this.flip}
                         img={card.img}
                         setCard={this.props.setCardFunction}/>

        })
    }

    render() {
        return (

            <div className={content()}>
                <div className={content('CardWrapper')}>
                    {this.renderCards()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cards: state.cardsData.cards,
        card: state.cardsData.card,
        equal: state.cardsData.equal,
        cardId: state.cardsData.cardId,
        clickCardArr: state.cardsData.clickCardArr,
        checkedCard: state.cardsData.checkedCard,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setCardFunction: (card, id) => {
            dispatch(setCardAction(card, id))
        },
        setCheckedCard: (id) => {
            dispatch(setCheckedCardAction(id))
        },
        setCleanCards:() => {
            dispatch(setCleanCardsAction())
        },
        setGameEnd: (state) => {
            dispatch(setEndAction(state))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);