import React, { useState } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';

const layout = props => {
    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

    const sideDrawerClosedHandler = () => {
        setSideDrawerIsVisible(false);
    }

    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisible);
    }


    return (
        <>
            <Toolbar
                drawerToggleClicked={sideDrawerToggleHandler}
                isAuth={props.isAuthenticated}
            />
            <SideDrawer
                open={sideDrawerIsVisible}
                closed={sideDrawerClosedHandler}
                isAuth={props.isAuthenticated}
            />
            <main className={classes.Content}>
                {props.children}
            </main>
        </>
    )

}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(layout);