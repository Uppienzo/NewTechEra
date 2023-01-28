import {Component} from 'react'
import Header from '../Header'
import CourseItem from '../CourseItem'

import {HomeContainer, CourseHead, CourseContainer} from './styledComponents'
import LoaderAnimation from '../Loader'
import FailureView from '../FailureView'

const apiFetchConstantStates = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Home extends Component {
  state = {courses: [], status: apiFetchConstantStates.initial}

  componentDidMount() {
    this.getCourses()
  }

  getCourses = async () => {
    this.setState({status: apiFetchConstantStates.loading})
    const url = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.successfulFetch(data.courses)
    } else {
      this.setState({status: apiFetchConstantStates.failure})
    }
  }

  successfulFetch = courses => {
    const updatedCourses = courses.map(each => ({
      id: each.id,
      logoUrl: each.logo_url,
      name: each.name,
    }))
    this.setState({
      courses: updatedCourses,
      status: apiFetchConstantStates.success,
    })
  }

  displayCourses = () => {
    const {courses} = this.state
    return (
      <CourseContainer>
        {courses.map(each => (
          <CourseItem key={each.id} details={each} />
        ))}
      </CourseContainer>
    )
  }

  displayRenderPart = () => {
    const {status} = this.state
    switch (status) {
      case apiFetchConstantStates.loading:
        return <LoaderAnimation />
      case apiFetchConstantStates.success:
        return this.displayCourses()
      case apiFetchConstantStates.failure:
        return <FailureView onclick={this.getCourses} />
      default:
        return null
    }
  }

  render() {
    return (
      <HomeContainer>
        <Header />
        <CourseHead>Courses</CourseHead>
        {this.displayRenderPart()}
      </HomeContainer>
    )
  }
}

export default Home
