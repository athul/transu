import React ,{Component}from 'react';
import { Feed, Divider } from 'semantic-ui-react';


class FeedContainer extends Component{
render(){
    return(
    <div>
        
        <feed>
            <feed.event>
                <feed.content>
                    <feed.summary>
                        <feed.user>User2049</feed.user>
                    </feed.summary>
                    <feed.meta>Hello, I'm 2049</feed.meta>
                </feed.content>
            </feed.event>
        </feed>
    </div> 
    )
}
}

export default FeedContainer;