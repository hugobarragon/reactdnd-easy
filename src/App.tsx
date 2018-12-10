import * as React from 'react';
import { SortableWrapper, HTML5Backend, DragDropContext } from "./index"
import { name } from 'faker'
import update from "immutability-helper"
import { Steps } from 'antd';
import "antd/dist/antd.css"

const Step = Steps.Step;

interface IState {
  cardsById: object,
  cardsByIndex: object[]
}

class App extends React.Component<{}, IState> {

  private pendingUpdateFn: object | undefined
  private requestedFrame: any

  constructor(props: object) {
    super(props)


    const cardsById = {}
    const cardsByIndex = []

    for (let i = 0; i < 1000; i += 1) {
      const card = { id: i, text: name.findName() }
      cardsById[card.id] = card
      cardsByIndex[i] = card
    }

    this.state = {
      cardsById,
      cardsByIndex,
    }
  }

  public render() {
    const { cardsByIndex } = this.state
    return (
      <div >
        <Steps direction="vertical" size="small" current={1}>
          <SortableWrapper moveCard={this.moveCard}>
            {cardsByIndex.map((card: any) =>
              <Step
                key={card.id}
                title={card.id}
                description={card.text} />
            )}
          </SortableWrapper>
        </Steps>
      </div>
    );
  }

  private drawFrame = () => {
    const nextState = update(this.state, this.pendingUpdateFn as object)
    this.setState(nextState)

    this.requestedFrame = this.pendingUpdateFn = undefined
  }

  private moveCard = (id: any, afterId: any) => {
    const { cardsById, cardsByIndex } = this.state

    const card = cardsById[id]
    const afterCard = cardsById[afterId]

    const cardIndex = cardsByIndex.indexOf(card)
    const afterIndex = cardsByIndex.indexOf(afterCard)

    this.pendingUpdateFn = {
      cardsByIndex: {
        $splice: [[cardIndex, 1], [afterIndex, 0, card]],
      },
    }

    if (!this.requestedFrame) {
      this.requestedFrame = requestAnimationFrame(this.drawFrame)
    }
  }

}

export default DragDropContext(HTML5Backend)(App);