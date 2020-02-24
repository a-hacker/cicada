// @flow
import React, { Component } from 'react';
import TicketSidebar from './TicketSidebar';
import TicketDetails from './TicketDetails';

type Props = {};

export default class TicketView extends Component<Props> {
  props: Props;

  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'normal',
          height: '100%'
        }}
      >
        <TicketSidebar />
        <TicketDetails />
      </div>
    );
  }
}
