export const API_KEY = "AIzaSyDke2o9prtaUhV1MceipVlsmsxjnTMxOt4";

export const TagNames = ["All", "Javascript", "News", "Music"];

export const comments = [
  {
    name: "Nitish Nivedan Barik",
    comments: "ZYZXXDCDDSDDSDSDS",
    replies: [
      {
        name: "Nitish Nivedan Barik",
        comments: "ZYZXXDCDDSDDSDSDS",
      },
      {
        name: "Nitish Nivedan Barik",
        comments: "ZYZXXDCDDSDDSDSDS",
      },
      {
        name: "Nitish Nivedan Barik",
        comments: "ZYZXXDCDDSDDSDSDS",
      },
    ],
  },
  {
    name: "Nitish Nivedan Barik",
    comments: "ZYZXXDCDDSDDSDSDS",
  },
  {
    name: "Nitish Nivedan Barik",
    comments: "ZYZXXDCDDSDDSDSDS",
  },
];

export function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
