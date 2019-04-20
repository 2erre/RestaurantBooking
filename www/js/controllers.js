angular.module('app.controllers', [])

.controller('loginCtrl', ['$scope', '$stateParams','$http', '$ionicPopup',
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $ionicPopup) {

    $scope.data={};

        $scope.submit = function () {                           //funzione submit()   tasto accedi cliente
            var link = 'https://restaurants-booking.herokuapp.com/login';
            this.email = $scope.data.email;
            this.password = $scope.data.password;


            $http.post(link, {email : this.email, password : this.password}).then(function (res){   //POST
                $scope.response = res.data;
                if(res.data.message === undefined){
                    window.location.href = "#/page4";
                }
                else {
                    var myPopup = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: res.data.message,
                        buttons: [{text: 'OK', type: 'button-assertive'}]
                    });
                }
            });

  }

}])

.controller('signupCtrl', ['$scope', '$http', '$stateParams', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $ionicPopup) {

    $scope.data={};

            $scope.submit = function () {        //funzione submit()   tasto registarti cliente
                var link = 'https://restaurants-booking.herokuapp.com/user';
                this.nome = $scope.data.nome;
                this.cognome = $scope.data.cognome;
                this.email = $scope.data.email;
                this.password = $scope.data.password;

//controllo campi necessari
                if((this.nome  === undefined) || (this.nome === "")){
                    var myPopup = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Inserisci Nome',
                        buttons: [{text: 'OK', type: 'button-assertive'}]
                });
                return false
                } else if ((this.cognome  === undefined) || (this.cognome === "")){
                    var myPopup1 = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Inserisci Cognome',

                        buttons: [{text: 'OK', type: 'button-assertive'}]
                });
                return false
                }else if (this.email === undefined){
                    var myPopup1 = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Formato email: example@example.it',

                        buttons: [{text: 'OK', type: 'button-assertive'}]
                });
                return false
                }else if (this.password === undefined){
                    var myPopup1 = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Inserisci password',

                        buttons: [{text: 'OK', type: 'button-assertive'}]
                });
                return false
              } else if (this.password.length < 8){
                    var myPopup1 = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Formato password: minimo 8 caratteri',

                        buttons: [{text: 'OK', type: 'button-assertive'}]
                });
                return false
                }

                $http.post(link,{nome : this.nome, cognome : this.cognome, email : this.email, password : this.password}).then(function (res){
                    $scope.response = res.data;
                    if(res.data.message === undefined){
                        var myPopup = $ionicPopup.show({
                            title: 'Registrazione effettuata',
                            buttons: [{text: 'OK', type: 'button-balanced'}]
                        });
                        window.location.href = "#/page2";
                    }
                });

      }


}])

.controller('restsCtrl', ['$scope', '$http', '$stateParams',  '$ionicPopup',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $ionicPopup) {
    var link = 'https://restaurants-booking.herokuapp.com/Ristoranti'

    $http.get(link).then(function (res){   //GET    prende e legge file dal link
        rests = res.data;
        $scope.rests = rests;



    });

    $scope.data={};

    $scope.buy = function() {       // buy() funzione di prenotazione in templates rests

      this.giorno = $scope.data.giorno;
      this.mese = $scope.data.mese;
      this.anno = $scope.data.anno;
      this.turno = $scope.data.turno;
      this.posti = $scope.data.posti;

      if((this.giorno  === undefined) || (this.giorno === "")){
          var myPopup = $ionicPopup.show({
              title: 'ERROR',
              subTitle: 'Inserisci Giorno',
              buttons: [{text: 'OK', type: 'button-assertive'}]
      });
      return false
    } else if ((this.mese  === undefined) || (this.mese === "")){
          var myPopup1 = $ionicPopup.show({
              title: 'ERROR',
              subTitle: 'Inserisci Mese',

              buttons: [{text: 'OK', type: 'button-assertive'}]
      });
      return false
    }else if ((this.anno  === undefined) || (this.anno === "")){
          var myPopup1 = $ionicPopup.show({
              title: 'ERROR',
              subTitle: 'Inserisci Anno',

              buttons: [{text: 'OK', type: 'button-assertive'}]
      });
      return false
      } else if ((this.turno  === undefined) || (this.turno === "")){
          var myPopup1 = $ionicPopup.show({
              title: 'ERROR',
              subTitle: 'Inserisci Turno',

              buttons: [{text: 'OK', type: 'button-assertive'}]
      });
      return false
      }

      else if ((this.posti  === undefined) || (this.posti === "")){
            var myPopup1 = $ionicPopup.show({
                title: 'ERROR',
                subTitle: 'Inserisci N°Posti',

                buttons: [{text: 'OK', type: 'button-assertive'}]
        });
        return false
        }

        var myPopup = $ionicPopup.show({
            title: 'Ristorante prenotato',
            buttons: [{text: 'OK', type: 'button button-balanced button-small'}]
        });
    }

    $scope.logout = function() {
        var linkout = 'https://restaurants-booking.herokuapp.com/logout'
        var myPopup = $ionicPopup.show({
            title: 'Disconnessione effettuata',
            buttons: [{text: 'OK', type: 'button button-dark button-small'}]
        });
            window.location.href = "#/page2";

    }
}])

