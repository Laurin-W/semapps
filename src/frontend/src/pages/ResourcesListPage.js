import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import useQuery from '../api/useQuery';
import ResourcePreview from '../ResourcePreview';
import resourcesTypes from '../resourcesTypes';
import Page from '../Page';
import { Form, Field } from 'react-final-form';

const ResourcesListPage = ({ type }) => {
  const computeSparql = ({ resourceConfig, search }) => {
    let subjectsRequest = '';
    if (search && search.length > 0) {
      subjectsRequest = `
      {
        SELECT  ?s1
        WHERE {
          ?s1 ?p1 ?o1 .
          FILTER regex(str(?o1), "${search}")
          FILTER NOT EXISTS {?s1 a ?o1}
        }
      }
      `;
    }
    const request = `
    PREFIX ${resourceConfig.prefix}:<${resourceConfig.ontology}>
    CONSTRUCT {?s1 ?p2 ?o2}
    WHERE{
      ${subjectsRequest}
      ?s1 a ${resourceConfig.prefix}:${resourceConfig.class}.
      ?s1 ?p2 ?o2 .
    }
    `;
    return request;
  };

  const [typeState, setTypeState] = useState(type);
  const [search, setSearch] = useState();
  const resourceConfig = resourcesTypes[typeState];
  const [body, setBody] = useState(computeSparql({ resourceConfig: resourcesTypes[type] }));
  const uri = 'http://localhost:3000/sparql/';

  useEffect(() => {
    setBody(computeSparql({ resourceConfig: resourcesTypes[type] }));
    setSearch(undefined);
    setTypeState(type);
  }, [type]);

  const { data } = useQuery(uri, {
    body: body,
    method: 'POST'
  });

  const searchSubmit = async values => {
    let newRequest;
    setSearch(values.searchInput);
    newRequest = computeSparql({ resourceConfig: resourcesTypes[type], search: values.searchInput });
    console.log(newRequest);
    setBody(newRequest);
  };

  return (
    <Page>
      <h2 className="mb-3">
        {resourceConfig.name}
        {!resourceConfig.readOnly && (
          <Link to={`/resources/${type}/create`}>
            <button className="btn btn-primary pull-right">
              <i className="fa fa-plus-circle" />
              &nbsp; Ajouter
            </button>
          </Link>
        )}
      </h2>
      <div className="mb-3">
        <Form
          onSubmit={searchSubmit}
          initialValues={{ searchInput: search }}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex' }}>
                <Field
                  name="searchInput"
                  component="input"
                  type="text"
                  className="form-control"
                  id="searchInput"
                  value={search}
                />
                <button
                  style={{
                    'flex-basis': '10%',
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'space-around'
                  }}
                  type="submit"
                  className="btn btn-primary pull-right"
                >
                  <i className="fa fa-search" style={{ padding: '5px' }} />
                  <span>Rechercher</span>
                </button>
              </div>
            </form>
          )}
        />
      </div>
      {data &&
        data.map(resourceUri => (
          <div key={resourceUri}>
            <ResourcePreview resourceUri={resourceUri} type={typeState} /> <br />
          </div>
        ))}
    </Page>
  );
};

export default ResourcesListPage;
