import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

function LinearIndeterminate() {
    return (
        <div>
            <LinearProgress />
            <br />
            <LinearProgress color="secondary"/>
        </div>
    );
}


export default LinearIndeterminate;