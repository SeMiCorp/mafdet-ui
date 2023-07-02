import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const RecordsTable = ({data}) => {

    return(
        <>
            <table className="govuk-table">
                <thead className="govuk-table__head">
                <tr className="govuk-table__row">
                    <th scope="col" className="govuk-table__header">Name</th>
                    <th scope="col" className="govuk-table__header">DOB</th>
                    <th scope="col" className="govuk-table__header">Gender</th>
                    <th scope="col" className="govuk-table__header">Postcode</th>
                    <th scope="col" className="govuk-table__header">Chip</th>
                </tr>
                </thead>
                <tbody className="govuk-table__body">

                {data.map(enrty => {
                    return (
                        <tr className="govuk-table__row" key={enrty.id} >
                            <th scope="row" className="govuk-table__header">
                                <Link to={`/records/${enrty.id}`} className="govuk-link" >{enrty.name}</Link>
                            </th>
                            <td className="govuk-table__cell">{enrty.dob}</td>
                            <td className="govuk-table__cell">{enrty.gender}</td>
                            <td className="govuk-table__cell">{enrty.postcode}</td>
                            <td className="govuk-table__cell">{enrty.chip ? 'Yes': 'No'}</td>
                        </tr>
                    )
                })}


                </tbody>
            </table>
        </>
    )

}

RecordsTable.propTypes = {
    data: PropTypes.array
};

export  default  RecordsTable