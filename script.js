let box = document.createElement("div");
box.style.width = "100px"
box.style.height = "100px"
box.style.backgroundColor = "black";
box.style.position = "relative";
box.style.left = "45%"
box.style.top="35%"
box.style.color = "white"
box.style.display = "flex"
box.style.justifyContent = "center"
box.style.alignItems = "center"
box.style.borderRadius="5px"

document.body.appendChild(box)

count = setTimeout(() => {
    box.innerText = "10"
    setTimeout(() => {
        box.innerText = "9"
        box.style.backgroundColor="brown"
        setTimeout(() => {
            box.innerText = "8"
            box.style.backgroundColor="orange"
            setTimeout(() => {
                box.innerText = "7"
                box.style.backgroundColor="green"
                setTimeout(() => {
                    box.innerText = "6"
                    box.style.backgroundColor="yellow"
                    setTimeout(() => {
                        box.innerText = "5"
                        box.style.backgroundColor="lightgreen"
                        setTimeout(() => {
                            box.innerText = "4"
                            box.style.backgroundColor="red"
                            setTimeout(() => {
                                box.innerText = "3"
                                box.style.backgroundColor="orange"
                                setTimeout(() => {
                                    box.innerText = "2"
                                    box.style.backgroundColor="lightblue"
                                    setTimeout(() => {
                                        box.innerText = "1"
                                        box.style.backgroundColor="darkgreen"
                                        setTimeout(() => {
                                            box.innerText = "Happy Independence Day"
                                            box.style.width="200px"
                                            box.style.height="100px"
                                            box.style.borderRadius="10px"
                                            box.style.backgroundColor="orange"
                                        }, 1000)
                                    }, 1000);
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000);
}, 1000)
