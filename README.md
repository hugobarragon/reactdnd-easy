
[![npm version](https://img.shields.io/badge/npm-v0.1.2-green.svg)](https://www.npmjs.com/package/reactdnd-easy)

# reactdnd-easy
Simple solucion to implement reactdnd without all that complicated code

# How to Use
### Sortable wrapper
[Sample file](https://github.com/hugobarragon/reactdnd-easy/blob/master/demo/Sortable.tsx "Sample file")

```javascript
import { SortableWrapper, HTML5Backend, DragDropContext } from "./index"

<SortableWrapper moveCard={this.moveCard}>
            <div>hellow world1<div/>
            <div>hellow world2<div/>
            <div>hellow world3<div/>
            <div>hellow world4<div/>
            <div>hellow world5<div/>
</SortableWrapper>

export default DragDropContext(HTML5Backend)(App);
```
