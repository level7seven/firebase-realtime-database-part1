(function() {

    firebase.initializeApp(firebaseConfig);

    // Get elements
    const preObject = document.getElementById('object')

    // Create references
    dbRefObject = firebase.database().ref().child('object')

    // Sync object changes
    dbRefObject.on('value', snap => console.log(snap.val()));








}());