import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class modal extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    render() {
        return (
            <>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}></Backdrop>
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}    
                >
                    {
                        this.props.children
                    }
                </div>
            </>
        )
    }
}

export default modal;