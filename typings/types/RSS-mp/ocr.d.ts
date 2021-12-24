declare namespace ocrDesign {
  interface tokenGet {
    access_token: string
    refresh_token: string
    scope: string
    session_key: string
    session_secret: string
    expires_in: number
  }

  interface wxTokenGet {
    access_token: string
  }

  interface tokenGetParams {
    
  }
}