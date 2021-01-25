
import { Promise } from "bluebird";

Promise.config({ cancellation: true });

export function user(stop) {
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(stop){
          reject("Stop");
        }
        try {
          console.log("Resolving in mock_api");
          let userList = [
            { id: 0, name: "one" },
            { id: 1, name: "two" },
            { id: 2, name: "three" },
            { id: 3, name: "four" },
            { id: 4, name: "five" },
          ];
          console.log("in mock_api Promise > userList > ", userList , " typeof ", typeof userList); 
          resolve(userList);   
        }
        catch (err){
          console.error("Catch error in mock_api");
          reject(err); 
        }
      }, 3000);
    });  


}



