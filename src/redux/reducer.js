const initialState = {
    currentStep: 1,
    formData: {
      firstName: '',
      lastName: '',
      applicationDate: '',
      country: '',
      proceed: '',
    },
  };
  
  function formReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_STEP':
        return {
          ...state,
          currentStep: action.payload,
        };
      case 'FORM_INPUT_CHANGE':
        return {
          ...state,
          formData: {
            ...state.formData,
            ...action.payload,
          },
        };
      default:
        return state;
    }
  }
  
  export default formReducer;
  