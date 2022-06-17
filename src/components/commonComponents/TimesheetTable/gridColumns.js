const gridColumns = (noOfColumns) => {
    let girdtemplateString="";
    for(let i=0; i<noOfColumns; i++){
        if(i === 0){
            girdtemplateString += "1.2fr "
        }else{
        girdtemplateString += "1fr "}
    }
    return girdtemplateString;
}

export default gridColumns