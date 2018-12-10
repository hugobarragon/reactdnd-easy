import * as tslib_1 from "tslib";
import * as React from 'react';
import CardHandler from "./CardHandler";
var SortableStressTest = /** @class */ (function (_super) {
    tslib_1.__extends(SortableStressTest, _super);
    function SortableStressTest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SortableStressTest.prototype.render = function () {
        var _a = this.props, children = _a.children, moveCard = _a.moveCard, rest = tslib_1.__rest(_a, ["children", "moveCard"]);
        return React.Children.map(children, function (child) {
            return React.createElement(CardHandler, tslib_1.__assign({ moveCard: moveCard, child: child, id: child.key }, rest));
        });
    };
    return SortableStressTest;
}(React.Component));
export default (SortableStressTest);
//# sourceMappingURL=index.js.map