export class UserApi {
  static subscribeForNews(email) {
      return new Promise((resolve) => {
        setTimeout(() => resolve({success: true}), 3000);
      })
  }
}

export class ModalApi {
  static hideModalWindow() {
    return new Promise((resolve) => {
      setTimeout(() => resolve({success: false}), 1500);
    })
  }
}