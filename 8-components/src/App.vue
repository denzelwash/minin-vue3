<template>
    <div class="container column">
        <app-sidebar @addResumeItem="addResumeItem"></app-sidebar>
        <app-resume :resume="resume"></app-resume>
    </div>
    <div class="container">
      <app-comments></app-comments>
    </div>
  
</template>

<script>
import AppComments from './components/AppComments.vue'
import AppResume from './components/AppResume.vue'
import AppSidebar from './components/AppSidebar.vue'

export default {
  components: {
    AppResume,
    AppSidebar,
    AppComments
  },
  data() {
    return {
      resume: []
    }
  },
  methods: {
    addResumeItem(resumeItem) {
      this.resume.push(resumeItem)
    }
  }
}
</script>

<style>
  .avatar {
    display: flex;
    justify-content: center;
  }

  .avatar img {
    width: 150px;
    height: auto;
    border-radius: 50%;
  }
</style>
