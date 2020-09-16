fetch("/api/ping")
  .then(res => res.json())
  .then((data: { message: string }) => document.body.appendChild(component(data.message)))

function component(children: string) {
  const element = document.createElement('div');

  element.innerHTML = `Server says: ${children}`

  return element;
}