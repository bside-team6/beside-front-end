import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WineNote from './WineNote';
import WineNoteDetail from './WineNoteDetail';

const WindNote = () => {
  // TODO: 와인노트작성, 와인노트수정 라우트 추가
  return (
    <Switch>
      <Route exact path="/wine-note">
        <WineNote />
      </Route>
      <Route path="/wine-note/:wineNoteId">
        <WineNoteDetail />
      </Route>
    </Switch>
  );
};

export default WindNote;
