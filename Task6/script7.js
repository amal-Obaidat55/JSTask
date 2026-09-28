fetch("menu.json")
    .then(Response => Response.json())
    .then(menuItems => {
        let table =`<table border=1>
        <tr>
        <th>Name</th>
        <th>price</th>
        <th>Availability</th>
        </tr>`
        for (let i = 0; i < menuItems.length; i++) {
            let available = menuItems[i].isAvailable?"Available":"Not Available";
            table+= `<tr>
            <td>${menuItems[i].name}</td>
            <td> ${menuItems[i].price}</td>
            <td>${available}</td>
            </tr>
             `
        }
        table+=`</table>`
        document.getElementById("items").innerHTML=table
        localStorage.clear();
        for(let i=0 ; i<menuItems.length;i++){
            localStorage.setItem("Name"+(i+1),menuItems[i].name);
            localStorage.setItem("price"+(i+1),menuItems[i].price);
            localStorage.setItem("availabel"+(i+1),menuItems[i].isAvailable);
            
        }
    })