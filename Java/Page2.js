function appear() {
    appear() {
    const show=
    document.getElementsByClassName("cuisines")
    const notShow =
    doccument.querySelectorAll(".Thai, Italian")

    for(i=0; i < show.length; i++) {
        show[i].style.display = "block"
    }

    for(n=0; n < notShow.length; n++) {
        notShow[n].style.display = "none"
    }
}