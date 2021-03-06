<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Node Streams

> Node.js streams.

<section class="usage">

## Usage

```javascript
var streams = require( '@stdlib/streams/node' );
```

#### streams

Namespace containing Node.js stream functionality.

```javascript
var s = streams;
// returns {...}
```

The package contains the following streams:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`debugSinkStream( [options,] [clbk] )`][@stdlib/streams/node/debug-sink]</span><span class="delimiter">: </span><span class="description">writable stream for debugging stream pipelines.</span>
-   <span class="signature">[`debugStream( [options,] [clbk] )`][@stdlib/streams/node/debug]</span><span class="delimiter">: </span><span class="description">transform stream for debugging stream pipelines.</span>
-   <span class="signature">[`emptyStream( [options] )`][@stdlib/streams/node/empty]</span><span class="delimiter">: </span><span class="description">create an "empty" readable stream.</span>
-   <span class="signature">[`arrayStream( src[, options] )`][@stdlib/streams/node/from-array]</span><span class="delimiter">: </span><span class="description">create a readable stream from an array-like object.</span>
-   <span class="signature">[`circularArrayStream( src[, options] )`][@stdlib/streams/node/from-circular-array]</span><span class="delimiter">: </span><span class="description">create a readable stream from a circular array-like object.</span>
-   <span class="signature">[`constantStream( value[, options] )`][@stdlib/streams/node/from-constant]</span><span class="delimiter">: </span><span class="description">create a readable stream which always streams the same value.</span>
-   <span class="signature">[`iteratorStream( iterator[, options] )`][@stdlib/streams/node/from-iterator]</span><span class="delimiter">: </span><span class="description">create a readable stream from an iterator.</span>
-   <span class="signature">[`stridedArrayStream( N, buffer, stride, offset[, options] )`][@stdlib/streams/node/from-strided-array]</span><span class="delimiter">: </span><span class="description">create a readable stream from a strided array-like object.</span>
-   <span class="signature">[`inspectSinkStream( [options,] clbk )`][@stdlib/streams/node/inspect-sink]</span><span class="delimiter">: </span><span class="description">writable stream for inspecting streamed data.</span>
-   <span class="signature">[`inspectStream( [options,] clbk )`][@stdlib/streams/node/inspect]</span><span class="delimiter">: </span><span class="description">transform stream for inspecting streamed data.</span>
-   <span class="signature">[`joinStream( [options] )`][@stdlib/streams/node/join]</span><span class="delimiter">: </span><span class="description">transform stream which joins streamed data.</span>
-   <span class="signature">[`splitStream( [options] )`][@stdlib/streams/node/split]</span><span class="delimiter">: </span><span class="description">transform stream which splits streamed data.</span>
-   <span class="signature">[`stderr`][@stdlib/streams/node/stderr]</span><span class="delimiter">: </span><span class="description">standard error.</span>
-   <span class="signature">[`stdin`][@stdlib/streams/node/stdin]</span><span class="delimiter">: </span><span class="description">standard input.</span>
-   <span class="signature">[`stdout`][@stdlib/streams/node/stdout]</span><span class="delimiter">: </span><span class="description">standard output.</span>
-   <span class="signature">[`transformStream( [options] )`][@stdlib/streams/node/transform]</span><span class="delimiter">: </span><span class="description">transform stream.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var getKeys = require( '@stdlib/utils/keys' );
var streams = require( '@stdlib/streams/node' );

console.log( getKeys( streams ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/streams/node/debug-sink]: https://github.com/stdlib-js/streams/tree/main/node/debug-sink

[@stdlib/streams/node/debug]: https://github.com/stdlib-js/streams/tree/main/node/debug

[@stdlib/streams/node/empty]: https://github.com/stdlib-js/streams/tree/main/node/empty

[@stdlib/streams/node/from-array]: https://github.com/stdlib-js/streams/tree/main/node/from-array

[@stdlib/streams/node/from-circular-array]: https://github.com/stdlib-js/streams/tree/main/node/from-circular-array

[@stdlib/streams/node/from-constant]: https://github.com/stdlib-js/streams/tree/main/node/from-constant

[@stdlib/streams/node/from-iterator]: https://github.com/stdlib-js/streams/tree/main/node/from-iterator

[@stdlib/streams/node/from-strided-array]: https://github.com/stdlib-js/streams/tree/main/node/from-strided-array

[@stdlib/streams/node/inspect-sink]: https://github.com/stdlib-js/streams/tree/main/node/inspect-sink

[@stdlib/streams/node/inspect]: https://github.com/stdlib-js/streams/tree/main/node/inspect

[@stdlib/streams/node/join]: https://github.com/stdlib-js/streams/tree/main/node/join

[@stdlib/streams/node/split]: https://github.com/stdlib-js/streams/tree/main/node/split

[@stdlib/streams/node/stderr]: https://github.com/stdlib-js/streams/tree/main/node/stderr

[@stdlib/streams/node/stdin]: https://github.com/stdlib-js/streams/tree/main/node/stdin

[@stdlib/streams/node/stdout]: https://github.com/stdlib-js/streams/tree/main/node/stdout

[@stdlib/streams/node/transform]: https://github.com/stdlib-js/streams/tree/main/node/transform

<!-- </toc-links> -->

</section>

<!-- /.links -->
