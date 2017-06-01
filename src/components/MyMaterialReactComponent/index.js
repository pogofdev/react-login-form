import React from 'react';

import { RaisedButton } from 'material-ui';
import './index.css';
const MyMaterialReactComponent = (props) => {
    return (
        <RaisedButton
            onTouchTap={props.onTouchTap}
            fullWidth={true}
            label={props.label}
        />
    );
};

export default MyMaterialReactComponent;
