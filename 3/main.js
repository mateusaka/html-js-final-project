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

async function setButtons() {
    const res = await fetch("https://swapi.dev/api/planets/")
    const planets = await res.json();

    const buttons = document.getElementById("buttons");

    // console.log("Planets:");
    planets.results.forEach(planet =>{
        const button = document.createElement("button");
        button.textContent = planet.name;
        button.addEventListener("click", () => createTable(planet));

        buttons.appendChild(button);
    });
}

setButtons();