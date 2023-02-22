const xhr = new XMLHttpRequest();

// metodo get
xhr.open("GET", "https:/url");
xhr.send();
xhr.responseType = "json";
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const data = xhr.response;
    console.log(data);
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};

// metodo post
xhr.open("POST", "https://url");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
const body = JSON.stringify({
  title: "Hello World",
  body: "My POST request",
  userId: 900,
});
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 201) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};

//metodo delete
xhr.open("DELETE", "https://url");
xhr.onload = function () {
  var data = JSON.parse(xhr.responseText);
  if (xhr.readyState == 4 && xhr.status == "200") {
    console.log(data);
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};
xhr.send();
