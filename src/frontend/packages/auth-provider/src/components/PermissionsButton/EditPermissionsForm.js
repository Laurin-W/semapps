import React from 'react';
import { List } from '@mui/material';
import AgentItem from './AgentItem';
import { useTheme } from 'react-admin';
import { styled } from '@mui/system';

const StyledList = styled(List)(() => { const [theme] = useTheme(); return ({
  width: '100%',
  maxWidth: '100%',
  backgroundColor: theme.palette.background.paper
})});

const EditPermissionsForm = ({ isContainer, agents, addPermission, removePermission }) => {
  return (
    <StyledList dense>
      {Object.entries(agents).map(([agentId, agent]) => (
        <AgentItem
          key={agentId}
          isContainer={isContainer}
          agent={agent}
          addPermission={addPermission}
          removePermission={removePermission}
        />
      ))}
    </StyledList>
  );
};

export default EditPermissionsForm;
