<template>

 <div class="submit-form">
    <div class="py-2 text-center">
      <img class="d-block mx-auto mb-2 pull-right" src="https://www.imt.fr/wp-content/uploads/2021/08/logo-imtne.png" alt="">
      <h2>Annuaire</h2>
      <p class="lead">Formulaire d'ajout d'une personne</p>
    <div v-if="currentPersonne">
      <div class="form-group">
    <label for="id">ID</label>
        <input type="text" readonly class="formcontrol" id="id" v-model="currentPersonne.id" />
      </div>
      <div class="form-group">
    <label for="name">Nom</label>
        <input type="text" class="" id="name" v-model="currentPersonne.name" />
      </div>
      <div class="form-group">
    <label for="id">Prenom</label>
        <input type="text" class="" id="surname" v-model="currentPersonne.surname" />
      </div>
      <div class="form-group">
    <label for="id">Tel</label>
        <input type="text" class="" id="phone" v-model="currentPersonne.phone" />
      </div>
      <div class="form-group">
    <label for="id">Ville</label>
        <input type="text" class="" id="city" v-model="currentPersonne.city" />
      </div>
  </div>

    <div v-if="!submitted">
      <button type="submit" class="btn btn-primary badge badge-success"
      @click="creerPersonne">
      Ajouter
      </button>
      <h4>Personne non ajoutée !</h4>
      <button class="btn btn-failure" @click="resetForm">remise à zéro du formulaire</button>
      </div>

      <div v-else>
      <h4>Personne ajoutée avec succès!</h4>
      <button class="btn btn-success" @click="resetForm">Ajouter une nouvelle personne</button>
    <p>{{ message }}</p>
      </div>
  </div>
</div>
  
  
</template>

<script>

import PersonneDataService from "../services/PersonneDataService";

export default {
  name: "create",
  data() {
    return {
      currentPersonne: {
        id: null,
        name: "",
        surname: "",
        phone: "",
        city: "",
      },
      submitted: false
    };
  },
  methods: {

  

    creerPersonne() {
      var newpersonne = {
        id: null,
        name: this.currentPersonne.name,
        surname: this.currentPersonne.surname,
        phone: this.currentPersonne.phone,
        city: this.currentPersonne.city,
      };
    

      // A COMPLETER
  PersonneDataService.create(newpersonne)
      .then(response => {
        this.message = 'Personne créée avec succès!';
        console.log(response.personne);
        this.submitted = true;
    })
    },
    
    resetForm() {
      this.submitted = false;
      this.personne = {};
    },
  },
    mounted() {
    this.message = '';
    this.getPersonne(this.$route.params.id);
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
};
</style>
