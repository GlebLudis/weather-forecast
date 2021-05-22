function markup() {
  const el = document.createElement("div");
  el.insertAdjacentHTML(
    "afterbegin",
    `
    <form>
    <input type= "text" placeholder="Type your city" autofocus/>
    <button type="submit">Submit</button>
    <span class= "message"></span>
    </form>
    <div class="container">
        <ul class="cities"></ul>
    </div>
    `
  );
  document.body.append(el);
}

export { markup };
