import {Item, Image, Name, StyledLink} from './styledComponents'

const CourseItem = props => {
  const {details} = props
  const {id, logoUrl, name} = details

  return (
    <StyledLink to={`/courses/${id}`}>
      <Item>
        <Image src={logoUrl} alt={name} />
        <Name>{name}</Name>
      </Item>
    </StyledLink>
  )
}

export default CourseItem
