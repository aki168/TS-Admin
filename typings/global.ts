/// <reference types="react-scripts" />
/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

import { MutableRefObject } from "react"

// declare module 'classnames' {
//   import classNames from 'classnames'
//   export default classNames
// }

interface ReduxProps {
  storeData? : Record<string, any>
  setStoreData? : (type: string, payload: any) => Object
}

type RefType = MutableRefObject<unknown> | ((instance: unknown) => void)

type CommonObjectType< T = any> = Record<string, T>


