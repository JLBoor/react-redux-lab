import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../actions/users.reducer';

class UserListComponent extends Component {

    get renderList() {
        return <ul className="uk-list uk-list-striped">
                    {this.props.users.map((user, idx) => <li key={idx} onClick={() => this.props.selectUser(user)}>{user.name}</li>)}
                </ul>;
    }

    render() {
        return <div>{this.renderList}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectUser: (user) => dispatch(selectUser(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserListComponent);
