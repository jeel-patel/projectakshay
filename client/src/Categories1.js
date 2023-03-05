import React from "react";
import VerticalTabs from "./component/TabNavigation";

export default function Categories1(props)
{
    const tabContent = [
        {"title":"3-tyre/with support wheel cycle","url":"cycle_3tyre"},
        {"title":"Small cycles","url":"cycle_small"},
        {"title":"Medium cycles","url":"cycle_medium"},
        {"title":"Large cycles","url":"cycle_large"}
    ];

    function getData(url)
    {

    }

    return (
        <VerticalTabs tabContent={tabContent} onTabChange={getData}/>
    )
}