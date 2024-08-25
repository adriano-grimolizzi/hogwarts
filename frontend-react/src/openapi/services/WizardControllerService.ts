/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Wizard } from '../models/Wizard';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WizardControllerService {
    /**
     * @returns Wizard OK
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<Array<Wizard>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/wizards',
        });
    }
    /**
     * @param requestBody
     * @returns Wizard Created
     * @throws ApiError
     */
    public static save(
        requestBody: Wizard,
    ): CancelablePromise<Wizard> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/wizards',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns Wizard OK
     * @throws ApiError
     */
    public static getById(
        id: string,
    ): CancelablePromise<Wizard> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/wizards/id/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static delete(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/wizards/id/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param houseName
     * @returns Wizard OK
     * @throws ApiError
     */
    public static findByHouse(
        houseName: string,
    ): CancelablePromise<Array<Wizard>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/wizards/house/{houseName}',
            path: {
                'houseName': houseName,
            },
        });
    }
}
