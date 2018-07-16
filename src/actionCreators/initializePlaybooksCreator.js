import fs from 'fs'
import actions from '../actions/playbooks'

const initializePlaybooksCreator = (dispatch) => {
  console.log(__dirname)
  const playbooksRootDirPath = `${__dirname}/playbooks`
  fs.readdir(playbooksRootDirPath, (err, playbookDirNames) => {
    if (err) {
      return
    }
    console.log(playbookDirNames)
    playbookDirNames.forEach((playbookDirName) => {
      const playbookDirPath = `${playbooksRootDirPath}/${playbookDirName}`
      console.log(playbookDirPath)
      fs.readdir(playbookDirPath, (err, playbookFileNames) => {
        if (err) {
          return
        }
        playbookFileNames.forEach((playbookFileName) => {
          console.log(`${playbookDirPath}/${playbookFileName}`)
          const playbook = { name: 'git' }
          console.log(actions.addPlaybook(playbook))
          dispatch(actions.addPlaybook(playbook))
        })
      })
    })
  })
}

export default initializePlaybooksCreator
