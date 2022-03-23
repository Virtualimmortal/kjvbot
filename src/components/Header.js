
const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="nav-wrapper ">

          <ul className="left">
            <li>
              <a href="#" data-target="slide-out" className="sidenav-trigger main-menu-btn show-on-large"><i className="material-icons">menu</i></a>
            </li>
            <li className="hide show-on-medium-and-up">
              <a href="/bible"><i className="material-icons">home</i></a>
            </li>
            <li>
              <a title="Share" className="share_btn" href="#!"><i className="fas fa-share-square"></i></a>
            </li>


          </ul>

          <img className="brand-logo center" src={process.env.PUBLIC_URL + "/images/kjvbot-logo-96.png"} />

            <ul className="right">
              

            </ul>

        </div>
      </nav>
    </header>
  )
}

export default Header
