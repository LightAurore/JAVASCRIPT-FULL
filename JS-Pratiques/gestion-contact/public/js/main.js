"use strict";
const firstname = document.getElementById("firstname"),
  lastname = document.getElementById("lastname"),
  birthday = document.getElementById("birthday"),
  phoneNumber = document.getElementById("phoneNumber"),
  btn_enregistrer_contact = document.getElementById("enregisterContact"),
  btn_effacer_contact = document.getElementById("effacerContact"),
  contacts = [
    {
      id: "id_1",
      prenom: "alax",
      nom: "durand",
      annif: "2005-3-1",
      tel: "4856564564",
    },
    {
      id: "id_2",
      prenom: "alix",
      nom: "dutronc",
      annif: "2005-3-1",
      tel: "4856564564",
    },
    {
      id: "id_3",
      prenom: "alex",
      nom: "durond",
      annif: "2005-3-1",
      tel: "4856564564",
    },
    {
      id: "id_4",
      prenom: "alaxa",
      nom: "dupré",
      annif: "2005-3-1",
      tel: "4856564564",
    },
    {
      id: "id_5",
      prenom: "alexa",
      nom: "duchamps",
      annif: "2005-3-1",
      tel: "4856564564",
    },
    {
      id: "id_6",
      prenom: "alixi",
      nom: "duplex",
      annif: "2005-3-1",
      tel: "4856564564",
    },
  ];
let indexBase = contacts.length;
const a_z = (e) => (
  e.sort((e, t) => (e.nom < t.nom ? -1 : e.nom > t.nom ? 1 : 0)), e
);
function displayContact(e) {
  const t = document.getElementById("liste-contact");
  t.innerHTML = "";
  const n =
    ((a = e).sort((e, t) => (e.nom < t.nom ? -1 : e.nom > t.nom ? 1 : 0)), a);
  var a;
  for (const a in n) {
    const n = document.createElement("tr"),
      o = e[a];
    for (const e in o)
      if (Object.hasOwnProperty.call(o, e)) {
        const t = document.createElement("td");
        (t.innerText = `${o[e]}`),
          t.classList.add("border", "p-2"),
          n.appendChild(t);
      }
    t.appendChild(n);
  }
}
function New_contact() {
  return new Promise((e, t) => {
    firstname.value && lastname.value && birthday.value && phoneNumber.value
      ? e("Les champs sont justes")
      : t("Les champs ne sont pas juste");
  });
}
displayContact(contacts);
const Calc_Age = (e) => {
    const t = new Date(e.value),
      n = new Date(),
      a = n.getFullYear() - t.getFullYear();
    return n.getMonth() > t.getMonth()
      ? a - 1
      : n.getMonth() == t.getMonth()
      ? n.getDate() > t.getDate
        ? a - 1
        : a
      : a - 1;
  },
  isContactMajeur = (e) =>
    new Promise((t, n) => {
      e >= 18 ? t("Majeur " + !0) : n("Majeur " + !1);
    }),
  isListContactFull = (e) =>
    new Promise((t, n) => {
      e.length > 10 ? n("no Remplie " + !0) : t("no Remplie " + !1);
    }),
  Record_Contact = (e) => {
    (indexBase -= -1),
      e.push({
        id: `id_${indexBase}`,
        prenom: `${firstname.value}`,
        nom: `${lastname.value}`,
        annif: `${birthday.value}`,
        tel: `${phoneNumber.value}`,
      });
  },
  isNomPrenomFull = () =>
    new Promise((e, t) => {
      firstname?.value && lastname?.value
        ? e("Nom et prénom sont remplis")
        : t("les deux cases (nom et prénom) ne sont pas remplis");
    });
let contact_index;
const isInList = (e) =>
    new Promise((t, n) => {
      let a;
      return (
        e.find((e, o) => {
          if (
            e.prenom === `${firstname.value}` &&
            e.nom === `${lastname.value}`
          )
            return (
              (contact_index = o), t("La personne est dans la liste " + o), o
            );
          (a == o ||
            (e.prenom === `${firstname.value}` &&
              e.nom === `${lastname.value}`)) &&
            n("La peronnes n'est pas là");
        }),
        a
      );
    }),
  Delete_Contact = (e) => {
    contacts.splice(e, 1);
  };
btn_enregistrer_contact.addEventListener("click", async () => {
  try {
    await New_contact(),
      await ((t = Calc_Age(birthday)),
      new Promise((e, n) => {
        t >= 18 ? e("Majeur " + !0) : n("Majeur " + !1);
      })),
      await ((e = contacts),
      new Promise((t, n) => {
        e.length > 10 ? n("no Remplie " + !0) : t("no Remplie " + !1);
      })),
      Record_Contact(contacts);
  } catch (e) {}
  var e, t;
  displayContact(contacts);
}),
  btn_effacer_contact.addEventListener("click", async () => {
    try {
      await new Promise((e, t) => {
        firstname?.value && lastname?.value
          ? e("Nom et prénom sont remplis")
          : t("les deux cases (nom et prénom) ne sont pas remplis");
      }),
        await isInList(contacts),
        (e = contact_index),
        contacts.splice(e, 1);
    } catch (e) {}
    var e;
    displayContact(contacts);
  });
