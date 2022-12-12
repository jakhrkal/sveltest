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
 * @interface ShowGame
 */
export interface ShowGame {
    /**
     * 
     * @type {number}
     * @memberof ShowGame
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ShowGame
     */
    name?: string;
    /**
     * 
     * @type {Date}
     * @memberof ShowGame
     */
    createdOn?: Date;
    /**
     * 
     * @type {string}
     * @memberof ShowGame
     */
    description?: string;
}

/**
 * Check if a given object implements the ShowGame interface.
 */
export function instanceOfShowGame(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ShowGameFromJSON(json: any): ShowGame {
    return ShowGameFromJSONTyped(json, false);
}

export function ShowGameFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShowGame {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'createdOn': !exists(json, 'createdOn') ? undefined : (new Date(json['createdOn'])),
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function ShowGameToJSON(value?: ShowGame | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'createdOn': value.createdOn === undefined ? undefined : (value.createdOn.toISOString()),
        'description': value.description,
    };
}

