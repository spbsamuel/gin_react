fetch("/api/ping")
  .then(res => res.json())
  .then(data => document.body.appendChild(component(data.message)))

function component(children) {
  const element = document.createElement('div');

  element.innerHTML = `Server says: ${children}`

  return element;
}