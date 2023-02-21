const library = {
    
    // Class definition.
  
    $webApplication: {
        setInBackgroundChangeCallback: function (callbackPtr) {
            document.addEventListener('visibilitychange', function () {
                dynCall('vi', callbackPtr, [document.hidden]);
            });
        },

        getInBackground: function () {
            return document.hidden;
        },

        setBeforeUnloadCallback: function (callbackPtr) {
            window.addEventListener('beforeunload', function () {
                dynCall('v', callbackPtr);
            });
        },
    },

    // External C# calls.

    SetWebApplicationInBackgroundChangeCallback: function (callbackPtr) {
        webApplication.setInBackgroundChangeCallback(callbackPtr);
    },

    GetWebApplicationInBackground: function () {
        return webApplication.getInBackground();
    },

    SetWebApplicationBeforeUnloadCallback: function (callbackPtr) {
        webApplication.setBeforeUnloadCallback(callbackPtr);
    },
}

autoAddDeps(library, '$webApplication');
mergeInto(LibraryManager.library, library);
