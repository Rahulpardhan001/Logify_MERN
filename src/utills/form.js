 export const handleInputChange = (event) => {
    console.log("event chagne",event)
    const { name, value } = event.target;
    return { name, value };
  };
  