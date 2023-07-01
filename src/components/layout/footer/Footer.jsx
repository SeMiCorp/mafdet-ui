import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="govuk-footer" role="contentinfo">
      <div className="govuk-width-container">
        <div className="govuk-footer__meta">
          <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
            A Cat Office Digital, Data and Meow Technology service
          </div>
          <div className="govuk-footer__meta-item">
            <Link className="govuk-footer__link" to="/">
              Feedback
            </Link>
          </div>
          <div className="govuk-footer__meta-item">
            <Link className="govuk-footer__link" to="/">
              Help
            </Link>
          </div>
          <div className="govuk-footer__meta-item">
            <a className="govuk-footer__link" href="/">
              Cat.UK home
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
