import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import InstallDialog from '../components/InstallDialog'
import actions from '../actions/installDialog'

const mapStateToProps = (state) => {
  return {
    selectedPlaybooksEmpty: state.selectedPlaybooks.length === 0,
    isOpen: state.installDialogIsOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InstallDialog)
