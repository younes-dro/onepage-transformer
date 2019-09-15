import React, { Component } from "react";

import { TabView, TabPanel } from "primereact/tabview";

class Tab extends Component {
  componentDidMount() {
    jQuery("#pagesStack").html("list of pages ! ");
  }

  render() {
    return (
      <TabView>
        <TabPanel header="Transformer">
          <div id="pagesStack">Pages </div>
        </TabPanel>
        <TabPanel header="Documentation">Open File md</TabPanel>
        <TabPanel header="Settings">
          Colors , default themes , Display child page as carousel or column{" "}
        </TabPanel>
      </TabView>
    );
  }
}

export default Tab;