.controller('loginRisCtrl', ['$scope', '$http', '$stateParams', '$ionicPopup','orgCompany', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $ionicPopup, orgCompany) {


    $scope.data={};

            $scope.submit = function () {
                var link = 'https://restaurants-booking.herokuapp.com/loginOrg';
                this.email = $scope.data.email;
                this.password = $scope.data.password;




                $http.post(link, {email : this.email, password : this.password}).then(function (res){
                    $scope.response = res.data.message;
                    ristoratore = res.data.org
                    orgCompany.addCompany(ristoratore.company);
                    console.log(res.data);
                    if(res.data.message === "Logged In Successfully"){
                        window.location.href = "#/page7";
                    }
                    else {
                        var myPopup = $ionicPopup.show({
                            title: 'ERROR',
                            subTitle: res.data.message,
                            buttons: [{text: 'OK', type: 'button-assertive'}]
                        });
                    }
                });

      }


}])

.controller('signupRisCtrl', ['$scope', '$http', '$stateParams', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $ionicPopup) {

    $scope.data={};

            $scope.submit = function () {
                var link = 'https://restaurants-booking.herokuapp.com/Ristoratori';
                this.nome = $scope.data.nome;
                this.cognome = $scope.data.cognome;
                this.email = $scope.data.email;
                this.password = $scope.data.password;
                this.company = $scope.data.company;

//controllo per campi necessari
                if((this.nome  === undefined) || (this.nome === "")){
                    var myPopup = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Inserici Nome e Cognome',
                        buttons: [{text: 'OK', type: 'button-assertive'}]
                });
                return false
                } else if ((this.cognome  === undefined) || (this.cognome === "")){
                    var myPopup1 = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Inserisci Nome e Cognome',
                        buttons: [{text: 'OK', type: 'button-assertive'}]
                });
                return false
                }else if (this.email === undefined){
                    var myPopup1 = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Formato email: example@example.it',
                        buttons: [{text: 'OK', type: 'button-assertive'}]
                });
                return false
                }else if (this.password === undefined){
                    var myPopup1 = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Inserisci password',
                        buttons: [{text: 'OK', type: 'button-assertive'}]
                });
                return false
              } else if (this.password.length < 8){
                    var myPopup1 = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Formato password: minimo 8 caratteri',
                        buttons: [{text: 'OK', type: 'button-positive'}]
                });
                return false
                }else if ((this.company  === undefined) || (this.company === "")){
                    var myPopup1 = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Inserisci Nome Ristorante',
                        buttons: [{text: 'OK', type: 'button-assertive'}]
                });
                return false
                }


                $http.post(link,{nome : this.nome, cognome : this.cognome, email : this.email, password : this.password, company: this.company}).then(function (res){
                    $scope.response = res.data;
                    if(res.data.message === undefined){
                        var myPopup = $ionicPopup.show({
                            title: 'Registrazione effettuata',
                            buttons: [{text: 'OK', type: 'button-balanced'}]
                        });
                        window.location.href = "#/page5";
                    }
                });

      }


}])

.controller('homeCtrl', ['$scope', '$http', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams) {

}])

.controller('risChoiceCtrl', ['$scope', '$http', '$stateParams', '$ionicPopup', 'orgCompany',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $ionicPopup, orgCompany) {

    $scope.logout = function() {
        var linkout = 'https://restaurants-booking.herokuapp.com/logout'
        var myPopup = $ionicPopup.show({
            title: 'Disconnessione eseguita',
            buttons: [{text: 'OK', type: 'button button-dark button-small'}]
        });
            orgCompany.deleteCompany();
            window.location.href = "#/page5";
    }

}])

