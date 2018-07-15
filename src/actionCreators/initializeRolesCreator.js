import fs from 'fs'
import actions from '../actions/roles'

const initializeRolesCreator = (dispatch) => {
  console.log(__dirname)
  const rolesRootDirPath = `${__dirname}/roles`
  fs.readdir(rolesRootDirPath, (err, roleDirNames) => {
    if (err) {
      return
    }
    console.log(roleDirNames)
    roleDirNames.forEach((roleDirName) => {
      const roleDirPath = `${rolesRootDirPath}/${roleDirName}`
      console.log(roleDirPath)
      fs.readdir(roleDirPath, (err, roleFileNames) => {
        if (err) {
          return
        }
        roleFileNames.forEach((roleFileName) => {
          console.log(`${roleDirPath}/${roleFileName}`)
          const role = { name: 'git' }
          dispatch(actions.addRole(role))
        })
      })
    })
  })
}

export default initializeRolesCreator
