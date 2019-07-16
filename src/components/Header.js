import React, {Component} from 'react';
import {cn} from '@bem-react/classname';
import Timer from './Timer';

const header = cn('Header');


class Header extends Component {

    render() {
        return (
            <div className={header()}>
                <Timer/>
            </div>

        )
    }
}

export default Header;