.controller('restRisCtrl', ['$scope', '$http', '$stateParams', '$ionicPopup', 'orgCompany',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $ionicPopup, orgCompany) {
    var link = 'https://restaurants-booking.herokuapp.com/Ristoranti'

    compagnia1 = orgCompany.getCompany();       // controllo tramite app.js per cancellazione ristorante
    compagnia2 = compagnia1[0];
    console.log(compagnia2);

    $http.get(link).then(function (res){    //GET    prende e legge file dal link
        rests = res.data;

        $scope.rests = rests;
        console.log(rests);
    });

    $scope.remove = function(array, index) {
        cod = rests[index].id;
        company = rests[index].compagnia;
        var link = 'https://restaurants-booking.herokuapp.com/Ristoranti/destroy/' + cod;
        if(compagnia2 === company){
            array.splice(index,1);
            $http.delete(link).then(function (res){    // DELETE elimina dal link + cod
                var myPopup = $ionicPopup.show({
                    title: 'Ristorante eliminato',
                    buttons: [{text: 'OK', type: 'button button-balanced button-small'}]
                });
        });
    } else {
        var myPopup = $ionicPopup.show({
            title: 'Non hai i permessi per eliminare questo ristorante',
            buttons: [{text: 'OK', type: 'button button-assertive button-small'}]
        });
    }
    }
}])



.controller('addRestCtrl', ['$scope', '$http', '$stateParams', '$ionicPopup', 'orgCompany', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $ionicPopup, orgCompany) {

    $scope.data={};


            $scope.submit = function () {
                var link = 'https://restaurants-booking.herokuapp.com/Ristoranti';
                nome = $scope.data.nome;
                indirizzo = $scope.data.indirizzo;
                orarioapertura = $scope.data.orarioapertura;
                orariochiusura = $scope.data.orariochiusura;
                turno = $scope.data.turno;
                email = $scope.data.email;
                telefono = $scope.data.telefono;
                posti = $scope.data.posti;
                compagnia1 = orgCompany.getCompany();
                compagnia2 = compagnia1[0];


// controllo per campi necessari
           if((nome === undefined) || (nome === "")){
                    var myPopup = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Aggiungi nome Ristorante',
                        buttons: [{text: 'OK', type: 'button-assertive'}]
                });

                return false
              }


               else if ((indirizzo  === undefined) || (indirizzo === "")){
                    var myPopup1 = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Aggiungi Indirizzo',
                        buttons: [{text: 'OK', type: 'button-assertive'}]
                });
                return false
              }
                else if ((orarioapertura  === undefined) || (orarioapertura === "")){
                    var myPopup1 = $ionicPopup.show({
                        title: 'ERROR',
                        subTitle: 'Aggiungi orario apertura',
                        buttons: [{text: 'OK', type: 'button-assertive'}]
                });
                return false
              }

              else if ((orariochiusura  === undefined) || (orariochiusura === "")){
                  var myPopup1 = $ionicPopup.show({
                      title: 'ERROR',
                      subTitle: 'Aggiungi orario chiusura',
                      buttons: [{text: 'OK', type: 'button-assertive'}]
              });
              return false
            }

            else if ((turno  === undefined) || (turno === "")){
                var myPopup1 = $ionicPopup.show({
                    title: 'ERROR',
                    subTitle: 'Aggiungi turno',
                    buttons: [{text: 'OK', type: 'button-assertive'}]
            });
            return false
          }

          else if ((email  === undefined) || (email === "")){
              var myPopup1 = $ionicPopup.show({
                  title: 'ERROR',
                  subTitle: 'Aggiungi email',
                  buttons: [{text: 'OK', type: 'button-assertive'}]
          });
          return false
        }

        else if ((telefono  === undefined) || (telefono === "")){
            var myPopup1 = $ionicPopup.show({
                title: 'ERROR',
                subTitle: 'Aggiungi telefono',
                buttons: [{text: 'OK', type: 'button-assertive'}]
        });
        return false
      }

      else if ((posti  === undefined) || (posti === "")){
          var myPopup1 = $ionicPopup.show({
              title: 'ERROR',
              subTitle: 'Aggiungi orario chiusura',
              buttons: [{text: 'OK', type: 'button-assertive'}]
      });
      return false
    }
                   // POST
                $http.post(link,{nome : nome, indirizzo : indirizzo, orarioapertura : orarioapertura, orariochiusura : orariochiusura, turno: turno, email : email, telefono : telefono, posti : posti, compagnia : compagnia2}).then(function (res){
                    $scope.response = res.data;
                    if(res.data.message === undefined){
                        var myPopup = $ionicPopup.show({
                            title: 'Ristorante aggiunto',
                            buttons: [{text: 'OK', type: 'button-balanced'}]
                        });
                        window.location.href = "#/page7";
                    }
                    else {
                        var myPopup = $ionicPopup.show({
                            title: 'ERROR',
                            subTitle: res.data.message,
                            buttons: [{text: 'OK', type: 'button-assertive'}]
                        });
                    }
                });

      }


}])
