import ListItem from "./ListItem";
const SearchList = ({videos, selectVideo2}) =>{
    console.log('Videos');
    console.log(videos);

    
 
    const videoList = videos.map(video => {
        return (
            <ListItem video={video} selectVideo1={selectVideo2}/>
        )
    })

    return(
        <div>
            Search List
            {videoList}
        </div>
    )
}

export default SearchList;