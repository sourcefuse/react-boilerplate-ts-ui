export const logout = () => {
  // TODO: cleanup
  // window.location.replace("https://mydomain.auth.us-east-1.amazoncognito.com/logout?client_id=4k8dfsfe7m1u2nsj86p2dif6mi&logout_uri=https://myclient/logout")
  localStorage.clear();
  sessionStorage.clear();
  window.location.replace(
    'https://refarch-dev.auth.us-east-1.amazoncognito.com/logout?client_id=4k8dfsfe7m1u2nsj86p2dif6mi&logout_uri=http://localhost:3000',
  );
};
