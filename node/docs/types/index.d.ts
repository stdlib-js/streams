/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import debugStream = require( './../../../node/debug' );
import debugSinkStream = require( './../../../node/debug-sink' );
import emptyStream = require( './../../../node/empty' );
import arrayStream = require( './../../../node/from-array' );
import circularArrayStream = require( './../../../node/from-circular-array' );
import constantStream = require( './../../../node/from-constant' );
import iteratorStream = require( './../../../node/from-iterator' );
import stridedArrayStream = require( './../../../node/from-strided-array' );
import inspectStream = require( './../../../node/inspect' );
import inspectSinkStream = require( './../../../node/inspect-sink' );
import joinStream = require( './../../../node/join' );
import splitStream = require( './../../../node/split' );
import stderr = require( './../../../node/stderr' );
import stdin = require( './../../../node/stdin' );
import stdout = require( './../../../node/stdout' );
import transformStream = require( './../../../node/transform' );

/**
* Interface describing the `node` namespace.
*/
interface Namespace {
	/**
	* Returns a debug stream.
	*
	* @param options - stream options
	* @throws must provide valid options
	* @returns stream instance
	*
	* @example
	* var DebugStream = ns.debugStream;
	* var stream = new DebugStream({
	*     'name': 'my-stream'
	* });
	*
	* stream.write( 'a' );
	* stream.write( 'b' );
	* stream.write( 'c' );
	* stream.end();
	*
	* @example
	* var opts = {
	*     'objectMode': true,
	*     'highWaterMark': 64
	* };
	*
	* var factory = ns.debugStream.factory( opts );
	*
	* // Assign each stream to a separate debug namespace...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( factory( 'stream '+i ) );
	* }
	*
	* @example
	* var stream = ns.debugStream.objectMode();
	*
	* stream.write( {'value': 'a'} );
	* stream.write( {'value': 'b'} );
	* stream.write( {'value': 'c'} );
	* stream.end();
	*/
	debugStream: typeof debugStream;

	/**
	* Returns an debug sink stream.
	*
	* @param options - stream options
	* @throws must provide valid options
	* @returns stream instance
	*
	* @example
	* var DebugSinkStream = ns.debugSinkStream;
	* var stream = new DebugSinkStream({
	*     'name': 'my-stream'
	* });
	*
	* stream.write( 'a' );
	* stream.write( 'b' );
	* stream.write( 'c' );
	* stream.end();
	*
	* @example
	* var opts = {
	*     'objectMode': true,
	*     'highWaterMark': 64
	* };
	*
	* var factory = ns.debugSinkStream.factory( opts );
	*
	* // Assign each stream to a separate debug namespace...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( factory( 'stream '+i ) );
	* }
	* @example
	* var stream = ns.debugSinkStream.objectMode({
	*     'name': 'my-stream'
	* });
	*
	* stream.write( {'value': 'a'} );
	* stream.write( {'value': 'b'} );
	* stream.write( {'value': 'c'} );
	* stream.end();
	*/
	debugSinkStream: typeof debugSinkStream;

	/**
	* Returns an "empty" stream.
	*
	* @param options - stream options
	* @throws must provide valid options
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( './../../../node/inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var EmptyStream = ns.emptyStream;
	* var stream = new EmptyStream();
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var inspectStream = require( './../../../node/inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var stream = ns.emptyStream();
	*
	* stream.pipe( inspectStream( log )  );
	*
	* @example
	* var opts = {
	*     'objectMode': false
	* };
	*
	* var createStream = ns.emptyStream.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var inspectStream = require( './../../../node/inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var stream = ns.emptyStream.objectMode();
	*
	* stream.pipe( inspectStream.objectMode( log ) );
	*/
	emptyStream: typeof emptyStream;

