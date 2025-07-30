const { transporter, sender } = require("./Emailconfig");
const { SignupEmail } = require("./EmailTemplate");


 const SendSignupcompleteEmail = async (email, firstName, lastName, registrationNumber, password) => {
  try {

    const html = SignupEmail
      .replace(/{{firstName}}/g, firstName)
      .replace(/{{lastName}}/g, lastName)
      .replace(/{{registrationNumber}}/g, registrationNumber)
      .replace(/{{password}}/g, password);

    const response = await transporter.sendMail({
      from: `"${sender.name}" <${sender.email}>`,
      to: email,
      subject: "🎓 Admission Confirmation - Amrita University",
      html,
    });

    console.log("Signup confirmation email sent:", response.messageId);
    return response;
  } catch (error) {
    console.error("Error sending signup email:", error);
    throw error;
  }
};
module.exports = {SendSignupcompleteEmail}