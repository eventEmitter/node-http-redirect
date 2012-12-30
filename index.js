


	var http = require( "http" );


	var port = 80;
	process.argv.forEach( function( arg ){
		if ( reg = /--port=([0-9]{1,5})/gi.exec( arg ) ){
			port = parseInt( reg[ 1 ], 10 );
		}
	} );


	var server = http.createServer( function( request, response ){
		response.writeHead( 302, { location: "https://" + request.headers.host + request.url } );
		response.end();
	} );

	server.on( "listening", function(){
		console.log( "server is listening on port", port );
	} );

	server.maxHeadersCount = 50;
	server.listen( port );