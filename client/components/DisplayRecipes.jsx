import React from 'react'

class DisplayRecipes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  getAllRecipes = () => {
    return fetch('/api/summary')
      .then(response => {
        return response.json()
      })
      .then(jsonResponse => {
        this.setState({ recipes: jsonResponse })
      })
  }

  componentDidMount() {
    this.getAllRecipes()
  }

  render() {
    if (this.state.recipes) {
      return (
        <div>
          <h1>OMG!</h1>
          {this.state.recipes.map(recipe => {
            return (
              <div>
                <h2>{recipe.title}</h2>
                <p>{recipe.season}</p>
                <p>{recipe.rating}</p>
                <p>{recipe.time_options}</p>
                {recipe.cuisine_categories.map(cat => (
                  <span> {cat} </span>
                ))}
              </div>
            )
          })}
        </div>
      )
    } else {
      return <h2>Loading...</h2>
    }
  }
}

export default DisplayRecipes