function getLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const speedMetersPerSecond = position.coords.speed;

      // Convert speed to km/h
      const speedKilometersPerHour = speedMetersPerSecond * 3.6;

      const locationElement = document.getElementById("location");
      locationElement.textContent = `Latitude: ${latitude}, Longitude: ${longitude}, Speed: ${speedKilometersPerHour.toFixed(2)} km/h, Speed in M/S: ${speedMetersPerSecond}`;
    }, function(error) {
      console.error("Error getting location:", error);
    });
  } else {
    alert("Geolocation is not supported in your browser.");
  }
}

// Call getLocation initially to display the location
getLocation();

// Update the location every 2 seconds
setInterval(getLocation, 2000);
