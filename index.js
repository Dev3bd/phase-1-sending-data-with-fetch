const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };

  fetch("http://localhost:3000/dogs", configurationObject)
  .then(response => {
    return response.json();
  })
  .then(object => {
    console.log(object);
  });

  fetch("http://localhost:3000/dogs", configurationObject)
  .then(response => {
    return response.json();
  })
  .then(object => {
    console.log(object);
    // Handle the response here, like updating the DOM
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle errors here
  });

  function submitData(name, email) {
    const formData = {
      name: name,
      email: email,
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData),
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => {
        return response.json();
      })
      .then(data => {
        // Update the DOM with the data
        console.log(data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });
  }
  