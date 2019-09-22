import React,{Component} from "react";
import "../CSS/FeedItem.css"

class FeedItem extends Component{
    render(){
        return(
            <div className="feed-item-wrapper">
                <h1 className="question">the language to be converted</h1>
                <h3 className="user">random2049</h3>
                <Tags/>

            </div>
        )
    }
}

export default FeedItem;
