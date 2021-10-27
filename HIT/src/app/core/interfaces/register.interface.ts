/**
 * @description The register/singup request params interface.
 */
export interface RegisterParams {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    password: string;
}

export interface RegisterResponse {
    status: string;
}