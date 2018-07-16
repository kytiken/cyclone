import { connect } from 'react-redux'
import actions from '../actions/playbooks'
import PlaybookList from '../components/PlaybookList'

const initializePlaybooks = (dispatch) => {
  return () => {
    var PouchDB = require('pouchdb')
    var db = new PouchDB('db')
    // db.put({
    //   '_id': 'playbooks',
    //   'records': [
    //     {
    //       'name': 'git',
    //       'type': 'homebrew',
    //       'task': {}
    //     }
    //   ]
    // })
    db.get('playbooks').then((doc) => {
      doc.records.forEach((playbook) => {
        dispatch(actions.addPlaybook(playbook))
      })
    })
  }
}

const mapStateToProps = (state) => {
  return {
    playbooks: state.playbooks
  }
}

const mapDispatchToProps = (dispatch) => {
  return { initializePlaybooks: initializePlaybooks(dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaybookList)
