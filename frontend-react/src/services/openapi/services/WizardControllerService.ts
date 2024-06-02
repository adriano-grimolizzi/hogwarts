/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Wizard } from "../models/Wizard"
import type { WizardDto } from "../models/WizardDto"
import type { CancelablePromise } from "../core/CancelablePromise"
import { OpenAPI } from "../core/OpenAPI"
import { request as __request } from "../core/request"
export class WizardControllerService {
  /**
   * @returns Wizard OK
   * @throws ApiError
   */
  public static findAll(): CancelablePromise<Array<Wizard>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/wizards",
    })
  }
  /**
   * @param requestBody
   * @returns Wizard Created
   * @throws ApiError
   */
  public static save(requestBody: Wizard): CancelablePromise<Wizard> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/wizards",
      body: requestBody,
      mediaType: "application/json",
    })
  }
  /**
   * @param requestBody
   * @returns Wizard Created
   * @throws ApiError
   */
  public static save1(requestBody: WizardDto): CancelablePromise<Wizard> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/v1/wizards/withHouse",
      body: requestBody,
      mediaType: "application/json",
    })
  }
  /**
   * @param id
   * @returns Wizard OK
   * @throws ApiError
   */
  public static findById(id: string): CancelablePromise<Wizard> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/v1/wizards/{id}",
      path: {
        id: id,
      },
    })
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
      method: "GET",
      url: "/api/v1/wizards/house/{houseName}",
      path: {
        houseName: houseName,
      },
    })
  }
}
