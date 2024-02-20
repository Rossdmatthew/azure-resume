window.addEventListener('DOMContentLoaded', (event) =>{
        getVisitCount();
})

const funstionApi = 'http://localhost:7071/api/GetVisitorCounter';

const getVisitCount = () => {
    let count = 30
    fetch(funstionApi).then(response => {
            return response.json ()
    }).then(response =>{
            console.log("Website called function API.");
            count =  response.count;
            document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}