import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

const NewTicketForm = (props) => {
	function handleNewTicketSubmissionForm(event) {
		event.preventDefault();
		props.onNewTicketCreation({
			names: event.target.names.value,
			location: event.target.location.value,
			issue: event.target.issue.value,
			id: v4(),
		});
	}
	return (
		<React.Fragment>
			<ReusableForm
				formSubmissionHandler={handleNewTicketSubmissionForm}
				buttonText="Help!"
			/>
		</React.Fragment>
	);
};

NewTicketForm.propTypes = {
	onNewTicketCreation: PropTypes.func,
};

export default NewTicketForm;
