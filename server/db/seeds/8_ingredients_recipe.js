exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients_recipes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients_recipes').insert([
        {
          id: 1,
          recipe_id: 1,
          ingredients_id: 22,
          quantity: 1,
          measure_id: 1,
          ingredient_group: 'Rice Bowl'
        },
        {
          id: 2,
          recipe_id: 1,
          ingredients_id: 23,
          quantity: 1,
          ingredient_group: 'Rice Bowl'
        },
        {
          id: 3,
          recipe_id: 1,
          ingredients_id: 24,
          quantity: 2,
          measure_id: 2,
          ingredient_group: 'Rice Bowl'
        },
        {
          id: 4,
          recipe_id: 1,
          ingredients_id: 25,
          quantity: 300,
          measure_id: 3,
          ingredient_group: 'Miso Ginger Tofu'
        },
        {
          id: 5,
          recipe_id: 1,
          ingredients_id: 26,
          quantity: 3,
          measure_id: 4,
          ingredient_group: 'Miso Ginger Tofu'
        },
        {
          id: 6,
          recipe_id: 1,
          ingredients_id: 27,
          quantity: 100,
          measure_id: 3,
          ingredient_group: 'Miso Ginger Tofu'
        },
        {
          id: 7,
          recipe_id: 1,
          ingredients_id: 28,
          quantity: 1,
          measure_id: 4,
          ingredient_group: 'Miso Ginger Tofu'
        },
        {
          id: 8,
          recipe_id: 1,
          ingredients_id: 27,
          quantity: 1,
          measure_id: 4,
          ingredient_group: 'Miso Mayo'
        },
        {
          id: 9,
          recipe_id: 1,
          ingredients_id: 29,
          quantity: 2,
          measure_id: 4,
          ingredient_group: 'Miso Mayo'
        },
        {
          id: 10,
          recipe_id: 1,
          ingredients_id: 30,
          quantity: 1,
          ingredient_group: 'To Serve'
        },
        {
          id: 11,
          recipe_id: 1,
          ingredients_id: 31,
          quantity: 2,
          measure_id: 2,
          ingredient_group: 'To Serve'
        },
        {
          id: 12,
          recipe_id: 2,
          ingredients_id: 13,
          quantity: 1,
          ingredient_group: 'ShakShuka Eggs'
        },
        {
          id: 13,
          recipe_id: 2,
          ingredients_id: 14,
          quantity: 1,
          ingredient_group: 'ShakShuka Eggs'
        },
        {
          id: 14,
          recipe_id: 2,
          ingredients_id: 15,
          quantity: 1,
          measure_id: 2,
          ingredient_group: 'ShakShuka Eggs'
        },
        {
          id: 15,
          recipe_id: 2,
          ingredients_id: 16,
          quantity: 2,
          measure_id: 2,
          ingredient_group: 'ShakShuka Eggs'
        },
        {
          id: 16,
          recipe_id: 2,
          ingredients_id: 17,
          quantity: 2,
          measure_id: 6,
          ingredient_group: 'ShakShuka Eggs'
        },
        {
          id: 17,
          recipe_id: 2,
          ingredients_id: 18,
          quantity: 0.5,
          measure_id: 2,
          ingredient_group: 'ShakShuka Eggs'
        },
        {
          id: 18,
          recipe_id: 2,
          ingredients_id: 19,
          quantity: 0.25,
          measure_id: 2,
          ingredient_group: 'ShakShuka Eggs'
        },
        {
          id: 19,
          recipe_id: 2,
          ingredients_id: 20,
          quantity: 5,
          ingredient_group: 'ShakShuka Eggs'
        },
        {
          id: 20,
          recipe_id: 2,
          ingredients_id: 21,
          quantity: 100,
          measure_id: 3,
          ingredient_group: 'ShakShuka Eggs'
        },
        {
          id: 21,
          recipe_id: 3,
          ingredients_id: 1,
          quantity: 200,
          measure_id: 3,
          ingredient_group: 'Mapled Pumpkin'
        },
        {
          id: 22,
          recipe_id: 3,
          ingredients_id: 2,
          quantity: 1,
          measure_id: 2,
          ingredient_group: 'Mapled Pumpkin'
        },
        {
          id: 23,
          recipe_id: 3,
          ingredients_id: 3,
          quantity: 1,
          ingredient_group: 'Pesto Spaghetti'
        },
        {
          id: 24,
          recipe_id: 3,
          ingredients_id: 4,
          quantity: 1,
          measure_id: 5,
          ingredient_group: 'Pesto Spaghetti'
        },
        {
          id: 25,
          recipe_id: 3,
          ingredients_id: 5,
          quantity: 1,
          measure_id: 7,
          ingredient_group: 'Pesto Spaghetti'
        },
        {
          id: 26,
          recipe_id: 3,
          ingredients_id: 6,
          quantity: 250,
          measure_id: 3,
          ingredient_group: 'Pesto Spaghetti'
        },
        {
          id: 27,
          recipe_id: 3,
          ingredients_id: 7,
          quantity: 50,
          measure_id: 3,
          ingredient_group: 'Pesto Spaghetti'
        },
        {
          id: 28,
          recipe_id: 3,
          ingredients_id: 8,
          quantity: 0.25,
          measure_id: 1,
          ingredient_group: 'Pesto Spaghetti'
        },
        {
          id: 29,
          recipe_id: 3,
          ingredients_id: 9,
          quantity: 2,
          measure_id: 8,
          ingredient_group: 'Pesto Spaghetti'
        },
        {
          id: 30,
          recipe_id: 3,
          ingredients_id: 10,
          quantity: 30,
          measure_id: 3,
          ingredient_group: 'Pesto Spaghetti'
        },
        {
          id: 31,
          recipe_id: 3,
          ingredients_id: 11,
          quantity: 3,
          measure_id: 4,
          ingredient_group: 'To Serve'
        },
        {
          id: 32,
          recipe_id: 3,
          ingredients_id: 12,
          quantity: 20,
          measure_id: 3,
          ingredient_group: 'To Serve'
        }
      ])
    })
}
