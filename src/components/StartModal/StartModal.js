import React, {Component} from 'react';
import {cn} from '@bem-react/classname';
import Button from '../Button/Button';
import './StartModal.scss';
import {connect} from "react-redux";
import setStartAction from "../../actions/actionStart";
const startModal = cn('StartModal');


class StartModal extends Component {

    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
        this.restart = this.restart.bind(this);
    }

    close(e) {
        e.preventDefault();

        if (this.props.onClose) {

            this.props.onClose();
            this.props.setStartGame();
        }

    }
    restart(){
        console.log('12')
        window.location.reload();
    }

    render() {
        if(!this.props.isOpen) {
            return ''
        }

        if(this.props.type === 'timer') {
            return (
                <>
                    <div className={startModal()} type={this.props.type}>
                        <div className={startModal('Title')}>Время истекло!</div>
                        <Button type={this.props.type} name="Restart" handleClick={this.restart}/>
                    </div>
                    <div className={startModal('Bg')}>  </div>
                </>
            )
        }
        else if(this.props.type === 'succes') {
           return (
               <>
                   <div className={startModal()} type={this.props.type}>
                       <div className={startModal('Title')}>Вы выиграли!</div>
                       <Button type={this.props.type} name="Restart" handleClick={this.restart}/>
                   </div>
                   <div className={startModal('Bg')}> </div>
               </>
           )

        } else {
        return (
            <>
                <div className={startModal()} type={this.props.type}>
                    <Button  type={this.props.type} handleClick={this.close} name="PLAY!"/>
                </div>
                <div className={startModal('Bg')}>  </div>
            </>

        )}
    }

}
function mapDispatchToProps(dispatch) {
    return {
        setStartGame: () => {

            dispatch(setStartAction())
        },

    }
}

export default connect(null,mapDispatchToProps)(StartModal);
// export default StartModal;