import React from 'react';
import { useDashboard } from '../DashboardContainer';
import ResultBoard from './ResultBoard';
import AgentsInput from './AgentsInput';
import './ai-board.theme.scss';
import EventsFeedContainer from '../EventsFeedContainer/EventsFeedContainer';

export default function AIBoard() {
  const { aiMode, showChat } = useDashboard();
  const styleObject = aiMode ? {} : { padding: '0 10%' };

  return (
    <div className="ai-board-dashboard">
      <div
        style={{
          ...styleObject,
        }}
        className="main-panel"
      >
        {aiMode ? <ResultBoard /> : showChat ? <></> : <EventsFeedContainer />}
      </div>
      <AgentsInput />
    </div>
  );
}
