/* global Vue */
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from Wisconsin!",
      name: "Frankenstein",
      color: "Green",
      secret: true,
      fruits: ["apple", "banana", "pear", "orange"],
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ],
      newFruit: [],
    };
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
      this.name = this.name.split('').reverse().join('');
      this.color = this.color.split('').reverse().join('');
    },
    clickHere: function () {
      console.log("is this working?");
      this.color = "How bout Blue???";
      this.name = "Buffalo";
    },
    toggle: function () {
      console.log("toggle try");
      this.secret = !this.secret;
    },
    addNewFruit: function () {
      console.log("adding new fruit...");
      console.log(this.newFruit);
    },
  }
});