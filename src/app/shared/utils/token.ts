import {IToken} from "../models/interfaces";

function getTokenExpirationDate(token: IToken): Date | null {
  return 'expiresIn' in token ? new Date(token.expiresIn) : null;
}
export function isTokenExpired(token: IToken | null): boolean {
  if (!token) {
    return true;
  }

  const expirationDate = getTokenExpirationDate(token);

  if (!expirationDate) {
    return true;
  }

  return expirationDate.valueOf() > new Date().valueOf() * 1000;
}

