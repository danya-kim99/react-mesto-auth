  class AuthApi {
    constructor() {
      this._baseUrl = 'https://auth.nomoreparties.co'
    }

    _getResponseData(res, errorText) {
      if (!res.ok) {
        return Promise.reject(`${errorText} Код ошибки: ${res.status}`);
      }
      return res.json();
    }

    register(password, email) {
      return fetch(`https://auth.nomoreparties.co/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({password, email})
    })
        .then(res => {
          return this._getResponseData(res, 'Не удалось зарегистрироваться.')
        });
    }
  }

  export const authApi = new AuthApi()