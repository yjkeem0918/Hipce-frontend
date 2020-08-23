// class name extends Component {
//     constructor(){
//         super();
//         this.state = {
//           news: []
//         }
//     }

//     render() {
//       return (
//         <React.Fragment>
//           <Content>
//             {
//               this.state.news.map((item, i) => {
//                 return <NewsItem key={ i }
//                            subject={ item.subject }
//                            details={ item.details }
//                        />
//               })
//             }
//           </Content>
//         </React.Fragment>
//       )
//     }
//   }

// class NewsItem extends Component {
//     constructor() {
//         super();
//         this.state = {
//             voteCount = 0
//         }
//     }

//     handleVote(type) {
//         this.setState(prevState => ({
//             voteCount: type === "add" ? prevState.voteCount + 1 : prevState.voteCount - 1
//         }));
//     }

//     render() {
//         const { subject, details } = this.props;
//         const { voteCount } = this.state;

//         return (
//             <Item>
//               <text>
//                 { subject }
//                 { details }
//               </text>
//               <Votering>
//                 <img src="" onClick={ this.handleVote.bind(this, 'add') } />
//                 <div value={ voteCount }>{ voteCount }</div>
//                 <img src="" onClick={ this.handleVote.bind(this, 'min') } />
//              </Votering>
//             </Item>
//         )
//     }
// }




const { Component } = React;

const NewsItem = ( item ) => {
  const { subject, details, voteCount, handleVoteChange } = item;
  return (
    <div className="news-item">
      <div className="news-vote">
        <div className="vote-up" title="Vote up" onClick={ () => handleVoteChange( item, 1 ) }></div>
        <div className="vote-count">{ voteCount }</div>
        <div className="vote-down" title="Vote down" onClick={ () => handleVoteChange( item, -1 ) }></div>
      </div>
      <div className="news-content">
        <h3>{ subject }</h3>
        <div>{ details }</div>
      </div>
    </div>
  );
};

class VotingApp extends Component {
  constructor( props ) {
    super();
    this.handleVoteChange = this.handleVoteChange.bind( this );
    // by lack of fetching I add the initial newsItems to the state
    // and work by updating local state on voteChanges
    // depending on your state management (I guess you want to do something with the votes)
    // you could change this
    this.state = {
      newsItems: props.newsItems
    };
  }
  handleVoteChange( item, increment ) {
    this.setState( ( prevState ) => {
      const { newsItems } = prevState;
      // updates only the single item that has changed
      return { 
        newsItems: newsItems.map( oldItem => oldItem.id === item.id ? { ...oldItem, voteCount: oldItem.voteCount + increment } : oldItem ) };
    } );
  }
  render() {
    const { newsItems = [] } = this.state;
    return (
      <div className="kiosk">
        { newsItems.map( item => <NewsItem 
            key={ item.id } 
            {...item} 
            handleVoteChange={this.handleVoteChange} /> ) }
      </div>
    );
  }
}

// some bogus news items
const newsItems = [
  { id: 1, voteCount: 0, subject: 'Mars in 2020', details: 'Tesla will send manned BFR rockets to Mars in 2020' },
  { id: 2, voteCount: -3, subject: 'Stackoverflow rocks', details: 'Stackoverflow is booming thanks to the new friendly policy' },
  { id: 3, voteCount: 10, subject: 'DS9: Healthy living', details: 'Eat rice everyday and drink only water, and live 10 years longer, says Dax to Sisko, Sisko suprises her by saying that like that, he doesn\'t want to live 10 years longer...' }
];

// render towards the container
const target = document.querySelector('#container');
ReactDOM.render( <VotingApp newsItems={ newsItems } />, target );