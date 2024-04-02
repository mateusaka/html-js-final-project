async function setButtons() {
    const res = await fetch("https://swapi.dev/api/planets/")
    const planets = await res.json();

    const container = document.getElementById("buttons")

    // console.log("Planets:");
    planets.results.forEach(planet =>{
        const button = document.createElement("button");
        button.textContent = planet.name;
        container.appendChild(button);
    });
}

setButtons();