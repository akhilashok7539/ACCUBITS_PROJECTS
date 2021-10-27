
/**
 * @description The register otp request params interface.
 */
export interface Otp {
    referenceId: string;
    otp: number;
}

export interface OtpResponse {
    status: string;
}