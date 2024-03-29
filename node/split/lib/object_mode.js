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

var isObject = require( '@stdlib/assert/is-plain-object' );
var format = require( '@stdlib/string/format' );
var assign = require( '@stdlib/object/assign' );
var Stream = require( './main.js' );


// MAIN //

/**
* Returns a stream with `objectMode` set to `true`.
*
* @param {Options} [options] - stream options
* @param {(string|RegExp)} [options.sep=/\r?\n/] - separator used to split streamed data
* @param {(string|null)} [options.encoding=null] - specifies how `Buffer` objects should be decoded to `strings`
* @param {NonNegativeNumber} [options.highWaterMark] - specifies the `Buffer` level for when `write()` starts returning `false`
* @param {boolean} [options.allowHalfOpen=false] - specifies whether the stream should remain open even if one side ends
* @param {boolean} [options.writableObjectMode=false] - specifies whether the writable side should be in object mode
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {SplitStream} split stream
*
* @example
* var stream = objectMode({
*     'sep': ','
* });
*
* stream.write( 'a,b,c' );
* stream.end();
*/
function objectMode( options ) {
	var opts;
	if ( arguments.length ) {
		if ( !isObject( options ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
		}
		opts = assign( {}, options );
	} else {
		opts = {};
	}
	opts.objectMode = true;
	return new Stream( opts );
}


// EXPORTS //

module.exports = objectMode;
