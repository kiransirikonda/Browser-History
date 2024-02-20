import './index.css'

const HistoryItem = props => {
  const {itemDetails, deletedItemIndex} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemDetails

  const clickOnDeleteButton = () => {
    deletedItemIndex(id)
  }

  return (
    <li className="history-list-item">
      <div className="items">
        <p>{timeAccessed}</p>
        <img className="image-logo" src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>

      <button
        type="button"
        className="delete-button"
        onClick={clickOnDeleteButton}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
