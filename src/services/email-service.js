import { send, init } from "emailjs-com";

const serviceId = "service_f3o2n3g";
const templateId = "template_bs8aqny";
const userID = "user_xfurDErqsNWqF2NCZIAPz";

const sendEmail = (content) => {
  init(userID);
  const toSend = {
    from_name: content.from_name,
    to_name: content.to_name,
    to_email: content.to_email,
    message: content.message,
  };
  send(serviceId, templateId, toSend)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default { sendEmail };
