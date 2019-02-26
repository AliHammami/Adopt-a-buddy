import React, { Component } from 'react';
import {
  ReactiveBase,
  DataSearch,
  ResultCard,
  SingleRange,
  MultiDropdownList,
  MultiList,
  SingleDropdownList,
} from '@appbaseio/reactivesearch';

class SearchAnimalList extends Component {
  render() {
    return (
      <section className="container containerRegister containerSearch">
        <ReactiveBase
          app="AdoptABuddy"
          credentials="teCsQ5K8x:4fd9bb62-0be5-4eee-a062-eb9845be616a"
          type="animal"
        >
          <div style={{ display: 'flow-root' }}>
            <div style={{ float: 'right', width: '50%' }}>
              <DataSearch
                componentId="searchbox"
                dataField="City"
                placeholder="Recherchez dans votre ville"
                URLParams
                style={{
                  padding: '5px',
                  marginTop: '10px',
                }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '20%' }}>
            <SingleDropdownList
                componentId="asso-list"
                dataField="associationName.keyword"
                title="Recherchez par Association"
                placeholder="Association"
                URLParams
                style={{
                  padding: '5px',
                  marginTop: '10px',
                }}
                react={{
                  and: ['searchbox'],
                }}
              />
              <SingleDropdownList
                componentId="species-list"
                dataField="species.keyword"
                title="Recherchez par Espece"
                placeholder="Espece"
                URLParams
                style={{
                  padding: '5px',
                  marginTop: '10px',
                }}
                react={{
                  and: ['searchbox', 'asso-list'],
                }}
                
              />
              <MultiDropdownList
                componentId="race-list"
                dataField="race.keyword"
                title="Recherchez par race"
                placeholder="Race"
                style={{
                  padding: '5px',
                  marginTop: '10px',
                }}
                react={{
                  and: ['species-list', 'searchbox', 'asso-list'],
                }}
              />
              <MultiDropdownList
                componentId="pelage-list"
                dataField="coats.keyword"
                title="Recherchez par pelage"
                placeholder="Pelages"
                style={{
                  padding: '5px',
                  marginTop: '10px',
                }}
                react={{
                  and: ['species-list', 'searchbox', 'asso-list'],
                }}
              />
              <SingleRange
                componentId="agefilter"
                title="Filtrer par âge"
                dataField="age"
                data={[
						  { start: '4', end: '9', label: '4 ans et plus' },
                  { start: '3', end: '9', label: '3 ans et plus' },
                  { start: '2', end: '9', label: '2 ans et plus' },
                  { start: '1', end: '9', label: 'Tous les âges' },
                ]}
                defaultSelected="Tous les âges"
                style={{
                  padding: '5px',
                  marginTop: '10px',
                }}
              />
              <MultiList
                componentId="Color"
                dataField="color.keyword"
                title="Couleur"
                size={100}
                sortBy="asc"
                queryFormat="or"
                selectAllLabel="Toutes les couleurs"
                showCheckbox
                showCount
                showSearch
                placeholder="Rechercher une couleur"
                react={{
                  and: ['CategoryFilter', 'SearchFilter', 'pelage-list', 'species-list', 'searchbox', 'asso-list'],
                }}
                showFilter
                filterLabel="City"
                URLParams
                style={{
                  padding: '5px',
                  marginTop: '10px',
                }}
              />
            </div>
            <ResultCard
              componentId="results"
              dataField="name"
              from={0}
              size={12}
              Loader="Chargement..."
              noResults="Aucun résultats trouvés..."
              pagination
              className="Result_card"
              innerClass={{
                sortOptions: 'sort-options',
                image: 'card-image',
              }}
              react={{
	          and: ['searchbox', 'agefilter', 'pelage-list', 'Color', 'species-list', 'race-list', 'asso-list'],
              }}
              onData={res => ({
                image: `http://127.0.0.1:8001${res.photos}`,
                description: (<div className="card-search">
                  <div className="card-search-desc">
                    <p className="card-city card-city-search">{res.City}</p>
                    <h2 className="card-animal-name">{res.name}</h2>
                    <p className="card-asso"><a href={`/associations/${res.association}`}>{res.associationName}</a></p>
                  </div>
                  <a className="card-link" href={`/animals/${res.id}`}>Découvrez votre Buddy</a>
                </div>),
              })}
              style={{
                width: '80%',
                textAlign: 'left',
              }}
            />
          </div>
        </ReactiveBase>
      </section>
    );
  }
}
export default SearchAnimalList;
