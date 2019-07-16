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
        this.close = this.close.bind(this)
    }

    close(e) {
        e.preventDefault();

        if (this.props.onClose) {
            console.log('close')
            this.props.onClose();
            this.props.setStartGame();
        }

    }

    render() {
        if(!this.props.isOpen) {
            return ''
        }
    console.log(this.props.type, 'this.props.type')
        if(this.props.type === 'timer') {
            return (
                <>
                    <div className={startModal()} type={this.props.type}>
                        <Button  handleClick={this.close} name="Время истекло"/>
                    </div>
                    <div className={startModal('Bg')}> </div>
                </>
            )
        } else {
        return (
            <>
                <div className={startModal()} type={this.props.type}>
                    <Button  handleClick={this.close} name="Закрыть"/>
                </div>
                <div className={startModal('Bg')}> </div>
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