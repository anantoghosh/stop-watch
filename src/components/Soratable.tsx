import * as React from 'react';
import SortableTree, {
  NodeData,
  PreviousAndNextLocation
} from 'react-sortable-tree';
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

  public render() {
    const canDrop = (node: PreviousAndNextLocation & NodeData) => {
      // tslint:disable-next-line:no-console
      console.log(node);

      if (node.nextParent === null) {
        return true;
      }

      if (node.nextParent.type === 'loop') {
        return true;
      }

      return false;
    };

    return (
      <div style={{ height: 500 }}>
        <SortableTree
          treeData={this.state.treeData}
          // tslint:disable-next-line:jsx-no-lambda
          onChange={treeData => this.setState({ treeData })}
          canDrop={canDrop}
        />
      </div>
    );
  }
}

export default Sortable;
