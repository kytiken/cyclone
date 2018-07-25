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
          with_items: ['tig']
        }]
      },
      {
        'id': 3,
        'name': 'rbenv',
        'tasks': [{
          name: 'Install rbenv',
          homebrew: 'name={{ item }}',
          with_items: ['rbenv']
        }]
      },
      {
        'id': 4,
        'name': 'elixir',
        'tasks': [{
          name: 'Install elixir',
          homebrew: 'name={{ item }}',
          with_items: ['elixir']
        }]
      },
      {
        'id': 5,
        'name': 'neovim',
        'tasks': [{
          name: 'Install neovim',
          homebrew: 'name={{ item }}',
          with_items: ['neovim/neovim/neovim']
        }]
      },
      {
        'id': 6,
        'name': 'awscli',
        'tasks': [{
          name: 'Install awscli',
          homebrew: 'name={{ item }}',
          with_items: ['awscli']
        }]
      },
      {
        'id': 7,
        'name': 'tmux',
        'tasks': [{
          name: 'Install tmux',
          homebrew: 'name={{ item }}',
          with_items: ['tmux']
        }]
      },
      {
        'id': 8,
        'name': 'graphviz',
        'tasks': [{
          name: 'Install graphviz',
          homebrew: 'name={{ item }}',
          with_items: ['graphviz']
        }]
      },
      {
        'id': 9,
        'name': 'haskell-stack',
        'tasks': [{
          name: 'Install haskell-stack',
          homebrew: 'name={{ item }}',
          with_items: ['haskell-stack']
        }]
      },
      {
        'id': 10,
        'name': 'peco',
        'tasks': [{
          name: 'Install peco',
          homebrew: 'name={{ item }}',
          with_items: ['peco']
        }]
      },
      {
        'id': 11,
        'name': 'dry',
        'tasks': [{
          name: 'Install dry',
          homebrew: 'name={{ item }}',
          with_items: ['dry']
        }]
      },
      {
        'id': 12,
        'name': 'java',
        'tasks': [{
          'name': 'Install Homebrew cask packages',
          'homebrew_cask': 'name={{ item }}',
          'with_items': ['java']
        }]
      },
      {
        'id': 13,
        'name': 'android-studio',
        'tasks': [{
          'name': 'Install android-studio',
          'homebrew_cask': 'name={{ item }}',
          'with_items': ['android-studio']
        }]
      },
      {
        'id': 14,
        'name': 'kindle',
        'tasks': [{
          'name': 'Install kindle',
          'homebrew_cask': 'name={{ item }}',
          'with_items': ['kindle']
        }]
      },
      {
        'id': 15,
        'name': 'vlc',
        'tasks': [{
          'name': 'Install vlc',
          'homebrew_cask': 'name={{ item }}',
          'with_items': ['vlc']
        }]
      },
      {
        'id': 16,
        'name': 'skype',
        'tasks': [{
          'name': 'Install skype',
          'homebrew_cask': 'name={{ item }}',
          'with_items': ['skype']
        }]
      },
      {
        'id': 17,
        'name': 'docker',
        'tasks': [{
          'name': 'Install docker',
          'homebrew_cask': 'name={{ item }}',
          'with_items': [
            'docker'
          ]
        }]
      },
      {
        'id': 18,
        'name': 'camtwist',
        'tasks': [{
          'name': 'Install camtwist',
          'homebrew_cask': 'name={{ item }}',
          'with_items': [
            'camtwist'
          ]
        }]
      },
      {
        'id': 19,
        'name': 'obs',
        'tasks': [{
          'name': 'Install obs',
          'homebrew_cask': 'name={{ item }}',
          'with_items': [
            'obs'
          ]
        }]
      },
      {
        'id': 20,
        'name': 'astah-community',
        'tasks': [{
          'name': 'Install astah-community',
          'homebrew_cask': 'name={{ item }}',
          'with_items': [
            'astah-community'
          ]
        }]
      },
      {
        'id': 21,
        'name': 'google-japanese-ime',
        'tasks': [{
          'name': 'Install google-japanese-ime',
          'homebrew_cask': 'name={{ item }}',
          'with_items': [
            'google-japanese-ime'
          ]
        }]
      },
      {
        'id': 22,
        'name': 'iterm2',
        'tasks': [{
          'name': 'Install iterm2',
          'homebrew_cask': 'name={{ item }}',
          'with_items': [
            'iterm2'
          ]
        }]
      },
      {
        'id': 23,
        'name': 'google-chrome',
        'tasks': [{
          'name': 'Install google-chrome',
          'homebrew_cask': 'name={{ item }}',
          'with_items': [
            'google-chrome'
          ]
        }]
      },
      {
        'id': 24,
        'name': 'vagrant',
        'tasks': [{
          'name': 'Install vagrant',
          'homebrew_cask': 'name={{ item }}',
          'with_items': [
            'vagrant'
          ]
        }]
      },
      {
        'id': 25,
        'name': 'silverlight',
        'tasks': [{
          'name': 'Install silverlight',
          'homebrew_cask': 'name={{ item }}',
          'with_items': [
            'silverlight'
          ]
        }]
      },

      {
        'id': 26,
        'name': 'flash-player',
        'tasks': [{
          'name': 'Install flash-player',
          'homebrew_cask': 'name={{ item }}',
          'with_items': [
            'flash-player'
          ]
        }]
      },

      {
        'id': 27,
        'name': 'google-cloud-sdk',
        'tasks': [{
          'name': 'Install google-cloud-sdk',
          'homebrew_cask': 'name={{ item }}',
          'with_items': [
            'google-cloud-sdk'
          ]
        }]
      },
      {
        'id': 28,
        'name': 'sequel-pro',
        'tasks': [{
          'name': 'Install sequel-pro',
          'homebrew_cask': 'name={{ item }}',
          'with_items': [
            'sequel-pro'
          ]
        }]
      },
      {
        'id': 29,
        'name': 'visual-studio-code',
        'tasks': [{
          'name': 'Install visual-studio-code',
          'homebrew_cask': 'name={{ item }}',
          'with_items': [
            'visual-studio-code'
          ]
        }]
      },

      {
        'id': 30,
        'name': 'amazon-drive',
        'tasks': [{
          'name': 'Install amazon-drive',
          'homebrew_cask': 'name={{ item }}',
          'with_items': [
            'amazon-drive'
          ]
        }]
      },
      {
        'id': 31,
        'name': 'kitematic',
        'tasks': [{
          'name': 'Install kitematic',
          'homebrew_cask': 'name={{ item }}',
          'with_items': [
            'kitematic'
          ]
        }]
      },
      {
        'id': 32,
        'name': 'hyper',
        'tasks': [{
          'name': 'Install hyper',
          'homebrew_cask': 'name={{ item }}',
          'with_items': [
            'hyper'
          ]
        }]
      },
      {
        'id': 33,
        'name': 'spectacle',
        'tasks': [{
          'name': 'Install spectacle',
          'homebrew_cask': 'name={{ item }}',
          'with_items': [
            'spectacle'
          ]
        }]
      }
    ]

    db.get('playbooks').then(function (doc) {
      doc.records = playbookRecords
      return db.put(doc)
    }).catch(function (err) {
      if (err.status === 404) {
        db.put({
          '_id': 'playbooks',
          'records': playbookRecords
        })
      }
      console.log(err)
    }).then(function () {
      return db.get('playbooks')
    }).then(function (doc) {
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
