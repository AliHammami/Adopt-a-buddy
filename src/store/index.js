/**
 * npm import
 */


/**
 * local import
 */
import thunk from 'redux-thunk';
import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import { reducer as formReducer } from 'redux-form';

import { Animalreducer, selectedAnimalReducer, registerUser, registerAsso, Associationreducer, selectedAssociationReducer, loginUser, loginAsso, editUser, editAsso, raceReducer, sexReducer, coatsReducer, colorReducer, sizeReducer, specieReducer, createAnimal } from './reducer';


/**
 * store
 */
// devTools
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

// createStore
export const init = () => {
  const reducer = combineReducers({
    animals: Animalreducer,
    animal: selectedAnimalReducer,

    form: formReducer,
    registerUser,
    registerAsso,
    auth: loginUser,
    authAsso: loginAsso,
    editUser,
    editAsso,


    associations: Associationreducer,
    association: selectedAssociationReducer,
    form: formReducer,


    raceReducer,
    sexReducer,
    coatsReducer,
    colorReducer,
    sizeReducer,
    specieReducer,
    createAnimal,
  });
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

  return store;
};


/**
 * Export
 */
