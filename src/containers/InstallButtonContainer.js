import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import InstallButton from '../components/InstallButton'
import logsActions from '../actions/logs'

const mapStateToProps = (state) => {
  return {
    selectedPlaybooks: state.selectedPlaybooks,
    password: state.password
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(logsActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(InstallButton)
