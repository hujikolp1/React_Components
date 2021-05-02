const users = [
    { first: "User 1", last: "one", age: 1 },
    { first: "User 2", last: "two", age: 2 }
  ];
  
  export function fetchUsers() {
    return new Promise((resolve, reject) => {
      resolve(users);
    });
  }
  
  export function fetchUser(id) {
    return new Promise((resolve, reject) => {
      const user = users[id];
  
      if (user === undefined) {
        reject(`User ${id} not found`);
      } else {
        resolve(user);
      }
    });
  }