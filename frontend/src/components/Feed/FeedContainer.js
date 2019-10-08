import React ,{Component} from 'react';
//import { Feed, Divider } from 'semantic-ui-react';
import axios from 'axios'
import FeedItem from "./FeedItem"

class FeedContainer extends Component{
    state = {
        FeedItem: []
      }
      componentDidMount() {
        axios.get('https://api.sheety.co/cbf6e05c-f65a-4215-abaa-90ca8384b56f')
          .then(res => {
            this.setState({
              FeedItem: res.data
            })
            console.log(res.data)
          })
      }
render(){
    return(
    <div>
        <h1 style={{textAlign:'center'}}>Feed</h1>
        <FeedItem fdata={this.state.FeedItem}/>
    </div> 
    )
}
}
export default FeedContainer;