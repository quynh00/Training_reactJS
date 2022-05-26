import {
  LOG_IN,
  LOG_OUT,
  SWITCH_THEME,
  GET_USER_NAME,
  CHANGE_LANGUAGE,
  SWITCH_TAB,
  NAME_TAB,
  SLIDE_SHOW,
  SEARCH,
} from "./types";
const initialSate = {
  Login: {
    isLogin: false,
    username: "",
    table_tab: "HOSE",
    namePriceBoard: "HOSE",
  },
  Theme: {
    checkTheme: "dark",
  },
  Language: {
    langis: "vi",
  },
  Slide: {
    isShow: false,
  },
  search: {
    search: "",
  },
};

const Reducer = (state = initialSate, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        Login: {
          ...state.Login,
          isLogin: action.payload,
        },
      };

    case GET_USER_NAME: {
      return {
        ...state,
        Login: {
          ...state.Login,
          username: action.payload,
        },
      };
    }

    case LOG_OUT:
      return {
        ...state,
        Login: {
          ...state.Login,
          isLogin: action.payload,
        },
      };
    case SWITCH_TAB:
      return {
        ...state,
        Login: {
          ...state.Login,
          table_tab: action.payload,
        },
      };
    case NAME_TAB:
      return {
        ...state,
        Login: {
          ...state.Login,
          namePriceBoard: action.payload,
        },
      };

    case SLIDE_SHOW: {
      return {
        ...state,
        Slide: {
          ...state.Slide,
          isShow: action.payload,
        },
      };
    }

    case SWITCH_THEME:
      return {
        ...state,
        Theme: {
          ...state.Theme,
          checkTheme: action.payload,
        },
      };

    case CHANGE_LANGUAGE:
      return {
        ...state,
        Language: {
          ...state.Language,
          langis: action.payload,
        },
      };

    case SEARCH:
      return {
        ...state,
        search: {
          ...state.search,
          search: action.payload,
        },
      };

    default:
      return state;
  }
};

export default Reducer;
