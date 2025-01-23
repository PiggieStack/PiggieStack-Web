import React, { useContext, createContext, useState } from 'react';
import './dashboard-container.theme.scss';
import EventsFeedContainer from './EventsFeedContainer/EventsFeedContainer';
import AIBoard from './AIBoard/AIBoard';
import LeftPanel from './LeftPanel/LeftPanel';
import RightPanel from './RightPanel/RightPanel';

export const DashboardContext = createContext();

export const useDashboard = () => {
  return useContext(DashboardContext);
};

const DashboardProvider = ({ children }) => {
  const [aiMode, setAiMode] = useState(false);
  const [eventsData, setEventsData] = useState([]);
  const [showChat, setShowChat] = useState(false);

  return (
    <DashboardContext.Provider value={{ aiMode, setAiMode, eventsData, showChat, setShowChat }}>
      {children}
    </DashboardContext.Provider>
  );
};

export function DashboardContainerUI() {
  const { aiMode, setAiMode } = useDashboard();

  return (
    <div className="dashboard-container">
      <LeftPanel />
      <AIBoard />
      <RightPanel />
    </div>
  );
}

export default function DashboardContainer() {
  return (
    <DashboardProvider>
      <DashboardContainerUI />
    </DashboardProvider>
  );
}
