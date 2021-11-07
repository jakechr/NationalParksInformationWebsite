<template>
  <div class="main-body">
    <div class="blog-body-size">
      <div class="main-body-container">
        <div class="header-container">
          <h1>My Hikes</h1>
        </div>
        <div class="hike-gridd-container">
          <div class="hike-gridd">
            <div v-for="hike in hikes" :key="hike.id" class="hike-gridd-item">
              <div class="hike gridd-item photo">
                <img :src="'' + hike.image" alt="Angel's Landing" />
              </div>
              <div class="hike gridd-item text">
                <p>
                  {{ hike.location }}
                  {{ hike.description }}
                </p>
              </div>
            </div>
            <div class="hike-gridd-item">
              <div class="hike gridd-item photo">
                <img src="/images/mount_timp.jpg" alt="Mount Timpanogas" />
              </div>
              <div class="hike gridd-item text">
                <p>
                  From the top of this mountain I was able to see the entire
                  Utah Valley. It was absolutely incredible.
                </p>
              </div>
            </div>
            <div class="hike-gridd-item">
              <div class="hike gridd-item photo">
                <img
                  src="/images/primrose_overlook.jpg"
                  alt="Primrose Overlook"
                />
              </div>
              <div class="hike gridd-item text">
                <p>
                  Easy and short hike that I recommend to anyone wanting a
                  little challenged and an amazing view.
                </p>
              </div>
            </div>
            <div class="hike-gridd-item">
              <div class="hike gridd-item photo">
                <img src="/images/delicate_arch.jpg" alt="Delicate Arch" />
              </div>
              <div class="hike gridd-item text">
                <p>
                  When I arrived at delicate arch there was a small boy trying
                  to climb it until his parents noticed. I can testify that the
                  arch is delicate. That 45 pound boy made it shake and almost
                  made it come crashing down.
                </p>
              </div>
            </div>
            <div class="hike-gridd-item last-item">
              <div class="hike gridd-item photo">
                <img src="/images/kanarra_creek.jpg" alt="Kanarra Creek" />
              </div>
              <div class="hike gridd-item text">
                <p>
                  This was easily one of the most beautiful hikes that I have
                  ever done. Hiking a slot canyon always feel like a
                  once-of-a-lifetime kind of experience so slot canyons don't
                  exist everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default {
  name: "Blog",
  computed: {
    hikes() {
      return this.$root.$data.hikes;
    },
  },
};
</script>
