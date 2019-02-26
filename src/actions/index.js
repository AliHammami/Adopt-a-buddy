import axios from 'axios';
import authService from 'src/services/auth-service';
import authServiceAsso from 'src/services/auth-service-asso';


import {
  FETCH_ANIMALS,
  FETCH_ANIMAL_BY_ID_SUCCESS,
  FETCH_ANIMAL_BY_ID_INIT,
  FETCH_ANIMALS_SUCCESS,

  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_ASSO_SUCCESS,
  REGISTER_ASSO_FAILURE,
  FETCH_ASSOCIATION_BY_ID_INIT,
  FETCH_ASSOCIATION_BY_ID_SUCCESS,
  FETCH_ASSOS_SUCCESS,

  UPDATE_ANIMAL_SUCCESS,
  UPDATE_ANIMAL_FAIL,

  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,

  LOGIN_ASSO_SUCCESS,
  LOGIN_ASSO_FAILURE,
  LOGOUT_ASSO,


  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,

  EDIT_ASSO_SUCCESS,
  EDIT_ASSO_FAILURE,

  FETCH_RACE_SUCCESS,
  FETCH_SEX_SUCCESS,
  FETCH_COATS_SUCCESS,
  FETCH_COLOR_SUCCESS,
  FETCH_SIZE_SUCCESS,
  FETCH_SPECIE_SUCCESS,

  CREATE_ANIMAL_SUCCESS,

} from './types';

const fetchAnimalByIdInit = () => ({
  type: FETCH_ANIMAL_BY_ID_INIT,
});

const fetchAssoByIdInit = () => ({
  type: FETCH_ASSOCIATION_BY_ID_INIT,
});

const fetchAnimalByIdSuccess = animal => ({
  type: FETCH_ANIMAL_BY_ID_SUCCESS,
  animal,
});


const fetchAnimalsSuccess = animals => ({
  type: FETCH_ANIMALS_SUCCESS,
  animals,
});


const editUserFailure = (data) => {
  return {
    type: EDIT_USER_FAILURE,
    data,
  };
};
const editUserSuccess = (data) => {
  return {
    type: EDIT_USER_SUCCESS,
    data,
  };
};

const editAssoFailure = (data) => {
  return {
    type: EDIT_ASSO_FAILURE,
    data,
  };
};
const editAssoSuccess = (data) => {
  return {
    type: EDIT_ASSO_SUCCESS,
    data,
  };
};

const registerUserFailure = data => ({
  type: REGISTER_USER_FAILURE,
  data,
});
const registerUserSuccess = data => ({
  type: REGISTER_USER_SUCCESS,
  data,
});


const registerAssoFailure = data => ({
  type: REGISTER_ASSO_FAILURE,
  data,
});
const registerAssoSuccess = data => ({
  type: REGISTER_ASSO_SUCCESS,
  data,
});

const fetchAssoByIdSuccess = association => ({
  type: FETCH_ASSOCIATION_BY_ID_SUCCESS,
  association,
});


const fetchAssosSuccess = associations => ({
  type: FETCH_ASSOS_SUCCESS,
  associations,
});


export const fetchAnimals = () => (dispatch) => {
  axios.get('http://127.0.0.1:8001/api/animals').then((animals) => {
    dispatch(fetchAnimalsSuccess(animals.data['hydra:member']));
  });
};

export const fetchAssociations = () => (dispatch) => {
  axios.get('http://127.0.0.1:8001/api/associations').then((associations) => {
    dispatch(fetchAssosSuccess(associations.data['hydra:member']));
  });
};

export const fetchAnimalById = animalId => function (dispatch) {
  dispatch(fetchAnimalByIdInit());
  axios.get(`http://127.0.0.1:8001/api/animals/${animalId}`).then((animal) => {
    dispatch(fetchAnimalByIdSuccess(animal.data));
    console.log(animal.data);
  });
};


export const registerUser = (userData) =>{ 
  return function (dispatch) {
    return axios.post('http://127.0.0.1:8001/api/users',
      {
        firstname: userData.firstname,
        lastname: userData.name,
        email: userData.email,
        plainPassword: userData.plainPassword,
      })
      .then(
        (res) => {
          dispatch(registerUserSuccess(res.data));
        },
      )
      .catch((err) => {
        if (err.response.status === 500) {
          dispatch(registerUserFailure({ text: 'Cette adresse email existe déjà' }))
        }
      });
  };
};

