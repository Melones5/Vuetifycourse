<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>


    <v-container class="my-5">
      
      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in myProjects" :key="project.title">
          <div slot="header">{{ project.title }}</div>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">due by {{ project.due }}</div>
              <div>{{ project.content }}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>

    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return{
       projects: [
        {
          title: "Desing a new website",
          person: "The Net Ninja",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quis laboriosam, asperiores quod perspiciatis, repudiandae earum quidem dignissimos amet sunt repellat error cupiditate culpa deleniti quos, modi quaerat obcaecati nesciunt!"
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quis laboriosam, asperiores quod perspiciatis, repudiandae earum quidem dignissimos amet sunt repellat error cupiditate culpa deleniti quos, modi quaerat obcaecati nesciunt!"
        },
        {
          title: "Desing video thumbnails",
          person: "Ryu",
          due: "20th Dec 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quis laboriosam, asperiores quod perspiciatis, repudiandae earum quidem dignissimos amet sunt repellat error cupiditate culpa deleniti quos, modi quaerat obcaecati nesciunt!"
        },
        {
          title: "Create a community forum",
          person: "Gouken",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quis laboriosam, asperiores quod perspiciatis, repudiandae earum quidem dignissimos amet sunt repellat error cupiditate culpa deleniti quos, modi quaerat obcaecati nesciunt!"
        },
      ]
    }
  },
  computed: {
    myProjects (){
      return this.projects.filter(project => {
        return project.person === 'The Net Ninja'
      })
    }
  }
};
</script>

