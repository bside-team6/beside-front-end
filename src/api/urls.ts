export const API_URL = {
  LOGIN: '/api/v1/user/login',
  LOGOUT: '/api/v1/user/logout',
  SIGNUP: '/api/v1/user/signup',
  VALIDATE_NICKNAME: '/api/v1/user/validate/nick-name',
  USER_INFO: '/api/v1/user/info',
  WINE_NOTE: '/api/v1/wine-note',
  WINE_NOTE_LIKE: '/api/v1/wine-note-like',
  WINE_NOTE_FITS_ME: '/api/v1/wine-note-fits-me',
  WINE_NOTE_PUBLIC: '/api/v1/wine-note-public',
  WINE_NOTE_WINE_NAME_PUBLIC_ADMIN:
    '/api/v1/manager/wine-note-wine-name-public',
  WINE_NOTE_TIMELINE: '/api/v1/wine-note-timeline',
  POPULAR_WINE_NOTE: '/api/v1/wine-note-popular',
  RELATED_WINE_NOTE: '/api/v1/wine-note/related',
  SEARCH_WINE_NAME: '/api/v1/wine-name-search',
  SEARCH_WINE_NAME_ADMIN: '/api/v1/manager/wine-name',
  SEARCH_FOOD_NAME: '/api/v1/wine-note-food',
} as const;
