import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCZChUH9ksFaFLipi8Gy8OBN-v4DUhjbxI';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch (term) {
    YTSearch ({key: API_KEY, term: term}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render () {
    const {
      videos,
      selectedVideo
    } = this.state;

    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={selectedVideo}/>        
        <VideoList 
          videos={videos}
          onSelection={video => this.setState({selectedVideo: video})}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
