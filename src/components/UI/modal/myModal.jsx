import React, { useRef, useState } from "react";
import classes from './myModal.module.css'

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [classes.myModal]

    if(visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;