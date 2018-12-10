import * as React from 'react';
interface IProps {
    moveCard: (dragIndex: any, hoverIndex: any) => void;
    children: React.ReactNode;
}
declare class SortableStressTest extends React.Component<IProps> {
    render(): JSX.Element[];
}
declare const _default: typeof SortableStressTest;
export default _default;
