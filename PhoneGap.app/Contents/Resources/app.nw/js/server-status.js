function toggleServerStatus() {
    console.log("toggleServerStatus");

    if (global.isServerRunning) {
        // if server is currently running, stop it before opening a new server instance
        setServerOffline();
    } 
    
    fs.exists(localStorage.projDir + "/www", function(exists) {
        if (exists) {
            process.chdir(localStorage.projDir);
            console.log("servidor corriendo");
            console.log("proyecto abierto en: " + localStorage.projDir);

            global.pgServer.listen({ port: localStorage.portNumber })
            .on("complete", function(data) {
                console.log("servidor iniciado en: " + data.address + ":" + data.port);
                global.server = data.server;
                global.isServerRunning = true;
                serverOnlineState(data);
                global.jQuery("#log").prop("disabled", false);
            })
            .on("error", function(e) {
                console.log(e.message);
                global.jQuery("#server-status-label").text(e.message);
            })
            .on("log", function(status, url) {
                console.log(status, url);
                global.jQuery("#serverLog").append(status + " " + url + "\n");
            });
        } else {
            var errMsg = "no existe un proyecto existente en esta carpeta";
            console.log(errMsg);      
            global.jQuery("#server-status").prop("checked", false);
            global.jQuery("#log").prop("disabled", true);
        }
    });
}

function setServerOffline() {
    console.log("servidor detenido");
    global.server.close();
    global.isServerRunning = false;    
}

function serverOfflineState() {
    global.jQuery("#status-field").css("background-color", "rgb(153,153,153)");
    global.jQuery("#server-status-label").text("Servidor desconectado");
    global.jQuery("#status-field").show();  
}

function serverOnlineState(data) {
    global.jQuery("#status-field").show();
    global.jQuery("#status-field").css("background-color", "rgb(43,169,77)");
    global.jQuery("#server-status-label").text("Servidor corriendo en la ruta http://" + data.address + ":" + data.port);
    global.jQuery("#settings-ip").text(data.address + ":");    
}