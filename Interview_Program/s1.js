for(let i=5; i>=1; i--){
    for(let j=4; j>=i; j--){
        document.write("&nbsp; ");
    }
    for(let k=1; k<=(i*2)-1; k++){
        document.write("*");
    }
    document.write('<br>')
}