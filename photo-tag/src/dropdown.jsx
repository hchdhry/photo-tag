function dropDown({position}){
    const dropdownStyle = {
        position: 'absolute',
        top: position.y + 'px',
        left: position.x + 'px',
      };
    return(
        <div className="dropdown" style={position&&dropdownStyle}>
        <ul>
            <li>wally</li> 
            <li>bob</li>
            <li>wanderlei</li>
        
        
        </ul>
        </div>
    )
}

export default dropDown;