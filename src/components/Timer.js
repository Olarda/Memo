import React, { Component } from 'react';
import Button from '../components/Button/Button';
import { cn } from '@bem-react/classname';

const timer = cn('Timer');


class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: {},
            seconds: 80
        };

        this.timer = null;
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.count = this.count.bind(this);
    }

    componentDidMount() {
        let timeLeft = this.conversion(this.state.seconds);
        this.setState({time: timeLeft});
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

    stopTimer() {
        clearInterval(this.timer);
    }

    count() {
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.conversion(seconds),
            seconds: seconds,
        });

        if (seconds === 0) {
            clearInterval(this.timer);
        }
    }

    getCorrectTime(time){
        return (time < 10 ? '0' : '') +  time;
    }

    render() {

        return (
            <div className={timer()}>
            <Button name='Start' handleClick={this.startTimer}/>
            <Button name='Stop' handleClick={this.stopTimer}/>
            <div>Осталось {this.getCorrectTime(this.state.time.m)}: {this.getCorrectTime(this.state.time.s)}</div>
        </div>

    )
    }

}

export default Timer;