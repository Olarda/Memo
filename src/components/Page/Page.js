import React, {Component} from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';
import StartModal from '../StartModal/StartModal';
import {cn} from '@bem-react/classname';

import {connect} from 'react-redux';

const page = cn('Page');

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: true,
            gameState: 'start'
        };
    }

    closeModal() {
        this.setState({isModalOpen: false});
    }

    componentWillReceiveProps() {
        this.setState({
            gameState: this.props.endGame,
            isModalOpen: true
        }, this.renderModal)
    }

    renderModal() {
        // console.log(this.state.gameState, 'gameState');
        // console.log(this.props.endGame, 'this.props.endGame')
        if (this.props.endGame === 'timer' ||  this.props.endGame === 'succes') {
            console.log(this.props.endGame, 'this.props.endGame');
            return (
                <StartModal isOpen={this.state.isModalOpen}
                            onClose={() => this.closeModal()}
                            type={this.props.endGame}
                />
            )
        } else {

            return (
                <StartModal isOpen={this.state.isModalOpen}
                            onClose={() => this.closeModal()}
                            type={this.state.gameState}
                />
            )
        }
    }

    render() {

        return (

            <div className={page()}>
                <Header/>
                <Content/>
                {this.renderModal()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        endGame: state.timer.end
    }
}

export default connect(mapStateToProps)(Page);