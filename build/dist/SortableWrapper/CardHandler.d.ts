import * as React from 'react';
interface ICardProps {
    child: React.ReactElement<any>;
    moveCard: (draggedId: string, id: string) => void;
    id: string;
}
declare const _default: import("react-dnd/lib/interfaces").DndComponentClass<ICardProps>;
export default _default;
