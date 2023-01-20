import './index.css'

const CardItem = props => {
  const {details, del, chk} = props
  const {id, website, username, password} = details

  function delOf() {
    del(id)
  }

  return (
    <li className="li1 back1">
      <p>{website[0].toUpperCase()}</p>
      <div>
        <p>{website}</p>
        <p>{username}</p>
        {chk && <p>{password}</p>}
        {!chk && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>
      <button type="button" className="b3" onClick={delOf} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="i6"
        />
      </button>
    </li>
  )
}

export default CardItem
