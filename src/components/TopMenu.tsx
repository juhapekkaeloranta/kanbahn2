import React from 'react'
import { StoreState } from '../store/store';
import { connect } from 'react-redux';

interface TopMenuStoreProps {
  activeBoardName: string
}

type TopMenuProps = TopMenuStoreProps

const TopMenu = (props: TopMenuProps) => {
  return (
    <div className="topmenu bordered hide-border">
      <div style={{ display: 'flex', flex: 1 }}>
        <p className="bordered">Menu</p>
        <p className="bordered">Board: {props.activeBoardName}</p>
      </div>
      <div style={{ display: 'flex', flex: 1, 'justify-content': 'center' }}>
        <h1 className="bordered hide-border">Kanbahn-app</h1>
      </div>
      <div style={{ display: 'flex', flex: 1, 'justify-content': 'flex-end' }}>
        <p className="bordered">Login</p>
      </div>
    </div>
  )
}

const mapStateToProps =  (state: StoreState) => {
  return {
    activeBoardName: state.boards.byid[state.ui.activeBoard]
      ? state.boards.byid[state.ui.activeBoard].name
      : "" 
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu)