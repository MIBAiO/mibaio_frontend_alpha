
import '../rd-navbar.css';
import {Link} from 'react-router-dom';


const Navbar = () => {
  return(
    <>
    <div>
  {/* RD Navbar*/}
        <div className="rd-navbar-wrap" style={{height: '76px'}}>
        <nav className="rd-navbar rd-navbar-classic rd-navbar-original rd-navbar-static rd-navbar--is-stuck" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-fixed" data-lg-device-layout="rd-navbar-fixed" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-xxl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-lg-stick-up-offset="0px" data-xl-stick-up-offset="0px" data-xxl-stick-up-offset="0px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
          <div className="rd-navbar-main">
            {/* RD Navbar Panel*/}
            <div className="rd-navbar-panel">
              {/* RD Navbar Toggle*/}
              <button className="rd-navbar-toggle toggle-original" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span /></button>
              {/* RD Navbar Brand*/}
              <div className="rd-navbar-brand"><a className="brand" href="#"><img className="brand-logo-dark" src="../logomibaio.png" alt="" width={96} height={32} srcSet="images/logo-default-96x32.png 2x" /><img className="brand-logo-light" src="./MIBAiO Home_files/logo-default-96x32.png" alt="" width={96} height={32} srcSet="images/logo-default-96x32.png 2x" /></a></div>
            </div>
            <div className="rd-navbar-nav-wrap toggle-original-elements"><a href="#">
                <p className="rd-navbar-slogan rd-navbar-slogan-2 text-white-50 wow clipInLeft animated" style={{visibility: 'visible', animationName: 'clipInLeft'}}>Cool IoT
                  Company</p>
              </a>
              {/* RD Navbar Nav*/}
              <ul className="rd-navbar-nav ">
                <li className="rd-nav-item active">
                  <a className="rd-nav-link" href="#" id="home-tab">
                    <i className="fa fa-fw fa-home" id="icon-view-home" />Home
                  </a>
                </li>
                <li className="rd-nav-item"><a className="rd-nav-link" href="#">
                    <i className="fa fa-fw fa-drivers-license-o mr-3 ml-3" id="icon-view" />About
                    Us</a>
                </li>
                <li className="rd-nav-item"><a className="rd-nav-link" href="#">
                    <i className="fa fa-fw fa-graduation-cap mr-3" id="icon-view" />Careers</a>
                </li>
                <li className="rd-nav-item rd-navbar--has-megamenu rd-navbar-submenu"><a className="rd-nav-link" href="#">
                    <i className="fa fa-fw fa-user-circle-o mr-3" id="icon-view" />Account</a><span className="rd-navbar-submenu-toggle" />
                  <div className="rd-menu rd-navbar-megamenu rd-navbar-open-right">
                    <ul className="rd-navbar-megamenu-inner-acc">
                      <li className="rd-megamenu-item">
                        <ul className="rd-megamenu-list">
                          <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="#">View Dashboard</a></li>
                          <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="#">Logout</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="rd-nav-item"><a className="rd-nav-link" href="#"><i className="fa fa-fw fa-phone mr-3 ml-4" id="icon-view" />Contact Us</a>
                </li>
                <li className="rd-nav-item rd-navbar--has-megamenu rd-navbar-submenu">
                  <a className="rd-nav-link more-navbar" href="#" id="more-tab">
                    <i className="fa fa-fw fa-server" id="icon-view-more" />More
                  </a><span className="rd-navbar-submenu-toggle" />
                  <div className="rd-menu rd-navbar-megamenu rd-navbar-open-right">
                    <ul className="rd-navbar-megamenu-inner">
                      <li className="rd-megamenu-item">
                        <ul className="rd-megamenu-list">
                          <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="#">Our
                              Team</a></li>
                          <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="#">FAQ</a></li>
                        </ul>
                      </li>
                      <li className="rd-megamenu-item">
                        <ul className="rd-megamenu-list">
                          <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="#">Privacy policy</a>
                          </li>
                          <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="#">Our
                              Team</a></li>
                        </ul>
                      </li>
                      <li className="rd-megamenu-item">
                        <ul className="rd-megamenu-list">
                          <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="#">Login</a>
                          </li>
                          <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="#">Register</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <hr style={{height: '2px'}} />
              </ul>
              {/* RD Navbar Search*/}
              <div className="rd-navbar-element rd-navbar-element_centered">
                <div className="group-xs">
                  <a className="icon icon-sm link-social-2 mdi mdi-cart-outline cart-icon" id="cart-size-1" href="#"><span className="add-xs" id="cart-no">
                      0
                    </span></a>
                </div>
                <div>
                  <a className="icon icon-sm link-social-2 mdi mdi-facebook" href="#" id="handle-view" />
                  <a className="icon icon-sm link-social-2 mdi mdi-twitter" href="#" id="handle-view" />
                  <a className="icon icon-sm link-social-2 mdi mdi-instagram" href="#" id="handle-view" />
                </div>
              </div>
            </div>
            <div className="rd-navbar-element rd-navbar-element_right">
              <div id="google_translate_element" style={{display: 'none'}}><div className="skiptranslate goog-te-gadget" dir="ltr" style={{}}><div id=":0.targetLanguage" className="goog-te-gadget-simple" style={{whiteSpace: 'nowrap'}}><img src="./MIBAiO Home_files/cleardot.gif" className="goog-te-gadget-icon" alt="" style={{backgroundImage: 'url("https://translate.googleapis.com/translate_static/img/te_ctrl3.gif")', backgroundPosition: '-65px 0px'}} /><span style={{verticalAlign: 'middle'}}><a aria-haspopup="true" className="goog-te-menu-value" href="javascript:void(0)"><span>Select Language</span><img src="./MIBAiO Home_files/cleardot.gif" alt="" width={1} height={1} /><span style={{borderLeft: '1px solid rgb(187, 187, 187)'}}>​</span><img src="./MIBAiO Home_files/cleardot.gif" alt="" width={1} height={1} /><span aria-hidden="true" style={{color: 'rgb(118, 118, 118)'}}>▼</span></a></span></div></div></div>
              <ul className="list-localization">
                <li>
                  <a className="icon icon-sm link-social-2 mdi mdi-cart-outline mr-2" id="cart-size" href="#"><span className="add-xs" id="cart-no">
                      0
                    </span></a>
                </li>
                <li>
                  <label>
                    <input id="Marathi" name="localization" defaultValue="Marathi" type="radio" autoComplete="Off" className="radio-custom" /><span className="radio-custom-dummy" /><span className="label-text"><span className="notranslate">मराठी</span></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input id="English" name="localization" defaultValue="English" type="radio" defaultChecked="checked" autoComplete="Off" className="radio-custom" /><span className="radio-custom-dummy" /><span className="label-text">English</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input id="Hindi" name="localization" defaultValue="Hindi" type="radio" autoComplete="Off" className="radio-custom" /><span className="radio-custom-dummy" /><span className="label-text"><span className="notranslate">हिंदी</span></span>
                  </label>
                </li>
              </ul>
            </div>
            <div className="rd-navbar-dummy" />
          </div>
        </nav>
      </div>
</div>

  </>
  );
}

export default Navbar;
