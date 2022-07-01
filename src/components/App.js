import React from 'react';
import SearchBar from './SearchBar';
import SearchList from './SearchList';
import youtube from '../apis/youtube';



class App extends React.Component {

    state = {
        videos: [],
        selectVideo: null
    }

    search = async (term) => {
        console.log(term);

        const videosGet = await youtube.get("/search", {
            params: {
                q: term
            }
        })

        console.log(videosGet);

        this.setState({
            videos: videosGet.data.items
        })

        console.log('state videos');
        console.log(this.state.videos);

    }

    testVideo = (video) => {
        console.log('test');
        console.log(video);
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
        this.setState({
            selectVideo: videoSrc
        });


        
    }

    render() {
        return (
            <div>
                <SearchBar search1={this.search} />
                <div>
                    <div className="ui embed">
                        <iframe title="video player" src={this.state.selectVideo} />
                    </div>
                </div>
                <SearchList videos={this.state.videos} selectVideo2={this.testVideo} />
            </div>
        )
    }

}
export default App;