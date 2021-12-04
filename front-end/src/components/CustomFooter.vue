<template>
  <footer class="bg-white">
    <div class="container py-5">
      <div class="row py-4">
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <img src="img/logo.png" alt="" width="180" class="mb-3" />
          <p class="font-italic text-muted">
            "Hiking is not escapism; it's realism. The people who choose to
            spend time outdoors are not running away from anything; we are
            returning to where we belong." <br />- Jennifer Pharr Davis
          </p>
          <ul class="list-inline mt-4">
            <li class="list-inline-item">
              <a href="https://twitter.com" target="_blank" title="twitter"
                ><i class="fa fa-twitter"></i
              ></a>
            </li>
            <li class="list-inline-item">
              <a href="https://facebook.com" target="_blank" title="facebook"
                ><i class="fa fa-facebook"></i
              ></a>
            </li>
            <li class="list-inline-item">
              <a href="https://instagram.com" target="_blank" title="instagram"
                ><i class="fa fa-instagram"></i
              ></a>
            </li>
            <li class="list-inline-item">
              <a href="https://pinterest.com" target="_blank" title="pinterest"
                ><i class="fa fa-pinterest"></i
              ></a>
            </li>
            <li class="list-inline-item">
              <a href="https://vimeo.com" target="_blank" title="vimeo"
                ><i class="fa fa-vimeo"></i
              ></a>
            </li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Admin Pages</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2">
              <a href="/hikesAdmin" class="text-muted">Hikes Admin</a>
            </li>
            <li class="mb-2">
              <a href="/hikersAdmin" class="text-muted">Hikers Admin</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Contact Me</h6>
          <p class="text-muted mb-2">
            1747 East Avenue Road <br />Suite 101 <br />San Diego, California
            63956
          </p>
          <p class="text-muted mb-2">847-999-1198</p>
        </div>
        <div class="col-lg-4 col-md-6 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Newsletter</h6>
          <p class="text-muted mb-4">
            If you want to receive my newsletters, sign up below.
          </p>
          <div class="p-1 rounded border">
            <div class="input-group">
              <input
                type="email"
                placeholder="Enter your email address"
                aria-describedby="button-addon1"
                class="form-control border-0 shadow-0"
              />
              <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-link">
                  <i class="fa fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyrights -->
    <div class="bg-light py-4">
      <div class="container text-center">
        <div class="container text-center">
          <a href="https://github.com/jwc12551/CreativeProject">
            <img class="github-image" src="/images/GitHub-Emblem.png" />
          </a>
        </div>
        <a>
          <p class="text-muted mb-0 py-2">
            Jacob Christensen <br />Stephen Hood
          </p>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.github-container {
  float: left;
  max-height: 50px;
  max-width: 100px;
}

.github-container img {
  width: 100%;
  height: auto;
}

.github-image {
  height: 50px;
}
</style>
