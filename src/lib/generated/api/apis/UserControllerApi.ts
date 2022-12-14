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


import * as runtime from '../runtime';
import type {
  ShowUser,
  StoreUser,
} from '../models';
import {
    ShowUserFromJSON,
    ShowUserToJSON,
    StoreUserFromJSON,
    StoreUserToJSON,
} from '../models';

export interface ShowRequest {
    id: number;
}

export interface StoreRequest {
    storeUser: StoreUser;
    gRecaptchaResponse?: string;
}

/**
 * 
 */
export class UserControllerApi extends runtime.BaseAPI {

    /**
     */
    async meRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShowUser>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShowUserFromJSON(jsonValue));
    }

    /**
     */
    async me(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShowUser> {
        const response = await this.meRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async showRaw(requestParameters: ShowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShowUser>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling show.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShowUserFromJSON(jsonValue));
    }

    /**
     */
    async show(requestParameters: ShowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShowUser> {
        const response = await this.showRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async storeRaw(requestParameters: StoreRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShowUser>> {
        if (requestParameters.storeUser === null || requestParameters.storeUser === undefined) {
            throw new runtime.RequiredError('storeUser','Required parameter requestParameters.storeUser was null or undefined when calling store.');
        }

        const queryParameters: any = {};

        if (requestParameters.gRecaptchaResponse !== undefined) {
            queryParameters['g-recaptcha-response'] = requestParameters.gRecaptchaResponse;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StoreUserToJSON(requestParameters.storeUser),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShowUserFromJSON(jsonValue));
    }

    /**
     */
    async store(requestParameters: StoreRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShowUser> {
        const response = await this.storeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
