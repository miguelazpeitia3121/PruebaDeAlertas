// JavaScript Document
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        // Empty
    }

    // alert dialog dismissed
    function alertDismissed() {
        // do something
    }

    // Show a custom alertDismissed
    //
    function showAlert() {
        navigator.notification.alert(
            'Esto es una alerta!',  // message
            alertDismissed,         // callback
            'Prueba de alertas',    // title
            'Done'                  // buttonName
        );
    }
