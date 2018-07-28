import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import App from '../components/App'
import sagaActions from '../actions/saga'
import logsActions from '../actions/logs'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
  const actions = {
    ...sagaActions,
    ...logsActions
  }
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
