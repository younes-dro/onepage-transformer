import React, { Component } from "react";
import { TabMenu } from "primereact/tabmenu";

export default class TabMenuDemo extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { label: "Home", icon: "pi pi-fw pi-home" },
        { label: "Calendar", icon: "pi pi-fw pi-calendar" },
        { label: "Edit", icon: "pi pi-fw pi-pencil" },
        { label: "Documentation", icon: "pi pi-fw pi-file" },
        { label: "Settings", icon: "pi pi-fw pi-cog" }
      ]
    };
  }
  componentDidMount() {
    jQuery(".implementation").append("<h1>One page Transfomer</h1>");
  }
  handleTabChange(e) {
    console.log(e.value);
    this.setState({ activeItem: e.value });
  }
  render() {
    return (
      <div>
        <div className="content-section introduction">
          <div className="feature-intro">
            <h1>TabMenu</h1>
            <p>
              Menu is a navigation component that displays items as tab headers.
            </p>
          </div>
        </div>

        <div className="content-section implementation">
          <TabMenu
            onClick={this.onTabChange}
            model={this.state.items}
            activeItem={this.state.activeItem}
            onTabChange={e => this.handleTabChange(e)}
          />
        </div>
        <div id="home">home</div>
      </div>
    );
  }
}
