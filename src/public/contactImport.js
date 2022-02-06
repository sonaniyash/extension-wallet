const EXTENSION_ENDPOINT =
  "https://xkfvqk07j4.execute-api.us-east-1.amazonaws.com";

window.cloudsponge.init({
  skipContactsDisplay: true,
  skipSourceMenu: true,
  beforeDisplayContacts: function (contacts, source, owner) {
    console.log(contacts);

    //save contacts on backend
    let source_title =
      source === "office365"
        ? "Microsoft"
        : source === "icloud"
        ? "Apple"
        : "Google";

    let appState = JSON.parse(localStorage.getItem("state"));

    let newcontacts = contacts.map((c) => ({
      ...c,
      owner_id: appState.account.user_id,
      app_id: "extension",
      source: source_title,
    }));

    console.log(JSON.stringify(newcontacts));

    //Ajax Request to import contact
    fetch(`${EXTENSION_ENDPOINT}/contacts/import`, {
      method: "post",
      headers: new Headers({
        "Content-type": "application/json",
        Authorization: `Bearer ${appState.token}`,
      }),
      body: JSON.stringify(newcontacts),
    })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        if (error.response.data) {
          console.log(error.response.data.message);
        }
      })
      .finally(() => {
        window.parent.document.body.removeChild(window.frameElement);
      });
  },
});

setTimeout(() => {
  cloudsponge.launch(localStorage.getItem("contact-import-source") || "gmail");
}, 100);
