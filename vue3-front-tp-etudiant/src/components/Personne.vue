<template>
  <!-- A COMPLETER -->
  
  <div class="container">
  <main>
    <div class="py-2 ">
      <!-- <img class="d-block mx-auto mb-2 pull-right" src="https://www.imt.fr/wp-content/uploads/2021/08/logo-imtne.png" alt="">
      -->
      <h2>Annuaire<p class="lead">Formulaire d'édition d'une personne</p></h2>

    
    <div v-if="currentPersonne">
      <div class="form-inline text-center">
        <div class="form-group">
          <div class="bg-light form-control square rounded-right px-2">ID </div>
          <input type="number" readonly class="form-control" id="id" v-model="currentPersonne.id" />
        </div>
      </div>
      <div class="form-inline text-xs-center">
        <div class="form-group">
          <div class="bg-light square form-control rounded-right px-2">NOM </div>
          <input type="text" class="form-control" id="name" v-model="currentPersonne.name" />
        </div>
      </div>
      <div class="form-inline text-xs-center">
        <div class="form-group">
          <div class="bg-light square form-control rounded-right px-2">Prenom</div>
        <input type="text" class="form-control" id="surname" v-model="currentPersonne.surname" />
      </div>
    </div>
      <div class="form-inline text-xs-center">
        <div class="form-group">
          <div class="bg-light form-control square rounded-right px-2">Tel</div>
        <input type="number" class="form-control" id="phone" v-model="currentPersonne.phone" />
      </div>
    </div>
     <div class="form-inline text-xs-center">
        <div class="form-group">
          <div class="bg-light form-control square rounded-right px-2">Ville</div>
        <input type="text" class="form-control" id="city" v-model="currentPersonne.city" />
      </div>
    </div>
  </div>
  <button class="btn btn-primary badge badge-danger mr-2"
      @click="deletePersonne"
    >
      Supprimer
    </button>
  
    <button type="submit" class="btn btn-primary badge badge-success"
      @click="updatePersonne">
      Modifier
    </button>
    <p>{{ message }}</p>
  
  </div>
  </main>  

</div>

</template>

<script>
  
  
import PersonneDataService from "../services/PersonneDataService";

export default {
  name: "personne",
  data() {
    return {
      currentPersonne: null,
      message: ''
    };
  },
  
  methods: {
    getPersonne(id) {
      // A COMPLETER
    PersonneDataService.get(id)
    .then(response => {
          this.currentPersonne = response.data;
          console.log(response.data);
    })
    .catch(e=> { 
    console.log(e);
    });
    },

    updatePersonne() {
	// mets à jours les données d'une personne 
      
    PersonneDataService.update(this.currentPersonne)
     .then(response => {
        this.message = 'Personne modifiée avec succès!';
		console.log('Personne modifiée avec succès !');
		console.log(response.data);
		this.submitted = true;
    })
    .catch(e=> { 
    console.log(e);
    });
    },

  deletePersonne() {
     // A COMPLETER
    PersonneDataService.delete(this.currentPersonne.id)
    .then(response => {
    this.message = 'Personne supprimée avec succès!';
    console.log('Personne supprimée avec succès !');
       
    this.$router.push({ name: "ROUTE_VERS_LISTE_PERSONNES" });
    console.log(response.data);
  });
},
},
  resetForm() {
    this.submitted = false;
    this.personne = {};
  },
  mounted() {
    this.message = '';
    this.getPersonne(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
