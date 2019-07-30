
[![npm version](https://img.shields.io/badge/npm-v0.1.2-green.svg)](https://www.npmjs.com/package/reactdnd-easy)

# reactdnd-easy
Simple solucion to implement reactdnd without all that complicated code  
No need to install react-dnd and all those libs.  
This lib was implemented because react-dnd requires much code to be implemented and we had a problem...  
implementeing like react-dnd:  

```javascript
connectDragSource(connectDropTarget(<div style={{ ...style, opacity }}>{text}</div>))
```
it requires to wrap component in a ```<div/>``` wich loses parent props, like example:  
[Antd Radio](https://ant.design/components/radio/)
<Radio.Group> is the first wrapper and passes props to ```<Radio/>``` tag, so using the native react-dnd would enclose it like this:
```javascript
<Radio.Group>// would create in code the wrapping <div/>
            <div><Radio/><div/>
            <div><Radio/><div/>
             ...
</Radio.Group>
```
and would lose the ```<Radio.Group>``` props ... With my wrapper you can do something like this:  
                        
```javascript
import { SortableWrapper, HTML5Backend, DragDropContext } from "./index"

<Radio.Group> // SortableWrapper catches parent props
            <SortableWrapper moveCard={this.moveCard}> 
                        <Radio>hellow world1<Radio/>// and passes them to the children 
                        <Radio>hellow world2<Radio/>
                        <Radio>hellow world3<Radio/>
                        <Radio>hellow world4<Radio/>
                        <Radio>hellow world5<Radio/>
            </SortableWrapper>
</ Radio.Group>
                                    
export default DragDropContext(HTML5Backend)(App);  
```
### SortableWrapper does not create a ```<div/>``` for that i use react findNode and wrapp the node it self
SortableWrapper sacrifices a bit of performance to keep compatible with other libs and pass pros without creating a wrapping ```<div/>```
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
