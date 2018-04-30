import * as React from 'react';
import SortableTree, { NodeData, OnDragPreviousAndNextLocation } from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

class Sortable extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      treeData: [
        {
          title: 'Loop',
          type: 'loop',
          expanded: true,
          children: [{ title: 'Timer', type: 'timer' }]
        },
        {
          title: 'Loop',
          type: 'loop',
          expanded: true,
          children: [{ title: 'Timer', type: 'timer' }]
        }
      ]
    };

    this.updateTree.bind(this);
  }

  public updateTree(treeData: any) {
    this.setState({ treeData });
  }

  public canDrop(node: OnDragPreviousAndNextLocation & NodeData) {

    if (node.nextParent === null) {
      return true;
    }

    if (node.nextParent.type === 'loop') {
      return true;
    }

    return false;
  }

  public onMoveNode(node) {
    console.log("MOVE", node);
  }

  public render() {
    return (
      <div style={{ height: 500 }}>
        <SortableTree
          treeData={this.state.treeData}
          // tslint:disable-next-line:jsx-no-lambda
          onChange={treeData => this.setState({ treeData })}
          canDrop={this.canDrop}
        />
      </div>
    );
  }
}

export default Sortable;
