import PropTypes from "prop-types";


const Error = ({message}) => {
    return(
        <>
            <div className="govuk-error-summary" data-module="govuk-error-summary">
                <div role="alert">
                    <h2 className="govuk-error-summary__title">
                        There is a problem
                    </h2>
                    <div className="govuk-error-summary__body">
                        <p>{message}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

Error.propTypes = {
    message: PropTypes.string
};
export default Error