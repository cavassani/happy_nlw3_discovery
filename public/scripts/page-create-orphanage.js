//create map
const map = L.map('mapid').setView([-21.5819173,-50.1670031], 15);

// create and add the tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

//create adn add marker
map.on('click', function(event) {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document,querySelector('[name=lat]').value = lat;
    document,querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], { icon}).addTo(map)
})

//add photos
function addPhotoField() {
    // pick photo container #images
    const container = document.querySelector('#images')
    //pick container for duplicate .new-upload
    const fieldContainer = document.querySelectorAll('.new-upload')
    //clone last image added
    const newFieldContainer = fieldContainer[fieldContainer.length -1].cloneNode(true)

    //verify if  is null
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }

    //clean field before add on images container
    input.value = ""

    //add clone to container #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldContainer = document.querySelectorAll('.new-upload')

    if(fieldContainer.length <= 1) {
        //clean field
        span.parentNode.children[0].value = ""

        return
    }
    //delete field
    span.parentNode.remove();
}

//change true  false
function toggleSelect(event) {
    //remove active class from buttons
    document.querySelectorAll('.button-select button').forEach(function(button) {
        button.classList.remove('active')
    })
    //put class active
    const button = event.currentTarget
    button.classList.add('active')
 
    //update input hidden
    const input = document.querySelector('[name="open_on_weekends"]')

     //verify if sim or no
    input.value = button.dataset.value

}

function validade(event) {

    //validar se lat e lng estao preenchidos
    const needsLatAndLng = false;
    if(needsLatAndLng) {
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }


}