	/**
	* Creates a readable stream from an array-like object.
	*
	* @param src - source array-like object
	* @param options - stream options
	* @throws must provide valid options
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( './../../../node/inspect-sink' );
	* var Float64Array = require( '@stdlib/array/float64' );
	* var randu = require( '@stdlib/random/base/randu' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var arr = new Float64Array( 10 );
	* var i;
	* for ( i = 0; i < arr.length; i++ ) {
	*     arr[ i ] = randu();
	* }
	*
	* var ArrayStream = ns.arrayStream;
	* var stream = new ArrayStream( arr );
	*
	* stream.pipe( inspectStream( log ) );
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var randu = require( '@stdlib/random/base/randu' );
	*
	* var arr = new Float64Array( 10 );
	* var i;
	* for ( i = 0; i < arr.length; i++ ) {
	*     arr[ i ] = randu();
	* }
	*
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.arrayStream.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( arr ) );
	* }
	*
	* @example
	* var inspectStream = require( './../../../node/inspect-sink' );
	* var Float64Array = require( '@stdlib/array/float64' );
	* var randu = require( '@stdlib/random/base/randu' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var arr = new Float64Array( 10 );
	* var i;
	* for ( i = 0; i < arr.length; i++ ) {
	*     arr[ i ] = randu();
	* }
	*
	* var stream = ns.arrayStream.objectMode( arr );
	*
	* stream.pipe( inspectStream.objectMode( log ) );
	*/
	arrayStream: typeof arrayStream;

	/**
	* Creates a readable stream from an array-like object which repeatedly iterates over a provided value's elements.
	*
	* @param src - source array-like object
	* @param options - stream options
	* @throws must provide valid options
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( './../../../node/inspect-sink' );
	* var Float64Array = require( '@stdlib/array/float64' );
	* var randu = require( '@stdlib/random/base/randu' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var arr = new Float64Array( 10 );
	* var i;
	* for ( i = 0; i < arr.length; i++ ) {
	*     arr[ i ] = randu();
	* }
	*
	* var opts = {
	*     'iter': arr.length * 2
	* };
	*
	* var CircularArrayStream = ns.circularArrayStream;
	* var stream = new CircularArrayStream( arr, opts );
	*
	* stream.pipe( inspectStream( log ) );
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var randu = require( '@stdlib/random/base/randu' );
	*
	* var arr = new Float64Array( 10 );
	* var i;
	* for ( i = 0; i < arr.length; i++ ) {
	*     arr[ i ] = randu();
	* }
	*
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.circularArrayStream.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( arr ) );
	* }
	*
	* @example
	* var inspectStream = require( './../../../node/inspect-sink' );
	* var Float64Array = require( '@stdlib/array/float64' );
	* var randu = require( '@stdlib/random/base/randu' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var arr = new Float64Array( 10 );
	* var i;
	* for ( i = 0; i < arr.length; i++ ) {
	*     arr[ i ] = randu();
	* }
	*
	* var opts = {
	*     'iter': arr.length * 2
	* };
	*
	* var stream = ns.circularArrayStream.objectMode( arr, opts );
	*
	* stream.pipe( inspectStream.objectMode( log ) );
	*/
	circularArrayStream: typeof circularArrayStream;

	/**
	* Returns a readable stream which always streams the same value.
	*
	* @param value - value to stream
	* @param options - stream options
	* @throws must provide valid options
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( './../../../node/inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var ConstantStream = ns.constantStream;
	* var stream = new ConstantStream( 'beep', opts );
	*
	* stream.pipe( inspectStream( log ) );
	*
	* @example
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.constantStream.factory( 'beep', opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream() );
	* }
	*
	* @example
	* var inspectStream = require( './../../../node/inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.constantStream.objectMode( 3.14, opts );
	*
	* stream.pipe( inspectStream.objectMode( log ) );
	*/
	constantStream: typeof constantStream;

