import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import App from '../components/App'
import actions from '../actions/saga'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
