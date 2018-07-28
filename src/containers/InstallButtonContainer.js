import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import InstallButton from '../components/InstallButton'
import logsActions from '../actions/logs'
import sagaActions from '../actions/saga'

const mapStateToProps = (state) => {
  return {
    selectedPlaybooks: state.selectedPlaybooks,
    password: state.password
  }
}

const mapDispatchToProps = (dispatch) => {
  const actions = {
    ...sagaActions,
    ...logsActions
  }
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(InstallButton)
