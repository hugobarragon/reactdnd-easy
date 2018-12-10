import * as React from 'react'
import CardHandler from "./CardHandler"

interface IProps {
	moveCard: (dragIndex: any, hoverIndex: any) => void,
	children: React.ReactNode
}

class SortableStressTest extends React.Component<IProps> {

	public render() {
		const { children, moveCard,...rest } = this.props
		return React.Children.map(children, (child: any) =>
			<CardHandler
				moveCard={moveCard}
				child={child}
				id={child.key}
				{...rest}
			/>
		);
	}
}
export default (SortableStressTest)