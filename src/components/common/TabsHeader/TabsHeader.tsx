import React, { useEffect, useRef } from 'react'
import './TabsHeader.scss';

interface Props {
    setActive: any,
    tabsHeader: any
}

const TabsHeader = ({setActive, tabsHeader} : Props) => {

    const WIDTH_TAB = 181;
    const indicator = useRef<HTMLInputElement | any>()
    const tabContainer = useRef<any>()

    let indi = 0;

    useEffect(() => {
        indicator.current.style.marginLeft = indi + 'px';
    }, [])

    const clickTab = (e: any) => {
        setActive(e.target.dataset.tab);
        indicator.current.style.marginLeft = indi + (e.target.dataset.tab) * WIDTH_TAB + 'px';
    };

    const listItems = tabsHeader.map((tab: any, index: any) =>
        {return <div key={tab} data-tab={index} onClick={clickTab} className="tab wave">{tab}</div>}
    );

    return (
        <>
            <div ref={tabContainer} className="tab-bar" >
                {listItems}
                <div className="indicator" ref={indicator}></div>
            </div>
        </>
    )
}

export default TabsHeader