	/**
	* Creates a readable stream from an iterator.
	*
	* @param iterator - source iterator
	* @param options - stream options
	* @throws must provide valid options
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( './../../../node/inspect-sink' );
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var IteratorStream = ns.iteratorStream;
	* var stream = new IteratorStream( randu( opts ) );
	*
	* stream.pipe( inspectStream( log ) );
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.iteratorStream.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( randu() ) );
	* }
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	* var inspectStream = require( './../../../node/inspect-sink' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var opts = {
	*     'iter': 10
	* };
	*
	* var stream = ns.iteratorStream.objectMode( randu( opts ) );
	*
	* stream.pipe( inspectStream.objectMode( log ) );
	*/
	iteratorStream: typeof iteratorStream;

	/**
	* Creates a readable stream from a strided array-like object.
	*
	* @param N - number of values to stream
	* @param buffer - source value
	* @param stride - stride length
	* @param offset - starting index
	* @param options - stream options
	* @throws must provide valid options
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( './../../../node/inspect-sink' );
	* var Float64Array = require( '@stdlib/array/float64' );
	* var randu = require( '@stdlib/random/base/randu' );
	*
	* function log( chunk ) {
	*    console.log( chunk.toString() );
	* }
	*
	* var arr = new Float64Array( 10 );
	* var i;
	* for ( i = 0; i < arr.length; i++ ) {
	*     arr[ i ] = randu();
	* }
	*
	* var StridedArrayStream = ns.stridedArrayStream;
	* var stream = new StridedArrayStream( arr.length, arr, 1, 0 );
	*
	* stream.pipe( inspectStream( log ) );
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var randu = require( '@stdlib/random/base/randu' );
	*
	* var arr = new Float64Array( 10 );
	* var i;
	* for ( i = 0; i < arr.length; i++ ) {
	*     arr[ i ] = randu();
	* }
	*
	* var opts = {
	*     'sep': ',',
	*     'objectMode': false,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var createStream = ns.stridedArrayStream.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( createStream( arr.length, arr, 1, 0 ) );
	* }
	*
	* @example
	* var inspectStream = require( './../../../node/inspect-sink' );
	* var Float64Array = require( '@stdlib/array/float64' );
	* var randu = require( '@stdlib/random/base/randu' );
	*
	* function log( v ) {
	*    console.log( v );
	* }
	*
	* var arr = new Float64Array( 10 );
	* var i;
	* for ( i = 0; i < arr.length; i++ ) {
	*     arr[ i ] = randu();
	* }
	*
	* var stream = ns.stridedArrayStream.objectMode( arr.length, arr, 1, 0 );
	*
	* stream.pipe( inspectStream.objectMode( log ) );
	*/
	stridedArrayStream: typeof stridedArrayStream;

	/**
	* Returns an inspect stream.
	*
	* @param options - stream options
	* @throws must provide valid options
	* @returns stream instance
	*
	* @example
	* function log( chunk, idx ) {
	*     console.log( 'index: %d', idx );
	*     console.log( chunk );
	* }
	*
	* var InspectStream = ns.inspectStream;
	* var stream = new InspectStream( {}, log );
	*
	* stream.write( 'a' );
	* stream.write( 'b' );
	* stream.write( 'c' );
	*
	* stream.end();
	*
	* // prints: index: 0
	* // prints: a
	* // prints: index: 1
	* // prints: b
	* // prints: index: 2
	* // prints: c
	*
	* @example
	* function log( chunk, idx ) {
	*     console.log( 'index: %d', idx );
	*     console.log( chunk );
	* }
	*
	* var opts = {
	*     'objectMode': true,
	*     'highWaterMark': 64
	* };
	*
	* var factory = ns.inspectStream.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( factory( log ) );
	* }
	*
	* @example
	* function log( chunk, idx ) {
	*     console.log( 'index: %d', idx );
	*     console.log( chunk );
	* }
	*
	* var opts = {
	*     'objectMode': true,
	*     'highWaterMark': 64
	* };
	*
	* var factory = ns.inspectStream.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( factory( log ) );
	* }
	*
	* @example
	* function log( chunk, idx ) {
	*     console.log( 'index: %d', idx );
	*     console.log( chunk );
	* }
	*
	* var stream = ns.inspectStream.objectMode( {}, log );
	*
	* stream.write( {'value': 'a'} );
	* stream.write( {'value': 'b'} );
	* stream.write( {'value': 'c'} );
	*
	* stream.end();
	*
	* // prints: index: 0
	* // prints: {'value': 'a'}
	* // prints: index: 1
	* // prints: {'value': 'b'}
	* // prints: index: 2
	* // prints: {'value': 'c'}
	*/
	inspectStream: typeof inspectStream;

