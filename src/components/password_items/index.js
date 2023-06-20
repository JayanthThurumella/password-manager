import './index.css'

const PasswordItems = props => {
  const {website, deleteData, showBoxCheck} = props

  const deletingData = () => {
    deleteData(website.id)
  }

  let userPassword = <p className="names-passwords">{website.password}</p>
  if (!showBoxCheck) {
    userPassword = (
      <img
        alt="stars"
        className="stars"
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      />
    )
  }

  return (
    <li className="password-item-container">
      <div className="website-icon">
        <p className="icon">{website.username[0].toUpperCase()}</p>
      </div>
      <div className="website-details-container">
        <p className="names-passwords">{website.website}</p>
        <p className="names-passwords">{website.username}</p>
        {userPassword}
      </div>
      <button
        onClick={deletingData}
        className="delete-button"
        type="button"
        data-testid="delete"
      >
        <img
          className="delete-icon"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        />
      </button>
    </li>
  )
}

export default PasswordItems
