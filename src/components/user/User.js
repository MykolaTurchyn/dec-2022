import React from 'react';

const User = ({user}) => {
    return (
        <div>
            Id: {user?.id} <br/>
            Name: {user?.name} <br/>
            Phone : {user?.phone}
            <hr/>
        </div>
    );
};

export default User;