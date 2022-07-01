const ListItem = ({video, selectVideo1})=>{

    // selectVideo = () => {
    //     selectVideo1(video);
    // }

    return(
        <div onClick={()=>selectVideo1(video)}>
            <h1>{video.snippet.title}</h1>
            <img src={video.snippet.thumbnails.default.url} alt="image"/>
        </div>
    )
}
export default ListItem;