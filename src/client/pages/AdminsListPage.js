import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions";

class AdminsList extends Component {
    componentDidMount() {
        this.props.fetchAdmins();
    }

    renderAdmins() {
        return this.props.admins.map(admin => {
            return <li key={admin.id}>{admin.name}</li>;
        });
    }

    render() {
        return (
            <div>
                Protected list of admins:
                <ul>{this.renderAdmins()}</ul>
            </div>
        );
    }
}

const mapStateToProps = ({ admins }) => {
    return { admins };
};

const loadData = store => {
    return store.dispatch(fetchAdmins());
};

export default {
    component: connect(mapStateToProps, { fetchAdmins })(AdminsList),
    loadData
};
