import React from "react";

const Home = () => {
    return (
        <div className="center-align" style={{ marginTop: "200px" }}>
            <h3>Welcome</h3>
            <p>
                This page is being rendered from the server, and then react
                takes over!
            </p>
        </div>
    );
};

export default { component: Home };
