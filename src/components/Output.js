import React from 'react';
import OutputRow from './outputRow';

const Output = ({ user, answer }) => {
    return (
        <div>
            <OutputRow value={user} />
            <OutputRow value={answer} />
        </div>
    );
}

export default Output;
