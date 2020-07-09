(function() {
    var firebaseConfig = {
        apiKey: "AIzaSyDXzYBrzEiokZaFApZs14L5RxWuxx1TJdM",
        authDomain: "fir-node-2027f.firebaseapp.com",
        databaseURL: "https://fir-node-2027f.firebaseio.com",
        projectId: "fir-node-2027f",
        storageBucket: "fir-node-2027f.appspot.com",
        messagingSenderId: "865807851567",
        appId: "1:865807851567:web:c89f316ba044c1b1d926da",
        measurementId: "G-MLH8C669P0"
    };
    firebase.initializeApp(firebaseConfig);

    // Get elements
    const preObject = document.getElementById('object')
    const ulList = document.getElementById('list')

    // Create references
    const dbRefObject = firebase.database().ref().child('object')
    const dbRefList = dbRefObject.child('hobbie')

    // Sync object changes
    dbRefObject.on('value', snap => {
        preObject.innerText = JSON.stringify(snap.val(), null, 3)
    });

    // Sync list changes 
    dbRefList.on('child_added', snap => {
        const li = document.createElement('li');
        li.innerText = snap.val();
        li.id = snap.key;
        ulList.appendChild(li);
    });

    dbRefList.on('child_changed', snap => {
        const liChanged = document.getElementById(snap.key)
        liChanged.innerText = snap.val();
    });

    dbRefList.on('child_removed', snap => {
        const liToRemove = document.getElementById(snap.key)
        liToRemove.remove();
    });




}());