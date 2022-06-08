const gridColumns = (noOfColumns) => {
    let girdtemplateString="";
    for(let i=0; i<noOfColumns; i++){
        girdtemplateString += "1fr "
    }
    return girdtemplateString;
}

export default gridColumns