import React from "react";
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props){
  console.log(props.ticketList);
  return (
    <div>
      <hr/>
      {props.ticketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          timeOpened={ticket.timeOpened}
          key={ticket.id}/>
      )}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array.isRequired
};

export default TicketList;
