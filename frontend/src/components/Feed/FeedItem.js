import React,{Component} from "react";
import "../CSS/FeedItem.css"

class FeedItem extends Component{
const data=({fdata})=>
let data=Array.from(fdata);
    render(){
        return(
            {data.map((udata)=>(
            <div className="feed-item-wrapper">

                <h1 className="question">the language to be converted</h1>
                <h3 className="user">{udata.username}</h3>
                <Tags/>

            </div>
        )
        )}
    }
}



export default FeedItem;
