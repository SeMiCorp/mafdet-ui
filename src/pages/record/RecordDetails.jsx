import {useParams} from "react-router";
import {useEffect, useState} from "react";

const RecordDetails = () => {

    const recordIdParam= useParams();
    const [recordId, setRecordId] = useState(recordIdParam.id)

    useEffect(() => {
        setRecordId(recordIdParam.id)
    },[recordIdParam])


    return(
        <>
            <h1 className="govuk-heading-l">Record details</h1>
            <h3 className="govuk-heading-s">ID: {recordId}</h3>

        </>
    )
}
export default RecordDetails