import {useEffect, useState} from "react";
import {getCats} from "../../api/services/catsService";
import RecordsTable from "../../components/record/RecordsTable";
import Error from "../../components/error/Error";

const Records = () => {

    const [catsData, setCatsData] = useState([])
    const [catsApiResponse, setCatsApiResponse] = useState(400)

    useEffect(async () => {
        setCatsData([]);
        await getPageData()
    }, []);

    const getPageData = async () => {
        await getCatsData()
    }

    const getCatsData = async () => {
        const catsReposnse = await getCats();

        if (catsReposnse.status === 200) {
            setCatsApiResponse(catsReposnse.status)
            setCatsData(catsReposnse.data)
        }
    }

    return catsApiResponse === 200 ? (
        <>
            <h1 className="govuk-heading-l">Records ({catsData.length})</h1>


            <div className="govuk-notification-banner" role="region"
                 aria-labelledby="govuk-notification-banner-title"
                 data-module="govuk-notification-banner">
                <div className="govuk-notification-banner__header">
                    <h2 className="govuk-notification-banner__title" id="govuk-notification-banner-title">
                        Important
                    </h2>
                </div>
                <div className="govuk-notification-banner__content">
                    <p className="govuk-notification-banner__heading">
                        At this moment API data is hardcoded
                    </p>
                    <a className="govuk-notification-banner__link"
                       href="https://github.com/SeMiCorp/mafdet-cats-restapi">
                        View cats-restapi for more
                    </a>
                </div>

            </div>

            <RecordsTable data={catsData} />

        </>
    ) : <Error message="There is a problem with the service. Cannot get data from Cats REST API" />
}
export default Records