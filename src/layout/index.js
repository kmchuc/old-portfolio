import React from 'react';
import Nav from './Nav';
import {
    NavBar
} from './styled';

const Layout = (props) => {
    return(
        <div>
            {props.children}
        </div>
    )
}

export { Layout, Nav };