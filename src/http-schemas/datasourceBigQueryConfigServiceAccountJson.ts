/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * Cipher42 API Documentation
 * Cipher42 API Documentation
 * OpenAPI spec version: 1.0.0
 */

/**
 * The service account JSON must be a valid JSON object.
 */
export type DatasourceBigQueryConfigServiceAccountJson = {
  client_email: string;
  /**
   * @minLength 1
   * @maxLength 2000
   */
  private_key: string;
};
