
import { Promise } from "bluebird";
import axios from 'axios'; 

Promise.config({ cancellation: true });

export async function user(cancel) {
  return new Promise((resolve, reject) => {
    let results; 
    try {
        axios.get("https://randomuser.me/api/").then(res => {
            results = res;
            console.log("mock_api all >>> ", results);
            console.log("mock_api name >>> ", results.data.results[0].name.first); 
        });
        resolve(results.data.results[0].name.first);
    }
    catch (err) {
        console.log("Rejecting promise in mock_api"); 
        reject(err);
    } 
    
  });
}