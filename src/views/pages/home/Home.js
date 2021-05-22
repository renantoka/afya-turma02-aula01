import api from '../../../service/api';

async function getRandomJoke() {
  const request = await api.get('random')
  const response = request.data
  return response
}


let Home = {
  is_private: false,

  render: async () => {
    const joke = await getRandomJoke();

    let view = /*html*/`
    <div>
        <h1>Chuck Norris Jokes</h1>
        <div class="container">
          <img src=${joke.icon_url} id="header">${joke.value}</p>
      </div >
      <hr />
      </div>
        <div class="form-container">
           <h3>Formulário</h3>
          <form>
            <input type="text" id="name" placeholder="Insira seu nome *" required />
            <input type="text" id="email" placeholder="Insira seu e-mail *" required />
            <input type="text" id="phone" placeholder="Insira seu telefone *" required/>
            <input type="submit" value="Enviar dados"/>
          </form>
      </div>
      `;

    return view
  },

  after_render: async () => {
    let formcontent = document.getElementById("form");

    formcontent.addEventListener("submit", (e) => {
      e.preventDefault();
      let name = document.querySelector("#name").value;
      let email = document.querySelector("#email").value;
      let phone = document.getElementById("phone").value;

      let postData = {
        name,
        email,
        phone,
      };

      postform
        .post("", postData)
        .then((response) => {
          alert("Tudo certo, seus dados foram enviados");
        })
        .catch((e) => alert("Foi enviado é nada"));
    });
  },
};

export default Home;