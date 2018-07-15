import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import initializeRolesCreator from '../actionCreators/initializeRolesCreator'
import RoleList from '../components/RoleList'

const actions = { initializeRolesCreator }
const mapStateToProps = (state) => {
  return {
    roles: state.roles
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoleList)
