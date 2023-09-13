function Frame(props){
    const {image, character}=props;
    return(
        <div>
            <img src= {image}/>
            <p>{character}</p>
        </div>

    )
}

export default Frame