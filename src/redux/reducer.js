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
  const SUBMIT_FORM_START = 'SUBMIT_FORM_START';
const SUBMIT_FORM_SUCCESS = 'SUBMIT_FORM_SUCCESS';
const SUBMIT_FORM_FAILURE = 'SUBMIT_FORM_FAILURE';
  
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
        case SUBMIT_FORM_START:
          return { ...state, submitting: true };
        case SUBMIT_FORM_SUCCESS:
          return { ...state, submitting: false, submitSuccess: true };
        case SUBMIT_FORM_FAILURE:
          return { ...state, submitting: false, submitError: action.payload };
      default:
        return state;
    }
  }
  
  export default formReducer;
  

