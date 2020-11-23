export interface OperationResult {
  isValid: boolean;
  messages: any[];
}

export interface OperationResultDto<T> extends OperationResult {

  data: T;
}