	/**
	* Returns an inspect sink stream.
	*
	* @param options - stream options
	* @throws must provide valid options
	* @returns stream instance
	*
	* @example
	* function log( chunk, idx ) {
	*     console.log( 'index: %d', idx );
	*     console.log( chunk );
	* }
	*
	* var InspectSinkStream = ns.inspectSinkStream;
	* var stream = new InspectSinkStream( {}, log );
	*
	* stream.write( 'a' );
	* stream.write( 'b' );
	* stream.write( 'c' );
	*
	* stream.end();
	*
	* // prints: index: 0
	* // prints: a
	* // prints: index: 1
	* // prints: b
	* // prints: index: 2
	* // prints: c
	*
	* @example
	* function log( chunk, idx ) {
	*     console.log( 'index: %d', idx );
	*     console.log( chunk );
	* }
	*
	* var opts = {
	*     'objectMode': true,
	*     'highWaterMark': 64
	* };
	*
	* var factory = ns.inspectSinkStream.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( factory( log ) );
	* }
	*
	* @example
	* function log( chunk, idx ) {
	*     console.log( 'index: %d', idx );
	*     console.log( chunk );
	* }
	*
	* var stream = ns.inspectSinkStream.objectMode( {}, log );
	*
	* stream.write( {'value': 'a'} );
	* stream.write( {'value': 'b'} );
	* stream.write( {'value': 'c'} );
	*
	* stream.end();
	*
	* // prints: 'index: 0'
	* // prints: {'value': 'a'}
	* // prints: 'index: 1'
	* // prints: {'value': 'b'}
	* // prints: 'index: 2'
	* // prints: {'value': 'c'}
	*/
	inspectSinkStream: typeof inspectSinkStream;

	/**
	* Returns a join stream.
	*
	* @param options - stream options
	* @throws must provide valid options
	* @returns stream instance
	*
	* @example
	* var inspectStream = require( './../../../node/inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk );
	* }
	*
	* var JoinStream = ns.joinStream;
	* var stream = new JoinStream();
	*
	* stream.pipe( inspectStream( log )  );
	*
	* stream.write( '1' );
	* stream.write( '2' );
	* stream.write( '3' );
	*
	* stream.end();
	*
	* // prints: '1\n2\n3'
	*
	* @example
	* var inspectStream = require( './../../../node/inspect-sink' );
	*
	* function log( chunk ) {
	*    console.log( chunk );
	* }
	*
	* var stream = ns.joinStream();
	*
	* stream.pipe( inspectStream( log )  );
	*
	* stream.write( '1' );
	* stream.write( '2' );
	* stream.write( '3' );
	*
	* stream.end();
	*
	* // prints: '1\n2\n3';
	*
	* @example
	* var opts = {
	*     'sep': '\t',
	*     'objectMode': true,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64
	* };
	*
	* var factory = ns.joinStream.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( factory() );
	* }
	*
	* @example
	* var inspectStream = require( './../../../node/inspect-sink' );
	*
	* function log( chunk ) {
	*     console.log( chunk.toString() );
	* }
	*
	* var stream = ns.joinStream.objectMode({
	*     'sep': ','
	* });
	*
	* stream.pipe( inspectStream( log ) );
	*
	* stream.write( 'a' );
	* stream.write( 'b' );
	* stream.write( 'c' );
	*
	* stream.end();
	*
	* // prints: 'a,b,c'
	*/
	joinStream: typeof joinStream;

