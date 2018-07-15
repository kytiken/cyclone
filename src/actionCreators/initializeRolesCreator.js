import initializeRoles from '../actions/initializeRoles'

const initializeRolesCreator = () => {
  const roles = [ {name: 'git'} ]
  return initializeRoles(roles)
}

export default initializeRolesCreator
