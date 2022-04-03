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
const SampleComponent = (props) => {
  jilog(props)

  return (
    <div>
      <p>SampleComponent</p>
    </div>
  )
}
```
