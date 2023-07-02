import React, {useEffect, useState} from "react";
import {getCats} from "../../api/services/catsService";

const Records = () => {

    const [catsData, setCatsData] = useState([])

    useEffect(async () => {
        setCatsData([]);
        await getPageData()
    }, []);

    const getPageData = async () => {
        await getCatsData()
    }

    const getCatsData = async () => {
        const catsReposnse = await getCats();
        if(catsReposnse.status == 200) {
            console.log(catsReposnse.data)
            setCatsData(catsReposnse.data)
        }
    }

    return(
        <>
            <h1 className="govuk-heading-l">Records ({catsData.length})</h1>
        </>
    )
}
export default Records