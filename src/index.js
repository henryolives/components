import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'


const App = () => {
	return <div className="ui container comments">
	<ApprovalCard>
		<CommentDetail 
			author="Henry"
			 timeAgo="Today at 2:00PM" 
			 post="This is my first post" 
			 avatar ={faker.image.avatar()}
		/>
	</ApprovalCard>
	<ApprovalCard>
		<CommentDetail
		 author="Maafio"
		  timeAgo="Yesterday at 2:00PM"
		   post="This is my second post"
		    avatar ={faker.image.avatar()}
		/>
		</ApprovalCard>
		<ApprovalCard>
		<CommentDetail
		 author="Kwabena" 
		 timeAgo="Monday at 2:00PM" 
		 post="This is my Third post" 
		 avatar ={faker.image.avatar()}
		/>
		</ApprovalCard>
	</div>
};

ReactDOM.render(
<App />,
document.querySelector('#root')
);