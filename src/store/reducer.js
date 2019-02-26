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

} from '../actions/types';

// initial state
const INITIAL_STATE = {
  animals: {
    data: [],
    errors: [],
  },
  animal: {
    data: {},
  },

  registerUser: {
    registerError: '',
    email: '',
    lastname: '',
    firstname: '',
    redirect: false,
  },
  registerAsso: {
    registerError: '',
    email: '',
    name: '',
    manager: '',
    rna: '',
    phone: '',
    address: {
      line1: '',
      line2: '',
      cp: '',
      city: '',
    },
    redirect: false,
  },
  associations: {
    data: [],
    errors: [],
  },
  association: {
    data: {},

  },
  loginUser: {
    isAuth: false,
    loginError: '',
  },
  loginAsso: {
    isAuthAsso: false,
    loginError: '',
  },
  editUser: {
    editError: '',
    email: '',
    lastname: '',
    firstname: '',
    redirect: false,
  },
  editAsso: {
    editError: '',
    email: '',
    name: '',
    manager: '',
    rna: '',
    phone: '',
    address: {
      line1: '',
      line2: '',
      cp: '',
      city: '',
    },
    redirect: false,
  },
  races: {
    data: [],
  },
  sexes: {
    data: [],
  },
  coats: {
    data: [],
  },
  colors: {
    data: [],
  },
  sizes: {
    data: [],
  },
  species: {
    data: [],
  },
  createAnimal: {
    name: '',
    description: '',
    age: '',
    race: '',
    specie: '',
    color: '',
    coats: '',
    sex: '',
    size: '',
    status: '',
    associations: '',
    redirect: false,
  },
};

// reducer
export const Animalreducer = (state = INITIAL_STATE.animals, action) => {
  switch (action.type) {
    case FETCH_ANIMALS_SUCCESS:
      return { ...state, data: action.animals };
    // Action non-reconnue
    default:
      return state;
  }
};

export const selectedAnimalReducer = (state = INITIAL_STATE.animal, action) => {
  switch (action.type) {
    case FETCH_ANIMAL_BY_ID_INIT:
      return { ...state, data: {} };
    case FETCH_ANIMAL_BY_ID_SUCCESS:
      return Object.assign({}, state, { data: action.animal });
    default:
      return state;
  }
};


export const registerUser = (state = INITIAL_STATE.registerUser, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        firstname: action.data.fistname,
        email: action.data.email,
        lastname: action.data.name,
        redirect: true,
      };
    case REGISTER_USER_FAILURE:
      return { ...state, registerError: action.data.text };

      // Action non-reconnue
    default:
      return state;
  }
}

export const Associationreducer = (state = INITIAL_STATE.associations, action) => {
  switch (action.type) {
    case FETCH_ASSOS_SUCCESS:
      return { ...state, data: action.associations };

    // Action non-reconnue
    default:
      return state;
  }
};


export const registerAsso = (state = INITIAL_STATE.registerAsso, action) => {
  switch (action.type) {
    case REGISTER_ASSO_SUCCESS:
      return {
        ...state,
        email: action.data.email,
        name: action.data.name,
        firstname: action.data.firstname,
        line1: action.data.address.line1,
        line2: action.data.address.line2,
        cp: action.data.address.cp,
        city: action.data.address.city,
        redirect: true,
      };
    case REGISTER_ASSO_FAILURE:
      return { ...state, registerError: action.data.text };

    // Action non-reconnue
    default:
      return state;
  }
};

export const selectedAssociationReducer = (state = INITIAL_STATE.association, action) => {
  switch (action.type) {
    case FETCH_ASSOCIATION_BY_ID_INIT:
      return { ...state, data: {} };
    case FETCH_ASSOCIATION_BY_ID_SUCCESS:
      return Object.assign({}, state, { data: action.association });

    default:
      return state;
  }
};

export const loginUser = (state = INITIAL_STATE.loginUser, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        loginError: '',
      };
    case LOGIN_USER_FAILURE:
      return { ...state, loginError: action.data.text };
    case LOGOUT_USER:
      return {
        ...state,
        isAuth: false,
      };

      // Action non-reconnue
    default:
      return state;
  }
};

export const loginAsso = (state = INITIAL_STATE.loginAsso, action) => {
  switch (action.type) {
    case LOGIN_ASSO_SUCCESS:
      return {
        ...state,
        isAuthAsso: true,
        loginError: '',
      };
    case LOGIN_ASSO_FAILURE:
      return { ...state, loginError: action.data.text };
    case LOGOUT_ASSO:
      return {
        ...state,
        isAuthAsso: false,
      };
      // Action non-reconnue
    default:
      return state;
  }
};

export const editUser = (state = INITIAL_STATE.editUser, action) => {
  switch (action.type) {
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        firstname: action.data.fistname,
        email: action.data.email,
        lastname: action.data.name,
        redirect: true,
      };
    case EDIT_USER_FAILURE:
      return { ...state, editError: action.data.text };

      // Action non-reconnue
    default:
      return state;
  }
}

export const editAsso = (state = INITIAL_STATE.editAsso, action) => {
  switch (action.type) {
    case EDIT_ASSO_SUCCESS:
      return {
        ...state,
        email: action.data.email,
        name: action.data.name,
        firstname: action.data.firstname,
        line1: action.data.address.line1,
        line2: action.data.address.line2,
        cp: action.data.address.cp,
        city: action.data.address.city,
        redirect: true,
      };
    case EDIT_ASSO_FAILURE:
      return { ...state, editError: action.data.text };

    // Action non-reconnue
    default:
      return state;
  }
};

export const raceReducer = (state = INITIAL_STATE.races, action) => {
  switch (action.type) {
    case FETCH_RACE_SUCCESS:
      return { ...state, data: action.data };

    // Action non-reconnue
    default:
      return state;
  }
};

export const sexReducer = (state = INITIAL_STATE.sexes, action) => {
  switch (action.type) {
    case FETCH_SEX_SUCCESS:
      return { ...state, data: action.data };

    // Action non-reconnue
    default:
      return state;
  }
};

export const coatsReducer = (state = INITIAL_STATE.coats, action) => {
  switch (action.type) {
    case FETCH_COATS_SUCCESS:
      return { ...state, data: action.data };

    // Action non-reconnue
    default:
      return state;
  }
};

export const colorReducer = (state = INITIAL_STATE.colors, action) => {
  switch (action.type) {
    case FETCH_COLOR_SUCCESS:
      return { ...state, data: action.data };

    // Action non-reconnue
    default:
      return state;
  }
};

export const sizeReducer = (state = INITIAL_STATE.sizes, action) => {
  switch (action.type) {
    case FETCH_SIZE_SUCCESS:
      return { ...state, data: action.data };

    // Action non-reconnue
    default:
      return state;
  }
};

export const specieReducer = (state = INITIAL_STATE.species, action) => {
  switch (action.type) {
    case FETCH_SPECIE_SUCCESS:
      return { ...state, data: action.data };

    // Action non-reconnue
    default:
      return state;
  }
};

export const createAnimal = (state = INITIAL_STATE.createAnimal, action) => {
  switch (action.type) {
    case CREATE_ANIMAL_SUCCESS:
      return {
        ...state,
        name: action.data.name,
        description: action.data.description,
        age: action.data.age,
        race: action.data.race,
        specie: action.data.specie,
        color: action.data.color,
        coats: action.data.coats,
        sex: action.data.sex,
        size: action.data.size,
        status: action.data.status,
        associations: action.data.associations,
        redirect: true,
      };

      // Action non-reconnue
    default:
      return state;
  }
}

// action creator


// export
