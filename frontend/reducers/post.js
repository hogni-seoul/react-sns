export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "hogni",
      },
      content: "Hello World #hashtag",
      Images: [
        {
          src: "https://picsum.photos/600",
        },
        {
          src: "https://picsum.photos/600",
        },
        {
          src: "https://picsum.photos/600",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "hoo",
          },
          content: "안녕하세요.",
        },
        {
          User: {
            nickname: "Doe",
          },
          content: "점심 드셨어요?",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미 데이터입니다",
  User: {
    id: 1,
    nickname: "hogni",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
