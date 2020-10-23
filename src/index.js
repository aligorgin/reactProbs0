import React from "react";
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard/>
            <CommentDetail avatar={faker.image.avatar()} author='sam' timeAgo='Today at 4:45PM'
                           comment='heyy nice'/>
            <CommentDetail avatar={faker.image.avatar()} author='alex' timeAgo='Today at 2:00AM'
                           comment='dude thats hot af'/>
            <CommentDetail avatar={faker.image.avatar()} author='jane' timeAgo='Yesterday at 5:00PM'
                           comment='oke i find that shark'/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'))