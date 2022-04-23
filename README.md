# Initer Map

This is a very simple wrapper on top of javascript map. It takes an initilizer function from you and returns the value returned from that whenever you try to get an element that isn't set before. Basically, you do not need to handle not set keys using this map.

I originally made this to use it in conjunction with [unified deno lock](https://github.com/yooneskh/unified-deno-lock) as it makes working with that much easier.

## Usage

```typescript
import { IniterMap } from 'https://deno.land/x/initer_map/mod.ts';


const map = new IniterMap<string, number>(() => 5);

const summedNumber = map.get('any-key') + 10; // will be 15
```

## Licensce
[MIT](https://opensource.org/licenses/MIT)