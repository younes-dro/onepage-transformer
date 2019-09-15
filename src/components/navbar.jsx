import React, { Component } from "react";

import { TabView, TabPanel } from "primereact/tabview";

class NavBar extends Component {
  componentDidMount() {
    jQuery("#pagesStack").html("list of pages ! ");
  }

  render() {
    return (
      <TabView>
        <TabPanel header="Header I">
          <div id="pagesStack"></div>
        </TabPanel>
        <TabPanel header="Header II">Content II</TabPanel>
        <TabPanel header="Header III">Content III</TabPanel>
      </TabView>
    );
  }
}

export default NavBar;
