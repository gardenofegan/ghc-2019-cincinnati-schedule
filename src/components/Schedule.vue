<template>
  <v-layout row>
    <v-flex>
      <v-card>
        <div v-for="(scheduleDay, scheduleDayIndex) in scheduleDays" :key="scheduleDay.id">
          <template v-for="(courseTime, courseTimeIndex) in scheduleDay.courseTimes" class="hide-overflow" style="position: relative;">
            <v-toolbar color="blue-grey darken-4" class="white--text" style="position: -webkit-sticky; position: sticky; top: 0px;" :key="courseTimeIndex + scheduleDay.day">
              <v-toolbar-title>{{scheduleDay.day}}</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-title>{{courseTime.time}}</v-toolbar-title>
            </v-toolbar>
            <v-list three-line :key="courseTimeIndex">
              <template v-for="(course, courseIndex) in courseTime.courses">
                <v-list-tile :class="(course.selected && !favorites) ? 'greyBackground' : ''" :key="courseIndex + course.location" ripple @click="toggleSelected(scheduleDayIndex, courseTimeIndex, courseIndex)" v-show="checkOnFavorite(course)">
                  <v-list-tile-content v-if="course.selectable">
                    <v-list-tile-sub-title class="text--primary">{{ course.name }}</v-list-tile-sub-title>
                    <v-list-tile-title>{{ course.speaker }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ course.location }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-content v-else>
                    <v-list-tile-sub-title class="text--primary" v-if="course.name">{{ course.name }}</v-list-tile-sub-title>
                    <v-list-tile-title v-if="course.speaker">{{ course.speaker }}</v-list-tile-title>
                    <v-list-tile-sub-title v-if="course.location">{{ course.location }}</v-list-tile-sub-title>
                  </v-list-tile-content>

                  <v-list-tile-action v-if="course.selectable">
                    <v-list-tile-action-text>{{ course.action }}</v-list-tile-action-text>
                    <v-icon v-if="course.selected" color="yellow darken-3">
                      star
                    </v-icon>
                    <v-icon v-else color="grey lighten-1">
                      star_border
                    </v-icon>
                  </v-list-tile-action>
                </v-list-tile>
                <v-divider v-if="courseIndex + 1 < courseTime.courses.length && checkOnFavorite(course)" :key="courseIndex"></v-divider>
              </template>
              <v-list-tile v-if="!checkIfAnySelected(courseTime.courses).length && favorites">
                <v-list-tile-title>NO CLASSES FAVORITED</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </template>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    favorites: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
  }),
  mounted: function () {
    if (window.localStorage.schedule) {
      this.$store.commit('updateSchedule', {
        schedule: JSON.parse(window.localStorage.getItem('schedule'))
      })
    } else {
      window.localStorage.clear()
      window.localStorage.setItem('schedule', JSON.stringify(this.$store.state.startSchedule))
    }
  },
  computed: {
    scheduleDays () {
      return this.$store.state.startSchedule
    }
  },
  methods: {
    toggleSelected (day, time, courseSelected) {
      this.$store.commit('updateSelected', {
        day: day,
        time: time,
        course: courseSelected
      })
      window.localStorage.setItem('schedule', JSON.stringify(this.$store.state.startSchedule))
    },
    setScrollTargetId (day, time) {
      const dayTrim = day.replace(/[^A-Z0-9]+/ig, '_')
      const timeTrim = time.replace(/[^A-Z0-9]+/ig, '_')
      return '#' + dayTrim + timeTrim
    },
    checkOnFavorite (theCourse) {
      if (!this.favorites || !theCourse.selectable) {
        return true
      } else {
        return theCourse.selected
      }
    },
    checkIfAnySelected (courses) {
      const anyCoursesChecked = courses.filter(function (course) {
        if (!course.selectable) {
          return true
        } else if (course.selected) {
          return true
        } else {
          return false
        }
      })
      return anyCoursesChecked || []
    }
  }
}
</script>

<style>
  .greyBackground {
    background-color: #ddd;
  }
</style>
