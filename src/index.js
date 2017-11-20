// Go find react library and assign it to 'React'
// This is ES6 and will be transcoded when sent to the browser
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoList from './components/video_list'
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_details';

const API_KEY  = 'AIzaSyBdRJZFH9lTGIWUI1-sUMyeOQ5CNFr0Gh4';



// Create a new component to produce HTML

// This is the final value of this constant
class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos : [],
            selectedVideo : null
        };
        this.videoSearch('lady gaga')
    }

    videoSearch(term){
        YTSearch({key:API_KEY, term: term},(videos)=>{
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });

            // this.setState({videos:videos})
        });
    }
    // This is JSX
    render(){
        const videoSearch = _.debounce((term)=> {this.videoSearch(term)},300);
        return <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                videos={this.state.videos}

            />
        </div>
    }
}

// This wont work as it is an class of app
// ReactDOM.render(App);

// The following creates and instance with JSX
// You need to tell it where to render to, which is the second argument in render
ReactDOM.render(<App />, document.querySelector('.container') );


// Take this component's HTML and put it on the page(in the DOM)