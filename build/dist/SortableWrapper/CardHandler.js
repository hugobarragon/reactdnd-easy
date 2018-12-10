import * as tslib_1 from "tslib";
import * as React from 'react';
import { DragSource, DropTarget, } from 'react-dnd';
import { findDOMNode } from "react-dom";
var cardSource = {
    beginDrag: function (props) {
        return { id: props.id };
    },
};
var cardTarget = {
    hover: function (props, monitor) {
        var draggedId = monitor.getItem().id;
        if (draggedId !== props.id) {
            props.moveCard(draggedId, props.id);
        }
    },
};
var Card = /** @class */ (function (_super) {
    tslib_1.__extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.render = function () {
        var _a = this.props, isDragging = _a.isDragging, connectDragSource = _a.connectDragSource, connectDropTarget = _a.connectDropTarget, child = _a.child, moveCard = _a.moveCard, rest = tslib_1.__rest(_a, ["isDragging", "connectDragSource", "connectDropTarget", "child", "moveCard"]);
        return React.cloneElement(child, tslib_1.__assign({ isdragging: Number(isDragging), ref: function (instance) {
                var domNode = findDOMNode(instance);
                connectDragSource(domNode);
                connectDropTarget(domNode);
                return domNode;
            } }, rest));
    };
    return Card;
}(React.Component));
export default DropTarget('card', cardTarget, function (connect) { return ({ connectDropTarget: connect.dropTarget(), }); })(DragSource('card', cardSource, function (connect, monitor) { return ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}); })(Card));
//# sourceMappingURL=CardHandler.js.map