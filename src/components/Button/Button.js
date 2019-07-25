import React from 'react';
import './Button.scss';
import {cn} from '@bem-react/classname';

const button = cn('Button');

class Button extends React.Component {


    render() {
        let buttonType = this.props.type;

        if(this.props.name === 'Start' || this.props.name === 'Pause') {
            return (
                <button className={button('Сontrol',{[buttonType]: true})} type={this.props.type} onClick={this.props.handleClick}>
                    {this.props.name === 'Start' ?
                        <img src='/assets/play.svg' />:
                        <img src='/assets/pause.svg' />
                    }
                </button>
            )
        } else {
            return (
                <button className={button({[buttonType]: true})} type={this.props.type} onClick={this.props.handleClick}>{this.props.name} </button>
            )
        }

    }

}

export default Button;