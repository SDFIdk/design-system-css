/** 
 * Requests a HTML endpoint and alerts user if the request fails.
 * This is useful for checking fickle REST API services from DataFordeler.
 */
export function apiCheck(endpoint, message) {
  fetch(endpoint)
  .then(function(response) {
    if (!response.ok) {
      alert(message)
    }
  })
}
