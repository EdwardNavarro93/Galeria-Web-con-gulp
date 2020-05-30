//implementacion de la libreria macy que permite moldear como se veran los elementos de l galeria

document.getElementById('gallery') &&
    new Macy({
        container: '#gallery',
        trueOrder: false,
        waitForImages: false,
        useOwnImageLoader:false,
        debug: true,
        mobileFirst: true,
        Columns: 1,
        margin: {y:15, x:15},
        breakAt:{
            1200:5,
            1024:4,
            750:3,
            570:2,
            361:1
        } 
    })