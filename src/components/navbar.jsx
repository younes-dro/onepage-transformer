import React, {Component} from 'react';

import {TabView,TabPanel} from 'primereact/tabview';


import 'primereact/resources/themes/luna-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class NavBar extends Component {
  render() {
    return (
      <TabView>
          <TabPanel header="Header I">
              Content I
          </TabPanel>
          <TabPanel header="Header II">
              Content II
          </TabPanel>
          <TabPanel header="Header III">
              Content III
          </TabPanel>
      </TabView>

    );
  }

}

export default NavBar ;
