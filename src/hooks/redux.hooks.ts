import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {AppDispatch, RootState} from '../redux/store'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useAppDispatch = () => useDispatch<AppDispatch>()

export {
  useAppDispatch,
  useAppSelector
}