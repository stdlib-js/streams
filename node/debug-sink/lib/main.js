/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var InspectSinkStream = require( './../../../node/inspect-sink' );
var isFunction = require( '@stdlib/assert/is-function' );
var isBuffer = require( '@stdlib/assert/is-buffer' );
var format = require( '@stdlib/string/format' );
var assign = require( '@stdlib/object/assign' );
var inherit = require( '@stdlib/utils/inherit' );
var debug = require( './debug.js' );
var DEFAULTS = require( './defaults.json' );
var NAMESPACE = require( './namespace.js' );
var validate = require( './validate.js' );
var logger = require( './logger.js' );


// MAIN //

/**
* Debug stream constructor.
*
* @constructor
* @param {Options} [options] - stream options
* @param {string} [options.name] - debug namespace
* @param {boolean} [options.objectMode=false] - specifies whether the stream should operate in object mode
* @param {NonNegativeNumber} [options.highWaterMark] - specifies the `Buffer` level for when `write()` starts returning `false`
* @param {boolean} [options.decodeStrings=true] - specifies whether to encode strings as `Buffer` objects before writing data to a returned stream
* @param {string} [options.defaultEncoding='utf8'] - default encoding when not explicitly specified when writing data
* @param {Callback} [clbk] - callback to invoke upon receiving data
* @throws {TypeError} must provide valid options
* @throws {TypeError} must a valid callback argument
* @returns {DebugSinkStream} debug stream
*
* @example
* var stream = new DebugSinkStream({
*     'name': 'my-stream'
* });
*
* stream.write( 'a' );
* stream.write( 'b' );
* stream.write( 'c' );
* stream.end();
*/
function DebugSinkStream( options, clbk ) {
	var opts;
	var name;
	var log;
	var err;
	var cb;
	if ( !(this instanceof DebugSinkStream) ) {
		if ( arguments.length > 1 ) {
			return new DebugSinkStream( options, clbk );
		}
		if ( arguments.length === 1 ) {
			return new DebugSinkStream( options );
		}
		return new DebugSinkStream();
	}
	opts = assign( {}, DEFAULTS );
	if ( arguments.length > 1 ) {
		if ( !isFunction( clbk ) ) {
			throw new TypeError( format( 'invalid argument. Callback argument must be a function. Value: `%s`.', clbk ) );
		}
		cb = clbk;
		err = validate( opts, options );
	} else if ( arguments.length ) {
		if ( isFunction( options ) ) {
			cb = options;
		} else {
			err = validate( opts, options );
		}
	}
	if ( err ) {
		throw err;
	}
	if ( opts.name ) {
		name = NAMESPACE + ':' + opts.name;
	} else {
		name = NAMESPACE;
	}
	log = logger( name );

	debug( 'Creating a writable stream configured with the following options: %s.', JSON.stringify( opts ) );
	InspectSinkStream.call( this, opts, inspect );

	return this;

	/**
	* Callback invoked upon receiving a new chunk.
	*
	* @private
	* @param {*} chunk - received chunk
	* @param {NonNegativeInteger} idx - chunk index
	* @returns {void}
	*/
	function inspect( chunk, idx ) {
		if ( cb ) {
			debug( 'Received a new chunk. Chunk: %s. Index: %d.', chunk.toString(), idx );
			return cb( log, chunk, idx );
		}
		if ( isBuffer( chunk ) ) {
			chunk = chunk.toString();
		}
		chunk = JSON.stringify( chunk );
		debug( 'Received a new chunk. Chunk: %s. Index: %d.', chunk, idx );
		log( 'Chunk: %s. Index: %d.', chunk, idx );
	}
}

/*
* Inherit from the `InspectSinkStream` prototype.
*/
inherit( DebugSinkStream, InspectSinkStream );


// EXPORTS //

module.exports = DebugSinkStream;
