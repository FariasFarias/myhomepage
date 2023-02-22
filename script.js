function mudarImg(direction)
{
    img = document.querySelector("#img");
    path = img.getAttribute('src');

    imgNum = Number.parseInt(path[7]);
    
    if(direction == 'next')
    {
        img.setAttribute('src',`images/${(imgNum + 1) % 3}.jpg`);
    }
    else if(direction == 'prev')
    {
        img.setAttribute('src', `images/${((imgNum - 1) + 3) % 3}.jpg`);  
    }
}

function submitName()
{
    txt = document.querySelector("#text");
    inputName = document.querySelector("#input").value; 
    chest = document.querySelector("#chest");

    if (inputName != '')
    {
        txt.innerHTML = `It's dangerous to go alone, ${inputName.trim().charAt(0).toUpperCase() + inputName.trim().slice(1)}!<br>Take this!`;
        txt.style.display = 'block';
        chest.style.display = 'block';

        document.querySelector("#question").style.display = "none";
        document.querySelector("#input").style.display = "none";
        document.querySelector("#btn").style.display = "none"
    }
    else
    {
        alert("Tell me your name!")
    }
}

function openChest()
{
    document.querySelector("#chest").setAttribute("src", '../images/cat.png');
    txt = document.querySelector("#text");

    txt.innerHTML = "Congratulation! you got a cute cat!";
    txt.style.color = "Green";
}