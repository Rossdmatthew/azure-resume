window.addEventListener('DOMContentLoaded', (event) =>{
        getVisitCount();
    })
    
    const productionApiUrl = 'https://getvisitorcountf.azurewebsites.net/api/getvisitorcounterf'
    const localApiUrl = 'http://localhost:7071/api/GetVisitorCounterF';
    
    const getVisitCount = () => {
        let count = 30;
        fetch(productionApiUrl).then(response => {
            return response.json()
        }).then(response =>{
            console.log("Website called function API.");
            count =  response.count;
            document.getElementById("counter").innerText = count;
        }).catch(function(error){
            console.log(error);
        });
        return count;
    }