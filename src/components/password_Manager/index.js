import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItems from '../password_items'

import './index.css'

class PasswordManager extends Component {
  state = {
    websites: [],
    showBoxCheck: false,
    searchInput: '',
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
  }

  websiteInput = event => this.setState({websiteInput: event.target.value})

  usernameInput = event => this.setState({usernameInput: event.target.value})

  passwordInput = event => this.setState({passwordInput: event.target.value})

  addFormData = event => {
    event.preventDefault()
    const {usernameInput, websiteInput, passwordInput} = this.state

    const newWebsite = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }

    this.setState(prevData => ({
      websites: [...prevData.websites, newWebsite],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  searchingData = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteData = id => {
    const {websites} = this.state

    const ModifyData = websites.filter(data => data.id !== id)
    this.setState({websites: ModifyData})
  }

  showAndHidePassword = event => {
    if (event.target.checked) {
      this.setState({showBoxCheck: true})
    } else {
      this.setState({showBoxCheck: false})
    }
  }

  render() {
    const {
      websites,
      websiteInput,
      usernameInput,
      passwordInput,
      searchInput,
      showBoxCheck,
    } = this.state

    const filterData = websites.filter(data =>
      data.website.includes(searchInput),
    )
    let hideAndShow = ''

    if (websites.length !== 0) {
      hideAndShow = 'hideNoPasswordImg'
    }

    return (
      <div className="bg-container">
        <img
          className="password-manager-logo"
          alt="app logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        />
        <div className="password-add-container">
          <div className="form-container">
            <h1 className="main-heading">Add New Password</h1>
            <form onSubmit={this.addFormData}>
              <div className="input-container">
                <div className="logo-container">
                  <img
                    className="website-logo"
                    alt="website"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  />
                </div>
                <input
                  onChange={this.websiteInput}
                  value={websiteInput}
                  type="text"
                  placeholder="Enter Website"
                />
              </div>
              <div className="input-container">
                <div className="logo-container">
                  <img
                    className="website-logo"
                    alt="username"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  />
                </div>
                <input
                  type="text"
                  onChange={this.usernameInput}
                  value={usernameInput}
                  placeholder="Enter Username"
                />
              </div>
              <div className="input-container">
                <div className="logo-container">
                  <img
                    alt="password"
                    className="website-logo"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  />
                </div>
                <input
                  type="password"
                  onChange={this.passwordInput}
                  value={passwordInput}
                  placeholder="Enter Password"
                />
              </div>
              <div className="button-container">
                <button type="submit">Add</button>
              </div>
            </form>
          </div>
          <img
            className="password-manager-img"
            alt="password manager"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          />
        </div>
        <div className="password-contain-container">
          <div className="password-search-container">
            <div className="websites-count-container">
              <h1 className="heading">Your Passwords</h1>
              <div className="websites-count">
                <p>{websites.length}</p>
              </div>
            </div>
            <div className="input-container lengthening">
              <div className="logo-container">
                <img
                  alt="search"
                  className="website-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                />
              </div>
              <input
                type="search"
                placeholder="search"
                onChange={this.searchingData}
                value={searchInput}
              />
            </div>
          </div>
          <hr />
          <div className="password-shows-container">
            <div className="checkbox-container">
              <input
                id="checkbox"
                type="checkbox"
                className="checkbox"
                onChange={this.showAndHidePassword}
              />
              <label htmlFor="checkbox" className="show-password">
                Show Passwords
              </label>
            </div>
          </div>
          <div className={`no-password-container ${hideAndShow}`}>
            <img
              className="no-password-img"
              alt="no passwords"
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            />
            <p className="no-password-heading">No Passwords</p>
          </div>
          <ul className="password-items-container">
            {filterData.map(each => (
              <PasswordItems
                website={each}
                deleteData={this.deleteData}
                showBoxCheck={showBoxCheck}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
