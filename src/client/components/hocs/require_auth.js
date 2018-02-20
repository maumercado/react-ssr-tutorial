import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
/**
 * in order to use this:
 * import Authentication -> my HOC
 * import Resources -> component I want to wrap
 * const ComposedCompoent = Authentication(Resources)
 * in seom render method -> <ComposedComponent something={something}/>
 *
 */

export default ChildComponent => {
    class Authentication extends Component {
        render() {
            switch (this.props.auth) {
                case false: {
                    return <Redirect to="/" />;
                }
                case null: {
                    return <div>Loading...</div>;
                }
                default: {
                    return <ChildComponent {...this.props} />;
                }
            }
        }
    }

    const mapStateToProps = ({ auth }) => {
        return { auth };
    };

    return connect(mapStateToProps)(Authentication);
};
