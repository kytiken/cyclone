import { connect } from 'react-redux'
import InstallDialog from '../components/InstallDialog'

const mapStateToProps = (state) => {
  return {
    selectedPlaybooks: state.selectedPlaybooks
  }
}

export default connect(mapStateToProps)(InstallDialog)
