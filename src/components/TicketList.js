import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

const TicketList = (props) => {
	return (
		<React.Fragment>
			{props.ticketList.map((ticket) => (
				<Ticket
					whenTicketClicked={props.onTicketSelection}
					location={ticket.location}
					names={ticket.names}
					issue={ticket.issue}
					id={ticket.id}
					key={ticket.id}
				/>
			))}
		</React.Fragment>
	);
};

TicketList.propTypes = {
	ticketList: PropTypes.array,
	onTicketSelection: PropTypes.func,
};

export default TicketList;
