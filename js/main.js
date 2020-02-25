
let icons = document.getElementsByClassName("menu-icn")
let label = document.getElementById("label")
let sections = document.getElementsByClassName("section")
let section_links = document.getElementsByClassName("sect-link")

for (let i = 0; i < icons.length; i++) {
    let attr = icons[i].getAttribute("dt-title")
    if (attr != null) {
        icons[i].addEventListener("mouseover", (e) => {
            label.style.display = "block"
            let el = e.target
            let posX = e.target.offsetLeft - 2
            let posY = e.target.offsetTop - 2
            if (el.tagName == "A") {
                posY += 12
            }
            label.innerHTML = attr
            label.style.top = posY
            label.style.left = 65
        })

        icons[i].addEventListener("mouseout", (e) => {
            label.style.display = "none"
        })
    }
}

for (let i = 0; i < section_links.length; i++) {
    let sect = section_links[i].getAttribute("dt-section")
    if (sect != null) {
        section_links[i].addEventListener("click", (e) => {
            ShowSection(sect)
        })
    }
}

let ShowSection = (elem) => {
    HideSections()
    let el = document.getElementById("sec-" + elem)
    el.style.display = "flex";
    setTimeout(() => {
        el.style.width = "100%"
        el.style.height = "100%"
    },500)
}

let HideSections = () => {
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.width = "0";
        sections[i].style.height = "0";
        sections[i].style.display = "none";
    }
}

ShowSection("home")