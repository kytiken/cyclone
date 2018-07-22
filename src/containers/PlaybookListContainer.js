import { connect } from 'react-redux'
import actions from '../actions/playbooks'
import PlaybookList from '../components/PlaybookList'

const initializePlaybooks = (dispatch) => {
  return () => {
    var PouchDB = require('pouchdb')
    var db = new PouchDB('db')

    var playbookRecords = [
      {
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
    password: state.password
  }
}

const mapDispatchToProps = (dispatch) => {
  return { initializePlaybooks: initializePlaybooks(dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaybookList)
