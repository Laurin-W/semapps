import React from 'react';
import { ChipField, SingleFieldList, TextField } from 'react-admin';
import { Column, ColumnShowLayout, Hero, Show, MarkdownField } from '@semapps/archipelago-layout';
import { UriArrayField } from '@semapps/semantic-data-provider';

const ThemeTitle = ({ record }) => {
  return <span>{record ? record['pair:label'] : ''}</span>;
};

const ThemeShow = props => (
  <Show {...props}>
    <ColumnShowLayout>
      <Column xs={12} sm={9}>
        <Hero title={<ThemeTitle />}>
          <TextField source="pair:comment" />
        </Hero>
        <MarkdownField source="pair:description" />
      </Column>
      <Column xs={12} sm={3} showLabel>
        <UriArrayField
          label="Organisations"
          filter={{ '@type': 'pair:Organization' }}
          reference="Organization"
          source="pair:topicOf"
        >
          <SingleFieldList linkType="show">
            <ChipField source="pair:label" color="secondary" />
          </SingleFieldList>
        </UriArrayField>
        <UriArrayField label="Evénements" filter={{ '@type': 'pair:Event' }} reference="Event" source="pair:topicOf">
          <SingleFieldList linkType="show">
            <ChipField source="pair:label" color="secondary" />
          </SingleFieldList>
        </UriArrayField>
      </Column>
    </ColumnShowLayout>
  </Show>
);

export default ThemeShow;