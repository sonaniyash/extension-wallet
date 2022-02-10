/* eslint-disable no-prototype-builtins */
window.cloudsponge.init({
  skipContactsDisplay: true,
  skipSourceMenu: true,
  beforeDisplayContacts: function (contacts, source, owner) {
    let appState = JSON.parse(localStorage.getItem("state"));

    //reformat contact data
    let newcontacts = contacts.map((c) => {
      c.email.forEach((e) => {
        if (!e.type) {
          e.type = "home";
        }
        delete e.primary;
      });

      let dob = "null";

      if (c.hasOwnProperty("dob")) {
        dob = c.dob;
      }

      return {
        first_name:
          c.first_name ||
          c.email[0].address
            .match(/^([^@]*)@/)[1] //get name from email
            .replace(/[^a-zA-Z ]/g, " "), //get only letters
        last_name: c.last_name || "  ",
        email: c.email,
        dob: dob,
        owner_id: appState.account.user_id,
      };
    });

    let message = JSON.stringify({
      message: "contact-import",
      success: true,
      source,
      contacts: newcontacts,
    });
    window.top.postMessage(message, "*");
    window.parent.document.body.removeChild(window.frameElement);
  },
  afterImport: function (source, success) {
    if (!success) {
      let message = JSON.stringify({
        message: "contact-import",
        success: false,
        source,
        contacts: [],
      });
      window.top.postMessage(message, "*");
      window.parent.document.body.removeChild(window.frameElement);
    }
  },
  beforeClosing: function () {
    let message = JSON.stringify({
      message: "contact-import",
      success: false,
      source: null,
      contacts: [],
    });
    window.top.postMessage(message, "*");
    window.parent.document.body.removeChild(window.frameElement);
  },
});

setTimeout(() => {
  cloudsponge.launch(localStorage.getItem("contact-import-source") || "gmail");
}, 100);
