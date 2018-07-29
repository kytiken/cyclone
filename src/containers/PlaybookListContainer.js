import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/playbooks'
import PlaybookList from '../components/PlaybookList'

const initializePlaybooks = (dispatch) => {
  return () => {
    const PouchDB = require('pouchdb')
    const db = new PouchDB('db')

    var playbookRecords = [
      {
        'id': 1,
        'name': 'essential brew package',
        'installed': true,
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
        'installed': false,
        'tasks': [{
          name: 'Install tig',
          homebrew: 'name={{ item }}',
          with_items: ['tig']
        }]
      },
      {
        'id': 3,
        'name': 'rbenv',
        'installed': false,
        'tasks': [{
          name: 'Install rbenv',
          homebrew: 'name={{ item }}',
          with_items: ['rbenv']
        }]
      },
      {
        'id': 4,
        'name': 'elixir',
        'installed': false,
        'tasks': [{
          name: 'Install elixir',
          homebrew: 'name={{ item }}',
          with_items: ['elixir']
        }]
      },
      {
        'id': 5,
        'name': 'neovim',
        'installed': false,
        'tasks': [{
          name: 'Install neovim',
          homebrew: 'name={{ item }}',
          with_items: ['neovim/neovim/neovim']
        }]
      },
      {
        'id': 6,
        'name': 'awscli',
        'installed': false,
        'tasks': [{
          name: 'Install awscli',
          homebrew: 'name={{ item }}',
          with_items: ['awscli']
        }]
      },
      {
        'id': 7,
        'name': 'tmux',
        'installed': false,
        'tasks': [{
          name: 'Install tmux',
          homebrew: 'name={{ item }}',
          with_items: ['tmux']
        }]
      },
      {
        'id': 8,
        'name': 'graphviz',
        'installed': false,
        'tasks': [{
          name: 'Install graphviz',
          homebrew: 'name={{ item }}',
          with_items: ['graphviz']
        }]
      },
      {
        'id': 9,
        'name': 'haskell-stack',
        'installed': false,
        'tasks': [{
          name: 'Install haskell-stack',
          homebrew: 'name={{ item }}',
          with_items: ['haskell-stack']
        }]
      },
      {
        'id': 10,
        'name': 'peco',
        'installed': false,
        'tasks': [{
          name: 'Install peco',
          homebrew: 'name={{ item }}',
          with_items: ['peco']
        }]
      },
      {
        'id': 11,
        'name': 'dry',
        'installed': false,
        'tasks': [{
          name: 'Install dry',
          homebrew: 'name={{ item }}',
          with_items: ['dry']
        }]
      },
      {
        'id': 12,
        'name': 'java',
        'installed': false,
        'tasks': [{
          'name': 'Install Homebrew cask packages',
          'homebrew_cask': 'name={{ item }}',
          'with_items': ['java']
        }]
      },
      {
        'id': 13,
        'name': 'android-studio',
        'installed': false,
        'tasks': [{
          'name': 'Install android-studio',
          'homebrew_cask': 'name={{ item }}',
          'with_items': ['android-studio']
        }]
      },
      {
        'id': 14,
        'name': 'kindle',
        'installed': false,
        'tasks': [{
          'name': 'Install kindle',
          'homebrew_cask': 'name={{ item }}',
          'with_items': ['kindle']
        }]
      },
      {
        'id': 15,
        'name': 'vlc',
        'installed': false,
        'tasks': [{
          'name': 'Install vlc',
          'homebrew_cask': 'name={{ item }}',
          'with_items': ['vlc']
        }]
      },
      {
        'id': 16,
        'name': 'skype',
        'installed': false,
        'tasks': [{
          'name': 'Install skype',
          'homebrew_cask': 'name={{ item }}',
          'with_items': ['skype']
        }]
      },
      {
        'id': 17,
        'name': 'docker',
        'installed': false,
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
        'installed': false,
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
        'installed': false,
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
        'installed': false,
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
        'installed': false,
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
        'installed': false,
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
        'installed': false,
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
        'installed': false,
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
        'installed': false,
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
        'installed': false,
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
        'installed': false,
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
        'installed': false,
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
        'installed': false,
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
        'installed': false,
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
        'installed': false,
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
        'installed': false,
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
        'installed': false,
        'tasks': [{
          'name': 'Install spectacle',
          'homebrew_cask': 'name={{ item }}',
          'with_items': [
            'spectacle'
          ]
        }]
      }
    ]

    db.get('playbooks').catch(function (err) {
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
        if (playbook.installed) {
          dispatch(actions.addSelectedPlaybooks(playbook))
        }
      })
    })
  }
}

const mapStateToProps = (state) => {
  return {
    playbooks: state.playbooks,
    selectedPlaybooks: state.selectedPlaybooks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initializePlaybooks: initializePlaybooks(dispatch),
    ...bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaybookList)
