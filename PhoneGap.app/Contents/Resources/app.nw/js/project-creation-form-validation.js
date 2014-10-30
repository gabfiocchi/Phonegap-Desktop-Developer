function displayPhoneGapProjectInFolderError() {
    global.jQuery("#newProjectOverlay").addClass("new-project-overlay-project-path-error");
    global.jQuery("#project-path-error-message").text("La carpeta seleccionada ya contiene un proyecto PhoneGap. Por favor, seleccione una carpeta diferente.");
    displayProjectPathError();
}

function displayProjectPathError() {
    global.jQuery("#new-project-path-label").addClass("required"); 
    global.jQuery("#project-path-warning-icon").show();
    global.jQuery("#project-path-error-message").show();
}

function hideProjectPathError() {
    global.jQuery("#new-project-path-label").removeClass("required");
    global.jQuery("#project-path-warning-icon").hide();
    global.jQuery("#project-path-error-message").hide();
}

function displayProjectNameError() {
    global.jQuery("#new-project-name-label").addClass("required");
    global.jQuery("#projectName").addClass("required-input project-creation-warning-icon");    
    global.jQuery("#project-name-error-message").text("Usted debe darle un nombre a su nuevo proyecto.");
    global.jQuery("#project-name-warning").show();
    global.jQuery("#project-name-error-message").show();
}

function hideProjectNameError() {
    global.jQuery("#new-project-name-label").removeClass("required");
    global.jQuery("#projectName").removeClass("required-input project-creation-warning-icon");
    global.jQuery("#project-name-warning").hide();
    global.jQuery("#project-name-error-message").hide();
}

function displayDuplicateProjectNameError() {
    global.jQuery("#new-project-name-label").addClass("required");
    global.jQuery("#projectName").addClass("required-input project-creation-warning-icon");    
    global.jQuery("#project-name-error-message").text("Una carpeta con este nombre ya existe en la ruta de acceso local seleccionado. Por favor, elija un nuevo nombre o una nueva ruta de acceso local.");
    global.jQuery("#project-name-warning").show();
    global.jQuery("#project-name-error-message").show();    
}

function hideDuplicateProjectNameError() {
    hideProjectNameError();
}

function displayProjectIdError() {
    global.jQuery("#new-project-id-label").addClass("required");
    global.jQuery("#project-id").addClass("required-input project-creation-warning-icon");
    global.jQuery("#project-id-warning").show();
    global.jQuery("#project-id-error-message").show();   
}

function hideProjectIdError() {
    global.jQuery("#new-project-id-label").removeClass("required");
    global.jQuery("#project-id").removeClass("required-input project-creation-warning-icon");
    global.jQuery("#project-id-warning").hide();
    global.jQuery("#project-id-error-message").hide();
}

function adjustProjectCreationFormHeight(isProjectPathEmpty, isProjectNameEmpty, isProjectIdEmpty) {
    if (isProjectPathEmpty && isProjectNameEmpty && isProjectIdEmpty) {
        // change project creation dialog height to accommodate for project path, project name & project id errors
        global.jQuery("#newProjectOverlay").addClass("new-project-overlay-all-errors");
    } else {
        if (isProjectPathEmpty) {
            if (!isProjectNameEmpty && !isProjectIdEmpty) {
                // change project creation dialog height to accommodate for project path error only
                global.jQuery("#newProjectOverlay").addClass("new-project-overlay-project-path-error");
            } else {
                // change project creation dialog height to accommodate for project path error && (project name || project id)
                global.jQuery("#newProjectOverlay").addClass("new-project-overlay-project-path-and-other-error");
            }
        } else {
            if (isProjectNameEmpty) {
                if (isProjectIdEmpty) {
                    // change project creation dialog height to accommodate for project name && project id error                       
                    global.jQuery("#newProjectOverlay").addClass("new-project-overlay-project-name-and-project-id-error");
                } else {
                    // change project creation dialog height to accommodate for project name error only
                    global.jQuery("#newProjectOverlay").addClass("new-project-overlay-project-name-or-project-id-error");
                }
            } else {
                if (isProjectIdEmpty) {
                    // change project creation dialog height to accommodate for project id error only
                    global.jQuery("#newProjectOverlay").addClass("new-project-overlay-project-name-or-project-id-error");
                }
            }            
        }
    }     
}

function resetProjectCreationFormHeight() {
    global.jQuery("#newProjectOverlay").removeClass("new-project-overlay-all-errors");
    global.jQuery("#newProjectOverlay").removeClass("new-project-overlay-project-path-error");
    global.jQuery("#newProjectOverlay").removeClass("new-project-overlay-project-path-and-other-error");
    global.jQuery("#newProjectOverlay").removeClass("new-project-overlay-project-name-and-project-id-error");
    global.jQuery("#newProjectOverlay").removeClass("new-project-overlay-project-name-or-project-id-error");
    global.jQuery("#newProjectOverlay").removeClass("new-project-overlay-duplicate-project-name-error");     
}

function resetProjectCreationForm() {
    global.jQuery("#projectName").val("");
    global.jQuery("#project-id").val("");
    global.jQuery("#projectDirectory").val("");
    global.jQuery("#projectPath").addClass("overlay-form-item-description");
    global.jQuery("#projectPath").addClass("italics");
    global.jQuery("#projectPath").text("Por favor, elija una ruta local");
    resetProjectCreationFormHeight();
}