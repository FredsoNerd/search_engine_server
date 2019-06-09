
get_btn.onclick = async function() {
  const text_query = document.getElementById("text_query").value    
  const URL = "http://localhost:8080/query?text="+text_query;
  
  fetch(URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.getElementById('output').innerHTML = data;
    })
    data = '{"pages":[[1,2],[2,2],[3,2],[4,2]]}';
    aux = '';
    obj = JSON.parse(data);
    for (i = 0; i < obj.pages.length; i++) {
        aux += '</br> <a href = "https://www.google.com/?gws_rd=ssl">' + obj.pages[i][0] + '</a>';
    }
    document.getElementById('output').innerHTML = aux;
}