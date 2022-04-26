function loadData(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("demo").innerHTML = this.responseText;
        }else if(this.readyState == 4 && this.status == 404){
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', "https://jsonplaceholder.typicode.com/posts", true);
    xhttp.send();
}