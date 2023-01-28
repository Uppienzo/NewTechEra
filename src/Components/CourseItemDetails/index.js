import {Component} from 'react'

import './index.css'

import {CourseContainer, Image, DetailsContainer} from './styledComponents'

import LoaderAnimation from '../Loader'
import FailureView from '../FailureView'
import Header from '../Header'

const apiFetchConstantStates = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class CourseItemDetails extends Component {
  state = {courseDetails: '', status: apiFetchConstantStates.initial}

  componentDidMount() {
    this.getCourseDetails()
  }

  getCourseDetails = async () => {
    this.setState({status: apiFetchConstantStates.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/te/courses/${id}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.successfulFetch(data.course_details)
    } else {
      this.setState({status: apiFetchConstantStates.failure})
    }
  }

  successfulFetch = courseDetails => {
    const updatedCourseDetails = {
      id: courseDetails.id,
      description: courseDetails.description,
      imageUrl: courseDetails.image_url,
      name: courseDetails.name,
    }
    this.setState({
      courseDetails: updatedCourseDetails,
      status: apiFetchConstantStates.success,
    })
  }

  displayCourseDetails = () => {
    const {courseDetails} = this.state
    const {imageUrl, name, description} = courseDetails
    return (
      <CourseContainer>
        <Image src={imageUrl} alt={name} />
        <DetailsContainer>
          <h1 className="course-name"> {name} </h1>
          <p className="course-description"> {description} </p>
        </DetailsContainer>
      </CourseContainer>
    )
  }

  displayRenderPart = () => {
    const {status} = this.state
    switch (status) {
      case apiFetchConstantStates.loading:
        return <LoaderAnimation />
      case apiFetchConstantStates.success:
        return this.displayCourseDetails()
      case apiFetchConstantStates.failure:
        return <FailureView onclick={this.getCourseDetails} />
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.displayRenderPart()}
      </>
    )
  }
}

export default CourseItemDetails
