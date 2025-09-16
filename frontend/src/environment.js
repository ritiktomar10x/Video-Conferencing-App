let is_Pod = true;
const server_link = "https://video-conferencing-backend-tzqz.onrender.com";
const server = is_Pod?`${server_link}/api/v1/users/`:"http://localhost:8080/api/v1/users/";

export default server;