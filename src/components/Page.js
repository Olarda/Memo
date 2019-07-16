import React, { Component } from 'react';
import Header from './Header'
import Content from './Content'
import { cn } from '@bem-react/classname';

const page = cn('Page');

class Page extends Component {
    render() {
        return (

            <div className={page()}>
                <Header />
                <Content />
            </div>
        )
    }
}
export default Page;