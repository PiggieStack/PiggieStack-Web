import React from 'react';
import ResizableContainer from '../../../../_components/Containers/ResizableContainer';
import EventsFeedContainer from '../EventsFeedContainer/EventsFeedContainer';
import { useDashboard } from '../DashboardContainer';

export default function EventsFeedRightContainer() {

  const {showChat } = useDashboard();

  return <ResizableContainer customClass='event-feeds-right' title='Events feeds' maximizeHeightInPercentage='50'>
    { showChat ? <EventsFeedContainer /> : <></>}
  </ResizableContainer>
};
