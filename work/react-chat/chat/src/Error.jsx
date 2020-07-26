import React from 'react';
function Error({error}){
  console.log(error);
  return(
    <div className = "error">
      <p>{error}</p>
    </div>
  )
}
export default Error;
