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