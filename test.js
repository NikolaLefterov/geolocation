function getLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const locationElement = document.getElementById("location");
      locationElement.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
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