import { connect } from 'react-redux'
import InstallButton from '../components/InstallButton'

const mapStateToProps = (state) => {
  return {
    selectedPlaybooks: state.selectedPlaybooks
  }
}

export default connect(mapStateToProps)(InstallButton)
