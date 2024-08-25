/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { House } from '../models/House';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class HouseControllerService {
    /**
     * @returns House OK
     * @throws ApiError
     */
    public static getAll1(): CancelablePromise<Array<House>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/houses',
        });
    }
    /**
     * @param requestBody
     * @returns House Created
     * @throws ApiError
     */
    public static save1(
        requestBody: House,
    ): CancelablePromise<House> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/houses',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param name
     * @returns House OK
     * @throws ApiError
     */
    public static findByName(
        name: string,
    ): CancelablePromise<House> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/houses/name/{name}',
            path: {
                'name': name,
            },
        });
    }
    /**
     * @param id
     * @returns House OK
     * @throws ApiError
     */
    public static getById1(
        id: string,
    ): CancelablePromise<House> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/houses/id/{id}',
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
    public static delete1(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/houses/id/{id}',
            path: {
                'id': id,
            },
        });
    }
}
