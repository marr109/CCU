/*
    Función utilizada para extraer el mensaje de error y permitir la correción. 
*/ 


export const extractMessageFromError = (error: any): string => {
    if (typeof error === 'string') {
      return error
    }
    if (error.message) {
      return error.message
    }
    return `${error}`
}
  
