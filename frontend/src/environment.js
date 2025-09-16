let is_Pod = true;
const server = is_Pod?`"/api/v1/users/"`:"http://localhost:8080/api/v1/users/";

export default server;