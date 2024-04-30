//Data taken from artwork.json
fetch("./script/artwork.json")
    .then(response => response.json())
    .then(imageDB => {
        //Call the method once, and call it again every 5 seconds
        change();
        const imageChanger = setInterval(change, 5000);

        //Changes the image properties every time it is called
        function change(){
            var r = Math.floor(Math.random()*17);
            document.getElementById('slideImage').src = imageDB.Artwork[r].imgLink;
            document.getElementById('slideImage').alt = imageDB.Artwork[r].imgAlt;
            document.getElementById('slideImage').class = imageDB.Artwork[r].imgClass;
            document.getElementById('slideLink').href = imageDB.Artwork[r].etsyLink;
            document.getElementById('slideName').innerHTML = imageDB.Artwork[r].name;
        }
    });