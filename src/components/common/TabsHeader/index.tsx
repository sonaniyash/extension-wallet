import React, { useEffect, useRef, useState } from "react";

import "./styles.scss";
import { Tab, TabBar, TabIndicator} from "./styles";

interface Props {
  setActive: any;
  tabsHeader: any;
}

const TabsHeader = ({ setActive, tabsHeader }: Props) => {
  const indicator = useRef<HTMLInputElement | any>();
  const tabbar = useRef<HTMLInputElement | any>();
  const [width, setwidth] = useState(0);

  const indi = 0;

  useEffect(() => {
    indicator.current.style.marginLeft = indi + "px";
    setwidth(indicator.current.parentElement.offsetWidth / tabsHeader.length);
  }, [width]);

  const clickTab = (e: any) => {
    setActive(e.target.dataset.tab);
    indicator.current.style.marginLeft =
      indi + e.target.dataset.tab * width + "px";
  };

  const listItems = tabsHeader.map((tab: any, index: any) => {
    return (
      <Tab widthMax={width+'px'} key={tab} data-tab={index} onClick={clickTab}>
        {tab}
      </Tab>
    );
  });

  return (
    <>
      <TabBar ref={tabbar} className="tabbar">
        {listItems}
        <TabIndicator widthMax={width+'px'} className="indicator" ref={indicator}></TabIndicator>
      </TabBar>
    </>
  );
};

export default TabsHeader;
