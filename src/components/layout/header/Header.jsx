import CatOfficeLogo from './CatOfficeLogo';
import PhaseBanner from '../phase-banner/PhaseBanner';
import { useState } from 'react';
import SignIn from './SignIn';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [toggleMenu] = useState(false);

  return (
    <>
      <header
        className="govuk-header"
        style={{
          backgroundColor: '#FFF',
          color: '#000',
        }}
        role="banner"
      >
        <HashLink
          to="#main-content"
          className="govuk-skip-link"
          data-module="govuk-skip-link"
        >
          Skip to main content
        </HashLink>
        <div
          className="govuk-header__container govuk-width-container"
          style={{ borderBottom: 0 }}
        >
          <div className="govuk-header__logo govuk-!-margin-top-1 govuk-!-margin-bottom-0">
            <CatOfficeLogo />
          </div>
          <div className="govuk-header__content">
           
            <Link
              to="/"
              className="govuk-header__link govuk-header__link--service-name govuk-!-margin-top-2"
              style={{ color: '#000' }}
            >
              Mafdet
            </Link>
            <SignIn />
          </div>
        </div>
        <div
          className="govuk-header__container govuk-width-container"
          style={{ borderBottom: 0 }}
        >
          <PhaseBanner />

          <nav aria-label="Menu" className="govuk-header__navigation ">
            <ul
              id="navigation"
              className={`govuk-header__navigation-list govuk-!-margin-top-1 ${
                toggleMenu && 'govuk-header__navigation-list--open'
              }`}
            >
              <li
                id="header-home-link"
                className="govuk-header__navigation-item govuk-header__navigation-item govuk-!-margin-right-5"
              >
                <Link
                  className="govuk-header__link"
                  to="/"
                  style={{ color: 'black' }}
                  id="header-home-link"
                >
                  Home
                </Link>
              </li>
              <li
                id="header-record-time-link"
                className="govuk-header__navigation-item govuk-header__navigation-item"
              >
                <Link
                  className="govuk-header__link"
                  to={`/new-record`}
                  style={{ color: '#000' }}
                  id="header-record-time-link"
                >
                  New record
                </Link>
              </li>
              <li
                  id="header-record-time-link"
                  className="govuk-header__navigation-item govuk-header__navigation-item"
              >
                <Link
                    className="govuk-header__link"
                    to={`/records`}
                    style={{ color: '#000' }}
                    id="header-record-time-link"
                >
                  Records
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
