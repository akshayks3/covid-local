if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"ce7eede6d8eb3152bf75558b4fb61936","url":"404.html"},{"revision":"fbf26a3cfcdd34287c113f256a080aef","url":"e8b626bbb47a2b2ab86f.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"ce7eede6d8eb3152bf75558b4fb61936","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"1139c7f91659b8d1e1f13fd2fdfdf753","url":"static/css/21.f5f9d973.chunk.css"},{"revision":"62b00db1f026d8ca0b595ab66409a4b2","url":"static/css/22.b1ee63fa.chunk.css"},{"revision":"0ff5cf098070438329a1271ddf981ca0","url":"static/js/0.a0c39cc9.chunk.js"},{"revision":"3d8f7b82f8ac4ab7205c1ff4112173c9","url":"static/js/1.a2c78f7e.chunk.js"},{"revision":"a5de44b03fd7f3c7e0d031d024ba6f55","url":"static/js/11.60fa9b7c.chunk.js"},{"revision":"e0b26ca1546140d299dcf53bd8d82f2a","url":"static/js/12.d83d711f.chunk.js"},{"revision":"e354202ed551d734bbd200f0fca96a65","url":"static/js/13.355735f8.chunk.js"},{"revision":"ad4ac6289e4a98e7d246547c9b7f17fd","url":"static/js/14.fd26f1c7.chunk.js"},{"revision":"4f87ced6bbd0eba95d8c08cdc388fabe","url":"static/js/15.d5336327.chunk.js"},{"revision":"fb667bc6e44f2b280a0e430932d4ba0f","url":"static/js/16.3b51b750.chunk.js"},{"revision":"82a5b5436734e56018ff0122262d7fce","url":"static/js/17.dc2578fe.chunk.js"},{"revision":"8aa7153d60e9f643c765e447fb2cc1d0","url":"static/js/18.18849740.chunk.js"},{"revision":"e4d04403fc0ee1c2457400aef79a652e","url":"static/js/19.36e932dd.chunk.js"},{"revision":"f0fbd43ae3c7cb2bce87ae3f37d9b816","url":"static/js/2.b9040596.chunk.js"},{"revision":"dd584c4b5af2cd88ce6702bb6270b701","url":"static/js/20.7e5c3ea3.chunk.js"},{"revision":"b93138a1cb5ffacc0a85d1fb7cfe3630","url":"static/js/21.3a8964f1.chunk.js"},{"revision":"67698a78c2439b8e701e7470e4c71e8a","url":"static/js/22.461bda50.chunk.js"},{"revision":"67f3073a7a06fc87e22cf8d7b72b05d2","url":"static/js/23.18371aa3.chunk.js"},{"revision":"7f294e7131e24bec4260a03defd9a47b","url":"static/js/24.c29f22c7.chunk.js"},{"revision":"bae6e0867b5e5481bb43f9b969bab7e5","url":"static/js/25.e3308d24.chunk.js"},{"revision":"23deca0c1af81b70fc4d458fbc84ca03","url":"static/js/26.4d1c5a86.chunk.js"},{"revision":"e1825ec43c341b95f26b5ff09c711895","url":"static/js/27.6715c1ab.chunk.js"},{"revision":"8a440b4c2f73550eff938fd935f16dbf","url":"static/js/28.da09d2de.chunk.js"},{"revision":"b0a0037fdce0e7a78449151263fc5ba9","url":"static/js/29.40f59c61.chunk.js"},{"revision":"27a89fb9e02bfb3ee389ee4e6ec05ee8","url":"static/js/3.dd34c47e.chunk.js"},{"revision":"aba48b945d7a066339b8fcc83b53bd04","url":"static/js/30.04614c81.chunk.js"},{"revision":"0e74695b4b4eec260fd25702b9b96d3f","url":"static/js/31.5c4e4e3b.chunk.js"},{"revision":"74e9680b365c7186b3643f1f9cce9db0","url":"static/js/32.177efa5e.chunk.js"},{"revision":"97470936ee2c13625645b010b4ee7355","url":"static/js/33.169a5f31.chunk.js"},{"revision":"d3afa77ad6e71cbcf6a5e977335f1e36","url":"static/js/34.ad85b187.chunk.js"},{"revision":"6cd7eb121740db63ec342841f84b4fe2","url":"static/js/35.b4c3f82e.chunk.js"},{"revision":"e772c113d8c69b80cba404b522f113ee","url":"static/js/36.a19ffae5.chunk.js"},{"revision":"e12b31b003bb81ec436715faa52a6b02","url":"static/js/37.c4d59eb4.chunk.js"},{"revision":"4c7c89605e6c66b7c31c6afc82cfeda3","url":"static/js/38.fa527563.chunk.js"},{"revision":"f3be3b2c1c0cc76548b8e288fcc0d2f1","url":"static/js/39.667670ee.chunk.js"},{"revision":"6f2d773a71432e513a78fcdf2626b9a0","url":"static/js/4.2c0898e3.chunk.js"},{"revision":"62db525dabff0d68e94e458615b5b403","url":"static/js/40.ddd3915c.chunk.js"},{"revision":"b0c032cb8fa76ff6599d7d13bfc83c02","url":"static/js/41.f627ab8e.chunk.js"},{"revision":"4226d78ec482deab982c9913bedee197","url":"static/js/42.526d771e.chunk.js"},{"revision":"ff83163c64a1b522213a8a209e78bb1e","url":"static/js/43.76a45e27.chunk.js"},{"revision":"6c468f6c705af73d4848291e904c281b","url":"static/js/44.d725326f.chunk.js"},{"revision":"13cefcd0461769506093a21639276e12","url":"static/js/45.bd4ac566.chunk.js"},{"revision":"a5483a5bb0b0a98302cf07d2452f7244","url":"static/js/46.8c39b76b.chunk.js"},{"revision":"a8aafad414a09028beba3419e3ab0c67","url":"static/js/5.dbe9aa82.chunk.js"},{"revision":"2586bf0c80b72ae133c72b656d3f23b3","url":"static/js/6.59de0973.chunk.js"},{"revision":"685a5ab8c030d3b9b38ab827d8d37336","url":"static/js/7.25f0e432.chunk.js"},{"revision":"0a49b31212a630402c8c3502918143f3","url":"static/js/8.5fa14167.chunk.js"},{"revision":"ea369d9ec0921c00cbc869674a06000f","url":"static/js/main.923aa965.chunk.js"},{"revision":"f110ebc46dc899ea2b2101a084677fa0","url":"static/js/runtime-main.8d3852e4.js"}]);

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
