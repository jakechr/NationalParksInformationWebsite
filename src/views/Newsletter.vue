<template>
  <div class="newsletter">
    <div class="main-body">
      <div class="main-body-size">
        <div class="main-body-container">
          <div class="newsletter-intro">
            <h1>Sign up for my newsletter!</h1>
            <img
              src="images/newsletter_banner.jpg"
              alt="man hiking"
              class="newsletter_banner"
            />

            <br />

            <h2>Why join?</h2>
            <ul>
              <li>It's totally free.</li>
              <li>
                You can't go on every hike, but I can. You can find out where
                the best views and hikes are.
              </li>
              <li>
                Some hikes look better in different seasons. I'll keep you up to
                date on what hikes to do when.
              </li>
              <li>
                Who doesn't want a little dose of hiking in their inbox every
                month?
              </li>
            </ul>
          </div>

          <div class="newsletter-invite">
            <img src="images/newsletter.jpg" alt="newsletter-image" />

            <div class="email-invite">
              <p class="text-muted email-invite">
                What are you waiting for, sign up below!
              </p>
              <div class="p-1 rounded border email-form">
                <div class="input-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    aria-describedby="button-addon1"
                    class="form-control border-0 shadow-0"
                  />
                  <div class="input-group-append">
                    <button
                      id="button-addon1"
                      type="submit"
                      class="btn btn-link"
                    >
                      <i class="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <custom-footer />
  </div>
</template>

<script>
  // @ is an alias to /src
  import CustomFooter from "../components/CustomFooter.vue";

  export default {
    name: "Newsletter",
    components: {
      CustomFooter,
    },
  };
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Foundry", serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    /* This and above removes blue from hyperlinks */
    color: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Foundry";
  }

  ul {
    list-style-type: none;
  }

  .main-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .main-body-container h2 {
    text-align: center;
  }

  .main-body-container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .main-body-paragraph-container {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }

  .main-body-image-container {
    display: flex;
  }

  .main-body-image-container {
    width: 100%;
  }

  .newsletter_banner {
    width: 100%;
  }

  .newsletter-intro h1 {
    text-align: center;
  }

  .newsletter-invite img {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }

  .email-invite {
    padding-top: 8px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .email-invite .email-form {
    width: 60%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .input-group {
    justify-content: center;
  }

  /* Mobile Styles */
  @media only screen and (max-width: 400px) {
    .email-invite .email-form {
      width: 90%;
    }
  }

  /* Tablet Styles */
  @media only screen and (min-width: 401px) and (max-width: 960px) {
    .main-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .email-invite .email-form {
      width: 70%;
    }

    .main-body-size {
      width: 85%;
    }
  }

  /* Desktop Styles */
  @media only screen and (min-width: 961px) {
    .main-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
      margin-right: 10px;
    }

    .main-body-size {
      width: 65%;
    }

    .main-body-container {
      display: block;
    }
  }
</style>
