import React from "react";
import moment from "moment";
import {
	Card,
	Media,
	Content,
	Heading,
	Image,
	Columns
} from "react-bulma-components";
import { connect } from "react-redux";
import { acceptAsk, rejectAsk } from "state/ask/actions";
import { bindActionCreators } from "redux";
import { faCheck, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const statuses = {
	accepted: <FontAwesomeIcon icon={faCheck} color="green" />,
	rejected: <FontAwesomeIcon icon={faTimesCircle} color="red" />
};

const Ask = props => {
	return (
		<Columns.Column size="one-third" className="ask">
			<Card>
				<Card.Header>
					<Card.Header.Title>Status</Card.Header.Title>
					<Card.Header.Icon>{props.status}</Card.Header.Icon>
					<Card.Header.Icon>{statuses[props.status]}</Card.Header.Icon>
				</Card.Header>
				<Card.Content>
					<Media>
						<Media.Item renderas="figure" position="left">
							<Image
								renderas="p"
								size={64}
								alt="64x64"
								src="http://bulma.io/images/placeholders/128x128.png"
							/>
						</Media.Item>
						<Media.Item>
							<Heading className="askee" size={4}>
								{props.askee}
							</Heading>
						</Media.Item>
					</Media>
					<Content>
						<p className="title question">{props.question}</p>
						<br />
						<time className="timeStamp">
							{moment(props.timeStamp).format("lll")}
						</time>
					</Content>
				</Card.Content>
				<Card.Footer>
					<Card.Footer.Item
						renderas="a"
						onClick={() => props.acceptAsk(props.id)}
					>
						Accept
					</Card.Footer.Item>
					<Card.Footer.Item
						renderas="a"
						onClick={() => props.rejectAsk(props.id)}
					>
						Reject
					</Card.Footer.Item>
				</Card.Footer>
			</Card>
		</Columns.Column>
	);
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			acceptAsk,
			rejectAsk
		},
		dispatch
	);

export default connect(
	null,
	mapDispatchToProps
)(Ask);
