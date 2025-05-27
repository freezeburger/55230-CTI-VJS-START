/**
 * Semantique Applicative
 * 
 * Types "agnostique" fréquemment utilisés
 */

/**
 * Maximum 15 characters
 */
export type TextShort = string;

/**
 * Unbounded string
 */
export type TextLong = string;

/**
 * As infos such (Headings, PageTitle) must be displayed
 */
export type Title = Capitalize<TextShort>;

/**
 * Only french email should be accepted
 */
export type Email = `${string}@${string}.fr`;

/**
 * Only reprensents AM users
 */
export type EmailAM = `${string}@am.fr`;

/**
 * Unique identifier for item of the same collection
 */
export type UniqueId = number;
