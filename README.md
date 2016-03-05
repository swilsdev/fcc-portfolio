# template-node-live
Base template for developing new projects. Automates having to restart node and refresh the browser to see changes.

Clone to desktop, npm install dependencies and click start.bat to run the server using gulp. Install Live-reload in the browser and connect to server at localhost:3000. Click the black circle in the browser toolbar and changes to source code when saved will trigger nodemon to restart and then gulp will call call livereload.reload(); to trigger a browser refresh. 
