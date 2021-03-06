import { connect } from 'react-redux';
import { logIn, signUp, logOut } from '../../actions/session_actions';
import WelcomePage from './welcomePage'

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => {
    return ({
        logIn: (user) => dispatch(logIn(user)),
        signUp: (user) => dispatch(signUp(user)),
        logOut: () => dispatch(logOut())

    })
}


export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage)

