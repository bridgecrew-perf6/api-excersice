async function search1(){
    try{
    const data=await fetch("https://api.openbrewerydb.org/breweries")
    const getdata= await data.json()
    console.log(getdata)
    let main=document.getElementById("main")
    for(var i=0;i<getdata.length;i++)
    {
       main.innerHTML=main.innerHTML+` <div class="card para" style="width: 18rem;">
       <div class="card-body">
         <h5 class="card-title"></h5>
         <h6 class="card-subtitle mb-2 text-muted"></h6>
         <p id="para">
         ID:${getdata[i].id}<br>
         Name:${getdata[i].name}<br>
         Company:${getdata[i].brewing_company}<br>
         City:${getdata[i].city}<br>
         country:${getdata[i].country}<br>
         Phone:${getdata[i].phone}</p>
       </div>
     </div>`
        
    }
    }
    catch{
        console.log("error")
    }
}

