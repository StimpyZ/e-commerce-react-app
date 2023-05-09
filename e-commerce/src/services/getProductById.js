const URL = 'https://fakestoreapi.com/products'

export async function getProductById (id) {
  try {
    const response = await fetch(`${URL}/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export async function getAllProducts () {
  try {
    const response = await fetch(URL)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error)
  }
}
