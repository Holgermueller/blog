<template>
  <div id="contactForm" class="form-container">
    <v-card class="form-card" elevation="0" tile>
      <v-card-title>
        <h3>Or drop me a message. I'll respong faster this way!</h3>
      </v-card-title>

      <v-card-text>
        <form
          action="https://formspree.io/f/xknydakw"
          method="POST"
          class="form"
        >
          <label>
            Your name:
            <input v-model="Name" type="name" name="name" class="form-field" />
          </label>
          <label>
            Your email:
            <input
              v-model="Email"
              type="email"
              name="email"
              class="form-field"
            />
          </label>
          <label>
            Your message:
            <textarea
              v-model="Message"
              name="message"
              class="form-control col-12 message"
              row="5"
            ></textarea>
          </label>
          <!-- your other form fields go here -->
          <button
            type="submit"
            class="submit"
            :disabled="Name === '' || Email === '' || Message === ''"
          >
            Send It!
          </button>
        </form>
        <small
          >Form powered by
          <a href="https://formspree.io/" target="_blank">Formspree</a>
        </small>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data: () => ({
    Name: '',
    Email: '',
    Message: '',
  }),
}
</script>

<style scoped>
.form-card {
  width: 85%;
  margin: 3% auto;
  background-color: #f7f9fb;
}
.form-container {
  margin-top: 4%;
}
.button {
  margin-bottom: 10px;
}
.form-field {
  width: 100%;
  height: 50px;
  border: 1px solid darkgray;
  border-radius: 15px;
  margin: 8px auto;
  padding-left: 8px;
  z-index: 1;
}
.message {
  margin: 8px auto;
  border: 1px solid darkgray;
  border-radius: 15px;
}
.submit {
  width: 100%;
  height: 50px;
  margin: 8px auto;
  background-color: #31708e;
  color: #f7f9fb;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 15px;
}
.submit:disabled {
  background-color: lightgrey;
}
a {
  text-decoration: none;
}
@media (min-width: 360px) and (max-width: 450px) {
  .connection-name {
    font-size: 0;
  }
  .form-header {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
