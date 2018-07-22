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
            'curl'
          ]
        }]
      },
      {
        'id': 2,
        'name': 'tig',
        'tasks': [{
          name: 'Install tig',
          homebrew: 'name={{ item }}',
          with_items: [
            'tig'
          ]
        }]
      },
      {
        'id': 3,
        'name': 'rbenv',
        'tasks': [{
          name: 'Install rbenv',
          homebrew: 'name={{ item }}',
          with_items: [
            'rbenv'
          ]
        }]
      },
      {
        'id': 4,
        'name': 'elixir',
        'tasks': [{
          name: 'Install elixir',
          homebrew: 'name={{ item }}',
          with_items: [
            'elixir'
          ]
        }]
      },
      {
        'id': 5,
        'name': 'neovim',
        'tasks': [{
          name: 'Install neovim',
          homebrew: 'name={{ item }}',
          with_items: [
            'neovim/neovim/neovim'
          ]
        }]
      },
      {
        'id': 6,
        'name': 'awscli',
        'tasks': [{
          name: 'Install awscli',
          homebrew: 'name={{ item }}',
          with_items: [
            'awscli'
          ]
        }]
      },
      {
        'id': 7,
        'name': 'tmux',
        'tasks': [{
          name: 'Install tmux',
          homebrew: 'name={{ item }}',
          with_items: [
            'tmux'
          ]
        }]
      },
      {
        'id': 8,
        'name': 'graphviz',
        'tasks': [{
          name: 'Install graphviz',
          homebrew: 'name={{ item }}',
          with_items: [
            'graphviz'
          ]
        }]
      },
      {
        'id': 9,
        'name': 'haskell-stack',
        'tasks': [{
          name: 'Install haskell-stack',
          homebrew: 'name={{ item }}',
          with_items: [
            'haskell-stack'
          ]
        }]
      },
      {
        'id': 10,
        'name': 'peco',
        'tasks': [{
          name: 'Install peco',
          homebrew: 'name={{ item }}',
          with_items: [
            'peco'
          ]
        }]
      },
      {
        'id': 11,
        'name': 'dry',
        'tasks': [{
          name: 'Install dry',
          homebrew: 'name={{ item }}',
          with_items: [
            'dry'
          ]
        }]
      },
      {
        'id': 12,
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
  return {
    initializePlaybooks: initializePlaybooks(dispatch),
    ...bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaybookList)
