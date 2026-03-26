document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let date = document.getElementById("date").value;
  let service = document.getElementById("service").value;

  alert("Booked Successfully!\nName: " + name + "\nDate: " + date + "\nService: " + service);
});
