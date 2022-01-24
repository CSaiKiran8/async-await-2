const getData = async function() {
   try {
      const url = "https://collectionapi.metmuseum.org/public/collection/v1/departments#";
      const data = await fetch(url);
      const dataObject = await data.json();
      
      // console.log(dataObject.departments);
      let departments = dataObject.departments;

      mainContainer.innerHTML = "";
      departments.forEach(department => {
         mainContainer.innerHTML += `
         <div class="container">
         <h3 class="blue">Department ID: ${department.departmentId}</h3> 
         <h4 class="para blue">Display Name: ${department.displayName}</h4> <br />
         </div>
         `;
      });
   } 
   catch(error) {
      console.log(error);
   }
};

getData();