import {StyledLink, HeadContainer, HomeImage} from './styledComponents'

const Header = () => (
  <HeadContainer>
    <StyledLink to="/">
      <HomeImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
      />
    </StyledLink>
  </HeadContainer>
)

export default Header
