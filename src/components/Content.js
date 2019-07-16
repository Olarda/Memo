import React, { Component } from 'react';
import { cn } from '@bem-react/classname';

const content = cn('Content');

class Content extends Component {
    render() {
        return (

            <div className={content()}>

            </div>
        )
    }
}
export default Content;