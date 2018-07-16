import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import initializePlaybooksCreator from '../actionCreators/initializePlaybooksCreator'
import PlaybookList from '../components/PlaybookList'

const actions = { initializePlaybooksCreator }
const mapStateToProps = (state) => {
  return {
    playbooks: state.playbooks
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaybookList)
