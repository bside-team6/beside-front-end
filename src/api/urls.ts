export const API_URL = {
  LOGIN: '/api/v2/user/login',
  LOGOUT: '/api/v2/user/logout',
  SIGNUP: '/api/v2/user/signup',
  VALIDATE_NICKNAME: '/api/v2/user/validate/nick-name',
  USER_INFO: '/api/v2/user/info',
  WINE_NOTE: '/api/v2/wine-note',
  WINE_NOTE_LIKE: '/api/v2/wine-note-like',
  WINE_NOTE_FITS_ME: '/api/v2/wine-note-fits-me',
  WINE_NOTE_PUBLIC: '/api/v2/wine-note-public',
  WINE_NOTE_WINE_NAME_PUBLIC_ADMIN:
    '/api/v2/manager/wine-note-wine-name-public',
  WINE_NOTE_TIMELINE: '/api/v2/wine-note-timeline',
  POPULAR_WINE_NOTE: '/api/v2/wine-note-popular',
  RELATED_WINE_NOTE: '/api/v2/wine-note/related',
  SEARCH_WINE_NAME: '/api/v2/wine-name-search',
  SEARCH_WINE_NAME_ADMIN: '/api/v2/manager/wine-name',
  SEARCH_FOOD_NAME: '/api/v2/wine-note-food',
} as const;