export const registerAsso = (userData) =>{ 
  return function (dispatch) {
    return axios.post('http://127.0.0.1:8001/api/associations',
      {
        name: userData.name,
        manager: userData.manager,
        rna: userData.rna,
        email: userData.email,
        plainPassword: userData.plainPassword,
        phone: userData.phone,
        address: {
          line1: userData.line1,
          line2: userData.line2,
          cp: userData.cp,
          city: userData.city,
        }
      })
      .then(
        (res) => {
          dispatch(registerAssoSuccess(res.data));
        },
      )
      .catch((err) => {
        if (err.response.status === 500) {
          dispatch(registerAssoFailure({ text: 'Cette adresse email existe déjà' }));
        }
      });
  };

};

export const fetchAssociationById = associationId => function (dispatch) {
  dispatch(fetchAssoByIdInit());

  axios.get(`http://127.0.0.1:8001/api/associations/${associationId}`).then((association) => {
    dispatch(fetchAssoByIdSuccess(association.data));
  });
};


const updateAnimalSuccess = animal => ({

  type: UPDATE_ANIMAL_SUCCESS,
  animal,
});

const updateAnimalFail = error => ({
  type: UPDATE_ANIMAL_FAIL,
  error,
});

export const updateAnimal = (animal) => (dispatch) => {
  debugger;
  return axios.put(`http://127.0.0.1:8001/api/animals/${animal.id}`, {status: animal.status['@id']}).then(
    res => dispatch(updateAnimalSuccess(res.data)),
    err => dispatch(updateAnimalFail(err)),
  );

};

const loginSuccess = () => ({
  type: LOGIN_USER_SUCCESS,
});

const loginFailure = data => ({
  type: LOGIN_USER_FAILURE,
  data,
});

export const checkAuthState = () => (dispatch) => {
  if (authService.isAuthenticated()) {
    dispatch(loginSuccess());
  }
};


export const loginUser = (userData) => {
  return dispatch => {
    axios.post('http://127.0.0.1:8001/login_check_user', { ...userData })
      .then(res => {
        // console.log(res)
        localStorage.setItem('auth_token', res.data.token);
        localStorage.setItem('id', res.data.data.id);
        dispatch(loginSuccess());
      })
      .catch((err) => {
        // console.log(err.response.status)
        if (err.response.status === 401) {
        dispatch(loginFailure({text: "L'adresse mail et/ou le mot de passe ne correspondent pas."}));
        }
      })
  }
}


export const logoutUser = () => {
  authService.invalidateUser();
  localStorage.removeItem('id');

  return {
    type: LOGOUT_USER,
  };
};

const loginAssoSuccess = () => ({
  type: LOGIN_ASSO_SUCCESS,
});

const loginAssoFailure = data => ({
  type: LOGIN_ASSO_FAILURE,
  data,
});

export const checkAuthAssoState = () => (dispatch) => {
  if (authServiceAsso.isAuthenticated()) {
    dispatch(loginAssoSuccess());
  }
};


export const loginAsso = (userData) => {
  return dispatch => {
    axios.post('http://127.0.0.1:8001/login_check_association', { ...userData })
      .then(res => {
        console.log(res)
        localStorage.setItem('auth_token_asso', res.data.token);
        localStorage.setItem('idAsso', res.data.data.id);
        localStorage.setItem('idAddress', res.data.data.idAddress);
        dispatch(loginAssoSuccess());
      })
      .catch((err) => {
        if (err.response.status === 401) {
        dispatch(loginAssoFailure({text: "L'adresse mail et/ou le mot de passe ne correspondent pas."}));
        }
      })
  }
}


export const logoutAsso = () => {
  authServiceAsso.invalidateUser();
  localStorage.removeItem('idAsso');
  localStorage.removeItem('idAddress');

  return {
    type: LOGOUT_ASSO,
  };
};

export const editUser = (userData) =>{ 
  const userId = localStorage.id;
  return function (dispatch) {
    return axios.put(`http://127.0.0.1:8001/api/users/${userId}`,
      {
        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email,
        plainPassword: userData.plainPassword,
      })
      .then(
        (res) => {
          dispatch(editUserSuccess(res.data));
        },
      )
      .catch((err) => {
        if (err.response.status === 500) {
          dispatch(editUserFailure({ text: 'Cette adresse email existe déjà' }))
        }
      });
  };
};


