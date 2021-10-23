import instance from './instance';

/**
 * GET 모든 와인노트 목록
 */
export const getWineNotes = async () => {
  const { data } = await instance.get(`/v1/wine-note`);
  return data;
};

/**
 * GET 와인 노트 상세보기
 */
export const getWineNote = async (wineNoteId) => {
  const { data } = await instance.get(`/v1/wine-note/${wineNoteId}`);
  return data;
};

/**
 * POST 와인 노트 등록
 */
export const postWineNote = async (data) => {
  await instance.post(`/v1/wine-note`, data);
};

/**
 * POST 와인노트 좋아요
 */
export const postWineNoteLike = async (wineNoteId) => {
  await instance.post(`/v1/wine-note-like`, {
    wineNoteId,
  });
};

/**
 * POST 와인노트 공개여부 변경
 */
export const postWineNotePublic = async (wineNoteId) => {
  await instance.post(`/v1/wine-name-public`, {
    wineNoteId,
  });
};

/**
 * GET 타임라인
 */
export const getWineNoteTimeline = async () => {
  const { data } = await instance.get(`/v1/wine-note-timeline`);
  return data;
};

/**
 * GET 이달의와인 목록
 */
export const getPopularWineNotes = async () => {
  const { data } = await instance.get(`/v1/wine-note-popular`);
  return data;
};

/**
 * GET 와인명 조회
 */
export const getSearchWineName = async (searchName) => {
  const { data } = await instance.get(`/v1/wine-name-search`, {
    params: {
      searchName,
    },
  });
  return data;
};

/**
 * GET 음식명 조회
 */
export const getSearchFoodName = async (keywords) => {
  const { data } = await instance.get(`/v1/wine-note-food`, {
    params: {
      keywords,
    },
  });
  return data;
};
