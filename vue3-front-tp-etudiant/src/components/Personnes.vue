<template>
  <h2> Table des personnes présentes dans la base.</h2>
  <table class="table table-striped table-hover table-responsive-sm overflow-x: hidden ">
   <!-- <caption>
      Table des personnes . Cliquez sur une personne pour l'éditer.
    </caption> 
  -->
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Prenom</th>
      <th scope="col">Nom</th>
      <!-- <th scope="col">Edit</th> -->

    </tr>
  </thead>
  <tbody>

  <!-- <ul> -->
        <tr scope="row" class="table-striped"
        :class="{ active: id == currentIndex }"
        v-for="(personne, id) in personnes"
        :key="id"
        @click="setActivePersonne(personne, id)">
          <td scope="row"> {{personne.id}} </td>
          <td> {{ personne.surname }} </td>
          <td> {{ personne.name }} </td>
          <!-- <td class="router-link btn :to=`'/personnes/' + currentPersonne.id`">Modifier</td> -->
        </tr>

         




  
</tbody>
</table>


  <!-- </ul> -->
 
  <div v-if="currentPersonne">

  
  <div class="d-inline-flex flex-row p-2">
  <!-- <div class="d-flex flex-row mb-3"> -->
  
  <div class="list-inline-item text-xs-center" ><div class="list-inline-item text-xs-center bg-light square rounded-right">Nom</div> {{ currentPersonne.name }}</div>
  <div class="list-inline-item text-xs-center" ><div class="list-inline-item text-xs-center bg-light square rounded-right">Prénom</div> {{ currentPersonne.surname }}</div>
  <div class="list-inline-item text-xs-center" ><div class="list-inline-item text-xs-center bg-light square rounded-right">Tel</div> {{ currentPersonne.phone }}</div>
  <div class="list-inline-item text-xs-center" ><div class="list-inline-item text-xs-center bg-light square rounded-right">Ville</div> {{ currentPersonne.city }}</div>
  <router-link :to="'/personnes/' + currentPersonne.id" class="badge badge-warning">Modifier</router-link>

</div>
  <!--
    {{ currentPersonne.name }}
    {{ currentPersonne.surname }}
    {{ currentPersonne.phone }}
    {{ currentPersonne.city }}
    <router-link :to="'/personnes/' + currentPersonne.id" class="badge badge-warning">Modifier</router-link>
  -->
  </div>
  <div v-else>
    <br />
    <p>Cliquez sur une des personnes pour afficher les détails.</p>
  </div>

</template>

<script>
import PersonneDataService from "../services/PersonneDataService";

export default {
  name: "personnes",
  data() {
    return {
      personnes: [],
      currentPersonne: null,
      currentIndex: -1,
    };
  },
  methods: {
    getPersonnes() {
      PersonneDataService.getAll()
        .then(response => {
          this.personnes = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    setActivePersonne(personne, index) {
      this.currentPersonne = personne;
      this.currentIndex = personne ? index : -1;
    },
  },
  mounted() {
    this.getPersonnes();
  }
};
</script>
