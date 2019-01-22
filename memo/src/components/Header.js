import React, { Component } from 'react';
import { cn } from '@bem-react/classname';

const header = cn('Header');

class Header extends Component {
    render() {
        return (

            <div className={header()}>

            </div>
        )
    }
}
export default Header;