	/**
	* Returns a split stream.
	*
	* @param options - stream options
	* @throws must provide valid options
	* @returns stream instance
	*
	* @example
	* var SplitStream = ns.splitStream;
	* var stream = new SplitStream();
	*
	* stream.write( '1\n2\n3' );
	* stream.end();
	*
	* @example
	* var stream = ns.splitStream();
	*
	* stream.write( '1\n2\n3' );
	* stream.end();
	*
	* @example
	* var opts = {
	*     'sep': '\t',
	*     'objectMode': true,
	*     'encoding': 'utf8'
	* };
	*
	* var factory = ns.splitStream.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( factory() );
	* }
	*
	* @example
	* var stream = ns.splitStream.objectMode({
	*     'sep': ','
	* });
	*
	* stream.write( 'a,b,c' );
	* stream.end();
	*/
	splitStream: typeof splitStream;

	/**
	* Standard error.
	*/
	stderr: typeof stderr;

	/**
	* Standard input.
	*/
	stdin: typeof stdin;

	/**
	* Standard output.
	*/
	stdout: typeof stdout;

	/**
	* Returns a transform stream.
	*
	* @param options - stream options
	* @throws must provide valid options
	* @returns stream instance
	*
	* @example
	* var stdout = require( './../../../node/stdout' );
	*
	* function transform( chunk, enc, clbk ) {
	*     clbk( null, chunk.toString()+'\n' );
	* }
	*
	* var opts = {
	*     'transform': transform
	* };
	* var TransformStream = ns.transformStream;
	* var stream = new TransformStream( opts );
	*
	* stream.pipe( stdout );
	*
	* stream.write( '1' );
	* stream.write( '2' );
	* stream.write( '3' );
	*
	* stream.end();
	*
	* // prints: '1\n2\n3\n'
	*
	* @example
	* var stdout = require( './../../../node/stdout' );
	*
	* function transform( chunk, enc, clbk ) {
	*     clbk( null, chunk.toString()+'\n' );
	* }
	*
	* var opts = {
	*     'transform': transform
	* };
	* var stream = ns.transformStream( opts );
	*
	* stream.pipe( stdout );
	*
	* stream.write( '1' );
	* stream.write( '2' );
	* stream.write( '3' );
	*
	* stream.end();
	*
	* // prints: '1\n2\n3\n'
	*
	* @example
	* function transform( chunk, enc, clbk ) {
	*     clbk( null, chunk.toString()+'\n' );
	* }
	*
	* var opts = {
	*     'objectMode': true,
	*     'encoding': 'utf8',
	*     'highWaterMark': 64,
	*     'decodeStrings': false
	* };
	*
	* var factory = ns.transformStream.factory( opts );
	*
	* // Create 10 identically configured streams...
	* var streams = [];
	* var i;
	* for ( i = 0; i < 10; i++ ) {
	*     streams.push( factory( transform ) );
	* }
	*
	* @example
	* var stdout = require( './../../../node/stdout' );
	*
	* function stringify( chunk, enc, clbk ) {
	*     clbk( null, JSON.stringify( chunk ) );
	* }
	*
	* function newline( chunk, enc, clbk ) {
	*     clbk( null, chunk+'\n' );
	* }
	*
	* var s1 = ns.transformStream.objectMode({
	*     'transform': stringify
	* });
	*
	* var s2 = ns.transformStream.objectMode({
	*     'transform': newline
	* });
	*
	* s1.pipe( s2 ).pipe( stdout );
	*
	* s1.write( {'value': 'a'} );
	* s1.write( {'value': 'b'} );
	* s1.write( {'value': 'c'} );
	*
	* s1.end();
	*
	* // prints: '{"value":"a"}\n{"value":"b"}\n{"value":"c"}\n'
	*/
	transformStream: typeof transformStream;
}

/**
* Node.js streams.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
