import React, { Component } from "react";
import NewTicketForm from "./NewTicketForm";
import TicketDetail from "./TicketDetail";
import TicketList from "./TicketList";
import EditTicketForm from "./EditTicketForm";

export class TicketControl extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formVisibleOnPage: false,
			mainTicketList: [],
			selectedTicket: null,
			editing: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick = () => {
		if (this.state.selectedTicket != null) {
			this.setState({
				formVisibleOnPage: false,
				selectedTicket: null,
			});
		} else {
			this.setState((prevState) => ({
				formVisibleOnPage: !prevState.formVisibleOnPage,
			}));
		}
	};
	handleAddingNewTicketToList = (newTicket) => {
		const newMainTicketList = this.state.mainTicketList.concat(newTicket);
		this.setState({
			mainTicketList: newMainTicketList,
			formVisibleOnPage: false,
		});
	};
	handleChangingSelectedTicket = (id) => {
		const selectedTicket = this.state.mainTicketList.filter(
			(ticket) => ticket.id === id
		)[0];
		this.setState({ selectedTicket: selectedTicket });
	};
	handleDeletingTicket = (id) => {
		const newMainTicketList = this.state.mainTicketList.filter(
			(ticket) => ticket.id !== id
		);
		this.setState({
			mainTicketList: newMainTicketList,
			selectedTicket: null,
		});
	};
	handleEditClick = () => {
		console.log("Hi There How are you?");
		this.setState({
			editing: true,
		});
	};
	handleEditingTicketInList = (ticketToEdit) => {
		const editedMainTicketList = this.state.mainTicketList
			.filter((ticket) => ticket.id !== this.state.selectedTicket.id)
			.concat(ticketToEdit);

		this.setState({
			mainTicketList: editedMainTicketList,
			editing: false,
			selectedTicket: null,
		});
	};

	render() {
		let currnetlyVisiblePage = null;
		let buttonText = null;

		if (this.state.editing) {
			currnetlyVisiblePage = (
				<EditTicketForm
					ticket={this.state.selectedTicket}
					onEditTicket={this.handleEditingTicketInList}
				/>
			);
			buttonText = "Return to Ticket List";
		} else if (this.state.selectedTicket != null) {
			currnetlyVisiblePage = (
				<TicketDetail
					ticket={this.state.selectedTicket}
					onClickingDelete={this.handleDeletingTicket}
					onClickingEdit={this.handleEditClick}
				/>
			);
			buttonText = "Return to Ticket List";
		} else if (this.state.formVisibleOnPage) {
			currnetlyVisiblePage = (
				<NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />
			);
			buttonText = "Return to a Ticket List";
		} else {
			currnetlyVisiblePage = (
				<TicketList
					ticketList={this.state.mainTicketList}
					onTicketSelection={this.handleChangingSelectedTicket}
				/>
			);
			buttonText = "Add Ticket";
		}
		return (
			<React.Fragment>
				{currnetlyVisiblePage}
				<button onClick={this.handleClick}> {buttonText}</button>
			</React.Fragment>
		);
	}
}

export default TicketControl;
