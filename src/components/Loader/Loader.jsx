import { InfinitySpin} from 'react-loader-spinner'

export const Loader = () => {
  return (
    <InfinitySpin
    visible={true}
    width="200"
    color="#781458"
    ariaLabel="infinity-spin-loading"
    />
  )
}


