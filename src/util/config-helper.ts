import { SessionStorageKeys } from '@/util/constants'

import axios from 'axios'

/**
 * the configs are used since process.env doesnt play well when we hae only one build config and multiple deployments..so going for this
 */
const url = `${process.env.VUE_APP_PATH}config/configuration.json`

export default class ConfigHelper {
  static async fetchConfig () {
    const response = await axios.get(url)
    sessionStorage.setItem(SessionStorageKeys.ApiConfigKey, JSON.stringify(response.data))
    // sbc common components need the following keys
    sessionStorage.setItem(SessionStorageKeys.AuthApiUrl, ConfigHelper.getAuthAPIUrl())
    sessionStorage.setItem(SessionStorageKeys.StatusApiUrl, ConfigHelper.getStatusAPIUrl())
    sessionStorage.setItem(SessionStorageKeys.AuthWebUrl, ConfigHelper.getSelfURL())
  }

  /**
 * this will run everytime when vue is being loaded..so do the call only when session storage doesnt have the values
 */
  static saveConfigToSessionStorage () {
    return this.fetchConfig()
  }

  static getSelfURL () {
    // this is without a trailing slash
    return `${window.location.origin}${process.env.VUE_APP_PATH}`.replace(/\/$/, '') // remove the slash at the end
  }

  // static getDirectorSearchURL () {
  //   return ConfigHelper.getValue('DIRECTOR_SEARCH_URL')
  // }

  // static getNewBusinessURL () {
  //   // returns new business URL
  //   return ConfigHelper.getValue('BUSINESS_CREATE_URL')
  // }

  // static getFileServerUrl () {
  //   return ConfigHelper.getValue('FILE_SERVER_URL')
  // }

  // static getNroUrl () {
  //   return ConfigHelper.getValue('NRO_URL')
  // }

  // static getNameRequestUrl () {
  //   return ConfigHelper.getValue('NAME_REQUEST_URL')
  // }

  // static getBceIdOsdLink () {
  //   return ConfigHelper.getValue('BCEID_URL')
  // }

  // static getAffidavitSize () {
  //   return ConfigHelper.getValue('AFFIDAVIT_FILE_SIZE')
  // }

  static getPayAPIURL () {
    return ConfigHelper.getValue('PAY_API_URL') + ConfigHelper.getValue('PAY_API_VERSION')
  }

  // static getPaymentPayeeName () {
  //   return ConfigHelper.getValue('PAYMENT_PAYEE_NAME') || 'BC Registries and Online Services'
  // }

  static getAuthAPIUrl () {
    return ConfigHelper.getValue('AUTH_API_URL') + ConfigHelper.getValue('AUTH_API_VERSION')
  }

  // static getAuthResetAPIUrl () {
  //   return ConfigHelper.getValue('AUTH_API_URL') + '/test/reset'
  // }

  // static getLegalAPIUrl () {
  //   return ConfigHelper.getValue('LEGAL_API_URL') + ConfigHelper.getValue('LEGAL_API_VERSION')
  // }

  // static getVonAPIUrl () {
  //   return ConfigHelper.getValue('VON_API_URL') + ConfigHelper.getValue('VON_API_VERSION')
  // }

  static getStatusAPIUrl () {
    return ConfigHelper.getValue('STATUS_API_URL') + ConfigHelper.getValue('STATUS_API_VERSION')
  }

  // static getEntitySelectorUrl () {
  //   return ConfigHelper.getValue('ENTITY_SELECTOR_URL')
  // }

  static getValue (key: String) {
    // @ts-ignore
    return JSON.parse(sessionStorage.getItem(SessionStorageKeys.ApiConfigKey))[key]
  }

  static addToSession (key:string, value:any) {
    sessionStorage.setItem(key, value)
  }

  static getFromSession (key:string) {
    return sessionStorage.getItem(key)
  }

  static removeFromSession (key:string) {
    sessionStorage.removeItem(key)
  }

  static clearSession () {
    sessionStorage.clear()
  }
}
