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

> Standard library Node.js streams.

<section class="usage">

## Usage

```javascript
var streams = require( '@stdlib/streams/node' );
```

#### streams

Standard library Node.js streams.

```javascript
var s = streams;
// returns {...}
```

The package contains the following streams:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`debugStream( [options,] [clbk] )`][@stdlib/streams/node/debug]</span><span class="delimiter">: </span><span class="description">transform stream for debugging stream pipelines.</span>
-   <span class="signature">[`inspectStream( [options,] clbk )`][@stdlib/streams/node/inspect]</span><span class="delimiter">: </span><span class="description">transform stream for inspecting streamed data.</span>
-   <span class="signature">[`joinStream( [options] )`][@stdlib/streams/node/join]</span><span class="delimiter">: </span><span class="description">transform stream which joins streamed data.</span>
-   <span class="signature">[`splitStream( [options] )`][@stdlib/streams/node/split]</span><span class="delimiter">: </span><span class="description">transform stream which splits streamed data.</span>
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

<section class="links">

<!-- <toc-links> -->

[@stdlib/streams/node/debug]: https://github.com/stdlib-js/streams/tree/main/node/debug

[@stdlib/streams/node/inspect]: https://github.com/stdlib-js/streams/tree/main/node/inspect

[@stdlib/streams/node/join]: https://github.com/stdlib-js/streams/tree/main/node/join

[@stdlib/streams/node/split]: https://github.com/stdlib-js/streams/tree/main/node/split

[@stdlib/streams/node/transform]: https://github.com/stdlib-js/streams/tree/main/node/transform

<!-- </toc-links> -->

</section>

<!-- /.links -->
