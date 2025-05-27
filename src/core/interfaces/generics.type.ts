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

/**
 * Such as "Date.now()" returned value;
 */
export type TimeStamp = number;


/**
 * Time data should always be represented this way;
 */
export type TimeRoot = {
    creationDate:TimeStamp;
}

export type TimeExpected = {
    dueDate:TimeStamp;
} & TimeRoot;

/**
 * A CurrencyAmount should:
 * - Always be positive.
 * - Always be displayed as (nn.nn)(Currency)
 * - Does not holds the Currency symbol.
 */
export type CurrencyAmount = number;

export type Civility = "Madame" | "Monsieur" ;