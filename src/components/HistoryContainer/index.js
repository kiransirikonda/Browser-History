import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem'

class HistoryContainer extends Component {
  constructor(props) {
    super(props)
    const {historyItemDetails} = this.props

    this.state = {
      userSearch: '',
      userList: historyItemDetails,
    }
  }

  userSearchInputValueChange = event => {
    this.setState({
      userSearch: event.target.value,
    })
  }

  deletedItemIndex = index => {
    const {userList} = this.state

    const filterItem = userList.filter(eachItem => eachItem.id !== index)
    this.setState({userList: filterItem})
  }

  renderHistoryList = searchResult => (
    <ul className="history-list-ul-container">
      {searchResult.map(eachItem => (
        <HistoryItem
          key={eachItem.id}
          itemDetails={eachItem}
          deletedItemIndex={this.deletedItemIndex}
        />
      ))}
    </ul>
  )

  showEmptyList = () => <p>There is no history to show</p>

  render() {
    const {userList} = this.state
    const {userSearch} = this.state

    const searchResult = userList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(userSearch.toLowerCase()),
    )
    console.log(searchResult.length === 0)
    return (
      <div className="app-container">
        <div className="history-app-container">
          <div className="header-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="history-app-logo"
            />

            <div className="search-input-container">
              <button type="button" className="search-icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                />
              </button>
              <input
                type="search"
                placeholder="Search history"
                className="input-search"
                onChange={this.userSearchInputValueChange}
              />
            </div>
          </div>
          <div className="show-history-empty-container">
            {searchResult.length === 0
              ? this.showEmptyList()
              : this.renderHistoryList(searchResult)}
          </div>
        </div>
      </div>
    )
  }
}

export default HistoryContainer
