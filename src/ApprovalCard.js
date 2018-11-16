import React from 'react';
import REactDOM from 'react-dom';


const ApprovalCard = () => {
	return (
		<div className="i card">
			<div className="content">Do you love him?</div>
			<div className="extra content">
				<div className="ui two buttons">
					<div className="ui basic green button">Approve</div>
					<div className="ui basic red button">Decline</div>
				</div>
			</div>
		</div>
		);
};



export default ApprovalCard