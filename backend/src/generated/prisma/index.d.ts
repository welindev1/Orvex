
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Proof
 * 
 */
export type Proof = $Result.DefaultSelection<Prisma.$ProofPayload>
/**
 * Model ProofImage
 * 
 */
export type ProofImage = $Result.DefaultSelection<Prisma.$ProofImagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const PaymentMethod: {
  PAYPAL: 'PAYPAL',
  CASHAPP: 'CASHAPP',
  BANK: 'BANK'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const ProofStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED'
};

export type ProofStatus = (typeof ProofStatus)[keyof typeof ProofStatus]


export const ImageType: {
  PAYMENT: 'PAYMENT',
  DELIVERY: 'DELIVERY'
};

export type ImageType = (typeof ImageType)[keyof typeof ImageType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type ProofStatus = $Enums.ProofStatus

export const ProofStatus: typeof $Enums.ProofStatus

export type ImageType = $Enums.ImageType

export const ImageType: typeof $Enums.ImageType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proof`: Exposes CRUD operations for the **Proof** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proofs
    * const proofs = await prisma.proof.findMany()
    * ```
    */
  get proof(): Prisma.ProofDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proofImage`: Exposes CRUD operations for the **ProofImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProofImages
    * const proofImages = await prisma.proofImage.findMany()
    * ```
    */
  get proofImage(): Prisma.ProofImageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Proof: 'Proof',
    ProofImage: 'ProofImage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "proof" | "proofImage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Proof: {
        payload: Prisma.$ProofPayload<ExtArgs>
        fields: Prisma.ProofFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProofFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProofFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofPayload>
          }
          findFirst: {
            args: Prisma.ProofFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProofFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofPayload>
          }
          findMany: {
            args: Prisma.ProofFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofPayload>[]
          }
          create: {
            args: Prisma.ProofCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofPayload>
          }
          createMany: {
            args: Prisma.ProofCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProofCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofPayload>[]
          }
          delete: {
            args: Prisma.ProofDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofPayload>
          }
          update: {
            args: Prisma.ProofUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofPayload>
          }
          deleteMany: {
            args: Prisma.ProofDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProofUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProofUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofPayload>[]
          }
          upsert: {
            args: Prisma.ProofUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofPayload>
          }
          aggregate: {
            args: Prisma.ProofAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProof>
          }
          groupBy: {
            args: Prisma.ProofGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProofGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProofCountArgs<ExtArgs>
            result: $Utils.Optional<ProofCountAggregateOutputType> | number
          }
        }
      }
      ProofImage: {
        payload: Prisma.$ProofImagePayload<ExtArgs>
        fields: Prisma.ProofImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProofImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProofImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofImagePayload>
          }
          findFirst: {
            args: Prisma.ProofImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProofImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofImagePayload>
          }
          findMany: {
            args: Prisma.ProofImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofImagePayload>[]
          }
          create: {
            args: Prisma.ProofImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofImagePayload>
          }
          createMany: {
            args: Prisma.ProofImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProofImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofImagePayload>[]
          }
          delete: {
            args: Prisma.ProofImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofImagePayload>
          }
          update: {
            args: Prisma.ProofImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofImagePayload>
          }
          deleteMany: {
            args: Prisma.ProofImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProofImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProofImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofImagePayload>[]
          }
          upsert: {
            args: Prisma.ProofImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProofImagePayload>
          }
          aggregate: {
            args: Prisma.ProofImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProofImage>
          }
          groupBy: {
            args: Prisma.ProofImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProofImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProofImageCountArgs<ExtArgs>
            result: $Utils.Optional<ProofImageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    proof?: ProofOmit
    proofImage?: ProofImageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProofCountOutputType
   */

  export type ProofCountOutputType = {
    paymentScreenshots: number
    deliveryScreenshots: number
  }

  export type ProofCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentScreenshots?: boolean | ProofCountOutputTypeCountPaymentScreenshotsArgs
    deliveryScreenshots?: boolean | ProofCountOutputTypeCountDeliveryScreenshotsArgs
  }

  // Custom InputTypes
  /**
   * ProofCountOutputType without action
   */
  export type ProofCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofCountOutputType
     */
    select?: ProofCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProofCountOutputType without action
   */
  export type ProofCountOutputTypeCountPaymentScreenshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProofImageWhereInput
  }

  /**
   * ProofCountOutputType without action
   */
  export type ProofCountOutputTypeCountDeliveryScreenshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProofImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Proof
   */

  export type AggregateProof = {
    _count: ProofCountAggregateOutputType | null
    _avg: ProofAvgAggregateOutputType | null
    _sum: ProofSumAggregateOutputType | null
    _min: ProofMinAggregateOutputType | null
    _max: ProofMaxAggregateOutputType | null
  }

  export type ProofAvgAggregateOutputType = {
    amount: number | null
  }

  export type ProofSumAggregateOutputType = {
    amount: number | null
  }

  export type ProofMinAggregateOutputType = {
    id: string | null
    productName: string | null
    description: string | null
    amount: number | null
    status: $Enums.ProofStatus | null
    paymentMethod: $Enums.PaymentMethod | null
    customerPayPalEmail: string | null
    payPalName: string | null
    transactionId: string | null
    discordName: string | null
    discordAlias: string | null
    discordId: string | null
    cashtag: string | null
    customerName: string | null
    bankName: string | null
    accountLast4: string | null
    deliveryNote: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProofMaxAggregateOutputType = {
    id: string | null
    productName: string | null
    description: string | null
    amount: number | null
    status: $Enums.ProofStatus | null
    paymentMethod: $Enums.PaymentMethod | null
    customerPayPalEmail: string | null
    payPalName: string | null
    transactionId: string | null
    discordName: string | null
    discordAlias: string | null
    discordId: string | null
    cashtag: string | null
    customerName: string | null
    bankName: string | null
    accountLast4: string | null
    deliveryNote: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProofCountAggregateOutputType = {
    id: number
    productName: number
    description: number
    amount: number
    status: number
    paymentMethod: number
    customerPayPalEmail: number
    payPalName: number
    transactionId: number
    discordName: number
    discordAlias: number
    discordId: number
    cashtag: number
    customerName: number
    bankName: number
    accountLast4: number
    deliveryNote: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProofAvgAggregateInputType = {
    amount?: true
  }

  export type ProofSumAggregateInputType = {
    amount?: true
  }

  export type ProofMinAggregateInputType = {
    id?: true
    productName?: true
    description?: true
    amount?: true
    status?: true
    paymentMethod?: true
    customerPayPalEmail?: true
    payPalName?: true
    transactionId?: true
    discordName?: true
    discordAlias?: true
    discordId?: true
    cashtag?: true
    customerName?: true
    bankName?: true
    accountLast4?: true
    deliveryNote?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProofMaxAggregateInputType = {
    id?: true
    productName?: true
    description?: true
    amount?: true
    status?: true
    paymentMethod?: true
    customerPayPalEmail?: true
    payPalName?: true
    transactionId?: true
    discordName?: true
    discordAlias?: true
    discordId?: true
    cashtag?: true
    customerName?: true
    bankName?: true
    accountLast4?: true
    deliveryNote?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProofCountAggregateInputType = {
    id?: true
    productName?: true
    description?: true
    amount?: true
    status?: true
    paymentMethod?: true
    customerPayPalEmail?: true
    payPalName?: true
    transactionId?: true
    discordName?: true
    discordAlias?: true
    discordId?: true
    cashtag?: true
    customerName?: true
    bankName?: true
    accountLast4?: true
    deliveryNote?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProofAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proof to aggregate.
     */
    where?: ProofWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proofs to fetch.
     */
    orderBy?: ProofOrderByWithRelationInput | ProofOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProofWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proofs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proofs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proofs
    **/
    _count?: true | ProofCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProofAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProofSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProofMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProofMaxAggregateInputType
  }

  export type GetProofAggregateType<T extends ProofAggregateArgs> = {
        [P in keyof T & keyof AggregateProof]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProof[P]>
      : GetScalarType<T[P], AggregateProof[P]>
  }




  export type ProofGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProofWhereInput
    orderBy?: ProofOrderByWithAggregationInput | ProofOrderByWithAggregationInput[]
    by: ProofScalarFieldEnum[] | ProofScalarFieldEnum
    having?: ProofScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProofCountAggregateInputType | true
    _avg?: ProofAvgAggregateInputType
    _sum?: ProofSumAggregateInputType
    _min?: ProofMinAggregateInputType
    _max?: ProofMaxAggregateInputType
  }

  export type ProofGroupByOutputType = {
    id: string
    productName: string
    description: string | null
    amount: number
    status: $Enums.ProofStatus
    paymentMethod: $Enums.PaymentMethod
    customerPayPalEmail: string | null
    payPalName: string | null
    transactionId: string | null
    discordName: string | null
    discordAlias: string | null
    discordId: string | null
    cashtag: string | null
    customerName: string | null
    bankName: string | null
    accountLast4: string | null
    deliveryNote: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProofCountAggregateOutputType | null
    _avg: ProofAvgAggregateOutputType | null
    _sum: ProofSumAggregateOutputType | null
    _min: ProofMinAggregateOutputType | null
    _max: ProofMaxAggregateOutputType | null
  }

  type GetProofGroupByPayload<T extends ProofGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProofGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProofGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProofGroupByOutputType[P]>
            : GetScalarType<T[P], ProofGroupByOutputType[P]>
        }
      >
    >


  export type ProofSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productName?: boolean
    description?: boolean
    amount?: boolean
    status?: boolean
    paymentMethod?: boolean
    customerPayPalEmail?: boolean
    payPalName?: boolean
    transactionId?: boolean
    discordName?: boolean
    discordAlias?: boolean
    discordId?: boolean
    cashtag?: boolean
    customerName?: boolean
    bankName?: boolean
    accountLast4?: boolean
    deliveryNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentScreenshots?: boolean | Proof$paymentScreenshotsArgs<ExtArgs>
    deliveryScreenshots?: boolean | Proof$deliveryScreenshotsArgs<ExtArgs>
    _count?: boolean | ProofCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proof"]>

  export type ProofSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productName?: boolean
    description?: boolean
    amount?: boolean
    status?: boolean
    paymentMethod?: boolean
    customerPayPalEmail?: boolean
    payPalName?: boolean
    transactionId?: boolean
    discordName?: boolean
    discordAlias?: boolean
    discordId?: boolean
    cashtag?: boolean
    customerName?: boolean
    bankName?: boolean
    accountLast4?: boolean
    deliveryNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["proof"]>

  export type ProofSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productName?: boolean
    description?: boolean
    amount?: boolean
    status?: boolean
    paymentMethod?: boolean
    customerPayPalEmail?: boolean
    payPalName?: boolean
    transactionId?: boolean
    discordName?: boolean
    discordAlias?: boolean
    discordId?: boolean
    cashtag?: boolean
    customerName?: boolean
    bankName?: boolean
    accountLast4?: boolean
    deliveryNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["proof"]>

  export type ProofSelectScalar = {
    id?: boolean
    productName?: boolean
    description?: boolean
    amount?: boolean
    status?: boolean
    paymentMethod?: boolean
    customerPayPalEmail?: boolean
    payPalName?: boolean
    transactionId?: boolean
    discordName?: boolean
    discordAlias?: boolean
    discordId?: boolean
    cashtag?: boolean
    customerName?: boolean
    bankName?: boolean
    accountLast4?: boolean
    deliveryNote?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProofOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productName" | "description" | "amount" | "status" | "paymentMethod" | "customerPayPalEmail" | "payPalName" | "transactionId" | "discordName" | "discordAlias" | "discordId" | "cashtag" | "customerName" | "bankName" | "accountLast4" | "deliveryNote" | "createdAt" | "updatedAt", ExtArgs["result"]["proof"]>
  export type ProofInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentScreenshots?: boolean | Proof$paymentScreenshotsArgs<ExtArgs>
    deliveryScreenshots?: boolean | Proof$deliveryScreenshotsArgs<ExtArgs>
    _count?: boolean | ProofCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProofIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProofIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProofPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proof"
    objects: {
      paymentScreenshots: Prisma.$ProofImagePayload<ExtArgs>[]
      deliveryScreenshots: Prisma.$ProofImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productName: string
      description: string | null
      amount: number
      status: $Enums.ProofStatus
      paymentMethod: $Enums.PaymentMethod
      customerPayPalEmail: string | null
      payPalName: string | null
      transactionId: string | null
      discordName: string | null
      discordAlias: string | null
      discordId: string | null
      cashtag: string | null
      customerName: string | null
      bankName: string | null
      accountLast4: string | null
      deliveryNote: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["proof"]>
    composites: {}
  }

  type ProofGetPayload<S extends boolean | null | undefined | ProofDefaultArgs> = $Result.GetResult<Prisma.$ProofPayload, S>

  type ProofCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProofFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProofCountAggregateInputType | true
    }

  export interface ProofDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proof'], meta: { name: 'Proof' } }
    /**
     * Find zero or one Proof that matches the filter.
     * @param {ProofFindUniqueArgs} args - Arguments to find a Proof
     * @example
     * // Get one Proof
     * const proof = await prisma.proof.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProofFindUniqueArgs>(args: SelectSubset<T, ProofFindUniqueArgs<ExtArgs>>): Prisma__ProofClient<$Result.GetResult<Prisma.$ProofPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proof that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProofFindUniqueOrThrowArgs} args - Arguments to find a Proof
     * @example
     * // Get one Proof
     * const proof = await prisma.proof.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProofFindUniqueOrThrowArgs>(args: SelectSubset<T, ProofFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProofClient<$Result.GetResult<Prisma.$ProofPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proof that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofFindFirstArgs} args - Arguments to find a Proof
     * @example
     * // Get one Proof
     * const proof = await prisma.proof.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProofFindFirstArgs>(args?: SelectSubset<T, ProofFindFirstArgs<ExtArgs>>): Prisma__ProofClient<$Result.GetResult<Prisma.$ProofPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proof that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofFindFirstOrThrowArgs} args - Arguments to find a Proof
     * @example
     * // Get one Proof
     * const proof = await prisma.proof.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProofFindFirstOrThrowArgs>(args?: SelectSubset<T, ProofFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProofClient<$Result.GetResult<Prisma.$ProofPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proofs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proofs
     * const proofs = await prisma.proof.findMany()
     * 
     * // Get first 10 Proofs
     * const proofs = await prisma.proof.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proofWithIdOnly = await prisma.proof.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProofFindManyArgs>(args?: SelectSubset<T, ProofFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProofPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proof.
     * @param {ProofCreateArgs} args - Arguments to create a Proof.
     * @example
     * // Create one Proof
     * const Proof = await prisma.proof.create({
     *   data: {
     *     // ... data to create a Proof
     *   }
     * })
     * 
     */
    create<T extends ProofCreateArgs>(args: SelectSubset<T, ProofCreateArgs<ExtArgs>>): Prisma__ProofClient<$Result.GetResult<Prisma.$ProofPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proofs.
     * @param {ProofCreateManyArgs} args - Arguments to create many Proofs.
     * @example
     * // Create many Proofs
     * const proof = await prisma.proof.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProofCreateManyArgs>(args?: SelectSubset<T, ProofCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proofs and returns the data saved in the database.
     * @param {ProofCreateManyAndReturnArgs} args - Arguments to create many Proofs.
     * @example
     * // Create many Proofs
     * const proof = await prisma.proof.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proofs and only return the `id`
     * const proofWithIdOnly = await prisma.proof.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProofCreateManyAndReturnArgs>(args?: SelectSubset<T, ProofCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProofPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proof.
     * @param {ProofDeleteArgs} args - Arguments to delete one Proof.
     * @example
     * // Delete one Proof
     * const Proof = await prisma.proof.delete({
     *   where: {
     *     // ... filter to delete one Proof
     *   }
     * })
     * 
     */
    delete<T extends ProofDeleteArgs>(args: SelectSubset<T, ProofDeleteArgs<ExtArgs>>): Prisma__ProofClient<$Result.GetResult<Prisma.$ProofPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proof.
     * @param {ProofUpdateArgs} args - Arguments to update one Proof.
     * @example
     * // Update one Proof
     * const proof = await prisma.proof.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProofUpdateArgs>(args: SelectSubset<T, ProofUpdateArgs<ExtArgs>>): Prisma__ProofClient<$Result.GetResult<Prisma.$ProofPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proofs.
     * @param {ProofDeleteManyArgs} args - Arguments to filter Proofs to delete.
     * @example
     * // Delete a few Proofs
     * const { count } = await prisma.proof.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProofDeleteManyArgs>(args?: SelectSubset<T, ProofDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proofs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proofs
     * const proof = await prisma.proof.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProofUpdateManyArgs>(args: SelectSubset<T, ProofUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proofs and returns the data updated in the database.
     * @param {ProofUpdateManyAndReturnArgs} args - Arguments to update many Proofs.
     * @example
     * // Update many Proofs
     * const proof = await prisma.proof.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proofs and only return the `id`
     * const proofWithIdOnly = await prisma.proof.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProofUpdateManyAndReturnArgs>(args: SelectSubset<T, ProofUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProofPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proof.
     * @param {ProofUpsertArgs} args - Arguments to update or create a Proof.
     * @example
     * // Update or create a Proof
     * const proof = await prisma.proof.upsert({
     *   create: {
     *     // ... data to create a Proof
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proof we want to update
     *   }
     * })
     */
    upsert<T extends ProofUpsertArgs>(args: SelectSubset<T, ProofUpsertArgs<ExtArgs>>): Prisma__ProofClient<$Result.GetResult<Prisma.$ProofPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proofs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofCountArgs} args - Arguments to filter Proofs to count.
     * @example
     * // Count the number of Proofs
     * const count = await prisma.proof.count({
     *   where: {
     *     // ... the filter for the Proofs we want to count
     *   }
     * })
    **/
    count<T extends ProofCountArgs>(
      args?: Subset<T, ProofCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProofCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proof.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProofAggregateArgs>(args: Subset<T, ProofAggregateArgs>): Prisma.PrismaPromise<GetProofAggregateType<T>>

    /**
     * Group by Proof.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProofGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProofGroupByArgs['orderBy'] }
        : { orderBy?: ProofGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProofGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProofGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proof model
   */
  readonly fields: ProofFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proof.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProofClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paymentScreenshots<T extends Proof$paymentScreenshotsArgs<ExtArgs> = {}>(args?: Subset<T, Proof$paymentScreenshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProofImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deliveryScreenshots<T extends Proof$deliveryScreenshotsArgs<ExtArgs> = {}>(args?: Subset<T, Proof$deliveryScreenshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProofImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Proof model
   */
  interface ProofFieldRefs {
    readonly id: FieldRef<"Proof", 'String'>
    readonly productName: FieldRef<"Proof", 'String'>
    readonly description: FieldRef<"Proof", 'String'>
    readonly amount: FieldRef<"Proof", 'Float'>
    readonly status: FieldRef<"Proof", 'ProofStatus'>
    readonly paymentMethod: FieldRef<"Proof", 'PaymentMethod'>
    readonly customerPayPalEmail: FieldRef<"Proof", 'String'>
    readonly payPalName: FieldRef<"Proof", 'String'>
    readonly transactionId: FieldRef<"Proof", 'String'>
    readonly discordName: FieldRef<"Proof", 'String'>
    readonly discordAlias: FieldRef<"Proof", 'String'>
    readonly discordId: FieldRef<"Proof", 'String'>
    readonly cashtag: FieldRef<"Proof", 'String'>
    readonly customerName: FieldRef<"Proof", 'String'>
    readonly bankName: FieldRef<"Proof", 'String'>
    readonly accountLast4: FieldRef<"Proof", 'String'>
    readonly deliveryNote: FieldRef<"Proof", 'String'>
    readonly createdAt: FieldRef<"Proof", 'DateTime'>
    readonly updatedAt: FieldRef<"Proof", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Proof findUnique
   */
  export type ProofFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proof
     */
    select?: ProofSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proof
     */
    omit?: ProofOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofInclude<ExtArgs> | null
    /**
     * Filter, which Proof to fetch.
     */
    where: ProofWhereUniqueInput
  }

  /**
   * Proof findUniqueOrThrow
   */
  export type ProofFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proof
     */
    select?: ProofSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proof
     */
    omit?: ProofOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofInclude<ExtArgs> | null
    /**
     * Filter, which Proof to fetch.
     */
    where: ProofWhereUniqueInput
  }

  /**
   * Proof findFirst
   */
  export type ProofFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proof
     */
    select?: ProofSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proof
     */
    omit?: ProofOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofInclude<ExtArgs> | null
    /**
     * Filter, which Proof to fetch.
     */
    where?: ProofWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proofs to fetch.
     */
    orderBy?: ProofOrderByWithRelationInput | ProofOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proofs.
     */
    cursor?: ProofWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proofs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proofs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proofs.
     */
    distinct?: ProofScalarFieldEnum | ProofScalarFieldEnum[]
  }

  /**
   * Proof findFirstOrThrow
   */
  export type ProofFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proof
     */
    select?: ProofSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proof
     */
    omit?: ProofOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofInclude<ExtArgs> | null
    /**
     * Filter, which Proof to fetch.
     */
    where?: ProofWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proofs to fetch.
     */
    orderBy?: ProofOrderByWithRelationInput | ProofOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proofs.
     */
    cursor?: ProofWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proofs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proofs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proofs.
     */
    distinct?: ProofScalarFieldEnum | ProofScalarFieldEnum[]
  }

  /**
   * Proof findMany
   */
  export type ProofFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proof
     */
    select?: ProofSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proof
     */
    omit?: ProofOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofInclude<ExtArgs> | null
    /**
     * Filter, which Proofs to fetch.
     */
    where?: ProofWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proofs to fetch.
     */
    orderBy?: ProofOrderByWithRelationInput | ProofOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proofs.
     */
    cursor?: ProofWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proofs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proofs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proofs.
     */
    distinct?: ProofScalarFieldEnum | ProofScalarFieldEnum[]
  }

  /**
   * Proof create
   */
  export type ProofCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proof
     */
    select?: ProofSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proof
     */
    omit?: ProofOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofInclude<ExtArgs> | null
    /**
     * The data needed to create a Proof.
     */
    data: XOR<ProofCreateInput, ProofUncheckedCreateInput>
  }

  /**
   * Proof createMany
   */
  export type ProofCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proofs.
     */
    data: ProofCreateManyInput | ProofCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proof createManyAndReturn
   */
  export type ProofCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proof
     */
    select?: ProofSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proof
     */
    omit?: ProofOmit<ExtArgs> | null
    /**
     * The data used to create many Proofs.
     */
    data: ProofCreateManyInput | ProofCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proof update
   */
  export type ProofUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proof
     */
    select?: ProofSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proof
     */
    omit?: ProofOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofInclude<ExtArgs> | null
    /**
     * The data needed to update a Proof.
     */
    data: XOR<ProofUpdateInput, ProofUncheckedUpdateInput>
    /**
     * Choose, which Proof to update.
     */
    where: ProofWhereUniqueInput
  }

  /**
   * Proof updateMany
   */
  export type ProofUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proofs.
     */
    data: XOR<ProofUpdateManyMutationInput, ProofUncheckedUpdateManyInput>
    /**
     * Filter which Proofs to update
     */
    where?: ProofWhereInput
    /**
     * Limit how many Proofs to update.
     */
    limit?: number
  }

  /**
   * Proof updateManyAndReturn
   */
  export type ProofUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proof
     */
    select?: ProofSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proof
     */
    omit?: ProofOmit<ExtArgs> | null
    /**
     * The data used to update Proofs.
     */
    data: XOR<ProofUpdateManyMutationInput, ProofUncheckedUpdateManyInput>
    /**
     * Filter which Proofs to update
     */
    where?: ProofWhereInput
    /**
     * Limit how many Proofs to update.
     */
    limit?: number
  }

  /**
   * Proof upsert
   */
  export type ProofUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proof
     */
    select?: ProofSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proof
     */
    omit?: ProofOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofInclude<ExtArgs> | null
    /**
     * The filter to search for the Proof to update in case it exists.
     */
    where: ProofWhereUniqueInput
    /**
     * In case the Proof found by the `where` argument doesn't exist, create a new Proof with this data.
     */
    create: XOR<ProofCreateInput, ProofUncheckedCreateInput>
    /**
     * In case the Proof was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProofUpdateInput, ProofUncheckedUpdateInput>
  }

  /**
   * Proof delete
   */
  export type ProofDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proof
     */
    select?: ProofSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proof
     */
    omit?: ProofOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofInclude<ExtArgs> | null
    /**
     * Filter which Proof to delete.
     */
    where: ProofWhereUniqueInput
  }

  /**
   * Proof deleteMany
   */
  export type ProofDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proofs to delete
     */
    where?: ProofWhereInput
    /**
     * Limit how many Proofs to delete.
     */
    limit?: number
  }

  /**
   * Proof.paymentScreenshots
   */
  export type Proof$paymentScreenshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofImage
     */
    select?: ProofImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProofImage
     */
    omit?: ProofImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofImageInclude<ExtArgs> | null
    where?: ProofImageWhereInput
    orderBy?: ProofImageOrderByWithRelationInput | ProofImageOrderByWithRelationInput[]
    cursor?: ProofImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProofImageScalarFieldEnum | ProofImageScalarFieldEnum[]
  }

  /**
   * Proof.deliveryScreenshots
   */
  export type Proof$deliveryScreenshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofImage
     */
    select?: ProofImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProofImage
     */
    omit?: ProofImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofImageInclude<ExtArgs> | null
    where?: ProofImageWhereInput
    orderBy?: ProofImageOrderByWithRelationInput | ProofImageOrderByWithRelationInput[]
    cursor?: ProofImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProofImageScalarFieldEnum | ProofImageScalarFieldEnum[]
  }

  /**
   * Proof without action
   */
  export type ProofDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proof
     */
    select?: ProofSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proof
     */
    omit?: ProofOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofInclude<ExtArgs> | null
  }


  /**
   * Model ProofImage
   */

  export type AggregateProofImage = {
    _count: ProofImageCountAggregateOutputType | null
    _avg: ProofImageAvgAggregateOutputType | null
    _sum: ProofImageSumAggregateOutputType | null
    _min: ProofImageMinAggregateOutputType | null
    _max: ProofImageMaxAggregateOutputType | null
  }

  export type ProofImageAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type ProofImageSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type ProofImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    caption: string | null
    type: $Enums.ImageType | null
    sortOrder: number | null
    paymentProofId: string | null
    deliveryProofId: string | null
    uploadedAt: Date | null
  }

  export type ProofImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    caption: string | null
    type: $Enums.ImageType | null
    sortOrder: number | null
    paymentProofId: string | null
    deliveryProofId: string | null
    uploadedAt: Date | null
  }

  export type ProofImageCountAggregateOutputType = {
    id: number
    url: number
    caption: number
    type: number
    sortOrder: number
    paymentProofId: number
    deliveryProofId: number
    uploadedAt: number
    _all: number
  }


  export type ProofImageAvgAggregateInputType = {
    sortOrder?: true
  }

  export type ProofImageSumAggregateInputType = {
    sortOrder?: true
  }

  export type ProofImageMinAggregateInputType = {
    id?: true
    url?: true
    caption?: true
    type?: true
    sortOrder?: true
    paymentProofId?: true
    deliveryProofId?: true
    uploadedAt?: true
  }

  export type ProofImageMaxAggregateInputType = {
    id?: true
    url?: true
    caption?: true
    type?: true
    sortOrder?: true
    paymentProofId?: true
    deliveryProofId?: true
    uploadedAt?: true
  }

  export type ProofImageCountAggregateInputType = {
    id?: true
    url?: true
    caption?: true
    type?: true
    sortOrder?: true
    paymentProofId?: true
    deliveryProofId?: true
    uploadedAt?: true
    _all?: true
  }

  export type ProofImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProofImage to aggregate.
     */
    where?: ProofImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProofImages to fetch.
     */
    orderBy?: ProofImageOrderByWithRelationInput | ProofImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProofImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProofImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProofImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProofImages
    **/
    _count?: true | ProofImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProofImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProofImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProofImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProofImageMaxAggregateInputType
  }

  export type GetProofImageAggregateType<T extends ProofImageAggregateArgs> = {
        [P in keyof T & keyof AggregateProofImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProofImage[P]>
      : GetScalarType<T[P], AggregateProofImage[P]>
  }




  export type ProofImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProofImageWhereInput
    orderBy?: ProofImageOrderByWithAggregationInput | ProofImageOrderByWithAggregationInput[]
    by: ProofImageScalarFieldEnum[] | ProofImageScalarFieldEnum
    having?: ProofImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProofImageCountAggregateInputType | true
    _avg?: ProofImageAvgAggregateInputType
    _sum?: ProofImageSumAggregateInputType
    _min?: ProofImageMinAggregateInputType
    _max?: ProofImageMaxAggregateInputType
  }

  export type ProofImageGroupByOutputType = {
    id: string
    url: string
    caption: string | null
    type: $Enums.ImageType
    sortOrder: number
    paymentProofId: string | null
    deliveryProofId: string | null
    uploadedAt: Date
    _count: ProofImageCountAggregateOutputType | null
    _avg: ProofImageAvgAggregateOutputType | null
    _sum: ProofImageSumAggregateOutputType | null
    _min: ProofImageMinAggregateOutputType | null
    _max: ProofImageMaxAggregateOutputType | null
  }

  type GetProofImageGroupByPayload<T extends ProofImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProofImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProofImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProofImageGroupByOutputType[P]>
            : GetScalarType<T[P], ProofImageGroupByOutputType[P]>
        }
      >
    >


  export type ProofImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    caption?: boolean
    type?: boolean
    sortOrder?: boolean
    paymentProofId?: boolean
    deliveryProofId?: boolean
    uploadedAt?: boolean
    paymentProof?: boolean | ProofImage$paymentProofArgs<ExtArgs>
    deliveryProof?: boolean | ProofImage$deliveryProofArgs<ExtArgs>
  }, ExtArgs["result"]["proofImage"]>

  export type ProofImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    caption?: boolean
    type?: boolean
    sortOrder?: boolean
    paymentProofId?: boolean
    deliveryProofId?: boolean
    uploadedAt?: boolean
    paymentProof?: boolean | ProofImage$paymentProofArgs<ExtArgs>
    deliveryProof?: boolean | ProofImage$deliveryProofArgs<ExtArgs>
  }, ExtArgs["result"]["proofImage"]>

  export type ProofImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    caption?: boolean
    type?: boolean
    sortOrder?: boolean
    paymentProofId?: boolean
    deliveryProofId?: boolean
    uploadedAt?: boolean
    paymentProof?: boolean | ProofImage$paymentProofArgs<ExtArgs>
    deliveryProof?: boolean | ProofImage$deliveryProofArgs<ExtArgs>
  }, ExtArgs["result"]["proofImage"]>

  export type ProofImageSelectScalar = {
    id?: boolean
    url?: boolean
    caption?: boolean
    type?: boolean
    sortOrder?: boolean
    paymentProofId?: boolean
    deliveryProofId?: boolean
    uploadedAt?: boolean
  }

  export type ProofImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "caption" | "type" | "sortOrder" | "paymentProofId" | "deliveryProofId" | "uploadedAt", ExtArgs["result"]["proofImage"]>
  export type ProofImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentProof?: boolean | ProofImage$paymentProofArgs<ExtArgs>
    deliveryProof?: boolean | ProofImage$deliveryProofArgs<ExtArgs>
  }
  export type ProofImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentProof?: boolean | ProofImage$paymentProofArgs<ExtArgs>
    deliveryProof?: boolean | ProofImage$deliveryProofArgs<ExtArgs>
  }
  export type ProofImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentProof?: boolean | ProofImage$paymentProofArgs<ExtArgs>
    deliveryProof?: boolean | ProofImage$deliveryProofArgs<ExtArgs>
  }

  export type $ProofImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProofImage"
    objects: {
      paymentProof: Prisma.$ProofPayload<ExtArgs> | null
      deliveryProof: Prisma.$ProofPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      caption: string | null
      type: $Enums.ImageType
      sortOrder: number
      paymentProofId: string | null
      deliveryProofId: string | null
      uploadedAt: Date
    }, ExtArgs["result"]["proofImage"]>
    composites: {}
  }

  type ProofImageGetPayload<S extends boolean | null | undefined | ProofImageDefaultArgs> = $Result.GetResult<Prisma.$ProofImagePayload, S>

  type ProofImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProofImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProofImageCountAggregateInputType | true
    }

  export interface ProofImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProofImage'], meta: { name: 'ProofImage' } }
    /**
     * Find zero or one ProofImage that matches the filter.
     * @param {ProofImageFindUniqueArgs} args - Arguments to find a ProofImage
     * @example
     * // Get one ProofImage
     * const proofImage = await prisma.proofImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProofImageFindUniqueArgs>(args: SelectSubset<T, ProofImageFindUniqueArgs<ExtArgs>>): Prisma__ProofImageClient<$Result.GetResult<Prisma.$ProofImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProofImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProofImageFindUniqueOrThrowArgs} args - Arguments to find a ProofImage
     * @example
     * // Get one ProofImage
     * const proofImage = await prisma.proofImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProofImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ProofImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProofImageClient<$Result.GetResult<Prisma.$ProofImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProofImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofImageFindFirstArgs} args - Arguments to find a ProofImage
     * @example
     * // Get one ProofImage
     * const proofImage = await prisma.proofImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProofImageFindFirstArgs>(args?: SelectSubset<T, ProofImageFindFirstArgs<ExtArgs>>): Prisma__ProofImageClient<$Result.GetResult<Prisma.$ProofImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProofImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofImageFindFirstOrThrowArgs} args - Arguments to find a ProofImage
     * @example
     * // Get one ProofImage
     * const proofImage = await prisma.proofImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProofImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ProofImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProofImageClient<$Result.GetResult<Prisma.$ProofImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProofImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProofImages
     * const proofImages = await prisma.proofImage.findMany()
     * 
     * // Get first 10 ProofImages
     * const proofImages = await prisma.proofImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proofImageWithIdOnly = await prisma.proofImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProofImageFindManyArgs>(args?: SelectSubset<T, ProofImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProofImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProofImage.
     * @param {ProofImageCreateArgs} args - Arguments to create a ProofImage.
     * @example
     * // Create one ProofImage
     * const ProofImage = await prisma.proofImage.create({
     *   data: {
     *     // ... data to create a ProofImage
     *   }
     * })
     * 
     */
    create<T extends ProofImageCreateArgs>(args: SelectSubset<T, ProofImageCreateArgs<ExtArgs>>): Prisma__ProofImageClient<$Result.GetResult<Prisma.$ProofImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProofImages.
     * @param {ProofImageCreateManyArgs} args - Arguments to create many ProofImages.
     * @example
     * // Create many ProofImages
     * const proofImage = await prisma.proofImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProofImageCreateManyArgs>(args?: SelectSubset<T, ProofImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProofImages and returns the data saved in the database.
     * @param {ProofImageCreateManyAndReturnArgs} args - Arguments to create many ProofImages.
     * @example
     * // Create many ProofImages
     * const proofImage = await prisma.proofImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProofImages and only return the `id`
     * const proofImageWithIdOnly = await prisma.proofImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProofImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ProofImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProofImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProofImage.
     * @param {ProofImageDeleteArgs} args - Arguments to delete one ProofImage.
     * @example
     * // Delete one ProofImage
     * const ProofImage = await prisma.proofImage.delete({
     *   where: {
     *     // ... filter to delete one ProofImage
     *   }
     * })
     * 
     */
    delete<T extends ProofImageDeleteArgs>(args: SelectSubset<T, ProofImageDeleteArgs<ExtArgs>>): Prisma__ProofImageClient<$Result.GetResult<Prisma.$ProofImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProofImage.
     * @param {ProofImageUpdateArgs} args - Arguments to update one ProofImage.
     * @example
     * // Update one ProofImage
     * const proofImage = await prisma.proofImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProofImageUpdateArgs>(args: SelectSubset<T, ProofImageUpdateArgs<ExtArgs>>): Prisma__ProofImageClient<$Result.GetResult<Prisma.$ProofImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProofImages.
     * @param {ProofImageDeleteManyArgs} args - Arguments to filter ProofImages to delete.
     * @example
     * // Delete a few ProofImages
     * const { count } = await prisma.proofImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProofImageDeleteManyArgs>(args?: SelectSubset<T, ProofImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProofImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProofImages
     * const proofImage = await prisma.proofImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProofImageUpdateManyArgs>(args: SelectSubset<T, ProofImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProofImages and returns the data updated in the database.
     * @param {ProofImageUpdateManyAndReturnArgs} args - Arguments to update many ProofImages.
     * @example
     * // Update many ProofImages
     * const proofImage = await prisma.proofImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProofImages and only return the `id`
     * const proofImageWithIdOnly = await prisma.proofImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProofImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ProofImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProofImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProofImage.
     * @param {ProofImageUpsertArgs} args - Arguments to update or create a ProofImage.
     * @example
     * // Update or create a ProofImage
     * const proofImage = await prisma.proofImage.upsert({
     *   create: {
     *     // ... data to create a ProofImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProofImage we want to update
     *   }
     * })
     */
    upsert<T extends ProofImageUpsertArgs>(args: SelectSubset<T, ProofImageUpsertArgs<ExtArgs>>): Prisma__ProofImageClient<$Result.GetResult<Prisma.$ProofImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProofImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofImageCountArgs} args - Arguments to filter ProofImages to count.
     * @example
     * // Count the number of ProofImages
     * const count = await prisma.proofImage.count({
     *   where: {
     *     // ... the filter for the ProofImages we want to count
     *   }
     * })
    **/
    count<T extends ProofImageCountArgs>(
      args?: Subset<T, ProofImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProofImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProofImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProofImageAggregateArgs>(args: Subset<T, ProofImageAggregateArgs>): Prisma.PrismaPromise<GetProofImageAggregateType<T>>

    /**
     * Group by ProofImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProofImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProofImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProofImageGroupByArgs['orderBy'] }
        : { orderBy?: ProofImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProofImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProofImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProofImage model
   */
  readonly fields: ProofImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProofImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProofImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paymentProof<T extends ProofImage$paymentProofArgs<ExtArgs> = {}>(args?: Subset<T, ProofImage$paymentProofArgs<ExtArgs>>): Prisma__ProofClient<$Result.GetResult<Prisma.$ProofPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deliveryProof<T extends ProofImage$deliveryProofArgs<ExtArgs> = {}>(args?: Subset<T, ProofImage$deliveryProofArgs<ExtArgs>>): Prisma__ProofClient<$Result.GetResult<Prisma.$ProofPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProofImage model
   */
  interface ProofImageFieldRefs {
    readonly id: FieldRef<"ProofImage", 'String'>
    readonly url: FieldRef<"ProofImage", 'String'>
    readonly caption: FieldRef<"ProofImage", 'String'>
    readonly type: FieldRef<"ProofImage", 'ImageType'>
    readonly sortOrder: FieldRef<"ProofImage", 'Int'>
    readonly paymentProofId: FieldRef<"ProofImage", 'String'>
    readonly deliveryProofId: FieldRef<"ProofImage", 'String'>
    readonly uploadedAt: FieldRef<"ProofImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProofImage findUnique
   */
  export type ProofImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofImage
     */
    select?: ProofImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProofImage
     */
    omit?: ProofImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofImageInclude<ExtArgs> | null
    /**
     * Filter, which ProofImage to fetch.
     */
    where: ProofImageWhereUniqueInput
  }

  /**
   * ProofImage findUniqueOrThrow
   */
  export type ProofImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofImage
     */
    select?: ProofImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProofImage
     */
    omit?: ProofImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofImageInclude<ExtArgs> | null
    /**
     * Filter, which ProofImage to fetch.
     */
    where: ProofImageWhereUniqueInput
  }

  /**
   * ProofImage findFirst
   */
  export type ProofImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofImage
     */
    select?: ProofImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProofImage
     */
    omit?: ProofImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofImageInclude<ExtArgs> | null
    /**
     * Filter, which ProofImage to fetch.
     */
    where?: ProofImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProofImages to fetch.
     */
    orderBy?: ProofImageOrderByWithRelationInput | ProofImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProofImages.
     */
    cursor?: ProofImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProofImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProofImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProofImages.
     */
    distinct?: ProofImageScalarFieldEnum | ProofImageScalarFieldEnum[]
  }

  /**
   * ProofImage findFirstOrThrow
   */
  export type ProofImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofImage
     */
    select?: ProofImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProofImage
     */
    omit?: ProofImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofImageInclude<ExtArgs> | null
    /**
     * Filter, which ProofImage to fetch.
     */
    where?: ProofImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProofImages to fetch.
     */
    orderBy?: ProofImageOrderByWithRelationInput | ProofImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProofImages.
     */
    cursor?: ProofImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProofImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProofImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProofImages.
     */
    distinct?: ProofImageScalarFieldEnum | ProofImageScalarFieldEnum[]
  }

  /**
   * ProofImage findMany
   */
  export type ProofImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofImage
     */
    select?: ProofImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProofImage
     */
    omit?: ProofImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofImageInclude<ExtArgs> | null
    /**
     * Filter, which ProofImages to fetch.
     */
    where?: ProofImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProofImages to fetch.
     */
    orderBy?: ProofImageOrderByWithRelationInput | ProofImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProofImages.
     */
    cursor?: ProofImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProofImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProofImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProofImages.
     */
    distinct?: ProofImageScalarFieldEnum | ProofImageScalarFieldEnum[]
  }

  /**
   * ProofImage create
   */
  export type ProofImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofImage
     */
    select?: ProofImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProofImage
     */
    omit?: ProofImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ProofImage.
     */
    data: XOR<ProofImageCreateInput, ProofImageUncheckedCreateInput>
  }

  /**
   * ProofImage createMany
   */
  export type ProofImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProofImages.
     */
    data: ProofImageCreateManyInput | ProofImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProofImage createManyAndReturn
   */
  export type ProofImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofImage
     */
    select?: ProofImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProofImage
     */
    omit?: ProofImageOmit<ExtArgs> | null
    /**
     * The data used to create many ProofImages.
     */
    data: ProofImageCreateManyInput | ProofImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProofImage update
   */
  export type ProofImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofImage
     */
    select?: ProofImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProofImage
     */
    omit?: ProofImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ProofImage.
     */
    data: XOR<ProofImageUpdateInput, ProofImageUncheckedUpdateInput>
    /**
     * Choose, which ProofImage to update.
     */
    where: ProofImageWhereUniqueInput
  }

  /**
   * ProofImage updateMany
   */
  export type ProofImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProofImages.
     */
    data: XOR<ProofImageUpdateManyMutationInput, ProofImageUncheckedUpdateManyInput>
    /**
     * Filter which ProofImages to update
     */
    where?: ProofImageWhereInput
    /**
     * Limit how many ProofImages to update.
     */
    limit?: number
  }

  /**
   * ProofImage updateManyAndReturn
   */
  export type ProofImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofImage
     */
    select?: ProofImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProofImage
     */
    omit?: ProofImageOmit<ExtArgs> | null
    /**
     * The data used to update ProofImages.
     */
    data: XOR<ProofImageUpdateManyMutationInput, ProofImageUncheckedUpdateManyInput>
    /**
     * Filter which ProofImages to update
     */
    where?: ProofImageWhereInput
    /**
     * Limit how many ProofImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProofImage upsert
   */
  export type ProofImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofImage
     */
    select?: ProofImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProofImage
     */
    omit?: ProofImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ProofImage to update in case it exists.
     */
    where: ProofImageWhereUniqueInput
    /**
     * In case the ProofImage found by the `where` argument doesn't exist, create a new ProofImage with this data.
     */
    create: XOR<ProofImageCreateInput, ProofImageUncheckedCreateInput>
    /**
     * In case the ProofImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProofImageUpdateInput, ProofImageUncheckedUpdateInput>
  }

  /**
   * ProofImage delete
   */
  export type ProofImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofImage
     */
    select?: ProofImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProofImage
     */
    omit?: ProofImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofImageInclude<ExtArgs> | null
    /**
     * Filter which ProofImage to delete.
     */
    where: ProofImageWhereUniqueInput
  }

  /**
   * ProofImage deleteMany
   */
  export type ProofImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProofImages to delete
     */
    where?: ProofImageWhereInput
    /**
     * Limit how many ProofImages to delete.
     */
    limit?: number
  }

  /**
   * ProofImage.paymentProof
   */
  export type ProofImage$paymentProofArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proof
     */
    select?: ProofSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proof
     */
    omit?: ProofOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofInclude<ExtArgs> | null
    where?: ProofWhereInput
  }

  /**
   * ProofImage.deliveryProof
   */
  export type ProofImage$deliveryProofArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proof
     */
    select?: ProofSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proof
     */
    omit?: ProofOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofInclude<ExtArgs> | null
    where?: ProofWhereInput
  }

  /**
   * ProofImage without action
   */
  export type ProofImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProofImage
     */
    select?: ProofImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProofImage
     */
    omit?: ProofImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProofImageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProofScalarFieldEnum: {
    id: 'id',
    productName: 'productName',
    description: 'description',
    amount: 'amount',
    status: 'status',
    paymentMethod: 'paymentMethod',
    customerPayPalEmail: 'customerPayPalEmail',
    payPalName: 'payPalName',
    transactionId: 'transactionId',
    discordName: 'discordName',
    discordAlias: 'discordAlias',
    discordId: 'discordId',
    cashtag: 'cashtag',
    customerName: 'customerName',
    bankName: 'bankName',
    accountLast4: 'accountLast4',
    deliveryNote: 'deliveryNote',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProofScalarFieldEnum = (typeof ProofScalarFieldEnum)[keyof typeof ProofScalarFieldEnum]


  export const ProofImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    caption: 'caption',
    type: 'type',
    sortOrder: 'sortOrder',
    paymentProofId: 'paymentProofId',
    deliveryProofId: 'deliveryProofId',
    uploadedAt: 'uploadedAt'
  };

  export type ProofImageScalarFieldEnum = (typeof ProofImageScalarFieldEnum)[keyof typeof ProofImageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ProofStatus'
   */
  export type EnumProofStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProofStatus'>
    


  /**
   * Reference to a field of type 'ProofStatus[]'
   */
  export type ListEnumProofStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProofStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'ImageType'
   */
  export type EnumImageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImageType'>
    


  /**
   * Reference to a field of type 'ImageType[]'
   */
  export type ListEnumImageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImageType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProofWhereInput = {
    AND?: ProofWhereInput | ProofWhereInput[]
    OR?: ProofWhereInput[]
    NOT?: ProofWhereInput | ProofWhereInput[]
    id?: StringFilter<"Proof"> | string
    productName?: StringFilter<"Proof"> | string
    description?: StringNullableFilter<"Proof"> | string | null
    amount?: FloatFilter<"Proof"> | number
    status?: EnumProofStatusFilter<"Proof"> | $Enums.ProofStatus
    paymentMethod?: EnumPaymentMethodFilter<"Proof"> | $Enums.PaymentMethod
    customerPayPalEmail?: StringNullableFilter<"Proof"> | string | null
    payPalName?: StringNullableFilter<"Proof"> | string | null
    transactionId?: StringNullableFilter<"Proof"> | string | null
    discordName?: StringNullableFilter<"Proof"> | string | null
    discordAlias?: StringNullableFilter<"Proof"> | string | null
    discordId?: StringNullableFilter<"Proof"> | string | null
    cashtag?: StringNullableFilter<"Proof"> | string | null
    customerName?: StringNullableFilter<"Proof"> | string | null
    bankName?: StringNullableFilter<"Proof"> | string | null
    accountLast4?: StringNullableFilter<"Proof"> | string | null
    deliveryNote?: StringNullableFilter<"Proof"> | string | null
    createdAt?: DateTimeFilter<"Proof"> | Date | string
    updatedAt?: DateTimeFilter<"Proof"> | Date | string
    paymentScreenshots?: ProofImageListRelationFilter
    deliveryScreenshots?: ProofImageListRelationFilter
  }

  export type ProofOrderByWithRelationInput = {
    id?: SortOrder
    productName?: SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    customerPayPalEmail?: SortOrderInput | SortOrder
    payPalName?: SortOrderInput | SortOrder
    transactionId?: SortOrderInput | SortOrder
    discordName?: SortOrderInput | SortOrder
    discordAlias?: SortOrderInput | SortOrder
    discordId?: SortOrderInput | SortOrder
    cashtag?: SortOrderInput | SortOrder
    customerName?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    accountLast4?: SortOrderInput | SortOrder
    deliveryNote?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentScreenshots?: ProofImageOrderByRelationAggregateInput
    deliveryScreenshots?: ProofImageOrderByRelationAggregateInput
  }

  export type ProofWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProofWhereInput | ProofWhereInput[]
    OR?: ProofWhereInput[]
    NOT?: ProofWhereInput | ProofWhereInput[]
    productName?: StringFilter<"Proof"> | string
    description?: StringNullableFilter<"Proof"> | string | null
    amount?: FloatFilter<"Proof"> | number
    status?: EnumProofStatusFilter<"Proof"> | $Enums.ProofStatus
    paymentMethod?: EnumPaymentMethodFilter<"Proof"> | $Enums.PaymentMethod
    customerPayPalEmail?: StringNullableFilter<"Proof"> | string | null
    payPalName?: StringNullableFilter<"Proof"> | string | null
    transactionId?: StringNullableFilter<"Proof"> | string | null
    discordName?: StringNullableFilter<"Proof"> | string | null
    discordAlias?: StringNullableFilter<"Proof"> | string | null
    discordId?: StringNullableFilter<"Proof"> | string | null
    cashtag?: StringNullableFilter<"Proof"> | string | null
    customerName?: StringNullableFilter<"Proof"> | string | null
    bankName?: StringNullableFilter<"Proof"> | string | null
    accountLast4?: StringNullableFilter<"Proof"> | string | null
    deliveryNote?: StringNullableFilter<"Proof"> | string | null
    createdAt?: DateTimeFilter<"Proof"> | Date | string
    updatedAt?: DateTimeFilter<"Proof"> | Date | string
    paymentScreenshots?: ProofImageListRelationFilter
    deliveryScreenshots?: ProofImageListRelationFilter
  }, "id">

  export type ProofOrderByWithAggregationInput = {
    id?: SortOrder
    productName?: SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    customerPayPalEmail?: SortOrderInput | SortOrder
    payPalName?: SortOrderInput | SortOrder
    transactionId?: SortOrderInput | SortOrder
    discordName?: SortOrderInput | SortOrder
    discordAlias?: SortOrderInput | SortOrder
    discordId?: SortOrderInput | SortOrder
    cashtag?: SortOrderInput | SortOrder
    customerName?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    accountLast4?: SortOrderInput | SortOrder
    deliveryNote?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProofCountOrderByAggregateInput
    _avg?: ProofAvgOrderByAggregateInput
    _max?: ProofMaxOrderByAggregateInput
    _min?: ProofMinOrderByAggregateInput
    _sum?: ProofSumOrderByAggregateInput
  }

  export type ProofScalarWhereWithAggregatesInput = {
    AND?: ProofScalarWhereWithAggregatesInput | ProofScalarWhereWithAggregatesInput[]
    OR?: ProofScalarWhereWithAggregatesInput[]
    NOT?: ProofScalarWhereWithAggregatesInput | ProofScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Proof"> | string
    productName?: StringWithAggregatesFilter<"Proof"> | string
    description?: StringNullableWithAggregatesFilter<"Proof"> | string | null
    amount?: FloatWithAggregatesFilter<"Proof"> | number
    status?: EnumProofStatusWithAggregatesFilter<"Proof"> | $Enums.ProofStatus
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"Proof"> | $Enums.PaymentMethod
    customerPayPalEmail?: StringNullableWithAggregatesFilter<"Proof"> | string | null
    payPalName?: StringNullableWithAggregatesFilter<"Proof"> | string | null
    transactionId?: StringNullableWithAggregatesFilter<"Proof"> | string | null
    discordName?: StringNullableWithAggregatesFilter<"Proof"> | string | null
    discordAlias?: StringNullableWithAggregatesFilter<"Proof"> | string | null
    discordId?: StringNullableWithAggregatesFilter<"Proof"> | string | null
    cashtag?: StringNullableWithAggregatesFilter<"Proof"> | string | null
    customerName?: StringNullableWithAggregatesFilter<"Proof"> | string | null
    bankName?: StringNullableWithAggregatesFilter<"Proof"> | string | null
    accountLast4?: StringNullableWithAggregatesFilter<"Proof"> | string | null
    deliveryNote?: StringNullableWithAggregatesFilter<"Proof"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Proof"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Proof"> | Date | string
  }

  export type ProofImageWhereInput = {
    AND?: ProofImageWhereInput | ProofImageWhereInput[]
    OR?: ProofImageWhereInput[]
    NOT?: ProofImageWhereInput | ProofImageWhereInput[]
    id?: StringFilter<"ProofImage"> | string
    url?: StringFilter<"ProofImage"> | string
    caption?: StringNullableFilter<"ProofImage"> | string | null
    type?: EnumImageTypeFilter<"ProofImage"> | $Enums.ImageType
    sortOrder?: IntFilter<"ProofImage"> | number
    paymentProofId?: StringNullableFilter<"ProofImage"> | string | null
    deliveryProofId?: StringNullableFilter<"ProofImage"> | string | null
    uploadedAt?: DateTimeFilter<"ProofImage"> | Date | string
    paymentProof?: XOR<ProofNullableScalarRelationFilter, ProofWhereInput> | null
    deliveryProof?: XOR<ProofNullableScalarRelationFilter, ProofWhereInput> | null
  }

  export type ProofImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    caption?: SortOrderInput | SortOrder
    type?: SortOrder
    sortOrder?: SortOrder
    paymentProofId?: SortOrderInput | SortOrder
    deliveryProofId?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    paymentProof?: ProofOrderByWithRelationInput
    deliveryProof?: ProofOrderByWithRelationInput
  }

  export type ProofImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProofImageWhereInput | ProofImageWhereInput[]
    OR?: ProofImageWhereInput[]
    NOT?: ProofImageWhereInput | ProofImageWhereInput[]
    url?: StringFilter<"ProofImage"> | string
    caption?: StringNullableFilter<"ProofImage"> | string | null
    type?: EnumImageTypeFilter<"ProofImage"> | $Enums.ImageType
    sortOrder?: IntFilter<"ProofImage"> | number
    paymentProofId?: StringNullableFilter<"ProofImage"> | string | null
    deliveryProofId?: StringNullableFilter<"ProofImage"> | string | null
    uploadedAt?: DateTimeFilter<"ProofImage"> | Date | string
    paymentProof?: XOR<ProofNullableScalarRelationFilter, ProofWhereInput> | null
    deliveryProof?: XOR<ProofNullableScalarRelationFilter, ProofWhereInput> | null
  }, "id">

  export type ProofImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    caption?: SortOrderInput | SortOrder
    type?: SortOrder
    sortOrder?: SortOrder
    paymentProofId?: SortOrderInput | SortOrder
    deliveryProofId?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    _count?: ProofImageCountOrderByAggregateInput
    _avg?: ProofImageAvgOrderByAggregateInput
    _max?: ProofImageMaxOrderByAggregateInput
    _min?: ProofImageMinOrderByAggregateInput
    _sum?: ProofImageSumOrderByAggregateInput
  }

  export type ProofImageScalarWhereWithAggregatesInput = {
    AND?: ProofImageScalarWhereWithAggregatesInput | ProofImageScalarWhereWithAggregatesInput[]
    OR?: ProofImageScalarWhereWithAggregatesInput[]
    NOT?: ProofImageScalarWhereWithAggregatesInput | ProofImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProofImage"> | string
    url?: StringWithAggregatesFilter<"ProofImage"> | string
    caption?: StringNullableWithAggregatesFilter<"ProofImage"> | string | null
    type?: EnumImageTypeWithAggregatesFilter<"ProofImage"> | $Enums.ImageType
    sortOrder?: IntWithAggregatesFilter<"ProofImage"> | number
    paymentProofId?: StringNullableWithAggregatesFilter<"ProofImage"> | string | null
    deliveryProofId?: StringNullableWithAggregatesFilter<"ProofImage"> | string | null
    uploadedAt?: DateTimeWithAggregatesFilter<"ProofImage"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProofCreateInput = {
    id?: string
    productName: string
    description?: string | null
    amount: number
    status?: $Enums.ProofStatus
    paymentMethod: $Enums.PaymentMethod
    customerPayPalEmail?: string | null
    payPalName?: string | null
    transactionId?: string | null
    discordName?: string | null
    discordAlias?: string | null
    discordId?: string | null
    cashtag?: string | null
    customerName?: string | null
    bankName?: string | null
    accountLast4?: string | null
    deliveryNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentScreenshots?: ProofImageCreateNestedManyWithoutPaymentProofInput
    deliveryScreenshots?: ProofImageCreateNestedManyWithoutDeliveryProofInput
  }

  export type ProofUncheckedCreateInput = {
    id?: string
    productName: string
    description?: string | null
    amount: number
    status?: $Enums.ProofStatus
    paymentMethod: $Enums.PaymentMethod
    customerPayPalEmail?: string | null
    payPalName?: string | null
    transactionId?: string | null
    discordName?: string | null
    discordAlias?: string | null
    discordId?: string | null
    cashtag?: string | null
    customerName?: string | null
    bankName?: string | null
    accountLast4?: string | null
    deliveryNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentScreenshots?: ProofImageUncheckedCreateNestedManyWithoutPaymentProofInput
    deliveryScreenshots?: ProofImageUncheckedCreateNestedManyWithoutDeliveryProofInput
  }

  export type ProofUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumProofStatusFieldUpdateOperationsInput | $Enums.ProofStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    customerPayPalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    payPalName?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    discordName?: NullableStringFieldUpdateOperationsInput | string | null
    discordAlias?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    cashtag?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountLast4?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentScreenshots?: ProofImageUpdateManyWithoutPaymentProofNestedInput
    deliveryScreenshots?: ProofImageUpdateManyWithoutDeliveryProofNestedInput
  }

  export type ProofUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumProofStatusFieldUpdateOperationsInput | $Enums.ProofStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    customerPayPalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    payPalName?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    discordName?: NullableStringFieldUpdateOperationsInput | string | null
    discordAlias?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    cashtag?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountLast4?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentScreenshots?: ProofImageUncheckedUpdateManyWithoutPaymentProofNestedInput
    deliveryScreenshots?: ProofImageUncheckedUpdateManyWithoutDeliveryProofNestedInput
  }

  export type ProofCreateManyInput = {
    id?: string
    productName: string
    description?: string | null
    amount: number
    status?: $Enums.ProofStatus
    paymentMethod: $Enums.PaymentMethod
    customerPayPalEmail?: string | null
    payPalName?: string | null
    transactionId?: string | null
    discordName?: string | null
    discordAlias?: string | null
    discordId?: string | null
    cashtag?: string | null
    customerName?: string | null
    bankName?: string | null
    accountLast4?: string | null
    deliveryNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProofUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumProofStatusFieldUpdateOperationsInput | $Enums.ProofStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    customerPayPalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    payPalName?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    discordName?: NullableStringFieldUpdateOperationsInput | string | null
    discordAlias?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    cashtag?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountLast4?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProofUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumProofStatusFieldUpdateOperationsInput | $Enums.ProofStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    customerPayPalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    payPalName?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    discordName?: NullableStringFieldUpdateOperationsInput | string | null
    discordAlias?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    cashtag?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountLast4?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProofImageCreateInput = {
    id?: string
    url: string
    caption?: string | null
    type: $Enums.ImageType
    sortOrder?: number
    uploadedAt?: Date | string
    paymentProof?: ProofCreateNestedOneWithoutPaymentScreenshotsInput
    deliveryProof?: ProofCreateNestedOneWithoutDeliveryScreenshotsInput
  }

  export type ProofImageUncheckedCreateInput = {
    id?: string
    url: string
    caption?: string | null
    type: $Enums.ImageType
    sortOrder?: number
    paymentProofId?: string | null
    deliveryProofId?: string | null
    uploadedAt?: Date | string
  }

  export type ProofImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
    sortOrder?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProof?: ProofUpdateOneWithoutPaymentScreenshotsNestedInput
    deliveryProof?: ProofUpdateOneWithoutDeliveryScreenshotsNestedInput
  }

  export type ProofImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
    sortOrder?: IntFieldUpdateOperationsInput | number
    paymentProofId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryProofId?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProofImageCreateManyInput = {
    id?: string
    url: string
    caption?: string | null
    type: $Enums.ImageType
    sortOrder?: number
    paymentProofId?: string | null
    deliveryProofId?: string | null
    uploadedAt?: Date | string
  }

  export type ProofImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
    sortOrder?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProofImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
    sortOrder?: IntFieldUpdateOperationsInput | number
    paymentProofId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryProofId?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumProofStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProofStatus | EnumProofStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProofStatus[] | ListEnumProofStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProofStatus[] | ListEnumProofStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProofStatusFilter<$PrismaModel> | $Enums.ProofStatus
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type ProofImageListRelationFilter = {
    every?: ProofImageWhereInput
    some?: ProofImageWhereInput
    none?: ProofImageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProofImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProofCountOrderByAggregateInput = {
    id?: SortOrder
    productName?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    customerPayPalEmail?: SortOrder
    payPalName?: SortOrder
    transactionId?: SortOrder
    discordName?: SortOrder
    discordAlias?: SortOrder
    discordId?: SortOrder
    cashtag?: SortOrder
    customerName?: SortOrder
    bankName?: SortOrder
    accountLast4?: SortOrder
    deliveryNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProofAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ProofMaxOrderByAggregateInput = {
    id?: SortOrder
    productName?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    customerPayPalEmail?: SortOrder
    payPalName?: SortOrder
    transactionId?: SortOrder
    discordName?: SortOrder
    discordAlias?: SortOrder
    discordId?: SortOrder
    cashtag?: SortOrder
    customerName?: SortOrder
    bankName?: SortOrder
    accountLast4?: SortOrder
    deliveryNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProofMinOrderByAggregateInput = {
    id?: SortOrder
    productName?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    customerPayPalEmail?: SortOrder
    payPalName?: SortOrder
    transactionId?: SortOrder
    discordName?: SortOrder
    discordAlias?: SortOrder
    discordId?: SortOrder
    cashtag?: SortOrder
    customerName?: SortOrder
    bankName?: SortOrder
    accountLast4?: SortOrder
    deliveryNote?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProofSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumProofStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProofStatus | EnumProofStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProofStatus[] | ListEnumProofStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProofStatus[] | ListEnumProofStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProofStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProofStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProofStatusFilter<$PrismaModel>
    _max?: NestedEnumProofStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumImageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageType | EnumImageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImageTypeFilter<$PrismaModel> | $Enums.ImageType
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProofNullableScalarRelationFilter = {
    is?: ProofWhereInput | null
    isNot?: ProofWhereInput | null
  }

  export type ProofImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    type?: SortOrder
    sortOrder?: SortOrder
    paymentProofId?: SortOrder
    deliveryProofId?: SortOrder
    uploadedAt?: SortOrder
  }

  export type ProofImageAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ProofImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    type?: SortOrder
    sortOrder?: SortOrder
    paymentProofId?: SortOrder
    deliveryProofId?: SortOrder
    uploadedAt?: SortOrder
  }

  export type ProofImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    type?: SortOrder
    sortOrder?: SortOrder
    paymentProofId?: SortOrder
    deliveryProofId?: SortOrder
    uploadedAt?: SortOrder
  }

  export type ProofImageSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type EnumImageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageType | EnumImageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImageTypeWithAggregatesFilter<$PrismaModel> | $Enums.ImageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImageTypeFilter<$PrismaModel>
    _max?: NestedEnumImageTypeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProofImageCreateNestedManyWithoutPaymentProofInput = {
    create?: XOR<ProofImageCreateWithoutPaymentProofInput, ProofImageUncheckedCreateWithoutPaymentProofInput> | ProofImageCreateWithoutPaymentProofInput[] | ProofImageUncheckedCreateWithoutPaymentProofInput[]
    connectOrCreate?: ProofImageCreateOrConnectWithoutPaymentProofInput | ProofImageCreateOrConnectWithoutPaymentProofInput[]
    createMany?: ProofImageCreateManyPaymentProofInputEnvelope
    connect?: ProofImageWhereUniqueInput | ProofImageWhereUniqueInput[]
  }

  export type ProofImageCreateNestedManyWithoutDeliveryProofInput = {
    create?: XOR<ProofImageCreateWithoutDeliveryProofInput, ProofImageUncheckedCreateWithoutDeliveryProofInput> | ProofImageCreateWithoutDeliveryProofInput[] | ProofImageUncheckedCreateWithoutDeliveryProofInput[]
    connectOrCreate?: ProofImageCreateOrConnectWithoutDeliveryProofInput | ProofImageCreateOrConnectWithoutDeliveryProofInput[]
    createMany?: ProofImageCreateManyDeliveryProofInputEnvelope
    connect?: ProofImageWhereUniqueInput | ProofImageWhereUniqueInput[]
  }

  export type ProofImageUncheckedCreateNestedManyWithoutPaymentProofInput = {
    create?: XOR<ProofImageCreateWithoutPaymentProofInput, ProofImageUncheckedCreateWithoutPaymentProofInput> | ProofImageCreateWithoutPaymentProofInput[] | ProofImageUncheckedCreateWithoutPaymentProofInput[]
    connectOrCreate?: ProofImageCreateOrConnectWithoutPaymentProofInput | ProofImageCreateOrConnectWithoutPaymentProofInput[]
    createMany?: ProofImageCreateManyPaymentProofInputEnvelope
    connect?: ProofImageWhereUniqueInput | ProofImageWhereUniqueInput[]
  }

  export type ProofImageUncheckedCreateNestedManyWithoutDeliveryProofInput = {
    create?: XOR<ProofImageCreateWithoutDeliveryProofInput, ProofImageUncheckedCreateWithoutDeliveryProofInput> | ProofImageCreateWithoutDeliveryProofInput[] | ProofImageUncheckedCreateWithoutDeliveryProofInput[]
    connectOrCreate?: ProofImageCreateOrConnectWithoutDeliveryProofInput | ProofImageCreateOrConnectWithoutDeliveryProofInput[]
    createMany?: ProofImageCreateManyDeliveryProofInputEnvelope
    connect?: ProofImageWhereUniqueInput | ProofImageWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumProofStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProofStatus
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type ProofImageUpdateManyWithoutPaymentProofNestedInput = {
    create?: XOR<ProofImageCreateWithoutPaymentProofInput, ProofImageUncheckedCreateWithoutPaymentProofInput> | ProofImageCreateWithoutPaymentProofInput[] | ProofImageUncheckedCreateWithoutPaymentProofInput[]
    connectOrCreate?: ProofImageCreateOrConnectWithoutPaymentProofInput | ProofImageCreateOrConnectWithoutPaymentProofInput[]
    upsert?: ProofImageUpsertWithWhereUniqueWithoutPaymentProofInput | ProofImageUpsertWithWhereUniqueWithoutPaymentProofInput[]
    createMany?: ProofImageCreateManyPaymentProofInputEnvelope
    set?: ProofImageWhereUniqueInput | ProofImageWhereUniqueInput[]
    disconnect?: ProofImageWhereUniqueInput | ProofImageWhereUniqueInput[]
    delete?: ProofImageWhereUniqueInput | ProofImageWhereUniqueInput[]
    connect?: ProofImageWhereUniqueInput | ProofImageWhereUniqueInput[]
    update?: ProofImageUpdateWithWhereUniqueWithoutPaymentProofInput | ProofImageUpdateWithWhereUniqueWithoutPaymentProofInput[]
    updateMany?: ProofImageUpdateManyWithWhereWithoutPaymentProofInput | ProofImageUpdateManyWithWhereWithoutPaymentProofInput[]
    deleteMany?: ProofImageScalarWhereInput | ProofImageScalarWhereInput[]
  }

  export type ProofImageUpdateManyWithoutDeliveryProofNestedInput = {
    create?: XOR<ProofImageCreateWithoutDeliveryProofInput, ProofImageUncheckedCreateWithoutDeliveryProofInput> | ProofImageCreateWithoutDeliveryProofInput[] | ProofImageUncheckedCreateWithoutDeliveryProofInput[]
    connectOrCreate?: ProofImageCreateOrConnectWithoutDeliveryProofInput | ProofImageCreateOrConnectWithoutDeliveryProofInput[]
    upsert?: ProofImageUpsertWithWhereUniqueWithoutDeliveryProofInput | ProofImageUpsertWithWhereUniqueWithoutDeliveryProofInput[]
    createMany?: ProofImageCreateManyDeliveryProofInputEnvelope
    set?: ProofImageWhereUniqueInput | ProofImageWhereUniqueInput[]
    disconnect?: ProofImageWhereUniqueInput | ProofImageWhereUniqueInput[]
    delete?: ProofImageWhereUniqueInput | ProofImageWhereUniqueInput[]
    connect?: ProofImageWhereUniqueInput | ProofImageWhereUniqueInput[]
    update?: ProofImageUpdateWithWhereUniqueWithoutDeliveryProofInput | ProofImageUpdateWithWhereUniqueWithoutDeliveryProofInput[]
    updateMany?: ProofImageUpdateManyWithWhereWithoutDeliveryProofInput | ProofImageUpdateManyWithWhereWithoutDeliveryProofInput[]
    deleteMany?: ProofImageScalarWhereInput | ProofImageScalarWhereInput[]
  }

  export type ProofImageUncheckedUpdateManyWithoutPaymentProofNestedInput = {
    create?: XOR<ProofImageCreateWithoutPaymentProofInput, ProofImageUncheckedCreateWithoutPaymentProofInput> | ProofImageCreateWithoutPaymentProofInput[] | ProofImageUncheckedCreateWithoutPaymentProofInput[]
    connectOrCreate?: ProofImageCreateOrConnectWithoutPaymentProofInput | ProofImageCreateOrConnectWithoutPaymentProofInput[]
    upsert?: ProofImageUpsertWithWhereUniqueWithoutPaymentProofInput | ProofImageUpsertWithWhereUniqueWithoutPaymentProofInput[]
    createMany?: ProofImageCreateManyPaymentProofInputEnvelope
    set?: ProofImageWhereUniqueInput | ProofImageWhereUniqueInput[]
    disconnect?: ProofImageWhereUniqueInput | ProofImageWhereUniqueInput[]
    delete?: ProofImageWhereUniqueInput | ProofImageWhereUniqueInput[]
    connect?: ProofImageWhereUniqueInput | ProofImageWhereUniqueInput[]
    update?: ProofImageUpdateWithWhereUniqueWithoutPaymentProofInput | ProofImageUpdateWithWhereUniqueWithoutPaymentProofInput[]
    updateMany?: ProofImageUpdateManyWithWhereWithoutPaymentProofInput | ProofImageUpdateManyWithWhereWithoutPaymentProofInput[]
    deleteMany?: ProofImageScalarWhereInput | ProofImageScalarWhereInput[]
  }

  export type ProofImageUncheckedUpdateManyWithoutDeliveryProofNestedInput = {
    create?: XOR<ProofImageCreateWithoutDeliveryProofInput, ProofImageUncheckedCreateWithoutDeliveryProofInput> | ProofImageCreateWithoutDeliveryProofInput[] | ProofImageUncheckedCreateWithoutDeliveryProofInput[]
    connectOrCreate?: ProofImageCreateOrConnectWithoutDeliveryProofInput | ProofImageCreateOrConnectWithoutDeliveryProofInput[]
    upsert?: ProofImageUpsertWithWhereUniqueWithoutDeliveryProofInput | ProofImageUpsertWithWhereUniqueWithoutDeliveryProofInput[]
    createMany?: ProofImageCreateManyDeliveryProofInputEnvelope
    set?: ProofImageWhereUniqueInput | ProofImageWhereUniqueInput[]
    disconnect?: ProofImageWhereUniqueInput | ProofImageWhereUniqueInput[]
    delete?: ProofImageWhereUniqueInput | ProofImageWhereUniqueInput[]
    connect?: ProofImageWhereUniqueInput | ProofImageWhereUniqueInput[]
    update?: ProofImageUpdateWithWhereUniqueWithoutDeliveryProofInput | ProofImageUpdateWithWhereUniqueWithoutDeliveryProofInput[]
    updateMany?: ProofImageUpdateManyWithWhereWithoutDeliveryProofInput | ProofImageUpdateManyWithWhereWithoutDeliveryProofInput[]
    deleteMany?: ProofImageScalarWhereInput | ProofImageScalarWhereInput[]
  }

  export type ProofCreateNestedOneWithoutPaymentScreenshotsInput = {
    create?: XOR<ProofCreateWithoutPaymentScreenshotsInput, ProofUncheckedCreateWithoutPaymentScreenshotsInput>
    connectOrCreate?: ProofCreateOrConnectWithoutPaymentScreenshotsInput
    connect?: ProofWhereUniqueInput
  }

  export type ProofCreateNestedOneWithoutDeliveryScreenshotsInput = {
    create?: XOR<ProofCreateWithoutDeliveryScreenshotsInput, ProofUncheckedCreateWithoutDeliveryScreenshotsInput>
    connectOrCreate?: ProofCreateOrConnectWithoutDeliveryScreenshotsInput
    connect?: ProofWhereUniqueInput
  }

  export type EnumImageTypeFieldUpdateOperationsInput = {
    set?: $Enums.ImageType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProofUpdateOneWithoutPaymentScreenshotsNestedInput = {
    create?: XOR<ProofCreateWithoutPaymentScreenshotsInput, ProofUncheckedCreateWithoutPaymentScreenshotsInput>
    connectOrCreate?: ProofCreateOrConnectWithoutPaymentScreenshotsInput
    upsert?: ProofUpsertWithoutPaymentScreenshotsInput
    disconnect?: ProofWhereInput | boolean
    delete?: ProofWhereInput | boolean
    connect?: ProofWhereUniqueInput
    update?: XOR<XOR<ProofUpdateToOneWithWhereWithoutPaymentScreenshotsInput, ProofUpdateWithoutPaymentScreenshotsInput>, ProofUncheckedUpdateWithoutPaymentScreenshotsInput>
  }

  export type ProofUpdateOneWithoutDeliveryScreenshotsNestedInput = {
    create?: XOR<ProofCreateWithoutDeliveryScreenshotsInput, ProofUncheckedCreateWithoutDeliveryScreenshotsInput>
    connectOrCreate?: ProofCreateOrConnectWithoutDeliveryScreenshotsInput
    upsert?: ProofUpsertWithoutDeliveryScreenshotsInput
    disconnect?: ProofWhereInput | boolean
    delete?: ProofWhereInput | boolean
    connect?: ProofWhereUniqueInput
    update?: XOR<XOR<ProofUpdateToOneWithWhereWithoutDeliveryScreenshotsInput, ProofUpdateWithoutDeliveryScreenshotsInput>, ProofUncheckedUpdateWithoutDeliveryScreenshotsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumProofStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProofStatus | EnumProofStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProofStatus[] | ListEnumProofStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProofStatus[] | ListEnumProofStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProofStatusFilter<$PrismaModel> | $Enums.ProofStatus
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumProofStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProofStatus | EnumProofStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProofStatus[] | ListEnumProofStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProofStatus[] | ListEnumProofStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProofStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProofStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProofStatusFilter<$PrismaModel>
    _max?: NestedEnumProofStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumImageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageType | EnumImageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImageTypeFilter<$PrismaModel> | $Enums.ImageType
  }

  export type NestedEnumImageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageType | EnumImageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageType[] | ListEnumImageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumImageTypeWithAggregatesFilter<$PrismaModel> | $Enums.ImageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImageTypeFilter<$PrismaModel>
    _max?: NestedEnumImageTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ProofImageCreateWithoutPaymentProofInput = {
    id?: string
    url: string
    caption?: string | null
    type: $Enums.ImageType
    sortOrder?: number
    uploadedAt?: Date | string
    deliveryProof?: ProofCreateNestedOneWithoutDeliveryScreenshotsInput
  }

  export type ProofImageUncheckedCreateWithoutPaymentProofInput = {
    id?: string
    url: string
    caption?: string | null
    type: $Enums.ImageType
    sortOrder?: number
    deliveryProofId?: string | null
    uploadedAt?: Date | string
  }

  export type ProofImageCreateOrConnectWithoutPaymentProofInput = {
    where: ProofImageWhereUniqueInput
    create: XOR<ProofImageCreateWithoutPaymentProofInput, ProofImageUncheckedCreateWithoutPaymentProofInput>
  }

  export type ProofImageCreateManyPaymentProofInputEnvelope = {
    data: ProofImageCreateManyPaymentProofInput | ProofImageCreateManyPaymentProofInput[]
    skipDuplicates?: boolean
  }

  export type ProofImageCreateWithoutDeliveryProofInput = {
    id?: string
    url: string
    caption?: string | null
    type: $Enums.ImageType
    sortOrder?: number
    uploadedAt?: Date | string
    paymentProof?: ProofCreateNestedOneWithoutPaymentScreenshotsInput
  }

  export type ProofImageUncheckedCreateWithoutDeliveryProofInput = {
    id?: string
    url: string
    caption?: string | null
    type: $Enums.ImageType
    sortOrder?: number
    paymentProofId?: string | null
    uploadedAt?: Date | string
  }

  export type ProofImageCreateOrConnectWithoutDeliveryProofInput = {
    where: ProofImageWhereUniqueInput
    create: XOR<ProofImageCreateWithoutDeliveryProofInput, ProofImageUncheckedCreateWithoutDeliveryProofInput>
  }

  export type ProofImageCreateManyDeliveryProofInputEnvelope = {
    data: ProofImageCreateManyDeliveryProofInput | ProofImageCreateManyDeliveryProofInput[]
    skipDuplicates?: boolean
  }

  export type ProofImageUpsertWithWhereUniqueWithoutPaymentProofInput = {
    where: ProofImageWhereUniqueInput
    update: XOR<ProofImageUpdateWithoutPaymentProofInput, ProofImageUncheckedUpdateWithoutPaymentProofInput>
    create: XOR<ProofImageCreateWithoutPaymentProofInput, ProofImageUncheckedCreateWithoutPaymentProofInput>
  }

  export type ProofImageUpdateWithWhereUniqueWithoutPaymentProofInput = {
    where: ProofImageWhereUniqueInput
    data: XOR<ProofImageUpdateWithoutPaymentProofInput, ProofImageUncheckedUpdateWithoutPaymentProofInput>
  }

  export type ProofImageUpdateManyWithWhereWithoutPaymentProofInput = {
    where: ProofImageScalarWhereInput
    data: XOR<ProofImageUpdateManyMutationInput, ProofImageUncheckedUpdateManyWithoutPaymentProofInput>
  }

  export type ProofImageScalarWhereInput = {
    AND?: ProofImageScalarWhereInput | ProofImageScalarWhereInput[]
    OR?: ProofImageScalarWhereInput[]
    NOT?: ProofImageScalarWhereInput | ProofImageScalarWhereInput[]
    id?: StringFilter<"ProofImage"> | string
    url?: StringFilter<"ProofImage"> | string
    caption?: StringNullableFilter<"ProofImage"> | string | null
    type?: EnumImageTypeFilter<"ProofImage"> | $Enums.ImageType
    sortOrder?: IntFilter<"ProofImage"> | number
    paymentProofId?: StringNullableFilter<"ProofImage"> | string | null
    deliveryProofId?: StringNullableFilter<"ProofImage"> | string | null
    uploadedAt?: DateTimeFilter<"ProofImage"> | Date | string
  }

  export type ProofImageUpsertWithWhereUniqueWithoutDeliveryProofInput = {
    where: ProofImageWhereUniqueInput
    update: XOR<ProofImageUpdateWithoutDeliveryProofInput, ProofImageUncheckedUpdateWithoutDeliveryProofInput>
    create: XOR<ProofImageCreateWithoutDeliveryProofInput, ProofImageUncheckedCreateWithoutDeliveryProofInput>
  }

  export type ProofImageUpdateWithWhereUniqueWithoutDeliveryProofInput = {
    where: ProofImageWhereUniqueInput
    data: XOR<ProofImageUpdateWithoutDeliveryProofInput, ProofImageUncheckedUpdateWithoutDeliveryProofInput>
  }

  export type ProofImageUpdateManyWithWhereWithoutDeliveryProofInput = {
    where: ProofImageScalarWhereInput
    data: XOR<ProofImageUpdateManyMutationInput, ProofImageUncheckedUpdateManyWithoutDeliveryProofInput>
  }

  export type ProofCreateWithoutPaymentScreenshotsInput = {
    id?: string
    productName: string
    description?: string | null
    amount: number
    status?: $Enums.ProofStatus
    paymentMethod: $Enums.PaymentMethod
    customerPayPalEmail?: string | null
    payPalName?: string | null
    transactionId?: string | null
    discordName?: string | null
    discordAlias?: string | null
    discordId?: string | null
    cashtag?: string | null
    customerName?: string | null
    bankName?: string | null
    accountLast4?: string | null
    deliveryNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveryScreenshots?: ProofImageCreateNestedManyWithoutDeliveryProofInput
  }

  export type ProofUncheckedCreateWithoutPaymentScreenshotsInput = {
    id?: string
    productName: string
    description?: string | null
    amount: number
    status?: $Enums.ProofStatus
    paymentMethod: $Enums.PaymentMethod
    customerPayPalEmail?: string | null
    payPalName?: string | null
    transactionId?: string | null
    discordName?: string | null
    discordAlias?: string | null
    discordId?: string | null
    cashtag?: string | null
    customerName?: string | null
    bankName?: string | null
    accountLast4?: string | null
    deliveryNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveryScreenshots?: ProofImageUncheckedCreateNestedManyWithoutDeliveryProofInput
  }

  export type ProofCreateOrConnectWithoutPaymentScreenshotsInput = {
    where: ProofWhereUniqueInput
    create: XOR<ProofCreateWithoutPaymentScreenshotsInput, ProofUncheckedCreateWithoutPaymentScreenshotsInput>
  }

  export type ProofCreateWithoutDeliveryScreenshotsInput = {
    id?: string
    productName: string
    description?: string | null
    amount: number
    status?: $Enums.ProofStatus
    paymentMethod: $Enums.PaymentMethod
    customerPayPalEmail?: string | null
    payPalName?: string | null
    transactionId?: string | null
    discordName?: string | null
    discordAlias?: string | null
    discordId?: string | null
    cashtag?: string | null
    customerName?: string | null
    bankName?: string | null
    accountLast4?: string | null
    deliveryNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentScreenshots?: ProofImageCreateNestedManyWithoutPaymentProofInput
  }

  export type ProofUncheckedCreateWithoutDeliveryScreenshotsInput = {
    id?: string
    productName: string
    description?: string | null
    amount: number
    status?: $Enums.ProofStatus
    paymentMethod: $Enums.PaymentMethod
    customerPayPalEmail?: string | null
    payPalName?: string | null
    transactionId?: string | null
    discordName?: string | null
    discordAlias?: string | null
    discordId?: string | null
    cashtag?: string | null
    customerName?: string | null
    bankName?: string | null
    accountLast4?: string | null
    deliveryNote?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentScreenshots?: ProofImageUncheckedCreateNestedManyWithoutPaymentProofInput
  }

  export type ProofCreateOrConnectWithoutDeliveryScreenshotsInput = {
    where: ProofWhereUniqueInput
    create: XOR<ProofCreateWithoutDeliveryScreenshotsInput, ProofUncheckedCreateWithoutDeliveryScreenshotsInput>
  }

  export type ProofUpsertWithoutPaymentScreenshotsInput = {
    update: XOR<ProofUpdateWithoutPaymentScreenshotsInput, ProofUncheckedUpdateWithoutPaymentScreenshotsInput>
    create: XOR<ProofCreateWithoutPaymentScreenshotsInput, ProofUncheckedCreateWithoutPaymentScreenshotsInput>
    where?: ProofWhereInput
  }

  export type ProofUpdateToOneWithWhereWithoutPaymentScreenshotsInput = {
    where?: ProofWhereInput
    data: XOR<ProofUpdateWithoutPaymentScreenshotsInput, ProofUncheckedUpdateWithoutPaymentScreenshotsInput>
  }

  export type ProofUpdateWithoutPaymentScreenshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumProofStatusFieldUpdateOperationsInput | $Enums.ProofStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    customerPayPalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    payPalName?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    discordName?: NullableStringFieldUpdateOperationsInput | string | null
    discordAlias?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    cashtag?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountLast4?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryScreenshots?: ProofImageUpdateManyWithoutDeliveryProofNestedInput
  }

  export type ProofUncheckedUpdateWithoutPaymentScreenshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumProofStatusFieldUpdateOperationsInput | $Enums.ProofStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    customerPayPalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    payPalName?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    discordName?: NullableStringFieldUpdateOperationsInput | string | null
    discordAlias?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    cashtag?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountLast4?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryScreenshots?: ProofImageUncheckedUpdateManyWithoutDeliveryProofNestedInput
  }

  export type ProofUpsertWithoutDeliveryScreenshotsInput = {
    update: XOR<ProofUpdateWithoutDeliveryScreenshotsInput, ProofUncheckedUpdateWithoutDeliveryScreenshotsInput>
    create: XOR<ProofCreateWithoutDeliveryScreenshotsInput, ProofUncheckedCreateWithoutDeliveryScreenshotsInput>
    where?: ProofWhereInput
  }

  export type ProofUpdateToOneWithWhereWithoutDeliveryScreenshotsInput = {
    where?: ProofWhereInput
    data: XOR<ProofUpdateWithoutDeliveryScreenshotsInput, ProofUncheckedUpdateWithoutDeliveryScreenshotsInput>
  }

  export type ProofUpdateWithoutDeliveryScreenshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumProofStatusFieldUpdateOperationsInput | $Enums.ProofStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    customerPayPalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    payPalName?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    discordName?: NullableStringFieldUpdateOperationsInput | string | null
    discordAlias?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    cashtag?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountLast4?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentScreenshots?: ProofImageUpdateManyWithoutPaymentProofNestedInput
  }

  export type ProofUncheckedUpdateWithoutDeliveryScreenshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumProofStatusFieldUpdateOperationsInput | $Enums.ProofStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    customerPayPalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    payPalName?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    discordName?: NullableStringFieldUpdateOperationsInput | string | null
    discordAlias?: NullableStringFieldUpdateOperationsInput | string | null
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    cashtag?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountLast4?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryNote?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentScreenshots?: ProofImageUncheckedUpdateManyWithoutPaymentProofNestedInput
  }

  export type ProofImageCreateManyPaymentProofInput = {
    id?: string
    url: string
    caption?: string | null
    type: $Enums.ImageType
    sortOrder?: number
    deliveryProofId?: string | null
    uploadedAt?: Date | string
  }

  export type ProofImageCreateManyDeliveryProofInput = {
    id?: string
    url: string
    caption?: string | null
    type: $Enums.ImageType
    sortOrder?: number
    paymentProofId?: string | null
    uploadedAt?: Date | string
  }

  export type ProofImageUpdateWithoutPaymentProofInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
    sortOrder?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryProof?: ProofUpdateOneWithoutDeliveryScreenshotsNestedInput
  }

  export type ProofImageUncheckedUpdateWithoutPaymentProofInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
    sortOrder?: IntFieldUpdateOperationsInput | number
    deliveryProofId?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProofImageUncheckedUpdateManyWithoutPaymentProofInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
    sortOrder?: IntFieldUpdateOperationsInput | number
    deliveryProofId?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProofImageUpdateWithoutDeliveryProofInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
    sortOrder?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProof?: ProofUpdateOneWithoutPaymentScreenshotsNestedInput
  }

  export type ProofImageUncheckedUpdateWithoutDeliveryProofInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
    sortOrder?: IntFieldUpdateOperationsInput | number
    paymentProofId?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProofImageUncheckedUpdateManyWithoutDeliveryProofInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumImageTypeFieldUpdateOperationsInput | $Enums.ImageType
    sortOrder?: IntFieldUpdateOperationsInput | number
    paymentProofId?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}