/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface StoreUser
 */
export interface StoreUser {
    /**
     * 
     * @type {string}
     * @memberof StoreUser
     */
    nick: string;
    /**
     * 
     * @type {string}
     * @memberof StoreUser
     */
    password: string;
}

/**
 * Check if a given object implements the StoreUser interface.
 */
export function instanceOfStoreUser(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "nick" in value;
    isInstance = isInstance && "password" in value;

    return isInstance;
}

export function StoreUserFromJSON(json: any): StoreUser {
    return StoreUserFromJSONTyped(json, false);
}

export function StoreUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoreUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nick': json['nick'],
        'password': json['password'],
    };
}

export function StoreUserToJSON(value?: StoreUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nick': value.nick,
        'password': value.password,
    };
}
