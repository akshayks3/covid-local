if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"797552ba9273d7bcba678d5e9e586a5e","url":"404.html"},{"revision":"fbf26a3cfcdd34287c113f256a080aef","url":"e8b626bbb47a2b2ab86f.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"797552ba9273d7bcba678d5e9e586a5e","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"1139c7f91659b8d1e1f13fd2fdfdf753","url":"static/css/21.f5f9d973.chunk.css"},{"revision":"62b00db1f026d8ca0b595ab66409a4b2","url":"static/css/22.b1ee63fa.chunk.css"},{"revision":"b63f574bae63377bea922753902390e3","url":"static/js/0.74efe6e0.chunk.js"},{"revision":"8d85f94d4a026dba8b85c94d38c68ef0","url":"static/js/1.a86a015b.chunk.js"},{"revision":"9445eb45e94fc066503fa59bfb2d1265","url":"static/js/11.896c0ab3.chunk.js"},{"revision":"2a3fb0c3ece86f821c4b09ed2c0b4a05","url":"static/js/12.99aad12d.chunk.js"},{"revision":"d67a5712955645499adcde161017e7b1","url":"static/js/13.023a6a6b.chunk.js"},{"revision":"6b2b2fe06180103f7771314ce999ebc7","url":"static/js/14.e0dfd5af.chunk.js"},{"revision":"4f45770e29a6e8283eff8cb1ac63327b","url":"static/js/15.30a5c2b2.chunk.js"},{"revision":"6ba2c43c2db3b12b9f7faa4ed3c3702f","url":"static/js/16.5e7f26b5.chunk.js"},{"revision":"948df5d9e0063dd459bd535b3269c71d","url":"static/js/17.32d073d3.chunk.js"},{"revision":"43e155560d3b483bbd2ab91b608f2767","url":"static/js/18.6464130a.chunk.js"},{"revision":"a825b9a417e7b52d0756fc7aabb42ee8","url":"static/js/19.e94c098c.chunk.js"},{"revision":"7db5e03bad90e19cbf2f740d36a98862","url":"static/js/2.1e97f316.chunk.js"},{"revision":"ad91cd6a04d61ae3e5b4a29ff242511c","url":"static/js/20.cdeb389a.chunk.js"},{"revision":"16ab627da72c059d5f74b82633bdc339","url":"static/js/21.73bcfdc8.chunk.js"},{"revision":"a5da4c1fdd89b08cafc8465f6d78f21a","url":"static/js/22.90aa2aba.chunk.js"},{"revision":"a5d06257b0ea27649b4ef9d2917b6c7e","url":"static/js/23.7b813720.chunk.js"},{"revision":"64d8814c682e706a32a65e15f888d4f0","url":"static/js/24.63d1b3f0.chunk.js"},{"revision":"2c5bfaaaa38caf36f93d0a3ffd44abde","url":"static/js/25.5366b59c.chunk.js"},{"revision":"2154bcfed145201c5ef491d4950ca9f2","url":"static/js/26.7aea04b2.chunk.js"},{"revision":"e241e18d1130cbb1202bdc1b1a09e312","url":"static/js/27.c77b5849.chunk.js"},{"revision":"b945089831d6af1f4a9b3124a53e2cb4","url":"static/js/28.cc6ecbbd.chunk.js"},{"revision":"9dadffc4609b60edc4222667179df06d","url":"static/js/29.5d33f7ae.chunk.js"},{"revision":"e988db2951fa087d134f9940994fccb7","url":"static/js/3.b1136739.chunk.js"},{"revision":"5b7c279cc54fdad510716995b60c285e","url":"static/js/30.ac5da34d.chunk.js"},{"revision":"d5c9fb8d0acf85f9846d7fa0630713cf","url":"static/js/31.be38f133.chunk.js"},{"revision":"9f4534ff7a9f51e5b2aeb5e2e16a22b3","url":"static/js/32.1e2c73f9.chunk.js"},{"revision":"34d0ace01ba65bece5ba5081479e66a4","url":"static/js/33.3471617a.chunk.js"},{"revision":"d4fa2ff1601bd607394262ae8ec0eabc","url":"static/js/34.59ebb31f.chunk.js"},{"revision":"2291ac85caded08852bea5fcf3e19e26","url":"static/js/35.f05c9466.chunk.js"},{"revision":"1f5af341c8dcebe96ecd0328463f1650","url":"static/js/36.247299e0.chunk.js"},{"revision":"192a9dfc327ba936f5a03ef5113efff7","url":"static/js/37.c5d27b6a.chunk.js"},{"revision":"53935d5032181c1d19ae9557bd4a0d55","url":"static/js/38.5b4ecf79.chunk.js"},{"revision":"64e0716184ba5371321ff9b1494054d8","url":"static/js/39.418dac0a.chunk.js"},{"revision":"f6df6451aae4928d77e021baafcde9d6","url":"static/js/4.7d0a9b77.chunk.js"},{"revision":"b4eb5f902158b560b08b213be3b46c80","url":"static/js/40.eeb90b08.chunk.js"},{"revision":"46aa53681667c6fa7365e4df18cabbb2","url":"static/js/41.28003ec7.chunk.js"},{"revision":"16d2ec6794f744d0b54c3be9395fc962","url":"static/js/42.3984bcaa.chunk.js"},{"revision":"cf89e065cbb0d64c69c47f3331e350e1","url":"static/js/43.fdfcd856.chunk.js"},{"revision":"ea63efd65c390e6d1e4362d2d89eeb7d","url":"static/js/44.98719c07.chunk.js"},{"revision":"ecb1307faf74556192fa8fda0c107e38","url":"static/js/45.a1aacaa8.chunk.js"},{"revision":"2ca56f448949c01690efba8839ce4cca","url":"static/js/46.c3545ee9.chunk.js"},{"revision":"50e865bea9514d60a4832afeb453037d","url":"static/js/5.8a413375.chunk.js"},{"revision":"e4b98bf12686f1cfc4a3d4d5a2ea595b","url":"static/js/6.063d123d.chunk.js"},{"revision":"5b2ddebdd608931ef4fb19273c0b3d58","url":"static/js/7.31a7ca1e.chunk.js"},{"revision":"4bc517ea7e6dc968e87c4343d88cbc04","url":"static/js/8.3aadee6f.chunk.js"},{"revision":"877bfb2154c7554e6888ab6e5cf14766","url":"static/js/main.0813e127.chunk.js"},{"revision":"95f52813364e736b5080014bce51a4ec","url":"static/js/runtime-main.e771ebba.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://data\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
