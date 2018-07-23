import { connect } from 'react-redux'
import InstallButton from '../components/InstallButton'

const mapStateToProps = (state) => {
  return {
    selectedPlaybooks: state.selectedPlaybooks,
    isPasswordEmpty: state.password.length === 0
  }
}

export default connect(mapStateToProps)(InstallButton)
