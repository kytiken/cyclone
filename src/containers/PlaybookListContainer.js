import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/playbooks'
import PlaybookList from '../components/PlaybookList'

const initializePlaybooks = (dispatch) => {
  return () => {
    var PouchDB = require('pouchdb')
    var db = new PouchDB('db')

    var playbookRecords = [
      {
        'id': 1,
        'name': 'essential brew package',
        'tasks': [{
          name: 'Install homebrew packages',
          homebrew: 'name={{ item }}',
          with_items: [
            'git',
            'openssl',
            'wget',
            'curl',
            'fish',
            'graphviz',
            'tig',
            'tmux',
            'elixir',
            'haskell-stack',
            'neovim/neovim/neovim',
            'awscli',
            'rmtrash',
            'exa',
            'the_silver_searcher',
            'rbenv',
            'peco',
            'dry'
          ]
        }]
      },
      {
        'id': 2,
        'name': 'cask',
        'tasks': [{
          'name': 'Install Homebrew cask packages',
          'homebrew_cask': 'name={{ item }}',
          'with_items': [
            'java',
            'android-studio',
            'kindle',
            'vlc',
            'skype',
            'docker',
            'camtwist',
            'obs',
            'astah-community',
            'google-japanese-ime',
            'iterm2',
            'google-chrome',
            'vagrant',
            'silverlight',
            'flash-player',
            'google-cloud-sdk',
            'sequel-pro',
            'visual-studio-code',
            'amazon-drive',
            'kitematic',
            'hyper',
            'spectacle'
          ]
        }]
      }
    ]

    // db.put({
    //   '_id': 'playbooks',
    //   'records': playbookRecords
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
    playbooks: state.playbooks,
    selectedPlaybooks: state.selectedPlaybooks,
    password: state.password
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initializePlaybooks: initializePlaybooks(dispatch),
    ...bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaybookList)
