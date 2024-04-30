fetch("./script/artwork.json")
    .then(response => response.json())
    .then(imageDB => {
        var varDB = imageDB.Artwork;
        var result = varDB.filter(obj => obj.type == "Alcohol Ink");
        
        var output = document.querySelector("#artTable tbody");
        var rows = "";

        //Goes through each instance of the result and appends the code onto the table
        for(let art of result){
            rows +=`
                <tr>
                    <td><a href='${art.etsyLink}' target="_blank"><img src = '${art.imgLink}' alt = '${art.imgAlt}' class='${art.imgClass}'></a></td>
                    <td class="name">${art.name}</td>
                    <td class="desc">${art.imgDesc}</td>
                    <td class="high"><ul><li>${art.imgHigh.high1}</li><li>${art.imgHigh.high2}</li><li>${art.imgHigh.high3}</li><li>${art.imgHigh.high4}</li></ul></td>
                    <td class="price">$${art.imgPrice}</td>
                </tr>
            `
        }
        output.innerHTML = rows;
    });