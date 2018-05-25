importScripts('sw-toolbox.js')
toolbox.precache(['index.htm','css/style.css'])
toolbox.router.get('/*', toolbox.networkFirst,{
networkTimeoutSeconds: 5})