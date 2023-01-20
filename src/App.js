import {Component} from 'react'
import {v4 as uuid4} from 'uuid'
import CardItem from './components/CardItem/index'
import './App.css'

const dList = []

class App extends Component {
  state = {web: '', user: '', pass: '', dataList: [], search: '', check: false}

  webAddress = event => {
    this.setState({web: event.target.value})
  }

  userName = event => {
    this.setState({user: event.target.value})
  }

  checkOff = event => {
    console.log(event.target.checked)
    this.setState({check: event.target.checked})
  }

  passWord = event => {
    this.setState({pass: event.target.value})
  }

  searchOff = event => {
    const {search} = this.state
    this.setState({search: event.target.value})
    console.log(search)
  }

  delOff = id => {
    const {dataList} = this.state
    const delFiltered = dataList.filter(each => each.id !== id)
    this.setState({dataList: delFiltered})
    console.log(dataList)
  }

  addData = event => {
    const {web, user, pass, dataList} = this.state
    event.preventDefault()
    if (web !== '' && user !== '' && pass !== '') {
      const newData = {
        id: uuid4(),
        website: web,
        username: user,
        password: pass,
      }
      dList.push(newData)
      this.setState(prev => ({count: prev.count + 1}))
      this.setState({dataList: dList, web: '', user: '', pass: ''})
    }
    console.log(dataList)
  }

  render() {
    const {web, user, pass, dataList, search, check} = this.state
    const Filtered = dataList.filter(each =>
      each.website.toLowerCase().includes(search.toLowerCase()),
    )
    const count = Filtered.length
    // console.log(Filtered)
    return (
      <div className="back">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="i1"
        />
        <div className="c1">
          <div className="back2 back1">
            <div className="back3">
              <h1>Add New Password</h1>
              <form onSubmit={this.addData}>
                <div className="in1">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="i2"
                  />
                  <hr className="hb1" />
                  <input
                    type="text"
                    placeholder="Enter Website"
                    className="inp"
                    onChange={this.webAddress}
                    value={web}
                  />
                </div>
                <div className="in1">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="i2"
                  />
                  <hr className="hb1" />
                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="inp"
                    onChange={this.userName}
                    value={user}
                  />
                </div>
                <div className="in1">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="i2"
                  />
                  <hr className="hb1" />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="inp"
                    onChange={this.passWord}
                    value={pass}
                  />
                </div>
                <button type="submit" className="b1">
                  Add
                </button>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                alt="password manager"
                className="i3"
              />
            </div>
          </div>
          <div className="back2">
            <div className="back1">
              <div className="back1 d4">
                <h1>Your Passwords</h1>
                <p>{count}</p>
              </div>
              <div className="in1">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="i2"
                />
                <hr className="hb1" />
                <input
                  type="search"
                  placeholder="Search"
                  className="inp"
                  onChange={this.searchOff}
                  value={search}
                />
              </div>
            </div>
            <hr />
            <div>
              <input type="checkbox" id="ck" onClick={this.checkOff} />
              <label htmlFor="ck">Show Passwords</label>
            </div>
            <div>
              {count !== 0 ? (
                <ul>
                  {Filtered.map(each => (
                    <CardItem
                      key={each.id}
                      details={each}
                      del={this.delOff}
                      chk={check}
                    />
                  ))}
                </ul>
              ) : (
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                    className="i3"
                  />
                  <p>No Passwords</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App
