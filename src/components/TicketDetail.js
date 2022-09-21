import React from "react";

import PropTypes from "prop-types";

const TicketDetail = (props) => {
	const { ticket, onClickingDelete, onClickingEdit } = props;
	return (
		<React.Fragment>
			<h3>TicketDetail</h3>
			<h3>{ticket.location}</h3>
			<h3>{ticket.names}</h3>
			<p>
				<em>{ticket.issue}</em>
			</p>
      <button onClick={onClickingEdit}> Edit Ticket</button>
			<button onClick={() => onClickingDelete(ticket.id)}> Close Ticket</button>
			<hr />
		</React.Fragment>
	);
};

TicketDetail.propTypes = {
	ticket: PropTypes.object,
	onClickingDlete: PropTypes.func,
	onClickingEdit: PropTypes.func,
};

export default TicketDetail;
