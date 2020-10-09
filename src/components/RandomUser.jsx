import React from "react";
import "bulma/css/bulma.css";
import "./RandomUser.css";

import { Card, CardImage, CardContent } from "bloomer";

const RandomUser = (props) => {
    const { userData } = props;
    return (
        <ul>
            {userData.map((user) => (
                <Card className="user-card" key={user.login.uuid}>
                    <CardImage>
                    <img 
                    src={user.picture.large} 
                    alt={`${user.name.first} ${user.name.last}`} 
                    />
                    </CardImage>
                    <CardContent>
                        {user.name.first} <br />
                        {user.name.last}
                    </CardContent>
                </Card>
            ))}
        </ul>
    );
};





export default RandomUser;