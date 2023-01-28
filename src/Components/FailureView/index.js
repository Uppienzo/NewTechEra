import {Container, Image, Head, Description, Retry} from './styledComponents'
import Header from '../Header'

const FailureView = props => {
  const {onclick} = props
  return (
    <>
      <Header />
      <Container>
        <Image
          src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
          alt="failure view"
        />
        <Head>Oops! Something Went Wrong</Head>
        <Description>
          We cannot seem to find the page you are looking for.
        </Description>
        <Retry type="button" onClick={() => onclick()}>
          Retry
        </Retry>
      </Container>
    </>
  )
}

export default FailureView
