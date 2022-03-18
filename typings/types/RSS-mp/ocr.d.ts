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

  interface ocrRes {
    'identity-front': identityFrontRes
    'identity-back': identityFrontRes
  }

  interface identityFrontRes {
    Address: string
    AdvancedInfo: string // jsonString
    Authority: string
    Birth: string
    IdNum: string
    Name: string
    Nation: string
    RequestId: string
    Sex: string
    ValidDate: string
  }
}