// fetch.test.ts에서 사용하는 테스트 타깃입니다.

export const getUserInfo = () => {
  const user = fetch('http://foo.com/users/1')
    .then((pureRes) => pureRes.json())
    .then((user) => user);

  return user;
};
