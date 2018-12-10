import * as React from 'react'
import {
    DragSource,
    DropTarget,
    ConnectDragSource,
    ConnectDropTarget,
    DropTargetMonitor,
} from 'react-dnd'
import { findDOMNode } from "react-dom"

const cardSource = {
    beginDrag(props: ICardProps) {
        return { id: props.id }
    },
}

const cardTarget = {
    hover(props: ICardProps, monitor: DropTargetMonitor) {
        const draggedId = monitor.getItem().id
        if (draggedId !== props.id) {
            props.moveCard(draggedId, props.id)
        }
    },
}

interface ICardProps {
    child: React.ReactElement<any>,
    moveCard: (draggedId: string, id: string) => void
    id: string
}

interface ICardSourceCollectedProps {
    isDragging: boolean
    connectDragSource: ConnectDragSource
}

interface ICardTargetCollectedProps {
    connectDropTarget: ConnectDropTarget
}

type Props = ICardProps & ICardSourceCollectedProps & ICardTargetCollectedProps

class Card extends React.Component<Props> {
    public render() {
        const {
            isDragging,
            connectDragSource,
            connectDropTarget,
            child,
            moveCard,
            ...rest
        } = this.props

        return React.cloneElement(child, {
            isdragging: Number(isDragging),
            ref: (instance: React.ReactInstance) => {// handles the wrapper wihtout div
                const domNode = findDOMNode(instance) as any;
                connectDragSource(domNode);
                connectDropTarget(domNode);
                return domNode;
            },
            ...rest
        })

    }
}

export default DropTarget<ICardProps, ICardTargetCollectedProps>(
    'card',
    cardTarget,
    connect => ({ connectDropTarget: connect.dropTarget(), }),
)(
    DragSource<ICardProps, ICardSourceCollectedProps>(
        'card',
        cardSource,
        (connect, monitor) => ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging(),
        }),
    )(Card),
)
