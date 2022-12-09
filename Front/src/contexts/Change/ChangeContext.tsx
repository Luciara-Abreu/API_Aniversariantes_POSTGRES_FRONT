import { createContext } from 'react'
import { ChangeContextType} from '../../interfaces/User'


// Context
export const ChangeContext = createContext<ChangeContextType | undefined>(undefined);


