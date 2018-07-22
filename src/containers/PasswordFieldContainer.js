import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/password'
import PasswordField from '../components/PasswordField'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordField)
