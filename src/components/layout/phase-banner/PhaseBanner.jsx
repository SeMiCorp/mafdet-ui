import { Link } from 'react-router-dom';

const PhaseBanner = () => {

  return (
    <>
      <div
        className="govuk-phase-banner"
        style={{ backgroundColor: 'white', borderTop: '1px solid #b1b4b6' }}
      >
        <p className="govuk-phase-banner__content">
          <strong className="govuk-tag govuk-phase-banner__content__tag">
            Phase 1
          </strong>
          <span className="govuk-phase-banner__text">
           <Link className="govuk-link" to="/" />
          </span>
        </p>
      </div>
    </>
  );
};

export default PhaseBanner;
