## Motivation

- Know in which order they are rendered.
- Know what is in the value when the component is rendered.
- Standardize console log customization.

## What Is jilog

Using jilog, you can confirm the below.

- what the time spent from log before.
- what the order run the log.
- what the value is in the running.

## Usage

```typescript
import { jiLog } from 'jilog/lib'

const SampleComponent = (props) => {
 /**
  * [LOG: 0][TIME: XX milliseconds]
  * "{example: 'example log'}" 
  */
  jiLog({example: 'example log'},'SampleComopnent', 'greenyellow')

  return (
    <div>
      <p>SampleComponent</p>
    </div>
  )
}
```

## MileStone
- [ ] Accumulate logs and write them to a file after a certain time