export const editAsso = (userData) =>{ 
  const associationId = localStorage.idAsso;
  const addressId = localStorage.idAddress;


  return function (dispatch) {
    return axios.put(`http://127.0.0.1:8001/api/associations/${associationId}`,
      {
        name: userData.name,
        manager: userData.manager,
        rna: userData.rna,
        email: userData.email,
        plainPassword: userData.plainPassword,
        phone: userData.phone,
        address: {
          id: `/api/addresses/${addressId}`,
          line1: userData.line1,
          line2: userData.line2,
          cp: userData.cp,
          city: userData.city,
        }
      })
      .then(
        (res) => {
          dispatch(editAssoSuccess(res.data));
        },
      )
      .catch((err) => {
        console.log(err.response);
        if (err.response.status === 500) {
          dispatch(editAssoFailure({ text: 'Cette adresse email existe déjà' }));
        }
      });
  };
};

const fetchRaceSuccess = (data) => {
  // console.log('data',data)
  const names = [];
  data.map(dt=>{
    names.push({name: dt.name, id: dt['@id']})
  })

  // console.log('names', names)
  return {
  type: FETCH_RACE_SUCCESS,
  data: names,
}
};

export const fetchRace = () => (dispatch) => {
  axios.get('http://127.0.0.1:8001/api/races').then((races) => {
    dispatch(fetchRaceSuccess(races.data['hydra:member']));
  });
};

const fetchSexSuccess = (data) => {
  // console.log('data',data)
  const names = [];
  data.map(dt=>{
    names.push({name: dt.name, id: dt['@id']})
  })

  // console.log('names', names)
  return {
  type: FETCH_SEX_SUCCESS,
  data: names,
}
};

export const fetchSex = () => (dispatch) => {
  axios.get('http://127.0.0.1:8001/api/sexes').then((sexes) => {
    dispatch(fetchSexSuccess(sexes.data['hydra:member']));
  });
};

const fetchCoatsSuccess = (data) => {
  // console.log('data',data)
  const names = [];
  data.map(dt=>{
    names.push({name: dt.name, id: dt['@id']})
  })

  // console.log('names', names)
  return {
  type: FETCH_COATS_SUCCESS,
  data: names,
}
};

export const fetchCoats = () => (dispatch) => {
  axios.get('http://127.0.0.1:8001/api/coats').then((coats) => {
    dispatch(fetchCoatsSuccess(coats.data['hydra:member']));
  });
};

const fetchColorSuccess = (data) => {
  // console.log('data',data)
  const names = [];
  data.map(dt=>{
    names.push({name: dt.name, id: dt['@id']})
  })

  // console.log('names', names)
  return {
  type: FETCH_COLOR_SUCCESS,
  data: names,
}
};

export const fetchColor = () => (dispatch) => {
  axios.get('http://127.0.0.1:8001/api/colors').then((colors) => {
    dispatch(fetchColorSuccess(colors.data['hydra:member']));
  });
};

const fetchSizeSuccess = (data) => {
  // console.log('data',data)
  const names = [];
  data.map(dt=>{
    names.push({name: dt.name, id: dt['@id']})
  })

  // console.log('names', names)
  return {
  type: FETCH_SIZE_SUCCESS,
  data: names,
}
};

export const fetchSize = () => (dispatch) => {
  axios.get('http://127.0.0.1:8001/api/sizes').then((sizes) => {
    dispatch(fetchSizeSuccess(sizes.data['hydra:member']));
  });
};

const fetchSpecieSuccess = (data) => {
  // console.log('data',data)
  const names = [];
  data.map(dt=>{
    names.push({name: dt.name, id: dt['@id']})
  })

  // console.log('names', names)
  return {
  type: FETCH_SPECIE_SUCCESS,
  data: names,
}
};

export const fetchSpecie = () => (dispatch) => {
  axios.get('http://127.0.0.1:8001/api/species').then((species) => {
    dispatch(fetchSpecieSuccess(species.data['hydra:member']));
  });
};

const createAnimalSuccess = (data) => {
  return {
    type: CREATE_ANIMAL_SUCCESS,
    data,
  };
};

export const createAnimal = (animalData) =>{ 
  const associationId = localStorage.idAsso;
  return function (dispatch) {
    return axios.post('http://127.0.0.1:8001/api/animals',
      {
        name: animalData.name,
        description: animalData.description,
        age: animalData.age,
        race: animalData.race,
        species: animalData.species,
        color: animalData.color,
        coats: animalData.coats,
        sex: animalData.sex,
        size: animalData.size,
        status: '/api/statuses/107',
        association: `/api/associations/${associationId}`,

      })
      .then(
        (res) => {
          dispatch(createAnimalSuccess(res.data));
          localStorage.setItem('animal_id', res.data.id);
        },
      )
      .catch((err) => {
        console.log(err.response);
        // if (err.response.status === 500) {
        //   dispatch(editUserFailure({ text: 'Cette adresse email existe déjà' }))
        // }
      });
  };
};

