import React, { Component } from "react";

import { TabView, TabPanel } from "primereact/tabview";

class Tab extends Component {
  componentDidMount() {
    console.log("Tab mounted");
    jQuery(document).ready(function($) {
      $(".pages").append("<b>loading...</b>");
    });
  }

  render() {
    return (
      <TabView>
        <TabPanel header="Transformer">
          <div className="pages"></div>
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
