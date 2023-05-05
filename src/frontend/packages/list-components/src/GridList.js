import * as React from 'react';
import { useListContext, linkToRecord, Link, RecordContextProvider } from 'react-admin';
import { Grid } from '@mui/material';
import { useGetExternalLink } from '@semapps/semantic-data-provider';

// useful to prevent click bubbling in a datagrid with rowClick
const stopPropagation = e => e.stopPropagation();

// Our handleClick does nothing as we wrap the children inside a Link but it is
// required by ChipField, which uses a Chip from material-ui.
// The material-ui Chip requires an onClick handler to behave like a clickable element.
const handleClick = () => {};

const GridList = ({ children, linkType, externalLinks, spacing, xs, sm, md, lg, xl }) => {
  const { data, basePath } = useListContext();
  const getExternalLink = useGetExternalLink(externalLinks);
  return (
    <Grid container spacing={spacing}>
      {data.map(record => {
        if (!record || record['_error']) return null;
        const externalLink = getExternalLink(record);
        let child;

        if (externalLink) {
          child = (
            <a href={externalLink} target="_blank" rel="noopener noreferrer" onClick={stopPropagation}>
              {React.cloneElement(React.Children.only(children), {
                basePath: children.props.basePath || basePath,
                externalLink: true,
                // Workaround to force ChipField to be clickable
                onClick: handleClick
              })}
            </a>
          );
        } else if (linkType) {
          child = (
            <Link to={linkToRecord(basePath, record.id, linkType)} onClick={stopPropagation}>
              {React.cloneElement(React.Children.only(children), {
                basePath: children.props.basePath || basePath,
                // Workaround to force ChipField to be clickable
                onClick: handleClick
              })}
            </Link>
          );
        } else {
          child = React.cloneElement(React.Children.only(children), {
            basePath: children.props.basePath || basePath
          });
        }

        return (
          <Grid item key={record.id} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
            <RecordContextProvider value={record}>
              {child}
            </RecordContextProvider>
          </Grid>
        );
      })}
    </Grid>
  );
};

GridList.defaultProps = {
  xs: 6,
  spacing: 3,
  linkType: 'edit',
  externalLinks: false
};

export default GridList;
