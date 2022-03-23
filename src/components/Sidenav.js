

const Sidenav = ({ nightMode }) => {

  return (
    <ul id="slide-out" className="sidenav">
      <li>
          <div className="home-view center-align">
              <a href="/">
                  <i className="material-icons large grey-text text-darken-2">home</i>
              </a>
          </div>
      </li>

      <li><hr/></li>
      <li className="no-padding">
      <ul>
               <li>
                  <a 
                  title="Open kjvBot code page on github"
                  href="https://github.com/Virtualimmortal/kjvBot/tree/master" 
                  target="_blank" 
                  className="btn-floating grey darken-5"
                  >
                     <i className="fa fa-code"></i>
                  </a>
               </li>
               <li>
                  <a 
                  title="Search icons" 
                  href="#!" 
                  className="btn-floating blue searchBtn"
                  >
                     <i className="fa fa-search"></i>
                  </a>
               </li>
               <li>
                  <a 
                  title="Scroll to the top of the page" 
                  href="#!" 
                  className="btn-floating green toTopBtn"
                  >
                     <i className="fa fa-arrow-to-top"></i>
                  </a>
               </li>
               <li>
                  <a 
                  title="Scroll to the bottom of the page" 
                  href="#!" 
                  className="btn-floating green toBottomBtn"
                  >
                     <i className="fa fa-arrow-to-bottom"></i>
                  </a>
               </li>
           </ul>

      </li>
      <li className="no-padding">
          
      </li>
      <li><hr/></li>
      <li className="no-padding">
          <a className="nightModeTrigger">
              Display Mode
              <div className="switch right">
                  <label>
                      Light
                      <input 
                      className="checkbox-blue filled-in" 
                      type="checkbox" 
                      />
                      <span className="lever "></span>
                      Dark
                  </label>
              </div>
          </a>
      </li>
      <li><hr/></li>
      <li className="no-padding">
          <a target="_blank" href="landings/embed-demo/template1.htm"><i className="far fa-eye"></i>Embed Demo</a>
      </li>
      <li><hr/></li>
    </ul>

  )
}
Sidenav.defaultProps = {
  nightMode: true
}

export default Sidenav
