var mymap = L.map('mapid').setView([20.5937, 78.9629], 5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.satellite'
}).addTo(mymap);

function Marker(lat, lng, state, capital) {
    var result = L.marker([lat, lng]).addTo(mymap);
    result.bindPopup("State:" + items[i]["state"] + "<br>Capital :" + items[i]["capital"]);

}

var items = [
    { lat: 14.7504291, lng: 78.57002559, state: 'Andhra Pradesh ', capital: ' Hyderabad ' },
    { lat: 27.10039878, lng: 93.61660071, state: 'Arunachal Pradesh ', capital: ' Itanagar ' },
    { lat: 26.7499809, lng: 94.21666744, state: 'Assam ', capital: ' Dispur ' },
    { lat: 25.78541445, lng: 87.4799727, state: 'Bihar ', capital: ' Patna ' },
    { lat: 22.09042035, lng: 82.15998734, state: 'Chhattisgarh ', capital: ' Raipur ' },
    { lat: 15.491997, lng: 73.81800065, state: 'Goa ', capital: ' Panaji ' },
    { lat: 23.2156, lng: 72.6369, state: 'Gujarat ', capital: ' Gandhinagar ' },
    { lat: 28.45000633, lng: 77.01999101, state: 'Haryana ', capital: ' Chandigarh ' },
    { lat: 31.10002545, lng: 77.16659704, state: 'Himachal Pradesh ', capital: ' Shimla ' },
    { lat: 34.29995933, lng: 74.46665849, state: 'Jammu and Kashmir ', capital: ' Srinagar ' },
    { lat: 23.80039349, lng: 86.41998572, state: 'Jharkhand ', capital: ' Ranchi ' },
    { lat: 12.57038129, lng: 76.91999711, state: 'Karnataka ', capital: ' Bengaluru ' },
    { lat: 8.900372741, lng: 76.56999263, state: 'Kerala ', capital: ' Thiruvananthapuram ' },
    { lat: 21.30039105, lng: 76.13001949, state: 'Madhya Pradesh ', capital: ' Bhopal ' },
    { lat: 19.25023195, lng: 73.16017493, state: 'Maharashtra ', capital: ' Mumbai ' },
    { lat: 24.79997072, lng: 93.95001705, state: 'Manipur ', capital: ' Imphal ' },
    { lat: 25.57049217, lng: 91.8800142, state: 'Meghalaya ', capital: ' Shillong ' },
    { lat: 23.71039899, lng: 92.72001461, state: 'Mizoram ', capital: ' Aizawl ' },
    { lat: 25.6669979, lng: 94.11657019, state: 'Nagaland ', capital: ' Kohima ' },
    { lat: 19.82042971, lng: 85.90001746, state: 'Odisha ', capital: ' Bhubaneswar ' },
    { lat: 31.51997398, lng: 75.98000281, state: 'Punjab ', capital: ' Chandigarh ' },
    { lat: 26.44999921, lng: 74.63998124, state: 'Rajasthan ', capital: ' Jaipur ' },
    { lat: 27.3333303, lng: 88.6166475, state: 'Sikkim ', capital: ' Gangtok ' },
    { lat: 12.92038576, lng: 79.15004187, state: 'Tamil Nadu ', capital: ' Chennai ' },
    { lat: 23.83540428, lng: 91.27999914, state: 'Tripura ', capital: ' Agartala ' },
    { lat: 27.59998069, lng: 78.05000565, state: 'Uttar Pradesh ', capital: ' Lucknow ' },
    { lat: 30.3165, lng: 78.0322, state: 'Uttarakhand ', capital: ' Dehradun ' },
    { lat: 22.58039044, lng: 88.32994665, state: 'West Bengal ', capital: ' Kolkata ' }
]
for (var i = 0; i < items.length; i++) {
    if (items[i].lat && items[i].lng)
        Marker(items[i].lat, items[i]["lng"], items[i]["state"], items[i]["capital"]);
}

document.body.onload = setCapitalName;

function setCapitalName() {
    var newDiv = [];
    var Content = [];
    var currentDiv = document.getElementById("statesDiv");
    for (var a = 0; a < items.length; a++) {
        newDiv[a] = document.createElement("p");
        Content[a] = document.createTextNode(a + 1 + ". " + items[a]["state"] + " : " + items[a]["capital"]);
        newDiv[a].appendChild(Content[a]);

        currentDiv.appendChild(newDiv[a]);
    }
}