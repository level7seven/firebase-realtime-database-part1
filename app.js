(function() {

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
