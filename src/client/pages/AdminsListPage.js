import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions";
import requireAuth from "../components/hocs/require_auth";

class AdminsListPage extends Component {
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
                <h2>Protected list of admins:</h2>
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
    component: connect(mapStateToProps, { fetchAdmins })(
        requireAuth(AdminsListPage)
    ),
    loadData
};
