import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import InstallProgressDialog from '../components/InstallProgressDialog'
import actions from '../actions/installProgressDialog'

const mapStateToProps = (state) => {
  return {
    isOpen: state.installProgressDialogIsOpen,
    completed: state.installCompletePercent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InstallProgressDialog)
