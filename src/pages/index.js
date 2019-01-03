import React from 'react'
import get from 'lodash/get'
import Banner from '../components/banner'
import ProjectList from '../components/project-list'
import _ from 'lodash'

class RootIndex extends React.Component {

  render() {
    const thisPage = get(this, 'props.data.allContentfulHomePage.edges[0].node');
    return (
      <div>
        <Banner title={thisPage.hero.title.title} Image={thisPage.hero.bannerimage.file.url} />
        <ul>
          {thisPage.projectLists.map(x => (
            <ProjectList projectName={x.projectsName} projectDescription={x.projectsDescription.childMarkdownRemark.html} projectTitle={x.projectTitle}/>
          ))}
        </ul>
      </div>
    )
  }
}

export default RootIndex;

export const pageQuery = graphql`
query HomeQuery {
  allContentfulHomePage {
  edges {
    node {
      id
      hero {
        id
        title {
          id
          title
        }
        bannerimage {
          id
          file {
            url
            fileName
            contentType
          }
        }
      }
      projectLists {
        id
        projectTitle
        projectsName
        projectsDescription {
          id
          childMarkdownRemark {
            id
            html
          }
        }
      }
    }
  }
}
}`
