import React ,{Component}from 'react';
import { Feed, Divider } from 'semantic-ui-react';
import FeedItem from "./FeedItem"

class FeedContainer extends Component{
render(){
    return(
    <div>
        <h1 style={{textAlign:'center'}}>Feed</h1>
        <FeedItem/>
        <FeedItem/>
    </div> 
    )
}
}

export default FeedContainer;