import React, { Component } from "react";
import "../CSS/FeedItem.css"

/* class FeedItem extends Component {

    render() {
        return (
            <div className="feed-item-wrapper">

                <h1 className="question">the language to be converted</h1>
                <h3 className="user">sdfghjkl</h3>


            </div>
        )
    }
};
 */
const FeedItem=({fdata})=>{
    let data=Array.from(fdata);
    return (<div>
        <div className="feed-item-wrapper">
            {data.map((items)=>(
                <>
            <h1 className="question">{items.query}</h1>
            <h3 className="user">{items.language}</h3>
            </>
            ))}
        </div>
        </div>
    )
}


export default FeedItem;
