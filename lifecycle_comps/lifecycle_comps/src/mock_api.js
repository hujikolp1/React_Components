
import { Promise } from "bluebird";
import axios from 'axios'; 

Promise.config({ cancellation: true });

export function user(cancel) {
  return new Promise((resolve, reject) => {
    let results; 
    if (cancel) {
        reject(cancel);
    } 
    else {
        axios.get("https://randomuser.me/api/").then(res => {
            results = res.data.results;
            console.log(results);
        });
        resolve(results);
    }
    
  });
}