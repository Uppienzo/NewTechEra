import Loader from 'react-loader-spinner'

import {LoadContainer} from './styledComponents'

const LoaderAnimation = () => (
  <LoadContainer data-testid="loader">
    <Loader type="ThreeDots" color="#4656a1" height={50} width={50} />
  </LoadContainer>
)

export default LoaderAnimation
