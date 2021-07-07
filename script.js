var btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    var n;
    let x = new XMLHttpRequest();
    x.open("GET", "http://localhost:8081");
    x.onreadystatechange = function() {
        if(x.readyState == 4){
            if (x.status == 200){
                n=JSON.parse(x.responseText);
                var lista = document.getElementById("lista");
                k = Object.keys(n);
                for (var m in k) {
                    lista.innerHTML += "<li>" + k[m] + ":" + n[k[m]] + "</li>";
                }
            }
        }
    };
    x.send();
});
