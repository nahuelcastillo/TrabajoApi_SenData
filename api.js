var URL = "https://jsonplaceholder.typicode.com/users"
const btt = document.getElementById("btt");
const data = {nombre: "",
              apellido: "",
              date: ""}

btt.addEventListener("click", function(){

    const Vname = document.getElementById("name").value;
    const Vlname = document.getElementById("lname").value;
    const Vdate = document.getElementById("date").value;

    data.nombre = Vname;
    data.apellido = Vlname;
    data.date = Vdate;

    fetch(URL, {
        method: "POST",
        body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .catch(error => console.error("Error", error))
    .then(Response => console.log(data, Response))
})

