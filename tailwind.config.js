module.exports = {
  content: [
    "./Public/login.html",
    "./Public/signup.html",
    "./Public/user.html",
    "./Views/Layouts/main.handlebars",
    "./Views/user.handlebars",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "home-img": "url('../../../img/homepage.jpg')",
      }),
      fontFamily: {
        monster: ["'Montserrat'", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
