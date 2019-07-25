import React, { Component } from 'react';
import Button from '../Button/Button';
import { cn } from '@bem-react/classname';
import {connect} from "react-redux";
import './Timer.scss';
import setGameStateAction from "../../actions/gameState";
import setEndAction from "../../actions/actionEnd";

const timer = cn('Timer');


class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: {},
            seconds: this.props.timer,
            run: false
        };

        this.timer = null;
        this.startTimer = this.startTimer.bind(this);
        this.playPause = this.playPause.bind(this);
        this.count = this.count.bind(this);
    }

    componentDidMount() {
        let timeLeft = this.conversion(this.state.seconds);
        this.setState({time: timeLeft});
    }
    componentWillReceiveProps() {
        this.props.setGameState(true);
        this.startTimer();
    }

    conversion(time) {

        let transferToMinutes = time % (60 * 60);
        let minutes = Math.floor(transferToMinutes / 60);
        let transferToSecondes = transferToMinutes % 60;
        let seconds = Math.ceil(transferToSecondes);

        let timeObj = {
            'm': minutes,
            's': seconds
        };

        return timeObj;
    }

    startTimer() {

        if (!this.timer || this.state.seconds > 0) {

            this.timer = setInterval(this.count, 1000);
        }
    }

    playPause() {
        this.setState({
            run: !this.state.run
        });

        if(!this.state.run) {
           clearInterval(this.timer);
        } else {
            this.startTimer();
        }

        this.props.setGameState(this.state.run);
    }

    count() {
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.conversion(seconds),
            seconds: seconds,
        });

        if (seconds === 0) {
            clearInterval(this.timer);
            this.props.setGameState(false);
            this.props.setGameEnd('timer')
        }

    }

    getCorrectTime(time){
        return (time < 10 ? '0' : '') +  time;
    }

    render() {

        return (
            <div className={timer()}>
            <Button name={this.state.run ? 'Start': 'Pause'} type={this.state.run ? 'start': 'pause'} handleClick={this.playPause}/>
            <div className={timer('Numbers')}>{this.getCorrectTime(this.state.time.m)}:{this.getCorrectTime(this.state.time.s)}</div>
        </div>

    )
    }

}
function mapStateToProps(state) {
    return {
        timer: state.timer.timer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setGameState: (state) => {
            dispatch(setGameStateAction(state))
        },
        setGameEnd: (state) => {
            dispatch(setEndAction(state))
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);