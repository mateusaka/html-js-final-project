async function showPlanets() {
    const res = await fetch("https://swapi.dev/api/planets/")
    const planets = await res.json();

    console.log("Planets:");
    planets.results.forEach(planet => console.log(planet.name));
}

showPlanets();