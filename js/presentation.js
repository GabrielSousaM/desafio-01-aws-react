let button = document.querySelector('.nextPage')
let arrow = document.querySelector('.arrow')
let pageMarkers = document.querySelectorAll('.markers')
let currentPage = window.location.href

function changePageMarker() {
    if (currentPage.includes('presentation1')) {
        pageMarkers[0].style.animation = 'pageMarkerChange 0.4s forwards'
    } else if (currentPage.includes('presentation2')) {
        pageMarkers[1].style.animation = 'pageMarkerChange 0.4s forwards'
    } else if (currentPage.includes('presentation3')) {
        pageMarkers[2].style.animation = 'pageMarkerChange 0.4s forwards'
    }
}

function toNextPage() {
    if (currentPage.includes('presentation1')) {
        window.location.replace("presentation2.html")
    } else if (currentPage.includes('presentation2')) {
        window.location.replace("presentation3.html")
    } else if (currentPage.includes('presentation3')) {
        window.location.replace("login.html")
    }
}

function toPreviousPage() {
    if (currentPage.includes('presentation3')) {
        window.location.replace("presentation2.html")
    } else if (currentPage.includes('presentation2')) {
        window.location.replace("presentation1.html")
    }
}

changePageMarker()
button.addEventListener('click', toNextPage)
arrow.addEventListener('click', toPreviousPage)