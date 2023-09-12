class UnauthorizeError extends Error {
  constructor(errorMessage = '', errorType?: string) {
    super(errorMessage)
    this.name = 'UnauthorizeError'
    this.stack = errorType as string
  }
}

class UnprocessableEntityError extends Error {
  constructor(errorMessage = '', errorType?: string) {
    super(errorMessage)
    this.name = 'UnprocessableEntityError'
    this.stack = errorType as string
  }
}

class NotFoundError extends Error {
  constructor(errorMessage = '', errorType?: string) {
    super(errorMessage)
    this.name = 'NotFoundError'
    this.stack = errorType as string
  }
}

class BadRequestError extends Error {
  constructor(errorMessage = '', errorType?: string) {
    super(errorMessage)
    this.name = 'BadRequestError'
    this.stack = errorType as string
  }
}

class ForbiddenError extends Error {
  constructor(errorMessage = '', errorType?: string) {
    super(errorMessage)
    this.name = 'ForbiddenError'
    this.stack = errorType as string
  }
}
class ServerError extends Error {
  constructor() {
    super('Erro no servidor. Por favor, tente novamente mais tarde.')
    this.name = 'ServerError'
  }
}

export function baseErrors(status: number, errorMessage: string, errorType?: string) {
  switch (status) {
    case 400:
      throw new BadRequestError(errorMessage, errorType)
    case 401:
      throw new UnauthorizeError(errorMessage, errorType)
    case 403:
      throw new ForbiddenError(errorMessage, errorType)
    case 404:
      throw new NotFoundError(errorMessage, errorType)
    case 422:
      throw new UnprocessableEntityError(errorMessage, errorType)
    default:
      throw new ServerError()
  }
}
