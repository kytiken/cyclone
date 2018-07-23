import { connect } from 'react-redux'
import InstallDialog from '../components/InstallDialog'

const mapStateToProps = (state) => {
  return {
    selectedPlaybooksEmpty: state.selectedPlaybooks.length === 0
  }
}

export default connect(mapStateToProps)(InstallDialog)
