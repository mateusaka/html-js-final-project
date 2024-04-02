function addElement(name, content) {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    const td = document.createElement("td");

    th.textContent = name;
    td.textContent = content;
    tr.appendChild(th);
    tr.appendChild(td);

    return tr;
}

function createTable(planet) {
    const content = document.getElementById("content");
    const table = document.createElement("table");
    
    content.innerHTML = "";

    table.appendChild(addElement("Name", planet.name));
    table.appendChild(addElement("Climate", planet.climate));
    table.appendChild(addElement("Population", planet.population));
    table.appendChild(addElement("Terrain", planet.terrain));

    content.appendChild(table);
}

async function search() {
    const res = await fetch("https://swapi.dev/api/planets/")
    const planets = await res.json();

    const input = document.getElementById("input").value;

    for(let i = 0; i < planets.results.length; i++) {
        if(planets.results[i].name.toLowerCase() === input.toLowerCase()) {
            createTable(planets.results[i]);
            return;
        }
    }

    const content = document.getElementById("content");
    const p = document.createElement("p");

    content.innerHTML = "";
    p.textContent = "Not found!"

    content.appendChild(p);
}